#### 2.0.1
- ignore js source files in project source directories, enabling use for `gren-lang/core`. Fixing https://github.com/lue-bird/gren-extra-checks/issues/1

## 2.0.0
- upgrade `gren-lang/compiler-common` to 2.0.0 and as a result `gren-lang/compiler-node` to 4.0.1.
  This means a simpler comments representation `Array (Located Comment)` instead of `Dict Int (Array Comment)` and small changes to the syntax tree (e.g. module variable declaration signatures include a start position)
- upgrade `gren-lang/core` to 7.4.1 to avoid buggy equality in `String.foldlUnits`

### 1.1.0
- add `ExtraChecksRunnerNode.main` for use with `gren run --package`
