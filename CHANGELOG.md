## 3.0.0
Should not actually be breaking for any user :)

- upgrade `gren-lang/compiler-common` to 3.0.0 and as a result `gren-lang/compiler-node` to 5.0.0
- change `ExtraChecksRunnerNode.ProgramEvent` from type exposing variants to type alias to internal type and also change `ProgramStateInternal` to such a type alias.
  Having a `type` (and exposing variants) wasn't helpful or usable by users anyway and made internal changes unnecessarily breaking
- internally react to changes to gren.json when running the node watcher program (this would have been a breaking change anyway. The above change makes it so an internal behavior change will not result in a major version bump anymore)

#### 2.0.2
- `IntroducedNameIsUsed`:
    - do not consider only-self-referential variables and choice types as used
    - consider special effects manager functions like `cmdMap` as used
    - consider variable names only imported from kernel js as used.
      This requires adding `Gren/Kernel` to `extraPaths`.
      Variant names declared in elm but only used in js code are considered unused. There is no reason to define these in elm instead of js directly

#### 2.0.1
- `ExtraChecksRunnerNode`: ignore js source files in project source directories, enabling use for `gren-lang/core`. Fixes https://github.com/lue-bird/gren-extra-checks/issues/1
- `IntroducedNameIsUsed`:
    - consider function names in infix declarations as used
    - remove documentation comments along with declarations

## 2.0.0
- upgrade `gren-lang/compiler-common` to 2.0.0 and as a result `gren-lang/compiler-node` to 4.0.1.
  This means a simpler comments representation `Array (Located Comment)` instead of `Dict Int (Array Comment)` and small changes to the syntax tree (e.g. module variable declaration signatures include a start position)
- upgrade `gren-lang/core` to 7.4.1 to avoid buggy equality in `String.foldlUnits`

### 1.1.0
- add `ExtraChecksRunnerNode.main` for use with `gren run --package`
