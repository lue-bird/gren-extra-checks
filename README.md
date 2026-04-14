> TODO: polish up the runner, change details from Array String to String, consider walking indirect dependencies as well. add helper to traverse expression with introduced local bindings. Consider switching to gren-diff/a port of minibill's elm-diff

Scan your [gren](https://gren-lang.org/) project for bugs and bad patterns using checks written in gren and published as packages.
It's heavily inspired by the phenomenal [`jfmengels/elm-review`](https://packages.gren-lang.org/package/packages/jfmengels/elm-review/latest/) but comes with a much simpler API and much lighter internals.

To use it for your project, copy this repository's `extra-checks` directory into your project.
`extra-checks/` is a regular gren application where you can add new checks from local code or `gren package install` to the `checks` list in `src/Main.gren`:
```gren
module Main exposing (main)

import ExtraChecksRunnerNode
import SomeConvention

main =
    ExtraChecksRunnerNode.program
        { extraPaths = [ "README.md" ]
        , checks =
            [ SomeConvention.check SomeConvention.someConfiguration
            -- , ...
            ]
        }
```
see also ["when to add an extra check"](#when-to-add-an-extra-check).

An example of [creating a custom check](ExtraCheck#create) to fix a typo in a string that was made too often:
```gren
module StringSpellsCompanyNameCorrectly exposing (check)

import ExtraCheck
import SourcePosition
import Compiler.Ast.Source
import Array.Builder


check : ExtraCheck.Check
check =
    ExtraCheck.create
        { inspectModule = moduleDataToKnowledge
        , inspectGrenJson = \_ -> { typosInStrings = [] }
        , inspectExtraFile = \_ -> { typosInStrings = [] }
        , inspectDirectDependencies = \_ -> { typosInStrings = [] }
        , knowledgeMerge = knowledgeMerge
        , report = report
        }


type alias Knowledge =
    { typosInStrings :
        Array { modulePath : String, region : SourcePosition.Region }
    }


moduleDataToKnowledge :
    { path : String, syntax : Compiler.Ast.Source.Module, source : String }
    -> Knowledge
moduleDataToKnowledge moduleData =
    { typosInStrings =
        moduleData.syntax.values
            |> Array.mapAndFlatten
                (\functionDeclaration ->
                    functionDeclaration.value.value.body
                        |> expressionToTyposInStringsInto (Array.Builder.empty 0)
                        |> Array.Builder.toArray
                )
            |> Array.map
                (\typoRegion ->
                    { region = typoRegion
                    , modulePath = moduleData.path
                    }
                )
    }

expressionToTyposInStringsInto :
    Array.Builder.Builder SourcePosition.Region
    -> Compiler.Ast.Source.Expression
    -> Array.Builder.Builder SourcePosition.Region
expressionToTyposInStringsInto resultRegionsSoFar expression =
    when expression.value is
        Compiler.Ast.Source.StringLiteral string ->
            resultRegionsSoFar
                |> Array.Builder.append            
                    (string
                        |> ExtraCheck.sourceRegionsOf "frits.com"
                        |> Array.map (rangeRelativeTo expression.start)
                    )

        _ ->
            expression.value
                |> ExtraCheck.expressionImmediateSubsFold
                    (\sub withSubsSoFar ->
                        expressionToTyposInStringsInto withSubsSoFar sub
                    )
                    resultRegionsSoFar


rangeRelativeTo :
    SourcePosition.Position
    -> SourcePosition.Region
    -> SourcePosition.Region
rangeRelativeTo baseStart offsetRange =
    { start = offsetRange.start |> locationRelativeTo baseStart
    , end = offsetRange.end |> locationRelativeTo baseStart
    }


locationRelativeTo :
    SourcePosition.Position
    -> SourcePosition.Position
    -> SourcePosition.Position
locationRelativeTo baseStart offsetLocation =
    when offsetLocation.row is
        1 ->
            { row = baseStart.row
            , col = baseStart.col + offsetLocation.col
            }

        offsetRowAtLeast2 ->
            { row = baseStart.row + (offsetRowAtLeast2 - 1)
            , col = offsetLocation.col
            }


knowledgeMerge : Knowledge -> Knowledge -> Knowledge
knowledgeMerge a b =
    { typosInStrings = a.typosInStrings ++ b.typosInStrings
    }


report : Knowledge -> Array ExtraCheck.Error
report knowledge =
    knowledge.typosInStrings
        |> Array.map
            (\stringWithTypos ->
                { path = stringWithTypos.modulePath
                , message = "misspelled fruits.com"
                , details = [ "The typo of using frits.com instead of fruits.com has been made and noticed by users too many times. Our company is `fruits.com`, not `frits.com`." ]
                , region = stringWithTypos.region
                , fix =
                    [ { path = stringWithTypos.modulePath
                      , edits = [ ExtraCheck.replaceRegion stringWithTypos.region "fruits.com" ]
                      }
                    ]
                }
            )
```

## when to add an extra check

A new check can turn out to be an annoyance, sometimes in ways you didn't predict, so make sure the check solves a real problem and that everyone is on board, especially if it enforces a code style.
If a developer disagrees with a check, they may try to circumvent it, which is not the point and not a great experience for anyone.

Checks are useful when some concretely defined bad pattern must _never_ appear in the code and less useful when a pattern is _sometimes_ allowed to appear on a when-by-when basis (false positives).
With `gren-extra-checks`, there is _no way to locally ignore specific check errors_, see ["How disable comments make static analysis tools worse" by Jeroen Engels](https://jfmengels.net/disable-comments/)
and similarly, there is no way to suppress legacy issues as lower-priority because in my opinion even these should always be visible as a (longer term) project checklist.

You can however [configure file paths for which no errors will be reported (e.g. for vendored packages or generated code)](https://packages.gren-lang.org/package/lue-bird/gren-extra-checks/1.0.0/ExtraCheck#ignoreErrorsForPathsWhere).
If you really need to make exceptions, which you most likely won't, the check should be configurable or detecting exception marks like `-- @allow-non-tco` must be written in the check itself.

To sum up, a checklist

  - We had or fear problems with the set of patterns we want to forbid
  - We could not find a way to solve the problem by changing the API
  - If the check already exists, we've read its documentation section about when not to enable the check
  - We've thought hard about what the corner cases could be and what kind of patterns this would forbid that are actually acceptable
  - We all agree to enforce the check
  - We are ready to disable the check if it turns out to be more inconvenient than helpful

## current rough spots

  - no LSP integration (shouldn't be too hard)
  - no ecosystem
  - the parser implemented in `gren-lang/compiler-common` is not on par with the haskell one.
    It for example fails to parse top-level variable names starting with type, some long lines and negation in parens,
    and is also massively slower
  - the problem you encountered. Please [open an issue](https://github.com/lue-bird/gren-extra-checks/issues) <3

