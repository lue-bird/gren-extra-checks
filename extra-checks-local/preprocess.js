// This is not necessary at all but allows speeding up `gren run Main`.
// gren make Main --output=gren.js --optimize && node preprocess.js && node gren.js
import * as fs from "node:fs";
let grenJs = fs.readFileSync("gren.js", { encoding: "utf-8" });
fs.writeFileSync("gren.js", `const output = {}; (function(){${grenJs}}).call(output); output.Gren.Main.init();`);
