const output = {}; (function(){(function(scope){
'use strict';

/* @__NO_SIDE_EFFECTS__ */
function F2(fun) {
  var wrapper = function(a) { return function(b) { return fun(a,b); }; };
  wrapper.a2 = fun;
  return wrapper;
}
/* @__NO_SIDE_EFFECTS__ */
function F3(fun) {
  var wrapper = function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  };
  wrapper.a3 = fun;
  return wrapper;
}
/* @__NO_SIDE_EFFECTS__ */
function F4(fun) {
  var wrapper = function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  };
  wrapper.a4 = fun;
  return wrapper;
}
/* @__NO_SIDE_EFFECTS__ */
function F5(fun) {
  var wrapper = function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  };
  wrapper.a5 = fun;
  return wrapper;
}
/* @__NO_SIDE_EFFECTS__ */
function F6(fun) {
  var wrapper = function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  };
  wrapper.a6 = fun;
  return wrapper;
}
/* @__NO_SIDE_EFFECTS__ */
function F7(fun) {
  var wrapper = function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  };
  wrapper.a7 = fun;
  return wrapper;
}
/* @__NO_SIDE_EFFECTS__ */
function F8(fun) {
  var wrapper = function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  };
  wrapper.a8 = fun;
  return wrapper;
}
/* @__NO_SIDE_EFFECTS__ */
function F9(fun) {
  var wrapper = function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  };
  wrapper.a9 = fun;
  return wrapper;
}

/* @__NO_SIDE_EFFECTS__ */
function A2(fun, a, b) {
  return fun.a2 ? fun.a2(a, b) : fun(a)(b);
}
/* @__NO_SIDE_EFFECTS__ */
function A3(fun, a, b, c) {
  return fun.a3 ? fun.a3(a, b, c) : fun(a)(b)(c);
}
/* @__NO_SIDE_EFFECTS__ */
function A4(fun, a, b, c, d) {
  return fun.a4 ? fun.a4(a, b, c, d) : fun(a)(b)(c)(d);
}
/* @__NO_SIDE_EFFECTS__ */
function A5(fun, a, b, c, d, e) {
  return fun.a5 ? fun.a5(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
/* @__NO_SIDE_EFFECTS__ */
function A6(fun, a, b, c, d, e, f) {
  return fun.a6 ? fun.a6(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
/* @__NO_SIDE_EFFECTS__ */
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a7 ? fun.a7(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
/* @__NO_SIDE_EFFECTS__ */
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a8 ? fun.a8(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
/* @__NO_SIDE_EFFECTS__ */
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a9 ? fun.a9(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}



var _Array_length = function (array) {
  return array.length;
};

var _Array_initialize = F3(function (size, offset, func) {
  var result = new Array(size);

  for (var i = 0; i < size; i++) {
    result[i] = func(offset + i);
  }

  return result;
});

var _Array_get = F2(function (index, array) {
  var value = array.at(index);

  if (typeof value === "undefined") {
    return $gren_lang$core$Maybe$Nothing;
  }

  return $gren_lang$core$Maybe$Just(value);
});

var _Array_set = F3(function (index, value, array) {
  try {
    return array.with(index, value);
  } catch (e) {
    // assuming RangeError
    return array;
  }
});

var _Array_splice0 = F3(function (index, toRemove, array) {
  return array.toSpliced(index, toRemove);
});

var _Array_splice1 = F4(function (index, toRemove, toAdd, array) {
  return array.toSpliced(index, toRemove, toAdd);
});

var _Array_spliceN = F4(function (index, toRemove, toAdd, array) {
  return array.toSpliced(index, toRemove, ...toAdd);
});

var _Array_foldl = F3(function (func, acc, array) {
  for (var i = 0; i < array.length; i++) {
    acc = A2(func, array[i], acc);
  }

  return acc;
});

var _Array_foldr = F3(function (func, acc, array) {
  for (var i = array.length - 1; i >= 0; i--) {
    acc = A2(func, array[i], acc);
  }

  return acc;
});

var _Array_indexedFoldl = F3(function (func, acc, array) {
  for (var i = 0; i < array.length; i++) {
    acc = A3(func, i, array[i], acc);
  }

  return acc;
});

var _Array_indexedFoldr = F3(function (func, acc, array) {
  for (var i = array.length - 1; i >= 0; i--) {
    acc = A3(func, i, array[i], acc);
  }

  return acc;
});

var _Array_map = F2(function (func, array) {
  return array.map(func);
});

var _Array_indexedMap = F2(function (func, array) {
  return array.map(function (value, index) {
    return A2(func, index, value);
  });
});

var _Array_filter = F2(function (func, array) {
  return array.filter(func);
});

var _Array_indexedFilter = F2(function (func, array) {
  return array.filter(function (value, index) {
    return A2(func, index, value);
  });
});

var _Array_flat = function (array) {
  return array.flat();
};

var _Array_flatMap = F2(function (func, array) {
  return array.flatMap(func);
});

var _Array_slice = F3(function (from, to, array) {
  return array.slice(from, to);
});

var _Array_append = F2(function (left, right) {
  return left.concat(right);
});

var _Array_reverse = function (array) {
  return array.toReversed();
};

var _Array_findFirst = F2(function (pred, array) {
  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    if (pred(element)) {
      return $gren_lang$core$Maybe$Just({ dk: i, bZ: element });
    }
  }

  return $gren_lang$core$Maybe$Nothing;
});

var _Array_findLast = F2(function (pred, array) {
  for (var i = array.length - 1; i >= 0; i--) {
    var element = array[i];

    if (pred(element)) {
      return $gren_lang$core$Maybe$Just({ dk: i, bZ: element });
    }
  }

  return $gren_lang$core$Maybe$Nothing;
});

var _Array_map2 = F3(function (fn, as, bs) {
  var result = [];
  var lowestLength = as.length < bs.length ? as.length : bs.length;

  for (var i = 0; i < lowestLength; i++) {
    result.push(A2(fn, as[i], bs[i]));
  }

  return result;
});

var _Array_map3 = F4(function (fn, as, bs, cs) {
  var result = [];
  var lowestLength = [as.length, bs.length, cs.length].sort()[0];

  for (var i = 0; i < lowestLength; i++) {
    result.push(A3(fn, as[i], bs[i], cs[i]));
  }

  return result;
});

var _Array_sort = function (array) {
  return array.toSorted(function (a, b) {
    return _Utils_cmp(a, b);
  });
};

var _Array_sortBy = F2(function (fn, array) {
  return array.toSorted(function (a, b) {
    return _Utils_cmp(fn(a), fn(b));
  });
});

var _Array_sortWith = F2(function (fn, array) {
  return array.toSorted(function (a, b) {
    var ord = A2(fn, a, b);
    return ord === $gren_lang$core$Basics$EQ ? 0 : ord === $gren_lang$core$Basics$LT ? -1 : 1;
  });
});

class _Array_Builder {
  constructor(target, finalized, array) {
    this.bT = target;
    this.a4 = finalized;
    this.aU = array;
  }
}

var _Array_emptyBuilder = function (capacity) {
  return new _Array_Builder(0, false, new Array(capacity));
};

var _Array_pushToBuilder = F2(function (value, builder) {
  var array = builder.aU;
  var target = builder.bT;

  if (builder.a4) {
    array = array.slice(0, target);
  } else {
    builder.a4 = true;
  }

  if (target < array.length) {
    array[target] = value;
  } else {
    array.push(value);
  }

  return new _Array_Builder(target + 1, false, array);
});

var _Array_appendToBuilder = F2(function (array, builder) {
  var newArray = _Array_fromBuilder(builder);

  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return new _Array_Builder(newArray.length, false, newArray);
});

var _Array_toBuilder = function (array) {
  return new _Array_Builder(array.length, true, array);
};

var _Array_fromBuilder = function (builder) {
  var result = builder.aU;

  if (builder.a4) {
    result = result.slice(0, builder.bT);
  } else {
    builder.a4 = true;
    result.length = builder.bT;
  }

  return result;
};


// EQUALITY

function _Utils_eq(x, y) {
  for (
    var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
    isEqual && (pair = stack.pop());
    isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
  ) {}

  return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack) {
  if (x === y) {
    return true;
  }

  if (typeof x !== "object" || x === null || y === null) {
    typeof x === "function" && _Debug_crash(5);
    return false;
  }

  if (depth > 100) {
    stack.push({ a: x, b: y });
    return true;
  }

  /**_UNUSED/
	if (x.$ === 'Set_gren_builtin')
	{
		x = $gren_lang$core$Set$toArray(x);
		y = $gren_lang$core$Set$toArray(y);
	}
	if (x.$ === 'RBNode_gren_builtin' || x.$ === 'RBEmpty_gren_builtin')
	{
		x = A3($gren_lang$core$Dict$foldl, F3(function(key, value, acc) { acc.push({ a: key, b: value }); return acc; }), [], x);
		y = A3($gren_lang$core$Dict$foldl, F3(function(key, value, acc) { acc.push({ a: key, b: value }); return acc; }), [], y);
	}
	//*/

  /**/
	if (x.$ < 0)
	{
		x = A3($gren_lang$core$Dict$foldl, F3(function(key, value, acc) { acc.push({ a: key, b: value }); return acc; }), [], x);
		y = A3($gren_lang$core$Dict$foldl, F3(function(key, value, acc) { acc.push({ a: key, b: value }); return acc; }), [], y);
	}
	//*/

  if (x instanceof DataView) {
    var length = x.byteLength;

    if (y.byteLength !== length) {
      return false;
    }

    for (var i = 0; i < length; ++i) {
      if (x.getUint8(i) !== y.getUint8(i)) {
        return false;
      }
    }

    return true;
  }

  if (x instanceof _Array_Builder) {
    x = _Array_fromBuilder(x);
    y = _Array_fromBuilder(y);
  }

  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  }

  var nextDepth = depth + 1;

  for (var key in x) {
    if (!_Utils_eqHelp(x[key], y[key], nextDepth, stack)) {
      return false;
    }
  }

  return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function (a, b) {
  return !_Utils_eq(a, b);
});

// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y) {
  if (typeof x !== "object") {
    return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
  }

  /**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

  // At this point, we can only be comparing arrays
  for (var idx = 0; idx < x.length; idx++) {
    var ord = _Utils_cmp(x[idx], y[idx]);
    if (ord !== 0) return ord;
  }

  return x.length - y.length;
}

var _Utils_lt = F2(function (a, b) {
  return _Utils_cmp(a, b) < 0;
});
var _Utils_le = F2(function (a, b) {
  return _Utils_cmp(a, b) < 1;
});
var _Utils_gt = F2(function (a, b) {
  return _Utils_cmp(a, b) > 0;
});
var _Utils_ge = F2(function (a, b) {
  return _Utils_cmp(a, b) >= 0;
});

var _Utils_compare = F2(function (x, y) {
  var n = _Utils_cmp(x, y);
  return n < 0 ? $gren_lang$core$Basics$LT : n ? $gren_lang$core$Basics$GT : $gren_lang$core$Basics$EQ;
});

// COMMON VALUES

function _Utils_chr(c) {
  return c;
}
function _Utils_chr_UNUSED(c) {
  return new String(c);
}

// RECORDS

function _Utils_update(oldRecord, updatedFields) {
  var newRecord = {};

  for (var key in oldRecord) {
    newRecord[key] = oldRecord[key];
  }

  for (var key in updatedFields) {
    newRecord[key] = updatedFields[key];
  }

  return newRecord;
}

// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys) {
  // append Strings
  if (typeof xs === "string") {
    return xs + ys;
  }

  return xs.concat(ys);
}


// LOG

var _Debug_log = F2(function (tag, value) {
  return value;
});

var _Debug_log_UNUSED = F2(function (tag, value) {
  console.log(tag + ": " + _Debug_toString(value));
  return value;
});

// TODOS

function _Debug_todo(moduleName, region) {
  return function (message) {
    _Debug_crash(8, moduleName, region, message);
  };
}

function _Debug_todoCase(moduleName, region, value) {
  return function (message) {
    _Debug_crash(9, moduleName, region, value, message);
  };
}

// TO STRING

function _Debug_toString(value) {
  return "<internals>";
}

function _Debug_toString_UNUSED(value) {
  return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value) {
  if (value == null) {
    return _Debug_internalColor(ansi, "<null>");
  }

  if (typeof value === "function") {
    return _Debug_internalColor(ansi, "<function>");
  }

  if (typeof value === "boolean") {
    return _Debug_ctorColor(ansi, value ? "True" : "False");
  }

  if (typeof value === "number") {
    return _Debug_numberColor(ansi, value + "");
  }

  if (value instanceof String) {
    return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
  }

  if (typeof value === "string") {
    return _Debug_stringColor(
      ansi,
      '"' + _Debug_addSlashes(value, false) + '"',
    );
  }

  if (Array.isArray(value)) {
    var output = "[";

    value.length > 0 && (output += _Debug_toAnsiString(ansi, value[0]));

    for (var idx = 1; idx < value.length; idx++) {
      output += ", " + _Debug_toAnsiString(ansi, value[idx]);
    }

    return output + "]";
  }

  if (typeof value === "object" && "$" in value) {
    var tag = value.$;

    if (typeof tag === "number") {
      return _Debug_internalColor(ansi, "<internals>");
    }

    if (tag === "Set_gren_builtin") {
      return (
        _Debug_ctorColor(ansi, "Set") +
        _Debug_fadeColor(ansi, ".fromArray") +
        " " +
        _Debug_toAnsiString(ansi, $gren_lang$core$Set$toArray(value))
      );
    }

    if (tag === "RBNode_gren_builtin" || tag === "RBEmpty_gren_builtin") {
      return (
        _Debug_ctorColor(ansi, "Dict") +
        _Debug_fadeColor(ansi, ".fromArray") +
        " " +
        _Debug_toAnsiString(
          ansi,
          A3(
            $gren_lang$core$Dict$foldl,
            F3(function (key, value, acc) {
              acc.push({ key: key, value: value });
              return acc;
            }),
            [],
            value,
          ),
        )
      );
    }

    var output = "";
    for (var i in value) {
      if (i === "$") continue;
      var str = _Debug_toAnsiString(ansi, value[i]);
      var c0 = str[0];
      var parenless =
        c0 === "{" ||
        c0 === "(" ||
        c0 === "[" ||
        c0 === "<" ||
        c0 === '"' ||
        str.indexOf(" ") < 0;
      output += " " + (parenless ? str : "(" + str + ")");
    }
    return _Debug_ctorColor(ansi, tag) + output;
  }

  if (value instanceof DataView) {
    return _Debug_stringColor(ansi, "<" + value.byteLength + " bytes>");
  }

  if (typeof File !== "undefined" && value instanceof File) {
    return _Debug_internalColor(ansi, "<" + value.name + ">");
  }

  if (
    typeof _Array_Builder !== "undefined" &&
    value instanceof _Array_Builder
  ) {
    return _Debug_toAnsiString(ansi, value.aU.slice(0, value.bT));
  }

  if (typeof value === "object") {
    var output = [];
    for (var key in value) {
      var field = key[0] === "_" ? key.slice(1) : key;
      output.push(
        _Debug_fadeColor(ansi, field) +
          " = " +
          _Debug_toAnsiString(ansi, value[key]),
      );
    }
    if (output.length === 0) {
      return "{}";
    }
    return "{ " + output.join(", ") + " }";
  }

  return _Debug_internalColor(ansi, "<internals>");
}

function _Debug_addSlashes(str, isChar) {
  var s = str
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/\t/g, "\\t")
    .replace(/\r/g, "\\r")
    .replace(/\v/g, "\\v")
    .replace(/\0/g, "\\0");

  if (isChar) {
    return s.replace(/\'/g, "\\'");
  } else {
    return s.replace(/\"/g, '\\"');
  }
}

function _Debug_ctorColor(ansi, string) {
  return ansi ? "\x1b[96m" + string + "\x1b[0m" : string;
}

function _Debug_numberColor(ansi, string) {
  return ansi ? "\x1b[95m" + string + "\x1b[0m" : string;
}

function _Debug_stringColor(ansi, string) {
  return ansi ? "\x1b[93m" + string + "\x1b[0m" : string;
}

function _Debug_charColor(ansi, string) {
  return ansi ? "\x1b[92m" + string + "\x1b[0m" : string;
}

function _Debug_fadeColor(ansi, string) {
  return ansi ? "\x1b[37m" + string + "\x1b[0m" : string;
}

function _Debug_internalColor(ansi, string) {
  return ansi ? "\x1b[36m" + string + "\x1b[0m" : string;
}

function _Debug_toHexDigit(n) {
  return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}

// CRASH

function _Debug_crash(identifier) {
  throw new Error(
    "https://github.com/gren-lang/core/blob/1.0.0/hints/" + identifier + ".md",
  );
}

function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4) {
  switch (identifier) {
    case 0:
      throw new Error(
        'What node should I take over? In JavaScript I need something like:\n\n    Gren.Main.init({\n        node: document.getElementById("gren-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.',
      );

    case 1:
      throw new Error(
        "Browser.application programs cannot handle URLs like this:\n\n    " +
          document.location.href +
          "\n\nWhat is the root? The root of your file system?",
      );

    case 2:
      var jsonErrorString = fact1;
      throw new Error(
        "Problem with the flags given to your Gren program on initialization.\n\n" +
          jsonErrorString,
      );

    case 3:
      var portName = fact1;
      throw new Error(
        "There can only be one port named `" +
          portName +
          "`, but your program has multiple.",
      );

    case 4:
      var portName = fact1;
      var problem = fact2;
      throw new Error(
        "Trying to send an unexpected type of value through port `" +
          portName +
          "`:\n" +
          problem,
      );

    case 5:
      throw new Error(
        'Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Gren sense.\nRead more about this at https://package.gren-lang.org/packages/gren-lang/core/latest/Basics#== which describes why it is this way and what the better version will look like.',
      );

    case 6:
      var moduleName = fact1;
      throw new Error(
        "Your page is loading multiple Gren scripts with a module named " +
          moduleName +
          ". Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!",
      );

    case 8:
      var moduleName = fact1;
      var region = fact2;
      var message = fact3;
      throw new Error(
        "TODO in module `" +
          moduleName +
          "` " +
          _Debug_regionToString(region) +
          "\n\n" +
          message,
      );

    case 9:
      var moduleName = fact1;
      var region = fact2;
      var value = fact3;
      var message = fact4;
      throw new Error(
        "TODO in module `" +
          moduleName +
          "` from the `case` expression " +
          _Debug_regionToString(region) +
          "\n\nIt received the following value:\n\n    " +
          _Debug_toString(value).replace("\n", "\n    ") +
          "\n\nBut the branch that handles it says:\n\n    " +
          message.replace("\n", "\n    "),
      );

    case 10:
      throw new Error("Bug in https://github.com/gren-lang/core/issues");

    case 11:
      throw new Error("Cannot perform mod 0. Division by zero error.");
  }
}

function _Debug_regionToString(region) {
  if (region.cE.ba === region.c6.ba) {
    return "on line " + region.cE.ba;
  }
  return (
    "on lines " + region.cE.ba + " through " + region.c6.ba
  );
}
var $gren_lang$core$Dict$foldl$ = function(func, acc, dict) {
	foldl:
	while (true) {
		if (dict.$ === -2) {
			return acc;
		} else {
			var _v1 = dict.a;
			var key = _v1.fL;
			var value = _v1.bZ;
			var left = _v1.du;
			var right = _v1.d0;
			var $temp$func = func,
			$temp$acc = A3(func, key, value, $gren_lang$core$Dict$foldl$(func, acc, left)),
			$temp$dict = right;
			func = $temp$func;
			acc = $temp$acc;
			dict = $temp$dict;
			continue foldl;
		}
	}
};
var $gren_lang$core$Dict$foldl = F3($gren_lang$core$Dict$foldl$);
var $gren_lang$core$Array$length = _Array_length;
var $gren_lang$core$Array$pushLast$ = function(value, array) {
	return A4(_Array_splice1, $gren_lang$core$Array$length(array), 0, value, array);
};
var $gren_lang$core$Array$pushLast = F2($gren_lang$core$Array$pushLast$);
var $gren_lang$core$Dict$keys = function(dict) {
	return $gren_lang$core$Dict$foldl$(F3(function(key, value, keyArray) {
				return $gren_lang$core$Array$pushLast$(key, keyArray);
			}), [  ], dict);
};
var $gren_lang$core$Set$toArray = function(_v0) {
	var dict = _v0;
	return $gren_lang$core$Dict$keys(dict);
};
var $gren_lang$core$Basics$EQ = 1;
var $gren_lang$core$Basics$GT = 2;
var $gren_lang$core$Basics$LT = 0;
var $gren_lang$core$Maybe$Just = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$core$Maybe$Nothing = { $: 1 };
var $gren_lang$core$Basics$False = 1;
var $gren_lang$core$Basics$identity = function(x) {
	return x;
};
var $lue_bird$gren_extra_checks$ExtraCheck$Run = $gren_lang$core$Basics$identity;
var $gren_lang$core$Basics$apR$ = function(x, f) {
	return f(x);
};
var $gren_lang$core$Basics$apR = F2($gren_lang$core$Basics$apR$);
var $gren_lang$core$Basics$append = _Utils_append;
var $gren_lang$core$Array$Builder$pushLast = _Array_pushToBuilder;
var $lue_bird$gren_extra_checks$ArrayLocalExtra$builderPushLastJust$ = function(maybeNewLast, list) {
	if (maybeNewLast.$ === 1) {
		return list;
	} else {
		var newLast = maybeNewLast.a;
		return A2($gren_lang$core$Array$Builder$pushLast, newLast, list);
	}
};
var $lue_bird$gren_extra_checks$ArrayLocalExtra$builderPushLastJust = F2($lue_bird$gren_extra_checks$ArrayLocalExtra$builderPushLastJust$);
var $gren_lang$core$Array$foldl = _Array_foldl;
var $gren_lang$core$Dict$Black = 1;
var $gren_lang$core$Dict$RBNode_gren_builtin = function (a) {
	return { $: -1, a: a };
};
var $gren_lang$core$Dict$node$ = function(color, key, value, left, right) {
	return $gren_lang$core$Dict$RBNode_gren_builtin({ cY: color, fL: key, du: left, d0: right, bZ: value });
};
var $gren_lang$core$Dict$node = F5($gren_lang$core$Dict$node$);
var $gren_lang$core$Dict$RBEmpty_gren_builtin = { $: -2 };
var $gren_lang$core$Dict$Red = 0;
var $gren_lang$core$Dict$balance$ = function(color, key, value, left, right) {
	if ((right.$ === -1) && (!right.a.cY)) {
		var _v1 = right.a;
		var _v2 = _v1.cY;
		var rK = _v1.fL;
		var rV = _v1.bZ;
		var rLeft = _v1.du;
		var rRight = _v1.d0;
		if ((left.$ === -1) && (!left.a.cY)) {
			var _v4 = left.a;
			var _v5 = _v4.cY;
			var lK = _v4.fL;
			var lV = _v4.bZ;
			var lLeft = _v4.du;
			var lRight = _v4.d0;
			return $gren_lang$core$Dict$node$(0, key, value, $gren_lang$core$Dict$node$(1, lK, lV, lLeft, lRight), $gren_lang$core$Dict$node$(1, rK, rV, rLeft, rRight));
		} else {
			return $gren_lang$core$Dict$node$(color, rK, rV, $gren_lang$core$Dict$node$(0, key, value, left, rLeft), rRight);
		}
	} else {
		if ((((left.$ === -1) && (!left.a.cY)) && (left.a.du.$ === -1)) && (!left.a.du.a.cY)) {
			var _v7 = left.a;
			var _v8 = _v7.cY;
			var lK = _v7.fL;
			var lV = _v7.bZ;
			var _v9 = _v7.du.a;
			var _v10 = _v9.cY;
			var llK = _v9.fL;
			var llV = _v9.bZ;
			var llLeft = _v9.du;
			var llRight = _v9.d0;
			var lRight = _v7.d0;
			return $gren_lang$core$Dict$node$(0, lK, lV, $gren_lang$core$Dict$node$(1, llK, llV, llLeft, llRight), $gren_lang$core$Dict$node$(1, key, value, lRight, right));
		} else {
			return $gren_lang$core$Dict$node$(color, key, value, left, right);
		}
	}
};
var $gren_lang$core$Dict$balance = F5($gren_lang$core$Dict$balance$);
var $gren_lang$core$Basics$eq = _Utils_equal;
var $gren_lang$core$Dict$getMin = function(dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.a.du.$ === -1)) {
			var left = dict.a.du;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $gren_lang$core$Basics$lt = _Utils_lt;
var $gren_lang$core$Dict$moveRedLeft = function(dict) {
	if (((dict.$ === -1) && (dict.a.du.$ === -1)) && (dict.a.d0.$ === -1)) {
		if ((dict.a.d0.a.du.$ === -1) && (!dict.a.d0.a.du.a.cY)) {
			var _v1 = dict.a;
			var clr = _v1.cY;
			var k = _v1.fL;
			var v = _v1.bZ;
			var _v2 = _v1.du.a;
			var lClr = _v2.cY;
			var lK = _v2.fL;
			var lV = _v2.bZ;
			var lLeft = _v2.du;
			var lRight = _v2.d0;
			var _v3 = _v1.d0.a;
			var rClr = _v3.cY;
			var rK = _v3.fL;
			var rV = _v3.bZ;
			var rLeft = _v3.du;
			var _v4 = rLeft.a;
			var _v5 = _v4.cY;
			var rlK = _v4.fL;
			var rlV = _v4.bZ;
			var rlL = _v4.du;
			var rlR = _v4.d0;
			var rRight = _v3.d0;
			return $gren_lang$core$Dict$node$(0, rlK, rlV, $gren_lang$core$Dict$node$(1, k, v, $gren_lang$core$Dict$node$(0, lK, lV, lLeft, lRight), rlL), $gren_lang$core$Dict$node$(1, rK, rV, rlR, rRight));
		} else {
			var _v6 = dict.a;
			var clr = _v6.cY;
			var k = _v6.fL;
			var v = _v6.bZ;
			var _v7 = _v6.du.a;
			var lClr = _v7.cY;
			var lK = _v7.fL;
			var lV = _v7.bZ;
			var lLeft = _v7.du;
			var lRight = _v7.d0;
			var _v8 = _v6.d0.a;
			var rClr = _v8.cY;
			var rK = _v8.fL;
			var rV = _v8.bZ;
			var rLeft = _v8.du;
			var rRight = _v8.d0;
			return $gren_lang$core$Dict$node$(1, k, v, $gren_lang$core$Dict$node$(0, lK, lV, lLeft, lRight), $gren_lang$core$Dict$node$(0, rK, rV, rLeft, rRight));
		}
	} else {
		return dict;
	}
};
var $gren_lang$core$Dict$moveRedRight = function(dict) {
	if (((dict.$ === -1) && (dict.a.du.$ === -1)) && (dict.a.d0.$ === -1)) {
		if ((dict.a.du.a.du.$ === -1) && (!dict.a.du.a.du.a.cY)) {
			var _v1 = dict.a;
			var clr = _v1.cY;
			var k = _v1.fL;
			var v = _v1.bZ;
			var _v2 = _v1.du.a;
			var lClr = _v2.cY;
			var lK = _v2.fL;
			var lV = _v2.bZ;
			var _v3 = _v2.du.a;
			var _v4 = _v3.cY;
			var llK = _v3.fL;
			var llV = _v3.bZ;
			var llLeft = _v3.du;
			var llRight = _v3.d0;
			var lRight = _v2.d0;
			var _v5 = _v1.d0.a;
			var rClr = _v5.cY;
			var rK = _v5.fL;
			var rV = _v5.bZ;
			var rLeft = _v5.du;
			var rRight = _v5.d0;
			return $gren_lang$core$Dict$node$(0, lK, lV, $gren_lang$core$Dict$node$(1, llK, llV, llLeft, llRight), $gren_lang$core$Dict$node$(1, k, v, lRight, $gren_lang$core$Dict$node$(0, rK, rV, rLeft, rRight)));
		} else {
			var _v6 = dict.a;
			var clr = _v6.cY;
			var k = _v6.fL;
			var v = _v6.bZ;
			var _v7 = _v6.du.a;
			var lClr = _v7.cY;
			var lK = _v7.fL;
			var lV = _v7.bZ;
			var lLeft = _v7.du;
			var lRight = _v7.d0;
			var _v8 = _v6.d0.a;
			var rClr = _v8.cY;
			var rK = _v8.fL;
			var rV = _v8.bZ;
			var rLeft = _v8.du;
			var rRight = _v8.d0;
			return $gren_lang$core$Dict$node$(1, k, v, $gren_lang$core$Dict$node$(0, lK, lV, lLeft, lRight), $gren_lang$core$Dict$node$(0, rK, rV, rLeft, rRight));
		}
	} else {
		return dict;
	}
};
var $gren_lang$core$Dict$removeHelpPrepEQGT$ = function(targetKey, dict, color, key, value, left, right) {
	if ((left.$ === -1) && (!left.a.cY)) {
		var _v1 = left.a;
		var _v2 = _v1.cY;
		var lK = _v1.fL;
		var lV = _v1.bZ;
		var lLeft = _v1.du;
		var lRight = _v1.d0;
		return $gren_lang$core$Dict$node$(color, lK, lV, lLeft, $gren_lang$core$Dict$node$(0, key, value, lRight, right));
	} else {
		_v3$2:
		while (true) {
			if ((right.$ === -1) && (right.a.cY === 1)) {
				if (right.a.du.$ === -1) {
					if (right.a.du.a.cY === 1) {
						var _v4 = right.a;
						var _v5 = _v4.cY;
						var _v6 = _v4.du.a.cY;
						return $gren_lang$core$Dict$moveRedRight(dict);
					} else {
						break _v3$2;
					}
				} else {
					var _v7 = right.a;
					var _v8 = _v7.cY;
					var _v9 = _v7.du;
					return $gren_lang$core$Dict$moveRedRight(dict);
				}
			} else {
				break _v3$2;
			}
		}
		return dict;
	}
};
var $gren_lang$core$Dict$removeHelpPrepEQGT = F7($gren_lang$core$Dict$removeHelpPrepEQGT$);
var $gren_lang$core$Dict$removeMin = function(dict) {
	if ((dict.$ === -1) && (dict.a.du.$ === -1)) {
		var _v1 = dict.a;
		var color = _v1.cY;
		var key = _v1.fL;
		var value = _v1.bZ;
		var left = _v1.du;
		var _v2 = left.a;
		var lColor = _v2.cY;
		var lLeft = _v2.du;
		var right = _v1.d0;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a.cY)) {
				var _v5 = lLeft.a.cY;
				return $gren_lang$core$Dict$node$(color, key, value, $gren_lang$core$Dict$removeMin(left), right);
			} else {
				var _v6 = $gren_lang$core$Dict$moveRedLeft(dict);
				if (_v6.$ === -1) {
					var _v7 = _v6.a;
					var nColor = _v7.cY;
					var nKey = _v7.fL;
					var nValue = _v7.bZ;
					var nLeft = _v7.du;
					var nRight = _v7.d0;
					return $gren_lang$core$Dict$balance$(nColor, nKey, nValue, $gren_lang$core$Dict$removeMin(nLeft), nRight);
				} else {
					return $gren_lang$core$Dict$RBEmpty_gren_builtin;
				}
			}
		} else {
			return $gren_lang$core$Dict$node$(color, key, value, $gren_lang$core$Dict$removeMin(left), right);
		}
	} else {
		return $gren_lang$core$Dict$RBEmpty_gren_builtin;
	}
};
var $gren_lang$core$Dict$removeHelp$ = function(targetKey, dict) {
	if (dict.$ === -2) {
		return $gren_lang$core$Dict$RBEmpty_gren_builtin;
	} else {
		var _v5 = dict.a;
		var color = _v5.cY;
		var key = _v5.fL;
		var value = _v5.bZ;
		var left = _v5.du;
		var right = _v5.d0;
		if (_Utils_cmp(targetKey, key) < 0) {
			if ((left.$ === -1) && (left.a.cY === 1)) {
				var _v7 = left.a;
				var _v8 = _v7.cY;
				var lLeft = _v7.du;
				if ((lLeft.$ === -1) && (!lLeft.a.cY)) {
					var _v10 = lLeft.a.cY;
					return $gren_lang$core$Dict$node$(color, key, value, $gren_lang$core$Dict$removeHelp$(targetKey, left), right);
				} else {
					var _v11 = $gren_lang$core$Dict$moveRedLeft(dict);
					if (_v11.$ === -1) {
						var _v12 = _v11.a;
						var nColor = _v12.cY;
						var nKey = _v12.fL;
						var nValue = _v12.bZ;
						var nLeft = _v12.du;
						var nRight = _v12.d0;
						return $gren_lang$core$Dict$balance$(nColor, nKey, nValue, $gren_lang$core$Dict$removeHelp$(targetKey, nLeft), nRight);
					} else {
						return $gren_lang$core$Dict$RBEmpty_gren_builtin;
					}
				}
			} else {
				return $gren_lang$core$Dict$node$(color, key, value, $gren_lang$core$Dict$removeHelp$(targetKey, left), right);
			}
		} else {
			return $gren_lang$core$Dict$removeHelpEQGT$(targetKey, $gren_lang$core$Dict$removeHelpPrepEQGT$(targetKey, dict, color, key, value, left, right));
		}
	}
};
var $gren_lang$core$Dict$removeHelp = F2($gren_lang$core$Dict$removeHelp$);
var $gren_lang$core$Dict$removeHelpEQGT$ = function(targetKey, dict) {
	if (dict.$ === -1) {
		var _v1 = dict.a;
		var color = _v1.cY;
		var key = _v1.fL;
		var value = _v1.bZ;
		var left = _v1.du;
		var right = _v1.d0;
		if (_Utils_eq(targetKey, key)) {
			var _v2 = $gren_lang$core$Dict$getMin(right);
			if (_v2.$ === -1) {
				var _v3 = _v2.a;
				var minKey = _v3.fL;
				var minValue = _v3.bZ;
				return $gren_lang$core$Dict$balance$(color, minKey, minValue, left, $gren_lang$core$Dict$removeMin(right));
			} else {
				return $gren_lang$core$Dict$RBEmpty_gren_builtin;
			}
		} else {
			return $gren_lang$core$Dict$balance$(color, key, value, left, $gren_lang$core$Dict$removeHelp$(targetKey, right));
		}
	} else {
		return $gren_lang$core$Dict$RBEmpty_gren_builtin;
	}
};
var $gren_lang$core$Dict$removeHelpEQGT = F2($gren_lang$core$Dict$removeHelpEQGT$);
var $gren_lang$core$Dict$remove$ = function(key, dict) {
	var _v0 = $gren_lang$core$Dict$removeHelp$(key, dict);
	if ((_v0.$ === -1) && (!_v0.a.cY)) {
		var _v1 = _v0.a;
		var _v2 = _v1.cY;
		var nKey = _v1.fL;
		var value = _v1.bZ;
		var left = _v1.du;
		var right = _v1.d0;
		return $gren_lang$core$Dict$node$(1, nKey, value, left, right);
	} else {
		var x = _v0;
		return x;
	}
};
var $gren_lang$core$Dict$remove = F2($gren_lang$core$Dict$remove$);
var $lue_bird$gren_extra_checks$ExtraCheck$dictRemoveKeys$ = function(listOfKeysToRemove, dict) {
	return A3($gren_lang$core$Array$foldl, $gren_lang$core$Dict$remove, dict, listOfKeysToRemove);
};
var $lue_bird$gren_extra_checks$ExtraCheck$dictRemoveKeys = F2($lue_bird$gren_extra_checks$ExtraCheck$dictRemoveKeys$);
var $gren_lang$core$Basics$gt = _Utils_gt;
var $gren_lang$core$Basics$clamp$ = function(low, high, number) {
	return (_Utils_cmp(number, low) < 0) ? low : ((_Utils_cmp(number, high) > 0) ? high : number);
};
var $gren_lang$core$Basics$clamp = F3($gren_lang$core$Basics$clamp$);
var $gren_lang$core$Random$maxInt = 2147483647;
var $gren_lang$core$Array$Builder$empty = function(capacity) {
	var clampedCapacity = $gren_lang$core$Basics$clamp$(0, $gren_lang$core$Random$maxInt, capacity);
	return _Array_emptyBuilder(clampedCapacity);
};
var $gren_lang$core$Dict$empty = $gren_lang$core$Dict$RBEmpty_gren_builtin;
var $gren_lang$core$Basics$True = 0;


// MATH

var _Basics_add = F2(function (a, b) {
  return a + b;
});
var _Basics_sub = F2(function (a, b) {
  return a - b;
});
var _Basics_mul = F2(function (a, b) {
  return a * b;
});
var _Basics_fdiv = F2(function (a, b) {
  return a / b;
});
var _Basics_idiv = F2(function (a, b) {
  return Math.trunc(a / b);
});
var _Basics_pow = F2(Math.pow);

// MORE MATH

function _Basics_toFloat(x) {
  return x;
}
function _Basics_isInfinite(n) {
  return n === Infinity || n === -Infinity;
}

var _Basics_isNaN = isNaN;

// BOOLEANS

function _Basics_not(bool) {
  return !bool;
}
var _Basics_and = F2(function (a, b) {
  return a && b;
});
var _Basics_or = F2(function (a, b) {
  return a || b;
});
var _Basics_xor = F2(function (a, b) {
  return a !== b;
});
var $gren_lang$core$Basics$and = _Basics_and;
var $gren_lang$core$Maybe$checkValue$ = function(test, maybe) {
	if (!maybe.$) {
		var contained = maybe.a;
		return test(contained);
	} else {
		return false;
	}
};
var $gren_lang$core$Maybe$checkValue = F2($gren_lang$core$Maybe$checkValue$);
var $gren_lang$core$Array$isEmpty = function(array) {
	return $gren_lang$core$Array$length(array) === 0;
};
var $gren_lang$core$Basics$compare = _Utils_compare;
var $gren_lang$core$Dict$get$ = function(targetKey, dict) {
	get:
	while (true) {
		if (dict.$ === -2) {
			return $gren_lang$core$Maybe$Nothing;
		} else {
			var _v1 = dict.a;
			var key = _v1.fL;
			var value = _v1.bZ;
			var left = _v1.du;
			var right = _v1.d0;
			var _v2 = A2($gren_lang$core$Basics$compare, targetKey, key);
			switch (_v2) {
				case 0:
					var $temp$targetKey = targetKey,
					$temp$dict = left;
					targetKey = $temp$targetKey;
					dict = $temp$dict;
					continue get;
				case 1:
					return $gren_lang$core$Maybe$Just(value);
				default:
					var $temp$targetKey = targetKey,
					$temp$dict = right;
					targetKey = $temp$targetKey;
					dict = $temp$dict;
					continue get;
			}
		}
	}
};
var $gren_lang$core$Dict$get = F2($gren_lang$core$Dict$get$);
var $gren_lang$core$Dict$setHelp$ = function(key, value, dict) {
	if (dict.$ === -2) {
		return $gren_lang$core$Dict$node$(0, key, value, $gren_lang$core$Dict$RBEmpty_gren_builtin, $gren_lang$core$Dict$RBEmpty_gren_builtin);
	} else {
		var _v1 = dict.a;
		var nColor = _v1.cY;
		var nKey = _v1.fL;
		var nValue = _v1.bZ;
		var nLeft = _v1.du;
		var nRight = _v1.d0;
		var _v2 = A2($gren_lang$core$Basics$compare, key, nKey);
		switch (_v2) {
			case 0:
				return $gren_lang$core$Dict$balance$(nColor, nKey, nValue, $gren_lang$core$Dict$setHelp$(key, value, nLeft), nRight);
			case 1:
				return $gren_lang$core$Dict$node$(nColor, nKey, value, nLeft, nRight);
			default:
				return $gren_lang$core$Dict$balance$(nColor, nKey, nValue, nLeft, $gren_lang$core$Dict$setHelp$(key, value, nRight));
		}
	}
};
var $gren_lang$core$Dict$setHelp = F3($gren_lang$core$Dict$setHelp$);
var $gren_lang$core$Dict$set$ = function(setKey, setValue, dict) {
	var _v0 = $gren_lang$core$Dict$setHelp$(setKey, setValue, dict);
	if ((_v0.$ === -1) && (!_v0.a.cY)) {
		var _v1 = _v0.a;
		var _v2 = _v1.cY;
		var key = _v1.fL;
		var value = _v1.bZ;
		var left = _v1.du;
		var right = _v1.d0;
		return $gren_lang$core$Dict$node$(1, key, value, left, right);
	} else {
		var x = _v0;
		return x;
	}
};
var $gren_lang$core$Dict$set = F3($gren_lang$core$Dict$set$);
var $gren_lang$core$Dict$update$ = function(targetKey, alter, dictionary) {
	var _v0 = alter($gren_lang$core$Dict$get$(targetKey, dictionary));
	if (!_v0.$) {
		var value = _v0.a;
		return $gren_lang$core$Dict$set$(targetKey, value, dictionary);
	} else {
		return $gren_lang$core$Dict$remove$(targetKey, dictionary);
	}
};
var $gren_lang$core$Dict$update = F3($gren_lang$core$Dict$update$);
var $gren_lang$core$Maybe$withDefault$ = function(_default, maybe) {
	if (!maybe.$) {
		var value = maybe.a;
		return value;
	} else {
		return _default;
	}
};
var $gren_lang$core$Maybe$withDefault = F2($gren_lang$core$Maybe$withDefault$);
var $lue_bird$gren_extra_checks$ExtraCheck$fixToFileEditsByPath = function(fix) {
	return A3($gren_lang$core$Array$foldl, F2(function(fileFix, soFar) {
				return $gren_lang$core$Dict$update$(fileFix.ct, function(editsSoFar) {
						return ($gren_lang$core$Maybe$checkValue$(function(_v0) {
								return true;
							}, editsSoFar) && $gren_lang$core$Array$isEmpty(fileFix.e2)) ? $gren_lang$core$Maybe$Nothing : $gren_lang$core$Maybe$Just(_Utils_ap(fileFix.e2, $gren_lang$core$Maybe$withDefault$([  ], editsSoFar)));
					}, soFar);
			}), $gren_lang$core$Dict$empty, fix);
};
var $lue_bird$gren_extra_checks$DictLocalExtra$fromArrayMap$ = function(elementToEntry, list) {
	return A3($gren_lang$core$Array$foldl, F2(function(element, soFar) {
				var newEntry = elementToEntry(element);
				return $gren_lang$core$Dict$set$(newEntry.fL, newEntry.bZ, soFar);
			}), $gren_lang$core$Dict$empty, list);
};
var $lue_bird$gren_extra_checks$DictLocalExtra$fromArrayMap = F2($lue_bird$gren_extra_checks$DictLocalExtra$fromArrayMap$);
var $lue_bird$gren_extra_checks$ExtraCheck$inspectToToKnowledges = function(inspect) {
	return A3($gren_lang$core$Array$foldl, F2(function(inspectSingle, soFar) {
				switch (inspectSingle.$) {
					case 0:
						var toKnowledge = inspectSingle.a;
						return { O: A2($gren_lang$core$Array$Builder$pushLast, toKnowledge, soFar.O), P: soFar.P, R: soFar.R, S: soFar.S };
					case 1:
						var toKnowledge = inspectSingle.a;
						return { O: soFar.O, P: soFar.P, R: A2($gren_lang$core$Array$Builder$pushLast, toKnowledge, soFar.R), S: soFar.S };
					case 2:
						var toKnowledge = inspectSingle.a;
						return { O: soFar.O, P: A2($gren_lang$core$Array$Builder$pushLast, toKnowledge, soFar.P), R: soFar.R, S: soFar.S };
					default:
						var toKnowledge = inspectSingle.a;
						return { O: soFar.O, P: soFar.P, R: soFar.R, S: A2($gren_lang$core$Array$Builder$pushLast, toKnowledge, soFar.S) };
				}
			}), { O: $gren_lang$core$Array$Builder$empty(0), P: $gren_lang$core$Array$Builder$empty(0), R: $gren_lang$core$Array$Builder$empty(0), S: $gren_lang$core$Array$Builder$empty(1) }, inspect);
};
var $lue_bird$gren_extra_checks$ExtraCheck$knowledgeCacheEmpty = { b1: $gren_lang$core$Maybe$Nothing, b8: $gren_lang$core$Dict$empty, cf: $gren_lang$core$Maybe$Nothing, cl: $gren_lang$core$Dict$empty };
var $gren_lang$core$Array$map = _Array_map;
var $gren_lang$core$Dict$map$ = function(func, dict) {
	if (dict.$ === -2) {
		return $gren_lang$core$Dict$RBEmpty_gren_builtin;
	} else {
		var _v1 = dict.a;
		var color = _v1.cY;
		var key = _v1.fL;
		var value = _v1.bZ;
		var left = _v1.du;
		var right = _v1.d0;
		return $gren_lang$core$Dict$node$(color, key, A2(func, key, value), $gren_lang$core$Dict$map$(func, left), $gren_lang$core$Dict$map$(func, right));
	}
};
var $gren_lang$core$Dict$map = F2($gren_lang$core$Dict$map$);
var $gren_lang$core$Maybe$map$ = function(f, maybe) {
	if (!maybe.$) {
		var value = maybe.a;
		return $gren_lang$core$Maybe$Just(f(value));
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $gren_lang$core$Maybe$map = F2($gren_lang$core$Maybe$map$);
var $gren_lang$core$Array$slice = _Array_slice;
var $gren_lang$core$Array$dropFirst$ = function(n, array) {
	return A3($gren_lang$core$Array$slice, n, $gren_lang$core$Array$length(array), array);
};
var $gren_lang$core$Array$dropFirst = F2($gren_lang$core$Array$dropFirst$);
var $gren_lang$core$Array$get = _Array_get;
var $gren_lang$core$Array$first = function(array) {
	return A2($gren_lang$core$Array$get, 0, array);
};
var $gren_lang$core$Array$popFirst = function(array) {
	var _v0 = $gren_lang$core$Array$first(array);
	if (!_v0.$) {
		var value = _v0.a;
		return $gren_lang$core$Maybe$Just({ fk: value, gz: $gren_lang$core$Array$dropFirst$(1, array) });
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $gren_lang$core$Dict$merge$ = function(leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
	var stepState = F3(function(rKey, rValue, _v0) {
			stepState:
			while (true) {
				var array = _v0.aU;
				var result = _v0.cy;
				var _v1 = $gren_lang$core$Array$popFirst(array);
				if (_v1.$ === 1) {
					return { aU: array, cy: A3(rightStep, rKey, rValue, result) };
				} else {
					var _v2 = _v1.a;
					var _v3 = _v2.fk;
					var lKey = _v3.fL;
					var lValue = _v3.bZ;
					var rest = _v2.gz;
					if (_Utils_cmp(lKey, rKey) < 0) {
						var $temp$rKey = rKey,
						$temp$rValue = rValue,
						$temp$_v0 = { aU: rest, cy: A3(leftStep, lKey, lValue, result) };
						rKey = $temp$rKey;
						rValue = $temp$rValue;
						_v0 = $temp$_v0;
						continue stepState;
					} else {
						if (_Utils_cmp(lKey, rKey) > 0) {
							return { aU: array, cy: A3(rightStep, rKey, rValue, result) };
						} else {
							return { aU: rest, cy: A4(bothStep, lKey, lValue, rValue, result) };
						}
					}
				}
			}
		});
	var _v4 = $gren_lang$core$Dict$foldl$(stepState, { aU: $gren_lang$core$Dict$foldl$(F3(function(key, value, array) {
					return $gren_lang$core$Array$pushLast$({ fL: key, bZ: value }, array);
				}), [  ], leftDict), cy: initialResult }, rightDict);
	var leftovers = _v4.aU;
	var intermediateResult = _v4.cy;
	return A3($gren_lang$core$Array$foldl, F2(function(_v5, result) {
				var key = _v5.fL;
				var value = _v5.bZ;
				return A3(leftStep, key, value, result);
			}), intermediateResult, leftovers);
};
var $gren_lang$core$Dict$merge = F6($gren_lang$core$Dict$merge$);
var $gren_lang$compiler_common$Compiler$Ast$Source$NoEffects = { $: 0 };
var $gren_lang$compiler_common$Compiler$Ast$Source$Open = { $: 0 };


/**_UNUSED/
function _Json_errorToString(error)
{
	return $gren_lang$core$Json$Decode$errorToString(error);
}
//*/

// CORE DECODERS

function _Json_succeed(msg) {
  return {
    $: 0,
    a: msg,
  };
}

function _Json_fail(msg) {
  return {
    $: 1,
    a: msg,
  };
}

function _Json_decodePrim(decoder) {
  return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function (value) {
  return typeof value !== "number"
    ? _Json_expecting("an INT", value)
    : Math.trunc(value) === value
      ? $gren_lang$core$Result$Ok(value)
      : isFinite(value) && !(value % 1)
        ? $gren_lang$core$Result$Ok(value)
        : _Json_expecting("an INT", value);
});

var _Json_decodeBool = _Json_decodePrim(function (value) {
  return typeof value === "boolean"
    ? $gren_lang$core$Result$Ok(value)
    : _Json_expecting("a BOOL", value);
});

var _Json_decodeFloat = _Json_decodePrim(function (value) {
  return typeof value === "number"
    ? $gren_lang$core$Result$Ok(value)
    : _Json_expecting("a FLOAT", value);
});

var _Json_decodeValue = _Json_decodePrim(function (value) {
  return $gren_lang$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function (value) {
  return typeof value === "string"
    ? $gren_lang$core$Result$Ok(value)
    : value instanceof String
      ? $gren_lang$core$Result$Ok(value + "")
      : _Json_expecting("a STRING", value);
});

function _Json_decodeArray(decoder) {
  return { $: 3, b: decoder };
}

function _Json_decodeNull(value) {
  return { $: 4, c: value };
}

var _Json_decodeField = F2(function (field, decoder) {
  return {
    $: 5,
    d: field,
    b: decoder,
  };
});

var _Json_decodeIndex = F2(function (index, decoder) {
  return {
    $: 6,
    e: index,
    b: decoder,
  };
});

function _Json_decodeKeyValuePairs(decoder) {
  return {
    $: 7,
    b: decoder,
  };
}

function _Json_mapMany(f, decoders) {
  return {
    $: 8,
    f: f,
    g: decoders,
  };
}

var _Json_andThen = F2(function (callback, decoder) {
  return {
    $: 9,
    b: decoder,
    h: callback,
  };
});

function _Json_oneOf(decoders) {
  return {
    $: 10,
    g: decoders,
  };
}

// DECODING OBJECTS

var _Json_map1 = F2(function (f, d1) {
  return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function (f, d1, d2) {
  return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function (f, d1, d2, d3) {
  return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function (f, d1, d2, d3, d4) {
  return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function (f, d1, d2, d3, d4, d5) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function (f, d1, d2, d3, d4, d5, d6) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function (f, d1, d2, d3, d4, d5, d6, d7) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function (f, d1, d2, d3, d4, d5, d6, d7, d8) {
  return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});

// DECODE

var _Json_runOnString = F2(function (decoder, string) {
  try {
    var value = JSON.parse(string);
    return _Json_runHelp(decoder, value);
  } catch (e) {
    return $gren_lang$core$Result$Err(
      $gren_lang$core$Json$Decode$Failure({
        f$: "This is not valid JSON! " + e.message,
        bZ: _Json_wrap(string),
      }),
    );
  }
});

var _Json_run = F2(function (decoder, value) {
  return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value) {
  switch (decoder.$) {
    case 2:
      return decoder.b(value);

    case 4:
      return value === null
        ? $gren_lang$core$Result$Ok(decoder.c)
        : _Json_expecting("null", value);

    case 3:
      if (!_Json_isArray(value)) {
        return _Json_expecting("an ARRAY", value);
      }
      return _Json_runArrayDecoder(decoder.b, value);

    case 5:
      var field = decoder.d;
      if (typeof value !== "object" || value === null || !(field in value)) {
        return _Json_expecting(
          "an OBJECT with a field named `" + field + "`",
          value,
        );
      }
      var result = _Json_runHelp(decoder.b, value[field]);
      return $gren_lang$core$Result$isOk(result)
        ? result
        : $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Field({ bK: field, b4: result.a }));

    case 6:
      var index = decoder.e;
      if (!_Json_isArray(value)) {
        return _Json_expecting("an ARRAY", value);
      }
      if (index >= value.length) {
        return _Json_expecting(
          "a LONGER array. Need index " +
            index +
            " but only see " +
            value.length +
            " entries",
          value,
        );
      }
      var result = _Json_runHelp(decoder.b, value[index]);
      return $gren_lang$core$Result$isOk(result)
        ? result
        : $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Index({ dk: index, b4: result.a }));

    case 7:
      if (typeof value !== "object" || value === null || _Json_isArray(value)) {
        return _Json_expecting("an OBJECT", value);
      }

      var keyValuePairs = [];
      for (var key in value) {
        if (Object.hasOwn(value, key)) {
          var result = _Json_runHelp(decoder.b, value[key]);
          if (!$gren_lang$core$Result$isOk(result)) {
            return $gren_lang$core$Result$Err(
              $gren_lang$core$Json$Decode$Field({ bK: key, b4: result.a }),
            );
          }
          keyValuePairs.push({ fL: key, bZ: result.a });
        }
      }
      return $gren_lang$core$Result$Ok(keyValuePairs);

    case 8:
      var answer = decoder.f;
      var decoders = decoder.g;
      for (var i = 0; i < decoders.length; i++) {
        var result = _Json_runHelp(decoders[i], value);
        if (!$gren_lang$core$Result$isOk(result)) {
          return result;
        }
        answer = answer(result.a);
      }
      return $gren_lang$core$Result$Ok(answer);

    case 9:
      var result = _Json_runHelp(decoder.b, value);
      return !$gren_lang$core$Result$isOk(result)
        ? result
        : _Json_runHelp(decoder.h(result.a), value);

    case 10:
      var errors = [];

      var decoders = decoder.g;
      for (var idx = 0; idx < decoders.length; idx++) {
        var result = _Json_runHelp(decoders[idx], value);
        if ($gren_lang$core$Result$isOk(result)) {
          return result;
        }
        errors.push(result.a);
      }

      return $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$OneOf(errors));

    case 1:
      return $gren_lang$core$Result$Err(
        $gren_lang$core$Json$Decode$Failure({
          f$: decoder.a,
          bZ: _Json_wrap(value),
        }),
      );

    case 0:
      return $gren_lang$core$Result$Ok(decoder.a);
  }
}

function _Json_runArrayDecoder(decoder, value) {
  var len = value.length;
  var array = new Array(len);
  for (var i = 0; i < len; i++) {
    var result = _Json_runHelp(decoder, value[i]);
    if (!$gren_lang$core$Result$isOk(result)) {
      return $gren_lang$core$Result$Err($gren_lang$core$Json$Decode$Index({ dk: i, b4: result.a }));
    }
    array[i] = result.a;
  }
  return $gren_lang$core$Result$Ok(array);
}

function _Json_isArray(value) {
  return (
    Array.isArray(value) ||
    (typeof FileList !== "undefined" && value instanceof FileList)
  );
}

function _Json_expecting(type, value) {
  return $gren_lang$core$Result$Err(
    $gren_lang$core$Json$Decode$Failure({
      f$: "Expecting " + type,
      bZ: _Json_wrap(value),
    }),
  );
}

// EQUALITY

function _Json_equality(x, y) {
  if (x === y) {
    return true;
  }

  if (x.$ !== y.$) {
    return false;
  }

  switch (x.$) {
    case 0:
    case 1:
      return x.a === y.a;

    case 2:
      return x.b === y.b;

    case 4:
      return x.c === y.c;

    case 3:
    case 7:
      return _Json_equality(x.b, y.b);

    case 5:
      return (
        x.d === y.d && _Json_equality(x.b, y.b)
      );

    case 6:
      return (
        x.e === y.e && _Json_equality(x.b, y.b)
      );

    case 8:
      return (
        x.f === y.f && _Json_arrayEquality(x.g, y.g)
      );

    case 9:
      return (
        x.h === y.h &&
        _Json_equality(x.b, y.b)
      );

    case 10:
      return _Json_arrayEquality(x.g, y.g);
  }
}

function _Json_arrayEquality(aDecoders, bDecoders) {
  var len = aDecoders.length;
  if (len !== bDecoders.length) {
    return false;
  }
  for (var i = 0; i < len; i++) {
    if (!_Json_equality(aDecoders[i], bDecoders[i])) {
      return false;
    }
  }
  return true;
}

// ENCODE

var _Json_encode = F2(function (indentLevel, value) {
  return (
    (indentLevel === 0
      ? JSON.stringify(_Json_unwrap(value))
      : JSON.stringify(_Json_unwrap(value), null, indentLevel)) + ""
  );
});

function _Json_wrap_UNUSED(value) {
  return { $: 0, a: value };
}
function _Json_unwrap_UNUSED(value) {
  return value.a;
}

function _Json_wrap(value) {
  return value;
}
function _Json_unwrap(value) {
  return value;
}

function _Json_emptyArray() {
  return [];
}
function _Json_emptyObject() {
  return {};
}

var _Json_addField = F3(function (key, value, object) {
  var unwrapped = _Json_unwrap(value);
  if (!(key === "toJSON" && typeof unwrapped === "function")) {
    object[key] = unwrapped;
  }
  return object;
});

function _Json_addEntry(func) {
  return F2(function (entry, array) {
    array.push(_Json_unwrap(func(entry)));
    return array;
  });
}

var _Json_encodeNull = _Json_wrap(null);
var $gren_lang$core$Result$Err = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$Json$Decode$Failure = function (a) {
	return { $: 3, a: a };
};
var $gren_lang$core$Json$Decode$Field = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$core$Json$Decode$Index = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$Result$Ok = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$core$Json$Decode$OneOf = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$core$Basics$add = _Basics_add;


var _String_pushFirst = F2(function (char, string) {
  return char + string;
});

var _String_pushLast = F2(function (char, string) {
  return string + char;
});

var _String_popFirst = function (string) {
  if (string.length <= 0) {
    return $gren_lang$core$Maybe$Nothing;
  }

  var firstPointNumber = string.codePointAt(0);
  var firstChar = String.fromCodePoint(firstPointNumber);

  return $gren_lang$core$Maybe$Just({
    fk: _Utils_chr(firstChar),
    gz: string.slice(firstChar.length),
  });
};

var _String_popLast = function (string) {
  if (string.length <= 0) {
    return $gren_lang$core$Maybe$Nothing;
  }

  var possibleLastPointIdx = string.length - 2;
  var possibleLastPoint = string.codePointAt(possibleLastPointIdx);

  if (possibleLastPoint === string.charCodeAt(possibleLastPointIdx)) {
    // last char is a unit
    return $gren_lang$core$Maybe$Just({
      fO: _Utils_chr(string[string.length - 1]),
      gz: string.slice(string.length - 1),
    });
  }

  // last char is a point
  return $gren_lang$core$Maybe$Just({
    fO: _Utils_chr(String.fromCodePoint(possibleLastPoint)),
    gz: string.slice(string.length - 2),
  });
};

var _String_append = F2(function (a, b) {
  return a + b;
});

var _String_repeat = F2(function (num, chunk) {
  try {
    return chunk.repeat(num);
  } catch (error) {
    if (error.name === "RangeError") {
      return "";
    } else {
      throw error;
    }
  }
});

var _String_foldl = F3(function (func, state, string) {
  for (let char of string) {
    state = A2(func, _Utils_chr(char), state);
  }

  return state;
});

var _String_foldr = F3(function (func, state, string) {
  let reversed = [];

  for (let char of string) {
    reversed.unshift(char);
  }

  for (let char of reversed) {
    state = A2(func, _Utils_chr(char), state);
  }

  return state;
});

var _String_split = F2(function (sep, str) {
  return str.split(sep);
});

var _String_join = F2(function (sep, strs) {
  return strs.join(sep);
});

var _String_slice = F3(function (start, end, str) {
  if (start < 0) {
    start = str.length + start;
  }

  if (end < 0) {
    end = str.length + end;
  }

  if (start >= end) {
    return "";
  }

  let index = 0;
  let result = "";

  for (let char of str) {
    if (index < start) {
      index++;
      continue;
    }

    if (index >= end) {
      break;
    }

    result += char;
    index++;
  }

  return result;
});

function _String_trim(str) {
  return str.trim();
}

function _String_trimLeft(str) {
  return str.replace(/^\s+/, "");
}

function _String_trimRight(str) {
  return str.replace(/\s+$/, "");
}

function _String_words(str) {
  return str.trim().split(/\s+/g);
}

function _String_lines(str) {
  return str.split(/\r\n|\r|\n/g);
}

function _String_toUpper(str) {
  return str.toUpperCase();
}

function _String_toLower(str) {
  return str.toLowerCase();
}

var _String_any = F2(function (isGood, string) {
  for (let char of string) {
    if (isGood(_Utils_chr(char))) {
      return true;
    }
  }

  return false;
});

var _String_contains = F2(function (sub, str) {
  return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function (sub, str) {
  return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function (sub, str) {
  return (
    str.length >= sub.length && str.lastIndexOf(sub) === str.length - sub.length
  );
});

var _String_indexOf = F2(function (sub, str) {
  var ret = str.indexOf(sub);

  if (ret > -1) {
    return $gren_lang$core$Maybe$Just(ret);
  }

  return $gren_lang$core$Maybe$Nothing;
});

var _String_lastIndexOf = F2(function (sub, str) {
  var ret = str.lastIndexOf(sub);

  if (ret > -1) {
    return $gren_lang$core$Maybe$Just(ret);
  }

  return $gren_lang$core$Maybe$Nothing;
});

var _String_indexes = F2(function (sub, str) {
  var subLen = sub.length;

  if (subLen < 1) {
    return [];
  }

  var i = 0;
  var is = [];

  while ((i = str.indexOf(sub, i)) > -1) {
    is.push(i);
    i = i + subLen;
  }

  return is;
});

// TO STRING

function _String_fromNumber(number) {
  return number + "";
}

// INT CONVERSIONS

function _String_toInt(str) {
  var total = 0;
  var code0 = str.charCodeAt(0);
  var start = code0 == 0x2b /* + */ || code0 == 0x2d /* - */ ? 1 : 0;

  for (var i = start; i < str.length; ++i) {
    var code = str.charCodeAt(i);
    if (code < 0x30 || 0x39 < code) {
      return $gren_lang$core$Maybe$Nothing;
    }
    total = 10 * total + code - 0x30;
  }

  return i == start
    ? $gren_lang$core$Maybe$Nothing
    : $gren_lang$core$Maybe$Just(code0 == 0x2d ? -total : total);
}

// FLOAT CONVERSIONS

function _String_toFloat(s) {
  // check if it is a hex, octal, or binary number
  if (s.length === 0 || /[\sxbo]/.test(s)) {
    return $gren_lang$core$Maybe$Nothing;
  }
  var n = +s;
  // faster isNaN check
  return n === n ? $gren_lang$core$Maybe$Just(n) : $gren_lang$core$Maybe$Nothing;
}

function _String_fromArray(chars) {
  return chars.join("");
}

// UNITS

var _String_unitLength = function (str) {
  return str.length;
};

var _String_getUnit = F2(function (index, str) {
  var char = str.at(index);

  if (typeof char === "undefined") {
    return $gren_lang$core$Maybe$Nothing;
  }

  return $gren_lang$core$Maybe$Just(_Utils_chr(char));
});

var _String_foldlUnits = F3(function (fn, state, str) {
  for (let i = 0; i < str.length; i++) {
    state = A2(fn, str[i], state);
  }

  return state;
});

var _String_foldrUnits = F3(function (fn, state, str) {
  for (let i = str.length - 1; i < 0; i--) {
    state = A2(fn, str[i], state);
  }

  return state;
});

var _String_sliceUnits = F3(function (start, end, str) {
  return str.slice(start, end);
});
var $gren_lang$core$String$any = _String_any;
var $gren_lang$core$Basics$composeL$ = function(g, f) {
	return function(x) {
		return g(f(x));
	};
};
var $gren_lang$core$Basics$composeL = F2($gren_lang$core$Basics$composeL$);
var $gren_lang$core$Basics$not = _Basics_not;
var $gren_lang$core$String$all$ = function(isGood, str) {
	return !A2($gren_lang$core$String$any, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$not, isGood), str);
};
var $gren_lang$core$String$all = F2($gren_lang$core$String$all$);
var $gren_lang$core$Json$Encode$encode = _Json_encode;
var $gren_lang$core$String$fromInt = _String_fromNumber;
var $gren_lang$core$String$join = _String_join;
var $gren_lang$core$String$split = _String_split;
var $gren_lang$core$Json$Decode$indent = function(str) {
	return A2($gren_lang$core$String$join, '\n    ', A2($gren_lang$core$String$split, '\n', str));
};
var $gren_lang$core$Array$indexedMap = _Array_indexedMap;
var $gren_lang$core$Basics$le = _Utils_le;


function _Char_toCode(char) {
  return char.codePointAt(0);
}

function _Char_fromCode(code) {
  return _Utils_chr(String.fromCodePoint(code));
}
var $gren_lang$core$Char$toCode = _Char_toCode;
var $gren_lang$core$Char$isLower = function(_char) {
	var code = $gren_lang$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $gren_lang$core$Char$isUpper = function(_char) {
	var code = $gren_lang$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $gren_lang$core$Basics$or = _Basics_or;
var $gren_lang$core$Char$isAlpha = function(_char) {
	return $gren_lang$core$Char$isLower(_char) || $gren_lang$core$Char$isUpper(_char);
};
var $gren_lang$core$Char$isDigit = function(_char) {
	var code = $gren_lang$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $gren_lang$core$Char$isAlphaNum = function(_char) {
	return $gren_lang$core$Char$isLower(_char) || ($gren_lang$core$Char$isUpper(_char) || $gren_lang$core$Char$isDigit(_char));
};
var $gren_lang$core$String$popFirst = _String_popFirst;
var $gren_lang$core$Json$Decode$errorOneOf$ = function(i, error) {
	return '\n\n(' + ($gren_lang$core$String$fromInt(i + 1) + (') ' + $gren_lang$core$Json$Decode$indent($gren_lang$core$Json$Decode$errorToString(error))));
};
var $gren_lang$core$Json$Decode$errorOneOf = F2($gren_lang$core$Json$Decode$errorOneOf$);
var $gren_lang$core$Json$Decode$errorToString = function(error) {
	return $gren_lang$core$Json$Decode$errorToStringHelp$(error, [  ]);
};
var $gren_lang$core$Json$Decode$errorToStringHelp$ = function(error, context) {
	errorToStringHelp:
	while (true) {
		switch (error.$) {
			case 0:
				var _v1 = error.a;
				var f = _v1.bK;
				var err = _v1.b4;
				var isSimple = function () {
					var _v2 = $gren_lang$core$String$popFirst(f);
					if (_v2.$ === 1) {
						return false;
					} else {
						var _v3 = _v2.a;
						var _char = _v3.fk;
						var rest = _v3.gz;
						return $gren_lang$core$Char$isAlpha(_char) && $gren_lang$core$String$all$($gren_lang$core$Char$isAlphaNum, rest);
					}
				}();
				var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
				var $temp$error = err,
				$temp$context = _Utils_ap([ fieldName ], context);
				error = $temp$error;
				context = $temp$context;
				continue errorToStringHelp;
			case 1:
				var _v4 = error.a;
				var i = _v4.dk;
				var err = _v4.b4;
				var indexName = '[' + ($gren_lang$core$String$fromInt(i) + ']');
				var $temp$error = err,
				$temp$context = _Utils_ap([ indexName ], context);
				error = $temp$error;
				context = $temp$context;
				continue errorToStringHelp;
			case 2:
				var errors = error.a;
				switch (errors.length) {
					case 0:
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (context.length === 0) {
								return '!';
							} else {
								return ' at json' + A2($gren_lang$core$String$join, '', context);
							}
						}();
					case 1:
						var err = errors[0];
						var $temp$error = err,
						$temp$context = context;
						error = $temp$error;
						context = $temp$context;
						continue errorToStringHelp;
					default:
						var starter = function () {
							if (context.length === 0) {
								return 'Json.Decode.oneOf';
							} else {
								return 'The Json.Decode.oneOf at json' + A2($gren_lang$core$String$join, '', context);
							}
						}();
						var introduction = starter + (' failed in the following ' + ($gren_lang$core$String$fromInt($gren_lang$core$Array$length(errors)) + ' ways:'));
						return A2($gren_lang$core$String$join, '\n\n', _Utils_ap([ introduction ], A2($gren_lang$core$Array$indexedMap, $gren_lang$core$Json$Decode$errorOneOf, errors)));
				}
			default:
				var _v8 = error.a;
				var msg = _v8.f$;
				var json = _v8.bZ;
				var introduction = function () {
					if (context.length === 0) {
						return 'Problem with the given value:\n\n';
					} else {
						return 'Problem with the value at json' + (A2($gren_lang$core$String$join, '', context) + ':\n\n    ');
					}
				}();
				return introduction + ($gren_lang$core$Json$Decode$indent(A2($gren_lang$core$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
		}
	}
};
var $gren_lang$core$Json$Decode$errorToStringHelp = F2($gren_lang$core$Json$Decode$errorToStringHelp$);
var $gren_lang$core$Result$isOk = function(result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $gren_lang$core$Json$Decode$array = _Json_decodeArray;
var $gren_lang$core$Json$Decode$decodeString = _Json_runOnString;
var $gren_lang$compiler_common$Compiler$Ast$Source$OpALeft = 0;
var $gren_lang$compiler_common$Compiler$Ast$Source$OpANone = 1;
var $gren_lang$compiler_common$Compiler$Ast$Source$OpARight = 2;
var $gren_lang$core$Json$Decode$andThen = _Json_andThen;
var $gren_lang$core$Json$Decode$fail = _Json_fail;
var $gren_lang$core$Json$Decode$string = _Json_decodeString;
var $gren_lang$core$Json$Decode$succeed = _Json_succeed;
var $lue_bird$gren_extra_checks$GrenCoreDependency$assocDecoder = A2($gren_lang$core$Json$Decode$andThen, function(string) {
		switch (string) {
			case 'left':
				return $gren_lang$core$Json$Decode$succeed(0);
			case 'non':
				return $gren_lang$core$Json$Decode$succeed(1);
			case 'right':
				return $gren_lang$core$Json$Decode$succeed(2);
			default:
				return $gren_lang$core$Json$Decode$fail('expecting one of the following values: left, non, right');
		}
	}, $gren_lang$core$Json$Decode$string);
var $gren_lang$core$Json$Decode$field = _Json_decodeField;
var $gren_lang$core$Json$Decode$int = _Json_decodeInt;
var $gren_lang$core$Json$Decode$map3 = _Json_map3;
var $gren_lang$core$Json$Decode$map4 = _Json_map4;
var $gren_lang$core$Json$Decode$map5 = _Json_map5;
var $gren_lang$core$Json$Decode$map6 = _Json_map6;
var $gren_lang$compiler_common$Compiler$Parse$Context$empty = { eN: $gren_lang$core$Dict$empty, fx: 1, fU: 1 };
var $gren_lang$core$String$Parser$Advanced$Done = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedChar = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedIndent = { $: 3 };
var $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedString = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$String$Parser$Advanced$Loop = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$TLambda = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$TParens = function (a) {
	return { $: 5, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$TRecord = function (a) {
	return { $: 4, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$TType = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$TTypeQual = function (a) {
	return { $: 3, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$TVar = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Type$VariableError = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$core$String$Parser$Advanced$Bad = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$String$Parser$Advanced$Good = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$core$String$Parser$Advanced$Parser = $gren_lang$core$Basics$identity;
var $gren_lang$core$Basics$apL$ = function(f, x) {
	return f(x);
};
var $gren_lang$core$Basics$apL = F2($gren_lang$core$Basics$apL$);
var $gren_lang$core$String$Parser$Advanced$andThen$ = function(callback, _v0) {
	var parseA = _v0;
	return function(s0) {
		var _v1 = parseA(s0);
		if (_v1.$ === 1) {
			var _v2 = _v1.a;
			var p = _v2.c;
			var x = _v2.k;
			return $gren_lang$core$String$Parser$Advanced$Bad({ k: x, c: p });
		} else {
			var _v3 = _v1.a;
			var p1 = _v3.c;
			var a = _v3.bZ;
			var s1 = _v3.ea;
			var _v4 = callback(a);
			var parseB = _v4;
			var _v5 = parseB(s1);
			if (_v5.$ === 1) {
				var _v6 = _v5.a;
				var p2 = _v6.c;
				var x = _v6.k;
				return $gren_lang$core$String$Parser$Advanced$Bad({ k: x, c: p1 || p2 });
			} else {
				var _v7 = _v5.a;
				var p2 = _v7.c;
				var b = _v7.bZ;
				var s2 = _v7.ea;
				return $gren_lang$core$String$Parser$Advanced$Good({ c: p1 || p2, ea: s2, bZ: b });
			}
		}
	};
};
var $gren_lang$core$String$Parser$Advanced$andThen = F2($gren_lang$core$String$Parser$Advanced$andThen$);
var $gren_lang$compiler_common$SourcePosition$at$ = function(start, end, a) {
	return { c6: end, cE: start, bZ: a };
};
var $gren_lang$compiler_common$SourcePosition$at = F3($gren_lang$compiler_common$SourcePosition$at$);
var $gren_lang$core$String$Parser$Advanced$getCol = function(s) {
	return $gren_lang$core$String$Parser$Advanced$Good({ c: false, ea: s, bZ: s.aZ });
};
var $gren_lang$core$String$Parser$Advanced$getPayload = function(s) {
	return $gren_lang$core$String$Parser$Advanced$Good({ c: false, ea: s, bZ: s.gh });
};
var $gren_lang$core$String$Parser$Advanced$map2$ = function(func, _v0, _v1) {
	var parseA = _v0;
	var parseB = _v1;
	return function(s0) {
		var _v2 = parseA(s0);
		if (_v2.$ === 1) {
			var _v3 = _v2.a;
			var pred = _v3.c;
			var x = _v3.k;
			return $gren_lang$core$String$Parser$Advanced$Bad({ k: x, c: pred });
		} else {
			var _v4 = _v2.a;
			var p1 = _v4.c;
			var a = _v4.bZ;
			var s1 = _v4.ea;
			var _v5 = parseB(s1);
			if (_v5.$ === 1) {
				var _v6 = _v5.a;
				var p2 = _v6.c;
				var x = _v6.k;
				return $gren_lang$core$String$Parser$Advanced$Bad({ k: x, c: p1 || p2 });
			} else {
				var _v7 = _v5.a;
				var p2 = _v7.c;
				var b = _v7.bZ;
				var s2 = _v7.ea;
				return $gren_lang$core$String$Parser$Advanced$Good({ c: p1 || p2, ea: s2, bZ: A2(func, a, b) });
			}
		}
	};
};
var $gren_lang$core$String$Parser$Advanced$map2 = F3($gren_lang$core$String$Parser$Advanced$map2$);
var $gren_lang$core$String$Parser$Advanced$keep$ = function(parseArg, parseFunc) {
	return $gren_lang$core$String$Parser$Advanced$map2$($gren_lang$core$Basics$apL, parseFunc, parseArg);
};
var $gren_lang$core$String$Parser$Advanced$keep = F2($gren_lang$core$String$Parser$Advanced$keep$);
var $gren_lang$core$String$Parser$Advanced$map$ = function(func, _v0) {
	var parse = _v0;
	return function(s0) {
		var _v1 = parse(s0);
		if (!_v1.$) {
			var _v2 = _v1.a;
			var p = _v2.c;
			var a = _v2.bZ;
			var s1 = _v2.ea;
			return $gren_lang$core$String$Parser$Advanced$Good({ c: p, ea: s1, bZ: func(a) });
		} else {
			var _v3 = _v1.a;
			var pred = _v3.c;
			var bag = _v3.k;
			return $gren_lang$core$String$Parser$Advanced$Bad({ k: bag, c: pred });
		}
	};
};
var $gren_lang$core$String$Parser$Advanced$map = F2($gren_lang$core$String$Parser$Advanced$map$);
var $gren_lang$core$String$Parser$Advanced$AddRight = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$String$Parser$Advanced$Empty = { $: 0 };
var $gren_lang$core$String$Parser$Advanced$fromState$ = function(s, x) {
	return $gren_lang$core$String$Parser$Advanced$AddRight({ k: $gren_lang$core$String$Parser$Advanced$Empty, c2: { aZ: s.aZ, gh: s.gh, dR: x, bl: s.bl } });
};
var $gren_lang$core$String$Parser$Advanced$fromState = F2($gren_lang$core$String$Parser$Advanced$fromState$);
var $gren_lang$core$String$Parser$Advanced$problem = function(x) {
	return function(s) {
		return $gren_lang$core$String$Parser$Advanced$Bad({ k: $gren_lang$core$String$Parser$Advanced$fromState$(s, x), c: false });
	};
};
var $gren_lang$core$String$Parser$Advanced$succeed = function(a) {
	return function(s) {
		return $gren_lang$core$String$Parser$Advanced$Good({ c: false, ea: s, bZ: a });
	};
};
var $gren_lang$compiler_common$Compiler$Parse$Space$checkIndent = $gren_lang$core$String$Parser$Advanced$andThen$(function(_v0) {
		var indent = _v0.fx;
		var col = _v0.aZ;
		return (_Utils_cmp(col, indent) > 0) ? $gren_lang$core$String$Parser$Advanced$succeed({  }) : $gren_lang$core$String$Parser$Advanced$problem({  });
	}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getCol, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$map$(function ($) {
					return $.fx;
				}, $gren_lang$core$String$Parser$Advanced$getPayload), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(indent, col) {
						return { aZ: col, fx: indent };
					})))));
var $gren_lang$core$String$Parser$Advanced$Append = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$core$String$Parser$Advanced$mapBagProblem$ = function(mapper, bag) {
	switch (bag.$) {
		case 0:
			return $gren_lang$core$String$Parser$Advanced$Empty;
		case 1:
			var _v1 = bag.a;
			var bag1 = _v1.k;
			var deadEnd = _v1.c2;
			return $gren_lang$core$String$Parser$Advanced$AddRight({ k: $gren_lang$core$String$Parser$Advanced$mapBagProblem$(mapper, bag1), c2: { aZ: deadEnd.aZ, gh: deadEnd.gh, dR: mapper(deadEnd.dR), bl: deadEnd.bl } });
		default:
			var _v2 = bag.a;
			var bag1 = _v2.du;
			var bag2 = _v2.d0;
			return $gren_lang$core$String$Parser$Advanced$Append({ du: $gren_lang$core$String$Parser$Advanced$mapBagProblem$(mapper, bag1), d0: $gren_lang$core$String$Parser$Advanced$mapBagProblem$(mapper, bag2) });
	}
};
var $gren_lang$core$String$Parser$Advanced$mapBagProblem = F2($gren_lang$core$String$Parser$Advanced$mapBagProblem$);
var $gren_lang$core$String$Parser$Advanced$mapError$ = function(func, _v0) {
	var parse = _v0;
	return function(s0) {
		var _v1 = parse(s0);
		if (!_v1.$) {
			var _v2 = _v1.a;
			var p = _v2.c;
			var a = _v2.bZ;
			var s1 = _v2.ea;
			return $gren_lang$core$String$Parser$Advanced$Good({ c: p, ea: s1, bZ: a });
		} else {
			var _v3 = _v1.a;
			var pred = _v3.c;
			var bag = _v3.k;
			return $gren_lang$core$String$Parser$Advanced$Bad({ k: $gren_lang$core$String$Parser$Advanced$mapBagProblem$(func, bag), c: pred });
		}
	};
};
var $gren_lang$core$String$Parser$Advanced$mapError = F2($gren_lang$core$String$Parser$Advanced$mapError$);
var $gren_lang$compiler_common$Compiler$Parse$Type$checkIndent = $gren_lang$core$String$Parser$Advanced$mapError$(function(_v0) {
		return $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedIndent;
	}, $gren_lang$compiler_common$Compiler$Parse$Space$checkIndent);


var _Bitwise_and = F2(function (a, b) {
  return a & b;
});

var _Bitwise_or = F2(function (a, b) {
  return a | b;
});

var _Bitwise_xor = F2(function (a, b) {
  return a ^ b;
});

function _Bitwise_complement(a) {
  return ~a;
}

var _Bitwise_countLeadingZeros = Math.clz32;

var _Bitwise_shiftLeftBy = F2(function (offset, a) {
  return a << offset;
});

var _Bitwise_shiftRightBy = F2(function (offset, a) {
  return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function (offset, a) {
  return a >>> offset;
});
var $gren_lang$core$Bitwise$and = _Bitwise_and;
var $gren_lang$core$String$getUnit = _String_getUnit;
var $gren_lang$core$Basics$negate = function(n) {
	return -n;
};
var $gren_lang$core$String$sliceUnits = _String_sliceUnits;
var $gren_lang$core$String$Parser$Advanced$isSubChar$ = function(pred, offset, str) {
	var _v0 = A2($gren_lang$core$String$getUnit, offset, str);
	if (_v0.$ === 1) {
		return -1;
	} else {
		var unit = _v0.a;
		if (($gren_lang$core$Char$toCode(unit) & 63488) === 55296) {
			var _v1 = $gren_lang$core$String$popFirst(A3($gren_lang$core$String$sliceUnits, offset, offset + 2, str));
			if (!_v1.$) {
				var uniChar = _v1.a.fk;
				return pred(unit) ? (offset + 2) : (-1);
			} else {
				return -1;
			}
		} else {
			if (pred(unit)) {
				return (unit === '\n') ? (-2) : (offset + 1);
			} else {
				return -1;
			}
		}
	}
};
var $gren_lang$core$String$Parser$Advanced$isSubChar = F3($gren_lang$core$String$Parser$Advanced$isSubChar$);
var $gren_lang$core$String$Parser$Advanced$chompIf$ = function(isGood, expecting) {
	return function(s) {
		var newOffset = $gren_lang$core$String$Parser$Advanced$isSubChar$(isGood, s.g, s.d);
		return _Utils_eq(newOffset, -1) ? $gren_lang$core$String$Parser$Advanced$Bad({ k: $gren_lang$core$String$Parser$Advanced$fromState$(s, expecting), c: false }) : (_Utils_eq(newOffset, -2) ? $gren_lang$core$String$Parser$Advanced$Good({ c: true, ea: { aZ: 1, g: s.g + 1, gh: s.gh, bl: s.bl + 1, d: s.d }, bZ: {  } }) : $gren_lang$core$String$Parser$Advanced$Good({ c: true, ea: { aZ: s.aZ + 1, g: newOffset, gh: s.gh, bl: s.bl, d: s.d }, bZ: {  } }));
	};
};
var $gren_lang$core$String$Parser$Advanced$chompIf = F2($gren_lang$core$String$Parser$Advanced$chompIf$);
var $gren_lang$core$String$Parser$Advanced$chompChar$ = function(chr, expecting) {
	return $gren_lang$core$String$Parser$Advanced$chompIf$(function(c) {
			return _Utils_eq(c, chr);
		}, expecting);
};
var $gren_lang$core$String$Parser$Advanced$chompChar = F2($gren_lang$core$String$Parser$Advanced$chompChar$);
var $gren_lang$compiler_common$Compiler$Parse$Variable$Qualified = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Variable$Unqualified = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Variable$ExpectedDot = { $: 1 };
var $gren_lang$core$String$Parser$Advanced$oneOfHelp$ = function(s0, bag, parsers) {
	oneOfHelp:
	while (true) {
		var _v0 = $gren_lang$core$Array$popFirst(parsers);
		if (_v0.$ === 1) {
			return $gren_lang$core$String$Parser$Advanced$Bad({ k: bag, c: false });
		} else {
			var _v1 = _v0.a;
			var parse = _v1.fk;
			var remainingParsers = _v1.gz;
			var _v2 = parse(s0);
			if (!_v2.$) {
				var step = _v2;
				return step;
			} else {
				var step = _v2;
				var _v3 = step.a;
				var p = _v3.c;
				var x = _v3.k;
				if (p) {
					return step;
				} else {
					var $temp$s0 = s0,
					$temp$bag = $gren_lang$core$String$Parser$Advanced$Append({ du: bag, d0: x }),
					$temp$parsers = remainingParsers;
					s0 = $temp$s0;
					bag = $temp$bag;
					parsers = $temp$parsers;
					continue oneOfHelp;
				}
			}
		}
	}
};
var $gren_lang$core$String$Parser$Advanced$oneOfHelp = F3($gren_lang$core$String$Parser$Advanced$oneOfHelp$);
var $gren_lang$core$String$Parser$Advanced$oneOf = function(parsers) {
	return function(s) {
		return $gren_lang$core$String$Parser$Advanced$oneOfHelp$(s, $gren_lang$core$String$Parser$Advanced$Empty, parsers);
	};
};
var $gren_lang$core$String$Parser$Advanced$skip$ = function(ignoreParser, keepParser) {
	return $gren_lang$core$String$Parser$Advanced$map2$(F2(function(val, _v0) {
				return val;
			}), keepParser, ignoreParser);
};
var $gren_lang$core$String$Parser$Advanced$skip = F2($gren_lang$core$String$Parser$Advanced$skip$);
var $gren_lang$compiler_common$Compiler$Parse$Variable$InvalidCharacter = { $: 0 };
var $gren_lang$core$String$Parser$Advanced$chompWhileHelp$ = function(isGood, offset, row, col, s0) {
	chompWhileHelp:
	while (true) {
		var newOffset = $gren_lang$core$String$Parser$Advanced$isSubChar$(isGood, offset, s0.d);
		if (_Utils_eq(newOffset, -1)) {
			return $gren_lang$core$String$Parser$Advanced$Good({ c: _Utils_cmp(s0.g, offset) < 0, ea: { aZ: col, g: offset, gh: s0.gh, bl: row, d: s0.d }, bZ: {  } });
		} else {
			if (_Utils_eq(newOffset, -2)) {
				var $temp$isGood = isGood,
				$temp$offset = offset + 1,
				$temp$row = row + 1,
				$temp$col = 1,
				$temp$s0 = s0;
				isGood = $temp$isGood;
				offset = $temp$offset;
				row = $temp$row;
				col = $temp$col;
				s0 = $temp$s0;
				continue chompWhileHelp;
			} else {
				var $temp$isGood = isGood,
				$temp$offset = newOffset,
				$temp$row = row,
				$temp$col = col + 1,
				$temp$s0 = s0;
				isGood = $temp$isGood;
				offset = $temp$offset;
				row = $temp$row;
				col = $temp$col;
				s0 = $temp$s0;
				continue chompWhileHelp;
			}
		}
	}
};
var $gren_lang$core$String$Parser$Advanced$chompWhileHelp = F5($gren_lang$core$String$Parser$Advanced$chompWhileHelp$);
var $gren_lang$core$String$Parser$Advanced$chompWhile = function(isGood) {
	return function(s) {
		return $gren_lang$core$String$Parser$Advanced$chompWhileHelp$(isGood, s.g, s.bl, s.aZ, s);
	};
};
var $gren_lang$core$String$Parser$Advanced$mapChompedString$ = function(func, _v0) {
	var parse = _v0;
	return function(s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var _v2 = _v1.a;
			var p = _v2.c;
			var x = _v2.k;
			return $gren_lang$core$String$Parser$Advanced$Bad({ k: x, c: p });
		} else {
			var _v3 = _v1.a;
			var p = _v3.c;
			var a = _v3.bZ;
			var s1 = _v3.ea;
			return $gren_lang$core$String$Parser$Advanced$Good({ c: p, ea: s1, bZ: A2(func, A3($gren_lang$core$String$sliceUnits, s0.g, s1.g, s0.d), a) });
		}
	};
};
var $gren_lang$core$String$Parser$Advanced$mapChompedString = F2($gren_lang$core$String$Parser$Advanced$mapChompedString$);
var $gren_lang$core$String$Parser$Advanced$getChompedString = function(parser) {
	return $gren_lang$core$String$Parser$Advanced$mapChompedString$(F2(function(str, _v0) {
				return str;
			}), parser);
};


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function (options, string) {
  if (string.trim().length === 0) {
    return $gren_lang$core$Maybe$Nothing;
  }

  var flags = "gu";
  if (options.f5) {
    flags += "m";
  }
  if (options.eH) {
    flags += "i";
  }

  try {
    return $gren_lang$core$Maybe$Just(new RegExp(string, flags));
  } catch (error) {
    return $gren_lang$core$Maybe$Nothing;
  }
});

// USE

var _Regex_contains = F2(function (re, string) {
  return string.match(re) !== null;
});

var _Regex_findAtMost = F3(function (n, re, str) {
  var out = [];
  var number = 0;
  var string = str;
  var lastIndex = re.lastIndex;
  var prevLastIndex = -1;
  var result;
  while (number++ < n && (result = re.exec(string))) {
    if (prevLastIndex == re.lastIndex) break;
    var i = result.length - 1;
    var subs = new Array(i);
    while (i > 0) {
      var submatch = result[i];
      subs[--i] = submatch ? $gren_lang$core$Maybe$Just(submatch) : $gren_lang$core$Maybe$Nothing;
    }
    out.push({
      dx: result[0],
      dk: result.index,
      aI: number,
      eg: subs,
    });
    prevLastIndex = re.lastIndex;
  }
  re.lastIndex = lastIndex;
  return out;
});

var _Regex_replaceAtMost = F4(function (n, re, replacer, string) {
  var count = 0;
  function jsReplacer(match) {
    if (count++ >= n) {
      return match;
    }
    var i = arguments.length - 3;
    var submatches = new Array(i);
    while (i > 0) {
      var submatch = arguments[i];
      submatches[--i] = submatch ? $gren_lang$core$Maybe$Just(submatch) : $gren_lang$core$Maybe$Nothing;
    }
    return replacer({
      dx: match,
      dk: arguments[arguments.length - 2],
      aI: count,
      eg: submatches,
    });
  }
  return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function (n, re, str) {
  return str.split(re, n);
});
var $gren_lang$core$String$Regex$contains = _Regex_contains;
var $gren_lang$core$String$pushFirst = _String_pushFirst;
var $gren_lang$core$String$fromChar = function(_char) {
	return A2($gren_lang$core$String$pushFirst, _char, '');
};
var $gren_lang$core$String$Regex$fromStringWith = _Regex_fromStringWith;
var $gren_lang$core$String$Regex$fromString = function(string) {
	return A2($gren_lang$core$String$Regex$fromStringWith, { eH: false, f5: false }, string);
};
var $gren_lang$core$String$Regex$never = _Regex_never;
var $gren_lang$compiler_common$Compiler$Parse$Variable$lowerCaseLetterRegex = $gren_lang$core$Maybe$withDefault$($gren_lang$core$String$Regex$never, $gren_lang$core$String$Regex$fromString('\\p{Ll}'));
var $gren_lang$compiler_common$Compiler$Parse$Variable$isLowerCaseLetter = function(_char) {
	return A2($gren_lang$core$String$Regex$contains, $gren_lang$compiler_common$Compiler$Parse$Variable$lowerCaseLetterRegex, $gren_lang$core$String$fromChar(_char));
};
var $gren_lang$compiler_common$Compiler$Parse$Variable$upperCaseLetterRegex = $gren_lang$core$Maybe$withDefault$($gren_lang$core$String$Regex$never, $gren_lang$core$String$Regex$fromString('\\p{Lu}'));
var $gren_lang$compiler_common$Compiler$Parse$Variable$isUpperCaseLetter = function(_char) {
	return A2($gren_lang$core$String$Regex$contains, $gren_lang$compiler_common$Compiler$Parse$Variable$upperCaseLetterRegex, $gren_lang$core$String$fromChar(_char));
};
var $gren_lang$compiler_common$Compiler$Parse$Variable$isInner = function(_char) {
	return $gren_lang$core$Char$isAlphaNum(_char) || ((_char === '_') || ($gren_lang$compiler_common$Compiler$Parse$Variable$isLowerCaseLetter(_char) || $gren_lang$compiler_common$Compiler$Parse$Variable$isUpperCaseLetter(_char)));
};
var $gren_lang$compiler_common$Compiler$Parse$Variable$upperCase = $gren_lang$core$String$Parser$Advanced$getChompedString($gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompWhile($gren_lang$compiler_common$Compiler$Parse$Variable$isInner), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompIf$($gren_lang$compiler_common$Compiler$Parse$Variable$isUpperCaseLetter, $gren_lang$compiler_common$Compiler$Parse$Variable$InvalidCharacter), $gren_lang$core$String$Parser$Advanced$succeed({  }))));
var $gren_lang$compiler_common$Compiler$Parse$Variable$foreignUpperLoop = function(acc) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Variable$upperCase, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('.', $gren_lang$compiler_common$Compiler$Parse$Variable$ExpectedDot), $gren_lang$core$String$Parser$Advanced$succeed(function(next) {
						return $gren_lang$core$String$Parser$Advanced$Loop({ f3: $gren_lang$core$Array$pushLast$(acc.bK, acc.f3), bK: next });
					}))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(acc)) ]);
};
var $gren_lang$core$String$Parser$Advanced$loopHelp$ = function(p, state, callback, s0) {
	loopHelp:
	while (true) {
		var _v0 = callback(state);
		var parse = _v0;
		var _v1 = parse(s0);
		if (!_v1.$) {
			var _v2 = _v1.a;
			var p1 = _v2.c;
			var step = _v2.bZ;
			var s1 = _v2.ea;
			if (!step.$) {
				var newState = step.a;
				var $temp$p = p || p1,
				$temp$state = newState,
				$temp$callback = callback,
				$temp$s0 = s1;
				p = $temp$p;
				state = $temp$state;
				callback = $temp$callback;
				s0 = $temp$s0;
				continue loopHelp;
			} else {
				var result = step.a;
				return $gren_lang$core$String$Parser$Advanced$Good({ c: p || p1, ea: s1, bZ: result });
			}
		} else {
			var _v4 = _v1.a;
			var p1 = _v4.c;
			var x = _v4.k;
			return $gren_lang$core$String$Parser$Advanced$Bad({ k: x, c: p || p1 });
		}
	}
};
var $gren_lang$core$String$Parser$Advanced$loopHelp = F4($gren_lang$core$String$Parser$Advanced$loopHelp$);
var $gren_lang$core$String$Parser$Advanced$loop$ = function(state, callback) {
	return function(s) {
		return $gren_lang$core$String$Parser$Advanced$loopHelp$(false, state, callback, s);
	};
};
var $gren_lang$core$String$Parser$Advanced$loop = F2($gren_lang$core$String$Parser$Advanced$loop$);
var $gren_lang$compiler_common$Compiler$Parse$Variable$foreignUpper = $gren_lang$core$String$Parser$Advanced$andThen$(function(first) {
		return $gren_lang$core$String$Parser$Advanced$map$(function(_v0) {
				var module_ = _v0.f3;
				var name = _v0.bK;
				if (module_.length === 0) {
					return $gren_lang$compiler_common$Compiler$Parse$Variable$Unqualified(name);
				} else {
					return $gren_lang$compiler_common$Compiler$Parse$Variable$Qualified({ f3: A2($gren_lang$core$String$join, '.', module_), bK: name });
				}
			}, $gren_lang$core$String$Parser$Advanced$loop$({ f3: [  ], bK: first }, $gren_lang$compiler_common$Compiler$Parse$Variable$foreignUpperLoop));
	}, $gren_lang$compiler_common$Compiler$Parse$Variable$upperCase);
var $gren_lang$core$String$Parser$Advanced$getPosition = function(s) {
	return $gren_lang$core$String$Parser$Advanced$Good({ c: false, ea: s, bZ: { aZ: s.aZ, bl: s.bl } });
};
var $gren_lang$core$Array$last = function(array) {
	return A2($gren_lang$core$Array$get, -1, array);
};
var $gren_lang$core$String$Parser$Advanced$lazy = function(thunk) {
	return function(s) {
		var _v0 = thunk({  });
		var parse = _v0;
		return parse(s);
	};
};
var $gren_lang$compiler_common$Compiler$Parse$Variable$ReservedWord = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$core$String$Parser$Advanced$backtrackable = function(_v0) {
	var parse = _v0;
	return function(s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var x = _v1.a.k;
			return $gren_lang$core$String$Parser$Advanced$Bad({ k: x, c: false });
		} else {
			var _v2 = _v1.a;
			var a = _v2.bZ;
			var s1 = _v2.ea;
			return $gren_lang$core$String$Parser$Advanced$Good({ c: false, ea: s1, bZ: a });
		}
	};
};
var $gren_lang$core$Dict$member$ = function(key, dict) {
	var _v0 = $gren_lang$core$Dict$get$(key, dict);
	if (!_v0.$) {
		return true;
	} else {
		return false;
	}
};
var $gren_lang$core$Dict$member = F2($gren_lang$core$Dict$member$);
var $gren_lang$core$Set$member$ = function(key, _v0) {
	var dict = _v0;
	return $gren_lang$core$Dict$member$(key, dict);
};
var $gren_lang$core$Set$member = F2($gren_lang$core$Set$member$);
var $gren_lang$core$Set$Set_gren_builtin = $gren_lang$core$Basics$identity;
var $gren_lang$core$Set$empty = $gren_lang$core$Dict$empty;
var $gren_lang$core$Set$set$ = function(key, _v0) {
	var dict = _v0;
	return $gren_lang$core$Dict$set$(key, {  }, dict);
};
var $gren_lang$core$Set$set = F2($gren_lang$core$Set$set$);
var $gren_lang$core$Set$fromArray = function(array) {
	return A3($gren_lang$core$Array$foldl, $gren_lang$core$Set$set, $gren_lang$core$Set$empty, array);
};
var $gren_lang$compiler_common$Compiler$Parse$Variable$reservedWords = $gren_lang$core$Set$fromArray([ 'if', 'then', 'else', 'when', 'is', 'let', 'in', 'type', 'module', 'where', 'import', 'exposing', 'as', 'port' ]);
var $gren_lang$compiler_common$Compiler$Parse$Variable$lowerCase = $gren_lang$core$String$Parser$Advanced$backtrackable($gren_lang$core$String$Parser$Advanced$andThen$(function(word) {
			return $gren_lang$core$Set$member$(word, $gren_lang$compiler_common$Compiler$Parse$Variable$reservedWords) ? $gren_lang$core$String$Parser$Advanced$problem($gren_lang$compiler_common$Compiler$Parse$Variable$ReservedWord(word)) : $gren_lang$core$String$Parser$Advanced$succeed(word);
		}, $gren_lang$core$String$Parser$Advanced$getChompedString($gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompWhile($gren_lang$compiler_common$Compiler$Parse$Variable$isInner), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompIf$($gren_lang$compiler_common$Compiler$Parse$Variable$isLowerCaseLetter, $gren_lang$compiler_common$Compiler$Parse$Variable$InvalidCharacter), $gren_lang$core$String$Parser$Advanced$succeed({  }))))));
var $gren_lang$compiler_common$Compiler$Parse$Type$SpaceError = function (a) {
	return { $: 4, a: a };
};
var $gren_lang$core$Basics$neq = _Utils_notEqual;
var $gren_lang$compiler_common$Compiler$Parse$Context$Block = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Space$ExpectedLineComment = 0;
var $gren_lang$compiler_common$Compiler$Parse$Space$ExpectedMultiLineClose = 2;
var $gren_lang$compiler_common$Compiler$Parse$Space$ExpectedMultiLineOpen = 1;
var $gren_lang$compiler_common$Compiler$Parse$Space$InvalidWhiteSpace = 3;
var $gren_lang$compiler_common$Compiler$Parse$Context$Line = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$core$String$firstIndexOf = _String_indexOf;
var $gren_lang$core$String$indices = _String_indexes;
var $gren_lang$core$Array$keepIf = _Array_filter;
var $gren_lang$core$Basics$sub = _Basics_sub;
var $gren_lang$core$String$unitLength = _String_unitLength;
var $gren_lang$core$String$Parser$Advanced$findSubString$ = function(smallString, offset, row, col, bigString) {
	var slice = A3($gren_lang$core$String$sliceUnits, offset, $gren_lang$core$String$unitLength(bigString), bigString);
	var sliceLength = $gren_lang$core$String$unitLength(slice);
	var newlines = A2($gren_lang$core$String$indices, '\n', slice);
	var _v0 = A2($gren_lang$core$String$firstIndexOf, smallString, slice);
	if (!_v0.$) {
		var idx = _v0.a;
		var relevantNewlines = A2($gren_lang$core$Array$keepIf, function(newlineIdx) {
				return _Utils_cmp(newlineIdx, idx) < 0;
			}, newlines);
		return { cp: $gren_lang$core$Maybe$withDefault$(col + idx, $gren_lang$core$Maybe$map$(function(lastNewlineIdx) {
					return idx - lastNewlineIdx;
				}, $gren_lang$core$Array$last(relevantNewlines))), cq: offset + idx, cr: row + $gren_lang$core$Array$length(relevantNewlines) };
	} else {
		return { cp: $gren_lang$core$Maybe$withDefault$(col + sliceLength, $gren_lang$core$Maybe$map$(function(lastNewlineIdx) {
					return (sliceLength - lastNewlineIdx) - 1;
				}, $gren_lang$core$Array$last(newlines))), cq: -1, cr: row + $gren_lang$core$Array$length(newlines) };
	}
};
var $gren_lang$core$String$Parser$Advanced$findSubString = F5($gren_lang$core$String$Parser$Advanced$findSubString$);
var $gren_lang$core$String$Parser$Advanced$chompUntil$ = function(str, expecting) {
	return function(s) {
		var _v0 = $gren_lang$core$String$Parser$Advanced$findSubString$(str, s.g, s.bl, s.aZ, s.d);
		var newOffset = _v0.cq;
		var newRow = _v0.cr;
		var newCol = _v0.cp;
		return _Utils_eq(newOffset, -1) ? $gren_lang$core$String$Parser$Advanced$Bad({ k: $gren_lang$core$String$Parser$Advanced$fromState$(s, expecting), c: false }) : $gren_lang$core$String$Parser$Advanced$Good({ c: _Utils_cmp(s.g, newOffset) < 0, ea: { aZ: newCol, g: newOffset, gh: s.gh, bl: newRow, d: s.d }, bZ: {  } });
	};
};
var $gren_lang$core$String$Parser$Advanced$chompUntil = F2($gren_lang$core$String$Parser$Advanced$chompUntil$);
var $gren_lang$core$String$slice = _String_slice;
var $gren_lang$core$String$dropFirst$ = function(n, string) {
	return (n < 1) ? string : A3($gren_lang$core$String$slice, n, $gren_lang$core$String$unitLength(string), string);
};
var $gren_lang$core$String$dropFirst = F2($gren_lang$core$String$dropFirst$);
var $gren_lang$core$String$dropLast$ = function(n, string) {
	return (n < 1) ? string : A3($gren_lang$core$String$slice, 0, -n, string);
};
var $gren_lang$core$String$dropLast = F2($gren_lang$core$String$dropLast$);
var $gren_lang$core$String$Parser$Advanced$getRow = function(s) {
	return $gren_lang$core$String$Parser$Advanced$Good({ c: false, ea: s, bZ: s.bl });
};
var $gren_lang$core$String$Parser$Advanced$chompUntilEndOr = function(str) {
	return function(s) {
		var _v0 = $gren_lang$core$String$Parser$Advanced$findSubString$(str, s.g, s.bl, s.aZ, s.d);
		var newOffset = _v0.cq;
		var newRow = _v0.cr;
		var newCol = _v0.cp;
		var adjustedOffset = (newOffset < 0) ? $gren_lang$core$String$unitLength(s.d) : newOffset;
		return $gren_lang$core$String$Parser$Advanced$Good({ c: _Utils_cmp(s.g, adjustedOffset) < 0, ea: { aZ: newCol, g: adjustedOffset, gh: s.gh, bl: newRow, d: s.d }, bZ: {  } });
	};
};
var $gren_lang$core$String$isEmpty = function(string) {
	return string === '';
};
var $gren_lang$core$String$Parser$Advanced$isSubString$ = function(smallString, offset, row, col, bigString) {
	var slice = A3($gren_lang$core$String$sliceUnits, offset, offset + $gren_lang$core$String$unitLength(smallString), bigString);
	var sliceLength = $gren_lang$core$String$unitLength(slice);
	var newlineIndices = A2($gren_lang$core$String$indices, '\n', smallString);
	return { cp: $gren_lang$core$Maybe$withDefault$(col + sliceLength, $gren_lang$core$Maybe$map$(function(newlineIndex) {
				return sliceLength - newlineIndex;
			}, $gren_lang$core$Array$last(newlineIndices))), cq: _Utils_eq(smallString, slice) ? (offset + sliceLength) : (-1), cr: row + $gren_lang$core$Array$length(newlineIndices) };
};
var $gren_lang$core$String$Parser$Advanced$isSubString = F5($gren_lang$core$String$Parser$Advanced$isSubString$);
var $gren_lang$core$String$Parser$Advanced$token$ = function(str, expecting) {
	var progress = !$gren_lang$core$String$isEmpty(str);
	return function(s) {
		var _v0 = $gren_lang$core$String$Parser$Advanced$isSubString$(str, s.g, s.bl, s.aZ, s.d);
		var newOffset = _v0.cq;
		var newRow = _v0.cr;
		var newCol = _v0.cp;
		return _Utils_eq(newOffset, -1) ? $gren_lang$core$String$Parser$Advanced$Bad({ k: $gren_lang$core$String$Parser$Advanced$fromState$(s, expecting), c: false }) : $gren_lang$core$String$Parser$Advanced$Good({ c: progress, ea: { aZ: newCol, g: newOffset, gh: s.gh, bl: newRow, d: s.d }, bZ: {  } });
	};
};
var $gren_lang$core$String$Parser$Advanced$token = F2($gren_lang$core$String$Parser$Advanced$token$);
var $gren_lang$core$String$Parser$Advanced$lineComment$ = function(string, expecting) {
	return $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompUntilEndOr('\n'), $gren_lang$core$String$Parser$Advanced$token$(string, expecting));
};
var $gren_lang$core$String$Parser$Advanced$lineComment = F2($gren_lang$core$String$Parser$Advanced$lineComment$);
var $gren_lang$core$String$trim = _String_trim;
var $gren_lang$core$String$Parser$Advanced$setStatePayload$ = function(payload, s) {
	return { aZ: s.aZ, g: s.g, gh: payload, bl: s.bl, d: s.d };
};
var $gren_lang$core$String$Parser$Advanced$setStatePayload = F2($gren_lang$core$String$Parser$Advanced$setStatePayload$);
var $gren_lang$core$String$Parser$Advanced$updatePayload$ = function(updater, _v0) {
	var parse = _v0;
	return function(s) {
		return parse($gren_lang$core$String$Parser$Advanced$setStatePayload$(updater(s.gh), s));
	};
};
var $gren_lang$core$String$Parser$Advanced$updatePayload = F2($gren_lang$core$String$Parser$Advanced$updatePayload$);
var $gren_lang$compiler_common$Compiler$Parse$Space$validWhiteSpace = function(_char) {
	return (_char === ' ') || ((_char === '\n') || (_char === '\r'));
};
var $gren_lang$compiler_common$Compiler$Parse$Space$parseLoop = function(_v0) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$map$(function(_v1) {
				return $gren_lang$core$String$Parser$Advanced$Loop({  });
			}, $gren_lang$core$String$Parser$Advanced$andThen$(function(value) {
					return $gren_lang$core$String$Parser$Advanced$updatePayload$(function(payload) {
							var commentsOnRow = $gren_lang$core$Array$pushLast$(value, $gren_lang$core$Maybe$withDefault$([  ], $gren_lang$core$Dict$get$(value.bl, payload.eN)));
							return _Utils_update(payload, { eN: $gren_lang$core$Dict$set$(value.bl, commentsOnRow, payload.eN) });
						}, $gren_lang$core$String$Parser$Advanced$getPayload);
				}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getChompedString($gren_lang$core$String$Parser$Advanced$lineComment$('--', 0)), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getCol, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getRow, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(row, col, comment) {
										return { aZ: col, bl: row, bZ: $gren_lang$compiler_common$Compiler$Parse$Context$Line($gren_lang$core$String$trim($gren_lang$core$String$dropFirst$(2, comment))) };
									}))))))), $gren_lang$core$String$Parser$Advanced$map$(function(_v3) {
				return $gren_lang$core$String$Parser$Advanced$Loop({  });
			}, $gren_lang$core$String$Parser$Advanced$andThen$(function(value) {
					return $gren_lang$core$String$Parser$Advanced$updatePayload$(function(payload) {
							var commentsOnRow = $gren_lang$core$Array$pushLast$(value, $gren_lang$core$Maybe$withDefault$([  ], $gren_lang$core$Dict$get$(value.bl, payload.eN)));
							return _Utils_update(payload, { eN: $gren_lang$core$Dict$set$(value.bl, commentsOnRow, payload.eN) });
						}, $gren_lang$core$String$Parser$Advanced$getPayload);
				}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getChompedString($gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('-}', 2), $gren_lang$core$String$Parser$Advanced$chompUntil$('-}', 2))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$backtrackable($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$andThen$(function(_v2) {
										return $gren_lang$core$String$Parser$Advanced$problem(1);
									}, $gren_lang$core$String$Parser$Advanced$token$('{-|', 1)), $gren_lang$core$String$Parser$Advanced$token$('{-', 1) ])), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getCol, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getRow, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(row, col, comment) {
											return { aZ: col, bl: row, bZ: $gren_lang$compiler_common$Compiler$Parse$Context$Block($gren_lang$core$String$trim($gren_lang$core$String$dropLast$(2, comment))) };
										})))))))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompWhile($gren_lang$compiler_common$Compiler$Parse$Space$validWhiteSpace), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompIf$($gren_lang$compiler_common$Compiler$Parse$Space$validWhiteSpace, 3), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Loop({  })))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done({  })) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Space$parser = $gren_lang$core$String$Parser$Advanced$andThen$(function(_v0) {
		var startPos = _v0.gK;
		var endPos = _v0.e4;
		return ((!_Utils_eq(startPos.bl, endPos.bl)) || (startPos.aZ === 1)) ? $gren_lang$core$String$Parser$Advanced$updatePayload$(function(pl) {
				return _Utils_update(pl, { fU: endPos.aZ });
			}, $gren_lang$core$String$Parser$Advanced$succeed({  })) : $gren_lang$core$String$Parser$Advanced$succeed({  });
	}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$loop$({  }, $gren_lang$compiler_common$Compiler$Parse$Space$parseLoop), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F2(function(startPos, endPos) {
							return { e4: endPos, gK: startPos };
						}))))));
var $gren_lang$compiler_common$Compiler$Parse$Type$spaceParser = $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Type$SpaceError, $gren_lang$compiler_common$Compiler$Parse$Space$parser);
var $gren_lang$compiler_common$Compiler$Parse$Type$innerRecordParser = function(array) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('}', $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedChar('}')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(array))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Type$cyclic$recordFieldParser(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(',', $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedChar(',')), $gren_lang$core$String$Parser$Advanced$succeed(function(expr) {
								return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(expr, array));
							}))))) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Type$typeArgsParser = function(array) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Type$cyclic$expression(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$mapError$(function(_v0) {
							return $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedIndent;
						}, $gren_lang$compiler_common$Compiler$Parse$Space$checkIndent), $gren_lang$core$String$Parser$Advanced$succeed(function(expr) {
							return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(expr, array));
						})))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(array)) ]);
};
function $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$recordFieldParser() {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Type$cyclic$expression(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(':', $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedChar(':')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Type$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$lowerCase), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F4(function(fieldStart, field, fieldEnd, signature) {
											return { dd: $gren_lang$compiler_common$SourcePosition$at$(fieldStart, fieldEnd, field), d7: signature };
										})))))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$expression() {
	return $gren_lang$core$String$Parser$Advanced$andThen$(function(tipe) {
			return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v5) {
							return $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$expression();
						}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$checkIndent, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('->', $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedString('->')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$checkIndent, $gren_lang$core$String$Parser$Advanced$succeed(function(next) {
											return $gren_lang$compiler_common$SourcePosition$at$(tipe.cE, next.c6, $gren_lang$compiler_common$Compiler$Ast$Source$TLambda({ fr: tipe, gY: next }));
										})))))), $gren_lang$core$String$Parser$Advanced$succeed(tipe) ]);
		}, $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$app(), $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$term() ]));
}
function $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$app() {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([  ], $gren_lang$compiler_common$Compiler$Parse$Type$typeArgsParser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Type$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$foreignUpper), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F4(function(start, _var, end, args) {
									var argsEnd = $gren_lang$core$Maybe$withDefault$(end, $gren_lang$core$Maybe$map$(function ($) {
												return $.c6;
											}, $gren_lang$core$Array$last(args)));
									if (!_var.$) {
										var name = _var.a;
										return $gren_lang$compiler_common$SourcePosition$at$(start, argsEnd, $gren_lang$compiler_common$Compiler$Ast$Source$TType({ cR: args, bK: $gren_lang$compiler_common$SourcePosition$at$(start, end, name) }));
									} else {
										var _v4 = _var.a;
										var module_ = _v4.f3;
										var name = _v4.bK;
										return $gren_lang$compiler_common$SourcePosition$at$(start, argsEnd, $gren_lang$compiler_common$Compiler$Ast$Source$TTypeQual({ cR: args, bK: name, dV: module_, g5: { c6: end, cE: start } }));
									}
								})))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$recordParser() {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('}', $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedChar('}')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$TRecord({ b7: $gren_lang$core$Maybe$Nothing, cb: [  ] }))), $gren_lang$core$String$Parser$Advanced$andThen$(function(_var) {
					return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$map$(function(fields) {
								return $gren_lang$compiler_common$Compiler$Ast$Source$TRecord({ b7: $gren_lang$core$Maybe$Just(_var), cb: fields });
							}, $gren_lang$core$String$Parser$Advanced$andThen$(function(firstPair) {
									return $gren_lang$core$String$Parser$Advanced$loop$([ firstPair ], $gren_lang$compiler_common$Compiler$Parse$Type$innerRecordParser);
								}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Type$cyclic$recordFieldParser(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('|', $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedChar('|')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))))))), $gren_lang$core$String$Parser$Advanced$map$(function(fields) {
								return $gren_lang$compiler_common$Compiler$Ast$Source$TRecord({ b7: $gren_lang$core$Maybe$Nothing, cb: fields });
							}, $gren_lang$core$String$Parser$Advanced$andThen$(function(expr) {
									return $gren_lang$core$String$Parser$Advanced$loop$([ { dd: _var, d7: expr } ], $gren_lang$compiler_common$Compiler$Parse$Type$innerRecordParser);
								}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Type$cyclic$expression(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(':', $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedChar(':')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))))))) ]);
				}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Type$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$lowerCase), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(start, _var, end) {
											return $gren_lang$compiler_common$SourcePosition$at$(start, end, _var);
										}))))))) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('{', $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedChar('{')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))));
}
function $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$term() {
	return $gren_lang$core$String$Parser$Advanced$andThen$(function(start) {
			return $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Type$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$foreignUpper), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(_var, end) {
										return $gren_lang$compiler_common$SourcePosition$at$(start, end, function () {
												if (!_var.$) {
													var name = _var.a;
													return $gren_lang$compiler_common$Compiler$Ast$Source$TType({ cR: [  ], bK: $gren_lang$compiler_common$SourcePosition$at$(start, end, name) });
												} else {
													var _v2 = _var.a;
													var module_ = _v2.f3;
													var name = _v2.bK;
													return $gren_lang$compiler_common$Compiler$Ast$Source$TTypeQual({ cR: [  ], bK: name, dV: module_, g5: { c6: end, cE: start } });
												}
											}());
									})))), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Type$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$lowerCase), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(_var, end) {
										return $gren_lang$compiler_common$SourcePosition$at$(start, end, $gren_lang$compiler_common$Compiler$Ast$Source$TVar(_var));
									})))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(')', $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedChar(')')), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Type$cyclic$expression(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Type$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('(', $gren_lang$compiler_common$Compiler$Parse$Type$ExpectedChar('(')), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(expr, end) {
													return $gren_lang$compiler_common$SourcePosition$at$(start, end, $gren_lang$compiler_common$Compiler$Ast$Source$TParens(expr));
												}))))))), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Type$cyclic$recordParser(), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(record, end) {
										return $gren_lang$compiler_common$SourcePosition$at$(start, end, record);
									})))) ]));
		}, $gren_lang$core$String$Parser$Advanced$getPosition);
}
var $gren_lang$compiler_common$Compiler$Parse$Type$recordFieldParser = $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$recordFieldParser();
$gren_lang$compiler_common$Compiler$Parse$Type$cyclic$recordFieldParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Type$recordFieldParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Type$expression = $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$expression();
$gren_lang$compiler_common$Compiler$Parse$Type$cyclic$expression = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Type$expression;
};
var $gren_lang$compiler_common$Compiler$Parse$Type$app = $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$app();
$gren_lang$compiler_common$Compiler$Parse$Type$cyclic$app = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Type$app;
};
var $gren_lang$compiler_common$Compiler$Parse$Type$recordParser = $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$recordParser();
$gren_lang$compiler_common$Compiler$Parse$Type$cyclic$recordParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Type$recordParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Type$term = $gren_lang$compiler_common$Compiler$Parse$Type$cyclic$term();
$gren_lang$compiler_common$Compiler$Parse$Type$cyclic$term = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Type$term;
};
var $gren_lang$core$Array$pushFirst$ = function(value, array) {
	return A4(_Array_splice1, 0, 0, value, array);
};
var $gren_lang$core$Array$pushFirst = F2($gren_lang$core$Array$pushFirst$);
var $gren_lang$core$String$Parser$Advanced$bagToArray$ = function(bag, array) {
	bagToArray:
	while (true) {
		switch (bag.$) {
			case 0:
				return array;
			case 1:
				var _v1 = bag.a;
				var bag1 = _v1.k;
				var x = _v1.c2;
				var $temp$bag = bag1,
				$temp$array = $gren_lang$core$Array$pushFirst$(x, array);
				bag = $temp$bag;
				array = $temp$array;
				continue bagToArray;
			default:
				var _v2 = bag.a;
				var bag1 = _v2.du;
				var bag2 = _v2.d0;
				var $temp$bag = bag1,
				$temp$array = $gren_lang$core$String$Parser$Advanced$bagToArray$(bag2, array);
				bag = $temp$bag;
				array = $temp$array;
				continue bagToArray;
		}
	}
};
var $gren_lang$core$String$Parser$Advanced$bagToArray = F2($gren_lang$core$String$Parser$Advanced$bagToArray$);
var $gren_lang$core$String$Parser$Advanced$run$ = function(_v0, initialPayload, src) {
	var parse = _v0;
	var _v1 = parse({ aZ: 1, g: 0, gh: initialPayload, bl: 1, d: src });
	if (!_v1.$) {
		var value = _v1.a.bZ;
		return $gren_lang$core$Result$Ok(value);
	} else {
		var bag = _v1.a.k;
		return $gren_lang$core$Result$Err($gren_lang$core$String$Parser$Advanced$bagToArray$(bag, [  ]));
	}
};
var $gren_lang$core$String$Parser$Advanced$run = F3($gren_lang$core$String$Parser$Advanced$run$);
var $lue_bird$gren_extra_checks$GrenCoreDependency$syntaxTypeDecoder = A2($gren_lang$core$Json$Decode$andThen, function(typeSource) {
		var _v0 = $gren_lang$core$String$Parser$Advanced$run$($gren_lang$compiler_common$Compiler$Parse$Type$expression, $gren_lang$compiler_common$Compiler$Parse$Context$empty, typeSource);
		if (_v0.$ === 1) {
			return $gren_lang$core$Json$Decode$fail('failed to parse');
		} else {
			var typeSyntax = _v0.a;
			return $gren_lang$core$Json$Decode$succeed(typeSyntax);
		}
	}, $gren_lang$core$Json$Decode$string);
var $gren_lang$core$Json$Decode$index = _Json_decodeIndex;
var $gren_lang$core$Json$Decode$map2 = _Json_map2;
var $gren_lang$core$Json$Decode$map = _Json_map1;
var $gren_lang$core$Json$Decode$oneOf = _Json_oneOf;
var $gren_lang$core$Json$Decode$maybe = function(decoder) {
	return $gren_lang$core$Json$Decode$oneOf([ A2($gren_lang$core$Json$Decode$map, $gren_lang$core$Maybe$Just, decoder), $gren_lang$core$Json$Decode$succeed($gren_lang$core$Maybe$Nothing) ]);
};
var $lue_bird$gren_extra_checks$GrenCoreDependency$variantDecoder = A3($gren_lang$core$Json$Decode$map2, F2(function(name, valueType) {
			return { bK: name, g3: valueType };
		}), A2($gren_lang$core$Json$Decode$index, 0, $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$index, 1, $gren_lang$core$Json$Decode$maybe($lue_bird$gren_extra_checks$GrenCoreDependency$syntaxTypeDecoder)));
var $lue_bird$gren_extra_checks$GrenCoreDependency$docsModuleJsonDecoder = A7($gren_lang$core$Json$Decode$map6, F6(function(name, comment, unions, aliases, values, binops) {
			return { eq: aliases, ez: binops, aB: comment, bK: name, g0: unions, g4: values };
		}), A2($gren_lang$core$Json$Decode$field, 'name', $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$field, 'comment', $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$field, 'unions', $gren_lang$core$Json$Decode$array(A5($gren_lang$core$Json$Decode$map4, F4(function(name, comment, args, cases) {
						return { cR: args, eI: cases, aB: comment, bK: name };
					}), A2($gren_lang$core$Json$Decode$field, 'name', $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$field, 'comment', $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$field, 'args', $gren_lang$core$Json$Decode$array($gren_lang$core$Json$Decode$string)), A2($gren_lang$core$Json$Decode$field, 'cases', $gren_lang$core$Json$Decode$array($lue_bird$gren_extra_checks$GrenCoreDependency$variantDecoder))))), A2($gren_lang$core$Json$Decode$field, 'aliases', $gren_lang$core$Json$Decode$array(A5($gren_lang$core$Json$Decode$map4, F4(function(name, comment, args, type_) {
						return { cR: args, aB: comment, bK: name, g$: type_ };
					}), A2($gren_lang$core$Json$Decode$field, 'name', $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$field, 'comment', $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$field, 'args', $gren_lang$core$Json$Decode$array($gren_lang$core$Json$Decode$string)), A2($gren_lang$core$Json$Decode$field, 'type', $lue_bird$gren_extra_checks$GrenCoreDependency$syntaxTypeDecoder)))), A2($gren_lang$core$Json$Decode$field, 'values', $gren_lang$core$Json$Decode$array(A4($gren_lang$core$Json$Decode$map3, F3(function(name, comment, type_) {
						return { aB: comment, bK: name, g$: type_ };
					}), A2($gren_lang$core$Json$Decode$field, 'name', $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$field, 'comment', $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$field, 'type', $lue_bird$gren_extra_checks$GrenCoreDependency$syntaxTypeDecoder)))), A2($gren_lang$core$Json$Decode$field, 'binops', $gren_lang$core$Json$Decode$array(A6($gren_lang$core$Json$Decode$map5, F5(function(name, comment, type_, associativity, precedence) {
						return { ev: associativity, aB: comment, bK: name, gm: precedence, g$: type_ };
					}), A2($gren_lang$core$Json$Decode$field, 'name', $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$field, 'comment', $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$field, 'type', $lue_bird$gren_extra_checks$GrenCoreDependency$syntaxTypeDecoder), A2($gren_lang$core$Json$Decode$field, 'associativity', $lue_bird$gren_extra_checks$GrenCoreDependency$assocDecoder), A2($gren_lang$core$Json$Decode$field, 'precedence', $gren_lang$core$Json$Decode$int)))));
var $gren_lang$compiler_common$SourcePosition$emptyPos = { aZ: 1, bl: 1 };
var $gren_lang$core$Result$map$ = function(func, ra) {
	if (!ra.$) {
		var a = ra.a;
		return $gren_lang$core$Result$Ok(func(a));
	} else {
		var e = ra.a;
		return $gren_lang$core$Result$Err(e);
	}
};
var $gren_lang$core$Result$map = F2($gren_lang$core$Result$map$);
var $gren_lang$core$Result$map2$ = function(func, ra, rb) {
	if (ra.$ === 1) {
		var x = ra.a;
		return $gren_lang$core$Result$Err(x);
	} else {
		var a = ra.a;
		if (rb.$ === 1) {
			var x = rb.a;
			return $gren_lang$core$Result$Err(x);
		} else {
			var b = rb.a;
			return $gren_lang$core$Result$Ok(A2(func, a, b));
		}
	}
};
var $gren_lang$core$Result$map2 = F3($gren_lang$core$Result$map2$);
var $gren_lang$compiler_node$Compiler$Outline$App = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_node$Compiler$Outline$Pkg = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_node$Compiler$Outline$LocalPath = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_node$Compiler$Outline$Version = function (a) {
	return { $: 0, a: a };
};


var path = require("node:path");
var process = require("node:process");

var _FilePath_fromPosix = function (str) {
  return _FilePath_parse(path.posix, str);
};

var _FilePath_fromWin32 = function (str) {
  return _FilePath_parse(path.win32, str);
};

var _FilePath_fromString = function (str) {
  return _FilePath_parse(path, str);
};

var _FilePath_parse = function (pathMod, str) {
  const result = pathMod.parse(pathMod.normalize(str));

  const root = result.root;

  let dirStr = result.dir.startsWith(root)
    ? result.dir.substring(root.length)
    : result.dir;

  if (str.startsWith(`.${path.sep}`)) {
    dirStr = `.${path.sep}` + dirStr;
  }

  const filename =
    result.name === "." && result.ext.length === 0 ? "" : result.name;

  return {
    aE:
      dirStr === ""
        ? []
        : dirStr.split(pathMod.sep).filter((dir) => dir.length > 0),
    fh: result.ext.length > 0 ? result.ext.substring(1) : "",
    W: filename,
    gC: result.root,
  };
};

var _FilePath_toPosix = function (filePath) {
  if (_FilePath_isEmpty(filePath)) {
    return ".";
  }

  if (filePath.gC !== "" && filePath.gC !== "/") {
    filePath = { ...filePath, gC: "/" };
  }

  return _FilePath_format(path.posix, filePath);
};

var _FilePath_toWin32 = function (filePath) {
  if (_FilePath_isEmpty(filePath)) {
    return ".";
  }

  return _FilePath_format(path.win32, filePath);
};

var _FilePath_toString = function (filePath) {
  if (process.platform.toLowerCase() === "win32") {
    return _FilePath_toWin32(filePath);
  }

  return _FilePath_toPosix(filePath);
};

var _FilePath_isEmpty = function (filePath) {
  return (
    filePath.gC === "" &&
    filePath.aE.length === 0 &&
    filePath.W === "" &&
    filePath.fh === ""
  );
};

var _FilePath_format = function (pathMod, filePath) {
  const filename =
    filePath.fh.length > 0
      ? filePath.W + "." + filePath.fh
      : filePath.W;

  let pathArray = null;
  if (filename === "") {
    pathArray = filePath.aE;
  } else {
    pathArray = filePath.aE.concat(filename);
  }

  return filePath.gC + pathArray.join(pathMod.sep);
};
var $gren_lang$node$FileSystem$Path$fromPosixString = _FilePath_fromPosix;
var $gren_lang$core$String$foldl = _String_foldl;
var $gren_lang$core$String$count = function(string) {
	return A3($gren_lang$core$String$foldl, F2(function(_v0, num) {
				return num + 1;
			}), 0, string);
};
var $gren_lang$compiler_node$Compiler$Outline$localPrefixLength = $gren_lang$core$String$count('local:');
var $gren_lang$core$String$startsWith = _String_startsWith;
var $gren_lang$compiler_node$Compiler$Outline$constraintDecoder = function(versionDecoder) {
	return $gren_lang$core$Json$Decode$oneOf([ A2($gren_lang$core$Json$Decode$map, $gren_lang$compiler_node$Compiler$Outline$Version, versionDecoder), A2($gren_lang$core$Json$Decode$andThen, function(strValue) {
				return A2($gren_lang$core$String$startsWith, 'local:', strValue) ? $gren_lang$core$Json$Decode$succeed($gren_lang$compiler_node$Compiler$Outline$LocalPath($gren_lang$node$FileSystem$Path$fromPosixString($gren_lang$core$String$dropFirst$($gren_lang$compiler_node$Compiler$Outline$localPrefixLength, strValue)))) : $gren_lang$core$Json$Decode$fail('Not valid dependency constraint: ' + strValue);
			}, $gren_lang$core$Json$Decode$string) ]);
};
var $gren_lang$core$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $gren_lang$core$Json$Decode$dict = function(decoder) {
	return A2($gren_lang$core$Json$Decode$map, function(pairs) {
			return A3($gren_lang$core$Array$foldl, F2(function(p, coll) {
						return $gren_lang$core$Dict$set$(p.fL, p.bZ, coll);
					}), $gren_lang$core$Dict$empty, pairs);
		}, $gren_lang$core$Json$Decode$keyValuePairs(decoder));
};
var $gren_lang$core$Basics$ge = _Utils_ge;
var $gren_lang$core$Array$mapAndFlatten = _Array_flatMap;
var $gren_lang$core$Array$mapAndKeepJust$ = function(mapper, array) {
	return A2($gren_lang$core$Array$mapAndFlatten, function(v) {
			var _v0 = mapper(v);
			if (!_v0.$) {
				var newValue = _v0.a;
				return [ newValue ];
			} else {
				return [  ];
			}
		}, array);
};
var $gren_lang$core$Array$mapAndKeepJust = F2($gren_lang$core$Array$mapAndKeepJust$);
var $gren_lang$core$String$toInt = _String_toInt;
var $gren_lang$compiler_common$SemanticVersion$fromString = function(str) {
	var parts = A2($gren_lang$core$Array$keepIf, function(num) {
			return num >= 0;
		}, $gren_lang$core$Array$mapAndKeepJust$($gren_lang$core$String$toInt, A2($gren_lang$core$String$split, '.', str)));
	if (parts.length === 3) {
		var major = parts[0];
		var minor = parts[1];
		var patch = parts[2];
		return $gren_lang$core$Maybe$Just({ ci: major, ck: minor, cs: patch });
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $gren_lang$compiler_common$SemanticVersion$jsonDecoder = A2($gren_lang$core$Json$Decode$andThen, function(strValue) {
		var _v0 = $gren_lang$compiler_common$SemanticVersion$fromString(strValue);
		if (!_v0.$) {
			var semVer = _v0.a;
			return $gren_lang$core$Json$Decode$succeed(semVer);
		} else {
			return $gren_lang$core$Json$Decode$fail('This is not a valid semver formatted version: ' + strValue);
		}
	}, $gren_lang$core$Json$Decode$string);
var $gren_lang$compiler_node$Compiler$Outline$appDependenciesDecoder = A3($gren_lang$core$Json$Decode$map2, F2(function(direct, indirect) {
			return { c3: direct, dl: indirect };
		}), A2($gren_lang$core$Json$Decode$field, 'direct', $gren_lang$core$Json$Decode$dict($gren_lang$compiler_node$Compiler$Outline$constraintDecoder($gren_lang$compiler_common$SemanticVersion$jsonDecoder))), A2($gren_lang$core$Json$Decode$field, 'indirect', $gren_lang$core$Json$Decode$dict($gren_lang$compiler_node$Compiler$Outline$constraintDecoder($gren_lang$compiler_common$SemanticVersion$jsonDecoder))));
var $gren_lang$compiler_common$Compiler$Platform$Browser = 1;
var $gren_lang$compiler_common$Compiler$Platform$Common = 2;
var $gren_lang$compiler_common$Compiler$Platform$Node = 0;
var $gren_lang$core$String$toLower = _String_toLower;
var $gren_lang$compiler_common$Compiler$Platform$jsonDecoder = A2($gren_lang$core$Json$Decode$andThen, function(value) {
		var _v0 = $gren_lang$core$String$toLower(value);
		switch (_v0) {
			case 'common':
				return $gren_lang$core$Json$Decode$succeed(2);
			case 'browser':
				return $gren_lang$core$Json$Decode$succeed(1);
			case 'node':
				return $gren_lang$core$Json$Decode$succeed(0);
			default:
				return $gren_lang$core$Json$Decode$fail(value + ' is not a valid platform value');
		}
	}, $gren_lang$core$Json$Decode$string);
var $gren_lang$node$FileSystem$Path$toPosixString = _FilePath_toPosix;
var $gren_lang$compiler_node$Compiler$Outline$srcDirDecoder = A2($gren_lang$core$Json$Decode$andThen, function(path) {
		return (path.gC === '') ? $gren_lang$core$Json$Decode$succeed(path) : $gren_lang$core$Json$Decode$fail('Path needs to be relative, not absolute: ' + $gren_lang$node$FileSystem$Path$toPosixString(path));
	}, A2($gren_lang$core$Json$Decode$map, $gren_lang$node$FileSystem$Path$fromPosixString, $gren_lang$core$Json$Decode$string));
var $gren_lang$compiler_node$Compiler$Outline$appDecoder = A5($gren_lang$core$Json$Decode$map4, F4(function(platform, srcDirs, grenVersion, deps) {
			return { eY: deps, bD: grenVersion, gk: platform, cD: srcDirs };
		}), A2($gren_lang$core$Json$Decode$field, 'platform', $gren_lang$compiler_common$Compiler$Platform$jsonDecoder), A2($gren_lang$core$Json$Decode$field, 'source-directories', $gren_lang$core$Json$Decode$array($gren_lang$compiler_node$Compiler$Outline$srcDirDecoder)), A2($gren_lang$core$Json$Decode$field, 'gren-version', $gren_lang$compiler_common$SemanticVersion$jsonDecoder), A2($gren_lang$core$Json$Decode$field, 'dependencies', $gren_lang$compiler_node$Compiler$Outline$appDependenciesDecoder));
var $gren_lang$compiler_node$Compiler$Outline$ExposedArray = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_node$Compiler$Outline$ExposedDict = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$ModuleName$ModuleName = $gren_lang$core$Basics$identity;
var $gren_lang$core$Array$findFirst = _Array_findFirst;
var $gren_lang$core$Array$all$ = function(fn, array) {
	var _v0 = A2($gren_lang$core$Array$findFirst, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$not, fn), array);
	if (!_v0.$) {
		return false;
	} else {
		return true;
	}
};
var $gren_lang$core$Array$all = F2($gren_lang$core$Array$all$);
var $gren_lang$compiler_common$Compiler$ModuleName$fromString = function(str) {
	var sections = A2($gren_lang$core$String$split, '.', str);
	var sectionTest = function(section) {
		var _v0 = $gren_lang$core$String$popFirst(section);
		if (!_v0.$) {
			var _v1 = _v0.a;
			var first = _v1.fk;
			var rest = _v1.gz;
			return $gren_lang$core$Char$isUpper(first) && $gren_lang$core$String$all$($gren_lang$core$Char$isAlphaNum, rest);
		} else {
			return false;
		}
	};
	return $gren_lang$core$Array$all$(sectionTest, sections) ? $gren_lang$core$Maybe$Just(str) : $gren_lang$core$Maybe$Nothing;
};
var $gren_lang$compiler_common$Compiler$ModuleName$jsonDecoder = A2($gren_lang$core$Json$Decode$andThen, function(str) {
		var _v0 = $gren_lang$compiler_common$Compiler$ModuleName$fromString(str);
		if (!_v0.$) {
			var moduleName = _v0.a;
			return $gren_lang$core$Json$Decode$succeed(moduleName);
		} else {
			return $gren_lang$core$Json$Decode$fail('Not a valid module name: ' + str);
		}
	}, $gren_lang$core$Json$Decode$string);
var $gren_lang$compiler_node$Compiler$Outline$exposedModulesDecoder = $gren_lang$core$Json$Decode$oneOf([ A2($gren_lang$core$Json$Decode$map, $gren_lang$compiler_node$Compiler$Outline$ExposedArray, $gren_lang$core$Json$Decode$array($gren_lang$compiler_common$Compiler$ModuleName$jsonDecoder)), A2($gren_lang$core$Json$Decode$map, $gren_lang$compiler_node$Compiler$Outline$ExposedDict, $gren_lang$core$Json$Decode$dict($gren_lang$core$Json$Decode$array($gren_lang$compiler_common$Compiler$ModuleName$jsonDecoder))) ]);
var $gren_lang$compiler_common$Compiler$License$License = $gren_lang$core$Basics$identity;
var $gren_lang$compiler_common$Compiler$License$osiApprovedSpdxLicenses = $gren_lang$core$Dict$set$('ZPL-2.0', 'Zope Public License 2.0', $gren_lang$core$Dict$set$('Zlib', 'zlib License', $gren_lang$core$Dict$set$('Xnet', 'X.Net License', $gren_lang$core$Dict$set$('Watcom-1.0', 'Sybase Open Watcom Public License 1.0', $gren_lang$core$Dict$set$('W3C', 'W3C Software Notice and License (2002-12-31)', $gren_lang$core$Dict$set$('VSL-1.0', 'Vovida Software License v1.0', $gren_lang$core$Dict$set$('UPL-1.0', 'Universal Permissive License v1.0', $gren_lang$core$Dict$set$('SPL-1.0', 'Sun Public License v1.0', $gren_lang$core$Dict$set$('Sleepycat', 'Sleepycat License', $gren_lang$core$Dict$set$('SISSL', 'Sun Industry Standards Source License v1.1', $gren_lang$core$Dict$set$('SimPL-2.0', 'Simple Public License 2.0', $gren_lang$core$Dict$set$('RSCPL', 'Ricoh Source Code Public License', $gren_lang$core$Dict$set$('RPSL-1.0', 'RealNetworks Public Source License v1.0', $gren_lang$core$Dict$set$('RPL-1.5', 'Reciprocal Public License 1.5', $gren_lang$core$Dict$set$('RPL-1.1', 'Reciprocal Public License 1.1', $gren_lang$core$Dict$set$('QPL-1.0', 'Q Public License 1.0', $gren_lang$core$Dict$set$('Python-2.0', 'Python License 2.0', $gren_lang$core$Dict$set$('PostgreSQL', 'PostgreSQL License', $gren_lang$core$Dict$set$('PHP-3.0', 'PHP License v3.0', $gren_lang$core$Dict$set$('OSL-3.0', 'Open Software License 3.0', $gren_lang$core$Dict$set$('OSL-2.1', 'Open Software License 2.1', $gren_lang$core$Dict$set$('OSL-2.0', 'Open Software License 2.0', $gren_lang$core$Dict$set$('OSL-1.0', 'Open Software License 1.0', $gren_lang$core$Dict$set$('OSET-PL-2.1', 'OSET Public License version 2.1', $gren_lang$core$Dict$set$('OGTSL', 'Open Group Test Suite License', $gren_lang$core$Dict$set$('OFL-1.1', 'SIL Open Font License 1.1', $gren_lang$core$Dict$set$('OCLC-2.0', 'OCLC Research Public License 2.0', $gren_lang$core$Dict$set$('NTP', 'NTP License', $gren_lang$core$Dict$set$('NPOSL-3.0', 'Non-Profit Open Software License 3.0', $gren_lang$core$Dict$set$('Nokia', 'Nokia Open Source License', $gren_lang$core$Dict$set$('NGPL', 'Nethack General Public License', $gren_lang$core$Dict$set$('NCSA', 'University of Illinois/NCSA Open Source License', $gren_lang$core$Dict$set$('Naumen', 'Naumen Public License', $gren_lang$core$Dict$set$('NASA-1.3', 'NASA Open Source Agreement 1.3', $gren_lang$core$Dict$set$('Multics', 'Multics License', $gren_lang$core$Dict$set$('MS-RL', 'Microsoft Reciprocal License', $gren_lang$core$Dict$set$('MS-PL', 'Microsoft Public License', $gren_lang$core$Dict$set$('MPL-2.0-no-copyleft-exception', 'Mozilla Public License 2.0 (no copyleft exception)', $gren_lang$core$Dict$set$('MPL-2.0', 'Mozilla Public License 2.0', $gren_lang$core$Dict$set$('MPL-1.1', 'Mozilla Public License 1.1', $gren_lang$core$Dict$set$('MPL-1.0', 'Mozilla Public License 1.0', $gren_lang$core$Dict$set$('Motosoto', 'Motosoto License', $gren_lang$core$Dict$set$('MIT', 'MIT License', $gren_lang$core$Dict$set$('MirOS', 'MirOS Licence', $gren_lang$core$Dict$set$('LPPL-1.3c', 'LaTeX Project Public License v1.3c', $gren_lang$core$Dict$set$('LPL-1.02', 'Lucent Public License v1.02', $gren_lang$core$Dict$set$('LPL-1.0', 'Lucent Public License Version 1.0', $gren_lang$core$Dict$set$('LiLiQ-Rplus-1.1', 'Licence Libre du Québec – Réciprocité forte version 1.1', $gren_lang$core$Dict$set$('LiLiQ-R-1.1', 'Licence Libre du Québec – Réciprocité version 1.1', $gren_lang$core$Dict$set$('LiLiQ-P-1.1', 'Licence Libre du Québec – Permissive version 1.1', $gren_lang$core$Dict$set$('LGPL-3.0', 'GNU Lesser General Public License v3.0 only', $gren_lang$core$Dict$set$('LGPL-2.1', 'GNU Lesser General Public License v2.1 only', $gren_lang$core$Dict$set$('LGPL-2.0', 'GNU Library General Public License v2 only', $gren_lang$core$Dict$set$('ISC', 'ISC License', $gren_lang$core$Dict$set$('IPL-1.0', 'IBM Public License v1.0', $gren_lang$core$Dict$set$('IPA', 'IPA Font License', $gren_lang$core$Dict$set$('Intel', 'Intel Open Source License', $gren_lang$core$Dict$set$('HPND', 'Historic Permission Notice and Disclaimer', $gren_lang$core$Dict$set$('GPL-3.0', 'GNU General Public License v3.0 only', $gren_lang$core$Dict$set$('GPL-2.0', 'GNU General Public License v2.0 only', $gren_lang$core$Dict$set$('Frameworx-1.0', 'Frameworx Open License 1.0', $gren_lang$core$Dict$set$('Fair', 'Fair License', $gren_lang$core$Dict$set$('EUPL-1.1', 'European Union Public License 1.1', $gren_lang$core$Dict$set$('EUDatagrid', 'EU DataGrid Software License', $gren_lang$core$Dict$set$('EPL-1.0', 'Eclipse Public License 1.0', $gren_lang$core$Dict$set$('Entessa', 'Entessa Public License v1.0', $gren_lang$core$Dict$set$('EFL-2.0', 'Eiffel Forum License v2.0', $gren_lang$core$Dict$set$('EFL-1.0', 'Eiffel Forum License v1.0', $gren_lang$core$Dict$set$('ECL-2.0', 'Educational Community License v2.0', $gren_lang$core$Dict$set$('ECL-1.0', 'Educational Community License v1.0', $gren_lang$core$Dict$set$('CUA-OPL-1.0', 'CUA Office Public License v1.0', $gren_lang$core$Dict$set$('CPL-1.0', 'Common Public License 1.0', $gren_lang$core$Dict$set$('CPAL-1.0', 'Common Public Attribution License 1.0', $gren_lang$core$Dict$set$('CNRI-Python', 'CNRI Python License', $gren_lang$core$Dict$set$('CECILL-2.1', 'CeCILL Free Software License Agreement v2.1', $gren_lang$core$Dict$set$('CDDL-1.0', 'Common Development and Distribution License 1.0', $gren_lang$core$Dict$set$('CATOSL-1.1', 'Computer Associates Trusted Open Source License 1.1', $gren_lang$core$Dict$set$('BSL-1.0', 'Boost Software License 1.0', $gren_lang$core$Dict$set$('BSD-3-Clause', 'BSD 3-clause \"New\" or \"Revised\" License', $gren_lang$core$Dict$set$('BSD-2-Clause', 'BSD 2-clause \"Simplified\" License', $gren_lang$core$Dict$set$('Artistic-2.0', 'Artistic License 2.0', $gren_lang$core$Dict$set$('Artistic-1.0-Perl', 'Artistic License 1.0 (Perl)', $gren_lang$core$Dict$set$('Artistic-1.0-cl8', 'Artistic License 1.0 w/clause 8', $gren_lang$core$Dict$set$('Artistic-1.0', 'Artistic License 1.0', $gren_lang$core$Dict$set$('APSL-2.0', 'Apple Public Source License 2.0', $gren_lang$core$Dict$set$('APSL-1.2', 'Apple Public Source License 1.2', $gren_lang$core$Dict$set$('APSL-1.1', 'Apple Public Source License 1.1', $gren_lang$core$Dict$set$('APSL-1.0', 'Apple Public Source License 1.0', $gren_lang$core$Dict$set$('APL-1.0', 'Adaptive Public License 1.0', $gren_lang$core$Dict$set$('Apache-2.0', 'Apache License 2.0', $gren_lang$core$Dict$set$('Apache-1.1', 'Apache License 1.1', $gren_lang$core$Dict$set$('AGPL-3.0', 'GNU Affero General Public License v3.0', $gren_lang$core$Dict$set$('AFL-3.0', 'Academic Free License v3.0', $gren_lang$core$Dict$set$('AFL-2.1', 'Academic Free License v2.1', $gren_lang$core$Dict$set$('AFL-2.0', 'Academic Free License v2.0', $gren_lang$core$Dict$set$('AFL-1.2', 'Academic Free License v1.2', $gren_lang$core$Dict$set$('AFL-1.1', 'Academic Free License v1.1', $gren_lang$core$Dict$set$('AAL', 'Attribution Assurance License', $gren_lang$core$Dict$set$('0BSD', 'BSD Zero Clause License', $gren_lang$core$Dict$empty)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
var $gren_lang$compiler_common$Compiler$License$decodeHelper = function(givenCode) {
	return $gren_lang$core$Dict$member$(givenCode, $gren_lang$compiler_common$Compiler$License$osiApprovedSpdxLicenses) ? $gren_lang$core$Json$Decode$succeed(givenCode) : $gren_lang$core$Json$Decode$fail('Invalid license name: ' + givenCode);
};
var $gren_lang$compiler_common$Compiler$License$jsonDecoder = A2($gren_lang$core$Json$Decode$andThen, $gren_lang$compiler_common$Compiler$License$decodeHelper, $gren_lang$core$Json$Decode$string);
var $gren_lang$compiler_common$Compiler$PackageName$PackageName = $gren_lang$core$Basics$identity;
var $gren_lang$core$String$contains = _String_contains;
var $gren_lang$core$String$endsWith = _String_endsWith;
var $gren_lang$compiler_common$Compiler$PackageName$fromString = function(str) {
	var _v0 = A2($gren_lang$core$String$split, '/', str);
	if (_v0.length === 2) {
		var authorStr = _v0[0];
		var nameStr = _v0[1];
		var validName = (!$gren_lang$core$String$isEmpty(nameStr)) && ((!A2($gren_lang$core$String$startsWith, '-', nameStr)) && ((!A2($gren_lang$core$String$endsWith, '-', nameStr)) && ((!A2($gren_lang$core$String$contains, '--', nameStr)) && $gren_lang$core$String$all$(function(c) {
				return $gren_lang$core$Char$isDigit(c) || ($gren_lang$core$Char$isLower(c) || (c === '-'));
			}, nameStr))));
		var validAuthor = (!$gren_lang$core$String$isEmpty(authorStr)) && ((!A2($gren_lang$core$String$startsWith, '-', authorStr)) && ((!A2($gren_lang$core$String$endsWith, '-', authorStr)) && ((!A2($gren_lang$core$String$contains, '--', authorStr)) && $gren_lang$core$String$all$(function(c) {
				return (c === '-') || $gren_lang$core$Char$isAlphaNum(c);
			}, authorStr))));
		if (validAuthor && validName) {
			var _v1 = $gren_lang$core$String$popFirst(nameStr);
			if (!_v1.$) {
				var firstChar = _v1.a.fk;
				return $gren_lang$core$Char$isAlpha(firstChar) ? $gren_lang$core$Maybe$Just({ az: authorStr, bK: nameStr }) : $gren_lang$core$Maybe$Nothing;
			} else {
				return $gren_lang$core$Maybe$Nothing;
			}
		} else {
			return $gren_lang$core$Maybe$Nothing;
		}
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $gren_lang$compiler_common$Compiler$PackageName$jsonDecoder = A2($gren_lang$core$Json$Decode$andThen, function(strValue) {
		var _v0 = $gren_lang$compiler_common$Compiler$PackageName$fromString(strValue);
		if (!_v0.$) {
			var packageName = _v0.a;
			return $gren_lang$core$Json$Decode$succeed(packageName);
		} else {
			return $gren_lang$core$Json$Decode$fail('Not a valid package name: ' + strValue);
		}
	}, $gren_lang$core$Json$Decode$string);
var $gren_lang$compiler_common$SemanticVersionRange$SemanticVersionRange = $gren_lang$core$Basics$identity;
var $gren_lang$core$String$pushLast = _String_pushLast;
var $gren_lang$core$String$keepIf$ = function(isGood, str) {
	return A3($gren_lang$core$String$foldl, F2(function(_char, acc) {
				return isGood(_char) ? A2($gren_lang$core$String$pushLast, _char, acc) : acc;
			}), '', str);
};
var $gren_lang$core$String$keepIf = F2($gren_lang$core$String$keepIf$);
var $gren_lang$compiler_common$SemanticVersionRange$fromString = function(str) {
	var _v0 = A2($gren_lang$core$String$split, '<=v<', $gren_lang$core$String$keepIf$(function(_char) {
				return _char !== ' ';
			}, str));
	if (_v0.length === 2) {
		var lowerStr = _v0[0];
		var upperStr = _v0[1];
		var _v1 = { fZ: $gren_lang$compiler_common$SemanticVersion$fromString(lowerStr), f_: $gren_lang$compiler_common$SemanticVersion$fromString(upperStr) };
		if ((!_v1.fZ.$) && (!_v1.f_.$)) {
			var lower = _v1.fZ.a;
			var upper = _v1.f_.a;
			return $gren_lang$core$Maybe$Just({ w: lower, z: upper });
		} else {
			return $gren_lang$core$Maybe$Nothing;
		}
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $gren_lang$compiler_common$SemanticVersionRange$jsonDecoder = A2($gren_lang$core$Json$Decode$andThen, function(strValue) {
		var _v0 = $gren_lang$compiler_common$SemanticVersionRange$fromString(strValue);
		if (!_v0.$) {
			var range = _v0.a;
			return $gren_lang$core$Json$Decode$succeed(range);
		} else {
			return $gren_lang$core$Json$Decode$fail('Not a valid range: ' + strValue);
		}
	}, $gren_lang$core$Json$Decode$string);
var $gren_lang$core$Json$Decode$map8 = _Json_map8;
var $gren_lang$compiler_node$Compiler$Outline$pkgDependenciesDecoder = $gren_lang$core$Json$Decode$dict($gren_lang$compiler_node$Compiler$Outline$constraintDecoder($gren_lang$compiler_common$SemanticVersionRange$jsonDecoder));
var $gren_lang$compiler_node$Compiler$Outline$pkgDecoder = A9($gren_lang$core$Json$Decode$map8, F8(function(platform, name, summary, license, version, exposedModules, grenVersion, dependencies) {
			return { eY: dependencies, db: exposedModules, bD: grenVersion, dv: license, bK: name, gk: platform, gQ: summary, br: version };
		}), A2($gren_lang$core$Json$Decode$field, 'platform', $gren_lang$compiler_common$Compiler$Platform$jsonDecoder), A2($gren_lang$core$Json$Decode$field, 'name', $gren_lang$compiler_common$Compiler$PackageName$jsonDecoder), A2($gren_lang$core$Json$Decode$field, 'summary', $gren_lang$core$Json$Decode$string), A2($gren_lang$core$Json$Decode$field, 'license', $gren_lang$compiler_common$Compiler$License$jsonDecoder), A2($gren_lang$core$Json$Decode$field, 'version', $gren_lang$compiler_common$SemanticVersion$jsonDecoder), A2($gren_lang$core$Json$Decode$field, 'exposed-modules', $gren_lang$compiler_node$Compiler$Outline$exposedModulesDecoder), A2($gren_lang$core$Json$Decode$field, 'gren-version', $gren_lang$compiler_common$SemanticVersionRange$jsonDecoder), A2($gren_lang$core$Json$Decode$field, 'dependencies', $gren_lang$compiler_node$Compiler$Outline$pkgDependenciesDecoder));
var $gren_lang$compiler_node$Compiler$Outline$jsonDecoder = A2($gren_lang$core$Json$Decode$andThen, function(type_) {
		switch (type_) {
			case 'application':
				return A2($gren_lang$core$Json$Decode$map, $gren_lang$compiler_node$Compiler$Outline$App, $gren_lang$compiler_node$Compiler$Outline$appDecoder);
			case 'package':
				return A2($gren_lang$core$Json$Decode$map, $gren_lang$compiler_node$Compiler$Outline$Pkg, $gren_lang$compiler_node$Compiler$Outline$pkgDecoder);
			default:
				return $gren_lang$core$Json$Decode$fail('Unknown gren.json type: ' + type_);
		}
	}, A2($gren_lang$core$Json$Decode$field, 'type', $gren_lang$core$Json$Decode$string));
var $gren_lang$compiler_node$Compiler$Outline$pkgJsonDecoder = A2($gren_lang$core$Json$Decode$andThen, function(outline) {
		if (outline.$ === 1) {
			var pkgOutline = outline.a;
			return $gren_lang$core$Json$Decode$succeed(pkgOutline);
		} else {
			return $gren_lang$core$Json$Decode$fail('Expected package outline, but decoded an application outline.');
		}
	}, $gren_lang$compiler_node$Compiler$Outline$jsonDecoder);
var $gren_lang$core$Result$toMaybe = function(result) {
	if (!result.$) {
		var v = result.a;
		return $gren_lang$core$Maybe$Just(v);
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $lue_bird$gren_extra_checks$GrenCoreDependency$parsed = $gren_lang$core$Result$toMaybe($gren_lang$core$Result$map2$(F2(function(outline, modules) {
				return { dC: modules, T: outline };
			}), A2($gren_lang$core$Json$Decode$decodeString, $gren_lang$compiler_node$Compiler$Outline$pkgJsonDecoder, '{\n    "type": "package",\n    "platform": "common",\n    "name": "gren-lang/core",\n    "summary": "Gren\'s core modules",\n    "license": "BSD-3-Clause",\n    "version": "7.4.0",\n    "exposed-modules": {\n        "Bytes": [\n            "Bytes",\n            "Bytes.Encode",\n            "Bytes.Decode"\n        ],\n        "Collections": [\n            "Array",\n            "Array.Builder",\n            "Dict",\n            "Set"\n        ],\n        "Crypto": [\n            "Crypto"\n        ],\n        "Debug": [\n            "Debug"\n        ],\n        "Effects": [\n            "Platform",\n            "Platform.Cmd",\n            "Platform.Sub",\n            "Process",\n            "Task"\n        ],\n        "Error Handling": [\n            "Maybe",\n            "Result"\n        ],\n        "Json": [\n            "Json.Decode",\n            "Json.Encode"\n        ],\n        "Primitives": [\n            "Basics",\n            "String",\n            "Char",\n            "Bitwise",\n            "Math"\n        ],\n        "Random": [\n            "Random"\n        ],\n        "Streams": [\n            "Stream",\n            "Stream.Log"\n        ],\n        "Strings": [\n            "String.Regex",\n            "String.Parser",\n            "String.Parser.Advanced"\n        ],\n        "Time": [\n            "Time"\n        ]\n    },\n    "gren-version": "0.6.0 <= v < 0.7.0",\n    "dependencies": {}\n}'), $gren_lang$core$Result$map$(function(docsModules) {
				return A2($gren_lang$core$Array$map, function(docsModule) {
						return { ct: docsModule.bK + '.gren', gF: '', gS: { eq: [  ], ez: [  ], e1: $gren_lang$core$Maybe$Just({ c6: $gren_lang$compiler_common$SourcePosition$emptyPos, cE: $gren_lang$compiler_common$SourcePosition$emptyPos, bZ: docsModule.aB }), b3: $gren_lang$compiler_common$Compiler$Ast$Source$NoEffects, ff: $gren_lang$compiler_common$Compiler$Ast$Source$Open, fu: [  ], bK: { c6: $gren_lang$compiler_common$SourcePosition$emptyPos, cE: $gren_lang$compiler_common$SourcePosition$emptyPos, bZ: docsModule.bK }, g0: [  ], g4: [  ] } };
					}, docsModules);
			}, A2($gren_lang$core$Json$Decode$decodeString, $gren_lang$core$Json$Decode$array($lue_bird$gren_extra_checks$GrenCoreDependency$docsModuleJsonDecoder), 'fruits.com'))));
var $gren_lang$core$Array$dropLast$ = function(n, array) {
	return A3($gren_lang$core$Array$slice, 0, $gren_lang$core$Array$length(array) - n, array);
};
var $gren_lang$core$Array$dropLast = F2($gren_lang$core$Array$dropLast$);
var $gren_lang$core$Array$popLast = function(array) {
	var _v0 = $gren_lang$core$Array$last(array);
	if (!_v0.$) {
		var value = _v0.a;
		return $gren_lang$core$Maybe$Just({ fB: $gren_lang$core$Array$dropLast$(1, array), fO: value });
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $lue_bird$gren_extra_checks$ArrayLocalExtra$pushLastJust$ = function(maybeNewLast, list) {
	if (maybeNewLast.$ === 1) {
		return list;
	} else {
		var newLast = maybeNewLast.a;
		return $gren_lang$core$Array$pushLast$(newLast, list);
	}
};
var $lue_bird$gren_extra_checks$ArrayLocalExtra$pushLastJust = F2($lue_bird$gren_extra_checks$ArrayLocalExtra$pushLastJust$);
var $gren_lang$core$Array$Builder$toArray = _Array_fromBuilder;
var $lue_bird$gren_extra_checks$ExtraCheck$create = function(check) {
	var toKnowledges = $lue_bird$gren_extra_checks$ExtraCheck$inspectToToKnowledges(check.fF);
	var knowledgesFoldMapToMaybe = F2(function(elementToKnowledge, knowledges) {
			var _v11 = $gren_lang$core$Array$popLast(knowledges);
			if (_v11.$ === 1) {
				return $gren_lang$core$Maybe$Nothing;
			} else {
				var _v12 = _v11.a;
				var one = _v12.fO;
				var others = _v12.fB;
				return $gren_lang$core$Maybe$Just(A3($gren_lang$core$Array$foldl, F2(function(element, soFar) {
								return A2(check.fM, elementToKnowledge(element), soFar);
							}), elementToKnowledge(one), others));
			}
		});
	var moduleToMaybeKnowledge = function(moduleFile) {
		return $gren_lang$core$Maybe$map$(function(foldedKnowledge) {
				return { ad: foldedKnowledge, ct: moduleFile.ct };
			}, A2(knowledgesFoldMapToMaybe, function(f) {
					return f(moduleFile);
				}, $gren_lang$core$Array$Builder$toArray(toKnowledges.S)));
	};
	var runWithCache = function(cache) {
		return function(project) {
			var moduleKnowledges = $gren_lang$core$Array$Builder$toArray($gren_lang$core$Dict$merge$(F3(function(_v7, _new, soFar) {
							return $lue_bird$gren_extra_checks$ArrayLocalExtra$builderPushLastJust$(_new, soFar);
						}), F4(function(_v8, _new, _v9, soFar) {
							return $lue_bird$gren_extra_checks$ArrayLocalExtra$builderPushLastJust$(_new, soFar);
						}), F3(function(path, knowledgeCache, soFar) {
							return A2($gren_lang$core$Array$Builder$pushLast, { ad: knowledgeCache, ct: path }, soFar);
						}), $lue_bird$gren_extra_checks$DictLocalExtra$fromArrayMap$(function(file) {
							return { fL: file.ct, bZ: moduleToMaybeKnowledge(file) };
						}, project.cP), $lue_bird$gren_extra_checks$ExtraCheck$dictRemoveKeys$(project.dX, cache.cl), $gren_lang$core$Array$Builder$empty(2)));
			var grenJsonKnowledgeAndCache = function () {
				var _v6 = cache.cf;
				if (!_v6.$) {
					var grenJsonKnowledgeCache = _v6.a;
					return $gren_lang$core$Maybe$Just(grenJsonKnowledgeCache);
				} else {
					return A2(knowledgesFoldMapToMaybe, function(f) {
							return f(project.Q);
						}, $gren_lang$core$Array$Builder$toArray(toKnowledges.R));
				}
			}();
			var extraFileToMaybeKnowledge = function(fileInfo) {
				return $gren_lang$core$Maybe$map$(function(foldedKnowledge) {
						return { ad: foldedKnowledge, ct: fileInfo.ct };
					}, A2(knowledgesFoldMapToMaybe, function(f) {
							return f(fileInfo);
						}, $gren_lang$core$Array$Builder$toArray(toKnowledges.P)));
			};
			var extraFilesKnowledges = $gren_lang$core$Array$Builder$toArray($gren_lang$core$Dict$merge$(F3(function(_v3, _new, soFar) {
							return $lue_bird$gren_extra_checks$ArrayLocalExtra$builderPushLastJust$(_new, soFar);
						}), F4(function(_v4, _new, _v5, soFar) {
							return $lue_bird$gren_extra_checks$ArrayLocalExtra$builderPushLastJust$(_new, soFar);
						}), F3(function(path, knowledgeCache, soFar) {
							return A2($gren_lang$core$Array$Builder$pushLast, { ad: knowledgeCache, ct: path }, soFar);
						}), $lue_bird$gren_extra_checks$DictLocalExtra$fromArrayMap$(function(file) {
							return { fL: file.ct, bZ: extraFileToMaybeKnowledge(file) };
						}, project.cO), $lue_bird$gren_extra_checks$ExtraCheck$dictRemoveKeys$(project.dW, cache.b8), $gren_lang$core$Array$Builder$empty(0)));
			var directDependenciesKnowledgeAndCache = function () {
				var _v2 = cache.b1;
				if (!_v2.$) {
					var knowledge = _v2.a;
					return $gren_lang$core$Maybe$Just(knowledge);
				} else {
					var directDependenciesData = $lue_bird$gren_extra_checks$ArrayLocalExtra$pushLastJust$($lue_bird$gren_extra_checks$GrenCoreDependency$parsed, project.aD);
					return A2(knowledgesFoldMapToMaybe, function(f) {
							return f(directDependenciesData);
						}, $gren_lang$core$Array$Builder$toArray(toKnowledges.O));
				}
			}();
			var allKnowledges = $lue_bird$gren_extra_checks$ArrayLocalExtra$pushLastJust$(grenJsonKnowledgeAndCache, $lue_bird$gren_extra_checks$ArrayLocalExtra$pushLastJust$(directDependenciesKnowledgeAndCache, _Utils_ap(A2($gren_lang$core$Array$map, function ($) {
								return $.ad;
							}, moduleKnowledges), A2($gren_lang$core$Array$map, function ($) {
								return $.ad;
							}, extraFilesKnowledges))));
			var _v0 = A2(knowledgesFoldMapToMaybe, $gren_lang$core$Basics$identity, allKnowledges);
			if (_v0.$ === 1) {
				return { b6: $gren_lang$core$Dict$empty, dJ: runWithCache($lue_bird$gren_extra_checks$ExtraCheck$knowledgeCacheEmpty) };
			} else {
				var completeKnowledge = _v0.a;
				return { b6: $gren_lang$core$Dict$map$(F2(function(_v1, builder) {
							return $gren_lang$core$Array$Builder$toArray(builder);
						}), A3($gren_lang$core$Array$foldl, F2(function(error, soFar) {
								return $gren_lang$core$Dict$update$(error.ct, function(errorsForPathSoFar) {
										return $gren_lang$core$Maybe$Just(A2($gren_lang$core$Array$Builder$pushLast, { eZ: error.eZ, df: $lue_bird$gren_extra_checks$ExtraCheck$fixToFileEditsByPath(error.fl), f$: error.f$, bO: error.bO }, $gren_lang$core$Maybe$withDefault$($gren_lang$core$Array$Builder$empty(1), errorsForPathSoFar)));
									}, soFar);
							}), $gren_lang$core$Dict$empty, check.gy(completeKnowledge))), dJ: runWithCache({ b1: directDependenciesKnowledgeAndCache, b8: $lue_bird$gren_extra_checks$DictLocalExtra$fromArrayMap$(function(extraFileKnowledge) {
							return { fL: extraFileKnowledge.ct, bZ: extraFileKnowledge.ad };
						}, extraFilesKnowledges), cf: grenJsonKnowledgeAndCache, cl: $lue_bird$gren_extra_checks$DictLocalExtra$fromArrayMap$(function(moduleKnowledge) {
							return { fL: moduleKnowledge.ct, bZ: moduleKnowledge.ad };
						}, moduleKnowledges) }) };
			}
		};
	};
	return { cg: function(_v10) {
		return false;
	}, bQ: runWithCache($lue_bird$gren_extra_checks$ExtraCheck$knowledgeCacheEmpty) };
};
var $lue_bird$gren_extra_checks$ExtraCheck$InspectModule = function (a) {
	return { $: 3, a: a };
};
var $lue_bird$gren_extra_checks$ExtraCheck$inspectModule = function(moduleDataToKnowledge) {
	return $lue_bird$gren_extra_checks$ExtraCheck$InspectModule(moduleDataToKnowledge);
};
var $author$project$StringSpellsCompanyNameCorrectly$knowledgeMerge$ = function(a, b) {
	return { bp: _Utils_ap(a.bp, b.bp) };
};
var $author$project$StringSpellsCompanyNameCorrectly$knowledgeMerge = F2($author$project$StringSpellsCompanyNameCorrectly$knowledgeMerge$);
var $gren_lang$core$Array$Builder$append = _Array_appendToBuilder;
var $lue_bird$gren_extra_checks$ExtraCheck$expressionImmediateSubsFold$ = function(reduce, initialState, parentExpression) {
	switch (parentExpression.$) {
		case 2:
			return initialState;
		case 0:
			return initialState;
		case 1:
			return initialState;
		case 3:
			return initialState;
		case 4:
			return initialState;
		case 16:
			return initialState;
		case 8:
			return initialState;
		case 18:
			var inParens = parentExpression.a;
			return A2(reduce, inParens, initialState);
		case 9:
			var inNegation = parentExpression.a;
			return A2(reduce, inNegation, initialState);
		case 11:
			var _v1 = parentExpression.a;
			var result = _v1.eC;
			return A2(reduce, result, initialState);
		case 17:
			var _v2 = parentExpression.a;
			var record = _v2.dc;
			return A2(reduce, record, initialState);
		case 5:
			var elements = parentExpression.a;
			return A3($gren_lang$core$Array$foldl, reduce, initialState, elements);
		case 6:
			var fields = parentExpression.a;
			return A3($gren_lang$core$Array$foldl, F2(function(field, soFar) {
						return A2(reduce, field.bZ, soFar);
					}), initialState, fields);
		case 7:
			var recordUpdate = parentExpression.a;
			return A3($gren_lang$core$Array$foldl, F2(function(field, soFar) {
						return A2(reduce, field.bZ, soFar);
					}), A2(reduce, recordUpdate.gv, initialState), recordUpdate.f6);
		case 10:
			var _v3 = parentExpression.a;
			var left = _v3.du;
			var right = _v3.d0;
			return A2(reduce, right, A2(reduce, left, initialState));
		case 14:
			var ifThenElse = parentExpression.a;
			return A2(reduce, ifThenElse.e3, A3($gren_lang$core$Array$foldl, F2(function(ifThen, soFar) {
							return A2(reduce, ifThen.eC, A2(reduce, ifThen.gU, soFar));
						}), initialState, ifThenElse.cV));
		case 12:
			var call = parentExpression.a;
			return A3($gren_lang$core$Array$foldl, reduce, A2(reduce, call.fn, initialState), call.cR);
		case 13:
			var letIn = parentExpression.a;
			return A2(reduce, letIn.eC, A3($gren_lang$core$Array$foldl, F2(function(def, soFar) {
							return A2(reduce, function () {
									var _v4 = def.bZ;
									if (_v4.$ === 1) {
										var destruct = _v4.a;
										return destruct.eC;
									} else {
										var define = _v4.a;
										return define.eC;
									}
								}(), soFar);
						}), initialState, letIn.eX));
		default:
			var whenIs = parentExpression.a;
			return A3($gren_lang$core$Array$foldl, F2(function(_case, soFar) {
						return A2(reduce, _case.eC, soFar);
					}), A2(reduce, whenIs.dc, initialState), whenIs.cV);
	}
};
var $lue_bird$gren_extra_checks$ExtraCheck$expressionImmediateSubsFold = F3($lue_bird$gren_extra_checks$ExtraCheck$expressionImmediateSubsFold$);
var $author$project$StringSpellsCompanyNameCorrectly$locationRelativeTo$ = function(baseStart, offsetLocation) {
	var _v0 = offsetLocation.bl;
	if (_v0 === 1) {
		return { aZ: baseStart.aZ + offsetLocation.aZ, bl: baseStart.bl };
	} else {
		var offsetRowAtLeast2 = _v0;
		return { aZ: offsetLocation.aZ, bl: baseStart.bl + (offsetRowAtLeast2 - 1) };
	}
};
var $author$project$StringSpellsCompanyNameCorrectly$locationRelativeTo = F2($author$project$StringSpellsCompanyNameCorrectly$locationRelativeTo$);
var $author$project$StringSpellsCompanyNameCorrectly$rangeRelativeTo$ = function(baseStart, offsetRange) {
	return { c6: $author$project$StringSpellsCompanyNameCorrectly$locationRelativeTo$(baseStart, offsetRange.c6), cE: $author$project$StringSpellsCompanyNameCorrectly$locationRelativeTo$(baseStart, offsetRange.cE) };
};
var $author$project$StringSpellsCompanyNameCorrectly$rangeRelativeTo = F2($author$project$StringSpellsCompanyNameCorrectly$rangeRelativeTo$);
var $gren_lang$core$String$toArray = function(string) {
	return A3($gren_lang$core$String$foldl, $gren_lang$core$Array$pushLast, [  ], string);
};
var $lue_bird$gren_extra_checks$Unicode$length = function(string) {
	return $gren_lang$core$Array$length($gren_lang$core$String$toArray(string));
};
var $gren_lang$core$String$lines = _String_lines;
var $gren_lang$core$String$fromArray = _String_fromArray;
var $gren_lang$core$Array$takeFirst$ = function(n, array) {
	return A3($gren_lang$core$Array$slice, 0, n, array);
};
var $gren_lang$core$Array$takeFirst = F2($gren_lang$core$Array$takeFirst$);
var $lue_bird$gren_extra_checks$Unicode$takeFirst$ = function(n, string) {
	return $gren_lang$core$String$fromArray($gren_lang$core$Array$takeFirst$(n, $gren_lang$core$String$toArray(string)));
};
var $lue_bird$gren_extra_checks$Unicode$takeFirst = F2($lue_bird$gren_extra_checks$Unicode$takeFirst$);
var $lue_bird$gren_extra_checks$ExtraCheck$sourceOffsetToLocationIn$ = function(source, sourceOffset) {
	var lines = $gren_lang$core$String$lines($lue_bird$gren_extra_checks$Unicode$takeFirst$(sourceOffset, source));
	return { aZ: function () {
		var _v0 = $gren_lang$core$Array$last(lines);
		if (_v0.$ === 1) {
			return 1;
		} else {
			var lastLine = _v0.a;
			return $lue_bird$gren_extra_checks$Unicode$length(lastLine) + 1;
		}
	}(), bl: $gren_lang$core$Array$length(lines) };
};
var $lue_bird$gren_extra_checks$ExtraCheck$sourceOffsetToLocationIn = F2($lue_bird$gren_extra_checks$ExtraCheck$sourceOffsetToLocationIn$);
var $lue_bird$gren_extra_checks$ExtraCheck$sourceRegionsOf$ = function(sectionToFind, source) {
	var sectionToFindLength = $lue_bird$gren_extra_checks$Unicode$length(sectionToFind);
	return A2($gren_lang$core$Array$map, function(startOffset) {
			return { c6: $lue_bird$gren_extra_checks$ExtraCheck$sourceOffsetToLocationIn$(source, startOffset + sectionToFindLength), cE: $lue_bird$gren_extra_checks$ExtraCheck$sourceOffsetToLocationIn$(source, startOffset) };
		}, A2($gren_lang$core$String$indices, sectionToFind, source));
};
var $lue_bird$gren_extra_checks$ExtraCheck$sourceRegionsOf = F2($lue_bird$gren_extra_checks$ExtraCheck$sourceRegionsOf$);
var $author$project$StringSpellsCompanyNameCorrectly$expressionToTyposInStringsInto$ = function(resultRegionsSoFar, expression) {
	var _v0 = expression.bZ;
	if (_v0.$ === 1) {
		var string = _v0.a;
		return A2($gren_lang$core$Array$Builder$append, A2($gren_lang$core$Array$map, $author$project$StringSpellsCompanyNameCorrectly$rangeRelativeTo(expression.cE), $lue_bird$gren_extra_checks$ExtraCheck$sourceRegionsOf$('frits.com', string)), resultRegionsSoFar);
	} else {
		return $lue_bird$gren_extra_checks$ExtraCheck$expressionImmediateSubsFold$(F2(function(sub, withSubsSoFar) {
					return $author$project$StringSpellsCompanyNameCorrectly$expressionToTyposInStringsInto$(withSubsSoFar, sub);
				}), resultRegionsSoFar, expression.bZ);
	}
};
var $author$project$StringSpellsCompanyNameCorrectly$expressionToTyposInStringsInto = F2($author$project$StringSpellsCompanyNameCorrectly$expressionToTyposInStringsInto$);
var $author$project$StringSpellsCompanyNameCorrectly$moduleDataToKnowledge = function(moduleData) {
	return { bp: A2($gren_lang$core$Array$map, function(typoRegion) {
			return { cm: moduleData.ct, bO: typoRegion };
		}, A2($gren_lang$core$Array$mapAndFlatten, function(functionDeclaration) {
				return $gren_lang$core$Array$Builder$toArray($author$project$StringSpellsCompanyNameCorrectly$expressionToTyposInStringsInto$($gren_lang$core$Array$Builder$empty(0), functionDeclaration.bZ.bZ.eC));
			}, moduleData.gS.g4)) };
};
var $lue_bird$gren_extra_checks$ExtraCheck$SourceRangeReplacement = $gren_lang$core$Basics$identity;
var $lue_bird$gren_extra_checks$ExtraCheck$replaceRegion$ = function(range, replacement) {
	return { bO: range, dY: replacement };
};
var $lue_bird$gren_extra_checks$ExtraCheck$replaceRegion = F2($lue_bird$gren_extra_checks$ExtraCheck$replaceRegion$);
var $author$project$StringSpellsCompanyNameCorrectly$report = function(knowledge) {
	return A2($gren_lang$core$Array$map, function(stringWithTypos) {
			return { eZ: [ 'The typo of using frits.com instead of fruits.com has been made and noticed by users too many times. Our company is `fruits.com`, not `frits.com`.' ], fl: [ { e2: [ $lue_bird$gren_extra_checks$ExtraCheck$replaceRegion$(stringWithTypos.bO, 'fruits.com') ], ct: stringWithTypos.cm } ], f$: 'misspelled fruits.com', ct: stringWithTypos.cm, bO: stringWithTypos.bO };
		}, knowledge.bp);
};
var $author$project$StringSpellsCompanyNameCorrectly$check = $lue_bird$gren_extra_checks$ExtraCheck$create({ fF: [ $lue_bird$gren_extra_checks$ExtraCheck$inspectModule($author$project$StringSpellsCompanyNameCorrectly$moduleDataToKnowledge) ], fM: $author$project$StringSpellsCompanyNameCorrectly$knowledgeMerge, gy: $author$project$StringSpellsCompanyNameCorrectly$report });
var $gren_lang$node$Node$InitDone = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$node$Node$Uninitialized = { $: 0 };


// TASKS

function _Scheduler_succeed(value) {
  return {
    $: 0,
    a: value,
  };
}

function _Scheduler_fail(error) {
  return {
    $: 1,
    a: error,
  };
}

function _Scheduler_binding(callback) {
  return {
    $: 2,
    b: callback,
    c: null,
  };
}

var _Scheduler_andThen = F2(function (callback, task) {
  return {
    $: 3,
    b: callback,
    d: task,
  };
});

var _Scheduler_onError = F2(function (callback, task) {
  return {
    $: 4,
    b: callback,
    d: task,
  };
});

function _Scheduler_receive(callback) {
  return {
    $: 5,
    b: callback,
  };
}

function _Scheduler_concurrent(tasks) {
  if (tasks.length === 0) return _Scheduler_succeed([]);

  return _Scheduler_binding(function (callback) {
    let count = 0;
    let results = new Array(tasks.length);
    let procs;

    function killAll() {
      procs.forEach(_Scheduler_rawKill);
    }

    function onError(e) {
      killAll();
      callback(_Scheduler_fail(e));
    }

    procs = tasks.map((task, i) => {
      function onSuccess(res) {
        results[i] = res;
        count++;
        if (count === tasks.length) {
          callback(_Scheduler_succeed(results));
        }
      }
      const success = A2(_Scheduler_andThen, onSuccess, task);
      const handled = A2(_Scheduler_onError, onError, success);
      return _Scheduler_rawSpawn(handled);
    });

    return killAll;
  });
}

var _Scheduler_map2 = F3(function (callback, taskA, taskB) {
  function combine([resA, resB]) {
    return _Scheduler_succeed(A2(callback, resA, resB));
  }
  return A2(_Scheduler_andThen, combine, _Scheduler_concurrent([taskA, taskB]));
});

// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task) {
  var proc = {
    $: 0,
    e: _Scheduler_guid++,
    f: task,
    g: null,
    h: [],
  };

  _Scheduler_enqueue(proc);

  return proc;
}

function _Scheduler_spawn(task) {
  return _Scheduler_binding(function (callback) {
    callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
  });
}

function _Scheduler_rawSend(proc, msg) {
  proc.h.push(msg);
  _Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function (proc, msg) {
  return _Scheduler_binding(function (callback) {
    _Scheduler_rawSend(proc, msg);
    callback(_Scheduler_succeed({}));
  });
});

function _Scheduler_kill(proc) {
  return _Scheduler_binding(function (callback) {
    _Scheduler_rawKill(proc);

    callback(_Scheduler_succeed({}));
  });
}

function _Scheduler_rawKill(proc) {
  var task = proc.f;
  if (task && task.$ === 2 && task.c) {
    task.c();
  }

  proc.f = null;
}

/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/

var _Scheduler_working = false;
var _Scheduler_queue = [];

function _Scheduler_enqueue(proc) {
  _Scheduler_queue.push(proc);
  if (_Scheduler_working) {
    return;
  }
  _Scheduler_working = true;
  // Make sure tasks created during _step are run
  while (_Scheduler_queue.length > 0) {
    const activeProcs = _Scheduler_queue;
    _Scheduler_queue = [];

    for (const proc of activeProcs) {
      _Scheduler_step(proc);
    }
  }
  _Scheduler_working = false;
}

function _Scheduler_step(proc) {
  while (proc.f) {
    var rootTag = proc.f.$;
    if (rootTag === 0 || rootTag === 1) {
      while (proc.g && proc.g.$ !== rootTag) {
        proc.g = proc.g.i;
      }
      if (!proc.g) {
        return;
      }
      proc.f = proc.g.b(proc.f.a);
      proc.g = proc.g.i;
    } else if (rootTag === 2) {
      proc.f.c = proc.f.b(function (newRoot) {
        proc.f = newRoot;
        _Scheduler_enqueue(proc);
      });
      return;
    } else if (rootTag === 5) {
      if (proc.h.length === 0) {
        return;
      }
      proc.f = proc.f.b(proc.h.shift());
    } // if (rootTag === 3 || rootTag === 4)
    else {
      proc.g = {
        $: rootTag === 3 ? 0 : 1,
        b: proc.f.b,
        i: proc.g,
      };
      proc.f = proc.f.d;
    }
  }
}
var $gren_lang$core$Task$andThen = _Scheduler_andThen;


var stream = require("node:stream");
var process = require("node:process");

var _Node_log = F2(function (text, args) {
  // This function is used for simple applications where the main function returns String
  // NOTE: this function needs _Platform_export available to work
  console.log(text);
  return {};
});

var _Node_init = _Scheduler_binding(function (callback) {
  if (process.stdin.unref) {
    // Don't block program shutdown if this is the only
    // stream being listened to
    process.stdin.unref();
  }

  const stdinStream = stream.Readable.toWeb(process.stdin);
  const stdinProxy = !process.stdin.ref
    ? stdinStream
    : _Node_makeProxyOfStdin(stdinStream);

  callback(
    _Scheduler_succeed({
      es: _FilePath_fromString(
        typeof module !== "undefined" ? module.filename : process.execPath,
      ),
      et: process.arch,
      cR: process.argv,
      gk: process.platform,
      ed: stream.Writable.toWeb(process.stderr),
      gL: stdinProxy,
      ee: stream.Writable.toWeb(process.stdout),
    }),
  );
});

function _Node_makeProxyOfStdin(stdinStream) {
  return new Proxy(stdinStream, {
    get(target, prop, receiver) {
      if (prop === "getReader") {
        // Make sure to keep program alive if we're waiting for
        // user input
        process.stdin.ref();

        const reader = Reflect.get(target, prop, receiver);
        return _Node_makeProxyOfReader(reader);
      }

      if (prop === "pipeThrough") {
        process.stdin.ref();
      }

      return Reflect.get(target, prop, receiver);
    },
  });
}

function _Node_makeProxyOfReader(reader) {
  return new Proxy(reader, {
    get(target, prop, receiver) {
      if (prop === "releaseLock") {
        process.stdin.unref();
      }

      return Reflect.get(target, prop, receiver);
    },
  });
}

var _Node_getPlatform = _Scheduler_binding(function (callback) {
  callback(_Scheduler_succeed(process.platform));
});

var _Node_getCpuArchitecture = _Scheduler_binding(function (callback) {
  callback(_Scheduler_succeed(process.arch));
});

var _Node_getEnvironmentVariables = _Scheduler_binding(function (callback) {
  callback(_Scheduler_succeed(_Node_objToDict(process.env)));
});

var _Node_exitWithCode = function (code) {
  return A2(
    $gren_lang$core$Task$perform,
    $gren_lang$core$Basics$never,
    _Scheduler_binding(function (callback) {
      process.exit(code);
    }),
  );
};

var _Node_setExitCode = function (code) {
  return _Scheduler_binding(function (callback) {
    process.exitCode = code;
    callback(_Scheduler_succeed({}));
  });
};

// Subs

var _Node_attachEmptyEventLoopListener = function (selfMsg) {
  return _Scheduler_binding(function (_callback) {
    var listener = function () {
      _Scheduler_rawSpawn(selfMsg);
    };

    process.on("beforeExit", listener);

    return function () {
      process.off("beforeExit", listener);
    };
  });
};

var _Node_attachSignalInterruptListener = function (selfMsg) {
  return _Scheduler_binding(function (_callback) {
    var listener = function () {
      _Scheduler_rawSpawn(selfMsg);
    };

    process.on("SIGINT", listener);

    return function () {
      process.off("SIGINT", listener);
    };
  });
};

var _Node_attachSignalTerminateListener = function (selfMsg) {
  return _Scheduler_binding(function (_callback) {
    var listener = function () {
      _Scheduler_rawSpawn(selfMsg);
    };

    process.on("SIGTERM", listener);

    return function () {
      process.off("SIGTERM", listener);
    };
  });
};

// Helpers

function _Node_objToDict(obj) {
  var dict = $gren_lang$core$Dict$empty;

  for (var key in obj) {
    dict = A3($gren_lang$core$Dict$set, key, obj[key], dict);
  }

  return dict;
}


// PROGRAMS

var _Platform_worker = F3(function (impl, flagDecoder, args) {
  return _Platform_initialize(
    flagDecoder,
    args,
    impl.fA,
    impl.g1,
    impl.gP,
    function () {
      return function () {};
    },
  );
});

// INITIALIZE A PROGRAM

function _Platform_initialize(
  flagDecoder,
  args,
  init,
  update,
  subscriptions,
  stepperBuilder,
) {
  var flags;
  var rawFlags = args ? args["flags"] : undefined;

  if (flagDecoder === null) {
    if (!(rawFlags instanceof DataView)) {
      _Debug_crash(2 /**_UNUSED/, "Expected DataView as flags" /**/);
    }

    flags = new DataView(rawFlags.buffer.slice());
  } else {
    var result = A2(
      _Json_run,
      flagDecoder,
      _Json_wrap(args ? args["flags"] : undefined),
    );

    $gren_lang$core$Result$isOk(result) ||
      _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);

    flags = result.a;
  }

  _Platform_setupTaskPorts(args ? args["taskPorts"] : undefined);

  var managers = {};
  var initPair = init(flags);
  var model = initPair.dz;
  var stepper = stepperBuilder(sendToApp, model);
  var ports = _Platform_setupEffects(managers, sendToApp, executeCmd);

  function sendToApp(msg, viewMetadata) {
    var pair = A2(update, msg, model);
    stepper((model = pair.dz), viewMetadata);
    _Platform_enqueueEffects(managers, pair.c_, subscriptions(model));
  }

  function executeCmd(cmd) {
    _Platform_enqueueEffects(managers, cmd, subscriptions(model));
  }

  _Platform_enqueueEffects(managers, initPair.c_, subscriptions(model));

  return ports ? { ports: ports } : {};
}

// TRACK PRELOADS
//
// This is used by code in gren/browser and gren/http
// to register any HTTP requests that are triggered by init.
//

var _Platform_preload;

function _Platform_registerPreload(url) {
  _Platform_preload.add(url);
}

// EFFECT MANAGERS

var _Platform_effectManagers = {};

function _Platform_setupEffects(managers, sendToApp, executeCmd) {
  var ports;

  // setup all necessary effect managers
  for (var key in _Platform_effectManagers) {
    var manager = _Platform_effectManagers[key];

    if (manager.a) {
      ports = ports || {};
      ports[key] = manager.a(key, sendToApp);
    }

    managers[key] = _Platform_instantiateManager(
      manager,
      sendToApp,
      executeCmd,
    );
  }

  return ports;
}

function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap) {
  return {
    b: init,
    c: onEffects,
    d: onSelfMsg,
    e: cmdMap,
    f: subMap,
  };
}

function _Platform_instantiateManager(info, sendToApp, executeCmd) {
  var router = {
    g: sendToApp,
    h: executeCmd,
    i: undefined,
  };

  var onEffects = info.c;
  var onSelfMsg = info.d;
  var cmdMap = info.e;
  var subMap = info.f;

  function loop(state) {
    return A2(
      _Scheduler_andThen,
      loop,
      _Scheduler_receive(function (msg) {
        var value = msg.a;

        if (msg.$ === 0) {
          return A3(onSelfMsg, router, value, state);
        }

        return cmdMap && subMap
          ? A4(onEffects, router, value.j, value.k, state)
          : A3(onEffects, router, cmdMap ? value.j : value.k, state);
      }),
    );
  }

  return (router.i = _Scheduler_rawSpawn(
    A2(_Scheduler_andThen, loop, info.b),
  ));
}

// ROUTING

var _Platform_sendToApp = F2(function (router, msg) {
  return _Scheduler_binding(function (callback) {
    router.g(msg);
    callback(_Scheduler_succeed({}));
  });
});

var _Platform_sendToSelf = F2(function (router, msg) {
  return A2(_Scheduler_send, router.i, {
    $: 0,
    a: msg,
  });
});

var _Platform_executeCmd = F2(function (router, cmd) {
  return _Scheduler_binding(function (callback) {
    router.h(cmd);
    callback(_Scheduler_succeed({}));
  });
});

// BAGS

function _Platform_leaf(home) {
  return function (value) {
    return {
      $: 1,
      l: home,
      m: value,
    };
  };
}

function _Platform_batch(array) {
  return {
    $: 2,
    n: array,
  };
}

var _Platform_map = F2(function (tagger, bag) {
  return {
    $: 3,
    o: tagger,
    p: bag,
  };
});

// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/gren/core/issues/980
//   https://github.com/gren/core/pull/981
//   https://github.com/gren/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.

// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;

function _Platform_enqueueEffects(managers, cmdBag, subBag) {
  _Platform_effectsQueue.push({
    q: managers,
    r: cmdBag,
    s: subBag,
  });

  if (_Platform_effectsActive) return;

  _Platform_effectsActive = true;
  while (_Platform_effectsQueue.length > 0) {
    const activeEffects = _Platform_effectsQueue;
    _Platform_effectsQueue = [];

    for (const fx of activeEffects) {
      _Platform_dispatchEffects(fx.q, fx.r, fx.s);
    }
  }
  _Platform_effectsActive = false;
}

function _Platform_dispatchEffects(managers, cmdBag, subBag) {
  var effectsDict = {};
  _Platform_gatherEffects(true, cmdBag, effectsDict, null);
  _Platform_gatherEffects(false, subBag, effectsDict, null);

  for (var home in managers) {
    _Scheduler_rawSend(managers[home], {
      $: "fx",
      a: effectsDict[home] || { j: [], k: [] },
    });
  }
}

function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers) {
  switch (bag.$) {
    case 1:
      var home = bag.l;
      var effect = _Platform_toEffect(isCmd, home, taggers, bag.m);
      effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
      return;

    case 2:
      var bags = bag.n;
      for (var idx = 0; idx < bags.length; idx++) {
        _Platform_gatherEffects(isCmd, bags[idx], effectsDict, taggers);
      }
      return;

    case 3:
      _Platform_gatherEffects(isCmd, bag.p, effectsDict, {
        t: bag.o,
        u: taggers,
      });
      return;
  }
}

function _Platform_toEffect(isCmd, home, taggers, value) {
  function applyTaggers(x) {
    for (var temp = taggers; temp; temp = temp.u) {
      x = temp.t(x);
    }
    return x;
  }

  var map = isCmd
    ? _Platform_effectManagers[home].e
    : _Platform_effectManagers[home].f;

  return A2(map, applyTaggers, value);
}

function _Platform_insert(isCmd, newEffect, effects) {
  effects = effects || { j: [], k: [] };

  isCmd
    ? (effects.j = A2($gren_lang$core$Array$pushLast, newEffect, effects.j))
    : (effects.k = A2($gren_lang$core$Array$pushLast, newEffect, effects.k));

  return effects;
}

// PORTS

function _Platform_checkPortName(name) {
  if (_Platform_effectManagers[name]) {
    _Debug_crash(3, name);
  }

  if (_Platform_taskPorts[name]) {
    _Debug_crash(3, name);
  }
}

// OUTGOING PORTS

function _Platform_outgoingPort(name, converter, isBytes) {
  _Platform_checkPortName(name);
  _Platform_effectManagers[name] = {
    e: _Platform_outgoingPortMap,
    v: converter,
    a: (n) => _Platform_setupOutgoingPort(n, isBytes),
  };
  return _Platform_leaf(name);
}

var _Platform_outgoingPortMap = F2(function (tagger, value) {
  return value;
});

function _Platform_setupOutgoingPort(name, isBytes) {
  var subs = [];
  var converter = _Platform_effectManagers[name].v;

  // CREATE MANAGER

  var init = _Process_sleep(0);

  _Platform_effectManagers[name].b = init;
  _Platform_effectManagers[name].c = F3(
    function (router, cmdArray, state) {
      for (var idx = 0; idx < cmdArray.length; idx++) {
        // grab a separate reference to subs in case unsubscribe is called
        var currentSubs = subs;
        var rawValue = converter(cmdArray[idx]);
        var value = isBytes
          ? new DataView(rawValue.buffer.slice())
          : _Json_unwrap(rawValue);
        for (var subIdx = 0; subIdx < currentSubs.length; subIdx++) {
          currentSubs[subIdx](value);
        }
      }
      return init;
    },
  );

  // PUBLIC API

  function subscribe(callback) {
    subs.push(callback);
  }

  function unsubscribe(callback) {
    // copy subs into a new array in case unsubscribe is called within a
    // subscribed callback
    subs = subs.slice();
    var index = subs.indexOf(callback);
    if (index >= 0) {
      subs.splice(index, 1);
    }
  }

  return {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
  };
}

// INCOMING PORTS

function _Platform_incomingPort(name, converter, isBytes) {
  _Platform_checkPortName(name);
  _Platform_effectManagers[name] = {
    f: _Platform_incomingPortMap,
    v: converter,
    a: (n, s) => _Platform_setupIncomingPort(n, s, isBytes),
  };
  return _Platform_leaf(name);
}

var _Platform_incomingPortMap = F2(function (tagger, finalTagger) {
  return function (value) {
    return tagger(finalTagger(value));
  };
});

function _Platform_setupIncomingPort(name, sendToApp, isBytes) {
  var subs = [];
  var converter = _Platform_effectManagers[name].v;

  // CREATE MANAGER

  var init = _Scheduler_succeed(null);

  _Platform_effectManagers[name].b = init;
  _Platform_effectManagers[name].c = F3(
    function (router, subArray, state) {
      subs = subArray;
      return init;
    },
  );

  // PUBLIC API

  function send(incomingValue) {
    var value;

    if (isBytes) {
      if (!(incomingValue instanceof DataView)) {
        _Debug_crash(4, name, "Expected DataView");
      }

      value = new DataView(incomingValue.buffer.slice());
    } else {
      var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

      $gren_lang$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

      value = result.a;
    }

    for (var idx = 0; idx < subs.length; idx++) {
      sendToApp(subs[idx](value));
    }
  }

  return { send: send };
}

// TASK PORTS

var _Platform_taskPorts = {};

function _Platform_taskPort(
  name,
  inputConverter,
  converter,
  inputIsBytes,
  outputIsBytes,
) {
  _Platform_checkPortName(name);
  _Platform_taskPorts[name] = {};

  return function (input) {
    var encodedInput = inputConverter
      ? inputIsBytes
        ? new DataView(input.buffer.slice())
        : _Json_unwrap(inputConverter(input))
      : null;

    return _Scheduler_binding(function (callback) {
      var promise;
      try {
        promise = _Platform_taskPorts[name](encodedInput);
      } catch (e) {
        throw new Error(
          "Registered code for task-based port named '" + name + "'  crashed.",
          { cause: e },
        );
      }

      if (!(promise instanceof Promise)) {
        throw new Error(
          "Handler for task port named '" +
            name +
            "' did not return a Promise.",
        );
      }

      promise.then(
        function (value) {
          var checkedValue;

          if (outputIsBytes) {
            if (!(value instanceof DataView)) {
              _Debug_crash(4, name, "Expected DataView");
            }

            checkedValue = new DataView(value.buffer.slice());
          } else {
            var result = A2(_Json_run, converter, _Json_wrap(value));

            $gren_lang$core$Result$isOk(result) || _Debug_crash(4, name, value);

            checkedValue = result.a;
          }

          callback(_Scheduler_succeed(checkedValue));
        },
        function (err) {
          // If Error, convert to plain object. This is because Error doesn't have enumerable
          // properties.
          if (err instanceof Error) {
            var newErr = {};
            Object.getOwnPropertyNames(err).forEach(function (key) {
              newErr[key] = err[key];
            });

            err = newErr;
          }

          callback(_Scheduler_fail(_Json_wrap(err)));
        },
      );
    });
  };
}

function _Platform_setupTaskPorts(registeredPorts) {
  if (typeof registeredPorts !== "object") {
    registeredPorts = {};
  }

  for (var key in registeredPorts) {
    if (!(key in _Platform_taskPorts)) {
      // TODO: proper way to crash program
      throw new Error(
        key + " isn't defined as a task-based port in Gren code.",
      );
    }
  }

  for (var key in _Platform_taskPorts) {
    var handler = registeredPorts[key];
    if (!handler) {
      throw new Error("No handler defined for task port named '" + key + "'.");
    }

    if (!(handler instanceof Function)) {
      throw new Error(
        "Handler for task port named '" + key + "' is not a function.",
      );
    }

    _Platform_taskPorts[key] = handler;
  }
}

// EXPORT GREN MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//

function _Platform_export(exports) {
  scope["Gren"]
    ? _Platform_mergeExportsProd(scope["Gren"], exports)
    : (scope["Gren"] = exports);
}

function _Platform_mergeExportsProd(obj, exports) {
  for (var name in exports) {
    name in obj
      ? name == "init"
        ? _Debug_crash(6)
        : _Platform_mergeExportsProd(obj[name], exports[name])
      : (obj[name] = exports[name]);
  }
}

function _Platform_export_UNUSED(exports) {
  scope["Gren"]
    ? _Platform_mergeExportsDebug("Gren", scope["Gren"], exports)
    : (scope["Gren"] = exports);
}

function _Platform_mergeExportsDebug(moduleName, obj, exports) {
  for (var name in exports) {
    name in obj
      ? name == "init"
        ? _Debug_crash(6, moduleName)
        : _Platform_mergeExportsDebug(
            moduleName + "." + name,
            obj[name],
            exports[name],
          )
      : (obj[name] = exports[name]);
  }
}


function _Process_sleep(time) {
  return _Scheduler_binding(function (callback) {
    var id = setTimeout(function () {
      callback(_Scheduler_succeed({}));
    }, time);

    return function () {
      clearTimeout(id);
    };
  });
}
var $gren_lang$core$Basics$never = function(_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $gren_lang$core$Task$Perform = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$core$Task$succeed = _Scheduler_succeed;
var $gren_lang$core$Task$init = $gren_lang$core$Task$succeed({  });
var $gren_lang$core$Task$map$ = function(func, taskA) {
	return A2($gren_lang$core$Task$andThen, function(a) {
			return $gren_lang$core$Task$succeed(func(a));
		}, taskA);
};
var $gren_lang$core$Task$map = F2($gren_lang$core$Task$map$);
var $gren_lang$core$Array$foldr = _Array_foldr;
var $gren_lang$core$Task$sequence = A2($gren_lang$core$Array$foldr, F2(function(task, combined) {
			return A2($gren_lang$core$Task$andThen, function(x) {
					return $gren_lang$core$Task$map$($gren_lang$core$Array$pushFirst(x), combined);
				}, task);
		}), $gren_lang$core$Task$succeed([  ]));
var $gren_lang$core$Platform$sendToApp = _Platform_sendToApp;
var $gren_lang$core$Task$spawnCmd$ = function(router, cmd) {
	switch (cmd.$) {
		case 0:
			var task = cmd.a;
			return _Scheduler_spawn(A2($gren_lang$core$Task$andThen, $gren_lang$core$Platform$sendToApp(router), task));
		case 1:
			var task = cmd.a;
			return _Scheduler_spawn(A2($gren_lang$core$Task$andThen, _Platform_executeCmd(router), task));
		default:
			var task = cmd.a;
			return _Scheduler_spawn(task);
	}
};
var $gren_lang$core$Task$spawnCmd = F2($gren_lang$core$Task$spawnCmd$);
var $gren_lang$core$Task$onEffects$ = function(router, commands, state) {
	return $gren_lang$core$Task$map$(function(_v0) {
			return {  };
		}, $gren_lang$core$Task$sequence(A2($gren_lang$core$Array$map, $gren_lang$core$Task$spawnCmd(router), commands)));
};
var $gren_lang$core$Task$onEffects = F3($gren_lang$core$Task$onEffects$);
var $gren_lang$core$Task$onSelfMsg$ = function(_v0, _v1, _v2) {
	return $gren_lang$core$Task$succeed({  });
};
var $gren_lang$core$Task$onSelfMsg = F3($gren_lang$core$Task$onSelfMsg$);
var $gren_lang$core$Task$Execute = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$core$Task$ExecuteCmd = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$Platform$Cmd$map = _Platform_map;
var $gren_lang$core$Task$cmdMap$ = function(tagger, cmd) {
	switch (cmd.$) {
		case 0:
			var task = cmd.a;
			return $gren_lang$core$Task$Perform($gren_lang$core$Task$map$(tagger, task));
		case 1:
			var task = cmd.a;
			return $gren_lang$core$Task$ExecuteCmd($gren_lang$core$Task$map$($gren_lang$core$Platform$Cmd$map(tagger), task));
		default:
			var task = cmd.a;
			return $gren_lang$core$Task$Execute(task);
	}
};
var $gren_lang$core$Task$cmdMap = F2($gren_lang$core$Task$cmdMap$);
_Platform_effectManagers['Task'] = _Platform_createManager($gren_lang$core$Task$init, $gren_lang$core$Task$onEffects, $gren_lang$core$Task$onSelfMsg, $gren_lang$core$Task$cmdMap);
var $gren_lang$core$Task$command = _Platform_leaf('Task');
var $gren_lang$core$Task$perform$ = function(toMessage, task) {
	return $gren_lang$core$Task$command($gren_lang$core$Task$Perform($gren_lang$core$Task$map$(toMessage, task)));
};
var $gren_lang$core$Task$perform = F2($gren_lang$core$Task$perform$);
var $gren_lang$node$Node$Arm = { $: 0 };
var $gren_lang$node$Node$Arm64 = { $: 1 };
var $gren_lang$node$Node$IA32 = { $: 2 };
var $gren_lang$node$Node$Mips = { $: 3 };
var $gren_lang$node$Node$Mipsel = { $: 4 };
var $gren_lang$node$Node$PPC = { $: 5 };
var $gren_lang$node$Node$PPC64 = { $: 6 };
var $gren_lang$node$Node$S390 = { $: 7 };
var $gren_lang$node$Node$S390x = { $: 8 };
var $gren_lang$node$Node$UnknownArchitecture = function (a) {
	return { $: 10, a: a };
};
var $gren_lang$node$Node$X64 = { $: 9 };
var $gren_lang$node$Node$archFromString = function(arch) {
	var _v0 = $gren_lang$core$String$toLower(arch);
	switch (_v0) {
		case 'arm':
			return $gren_lang$node$Node$Arm;
		case 'arm64':
			return $gren_lang$node$Node$Arm64;
		case 'ia32':
			return $gren_lang$node$Node$IA32;
		case 'mips':
			return $gren_lang$node$Node$Mips;
		case 'mipsel':
			return $gren_lang$node$Node$Mipsel;
		case 'ppc':
			return $gren_lang$node$Node$PPC;
		case 'ppc64':
			return $gren_lang$node$Node$PPC64;
		case 's390':
			return $gren_lang$node$Node$S390;
		case 's390x':
			return $gren_lang$node$Node$S390x;
		case 'x64':
			return $gren_lang$node$Node$X64;
		default:
			return $gren_lang$node$Node$UnknownArchitecture(arch);
	}
};
var $gren_lang$node$Node$Aix = { $: 6 };
var $gren_lang$node$Node$Darwin = { $: 1 };
var $gren_lang$node$Node$FreeBSD = { $: 3 };
var $gren_lang$node$Node$Linux = { $: 2 };
var $gren_lang$node$Node$OpenBSD = { $: 4 };
var $gren_lang$node$Node$SunOS = { $: 5 };
var $gren_lang$node$Node$UnknownPlatform = function (a) {
	return { $: 7, a: a };
};
var $gren_lang$node$Node$Win32 = { $: 0 };
var $gren_lang$node$Node$platformFromString = function(platform) {
	var _v0 = $gren_lang$core$String$toLower(platform);
	switch (_v0) {
		case 'win32':
			return $gren_lang$node$Node$Win32;
		case 'darwin':
			return $gren_lang$node$Node$Darwin;
		case 'linux':
			return $gren_lang$node$Node$Linux;
		case 'freebsd':
			return $gren_lang$node$Node$FreeBSD;
		case 'openbsd':
			return $gren_lang$node$Node$OpenBSD;
		case 'sunos':
			return $gren_lang$node$Node$SunOS;
		case 'aix':
			return $gren_lang$node$Node$Aix;
		default:
			return $gren_lang$node$Node$UnknownPlatform(platform);
	}
};
var $gren_lang$node$Node$initializeEnvironment = $gren_lang$core$Task$map$(function(raw) {
		return { es: raw.es, cR: raw.cR, eS: $gren_lang$node$Node$archFromString(raw.et), gk: $gren_lang$node$Node$platformFromString(raw.gk), ed: raw.ed, gL: raw.gL, ee: raw.ee };
	}, _Node_init);
var $gren_lang$node$Node$unwrap = function(_v0) {
	var task = _v0;
	return task;
};
var $gren_lang$node$Node$initProgram$ = function(initTask, _v0) {
	return { c_: $gren_lang$core$Task$perform$($gren_lang$node$Node$InitDone, A2($gren_lang$core$Task$andThen, function(env) {
				return $gren_lang$node$Node$unwrap(initTask(env));
			}, $gren_lang$node$Node$initializeEnvironment)), dz: $gren_lang$node$Node$Uninitialized };
};
var $gren_lang$node$Node$initProgram = F2($gren_lang$node$Node$initProgram$);
var $gren_lang$node$Node$MsgReceived = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$Platform$Sub$map = _Platform_map;
var $gren_lang$core$Platform$Sub$batch = _Platform_batch;
var $gren_lang$core$Platform$Sub$none = $gren_lang$core$Platform$Sub$batch([  ]);
var $gren_lang$node$Node$subscriptions$ = function(appSubs, model) {
	if (!model.$) {
		return $gren_lang$core$Platform$Sub$none;
	} else {
		var appModel = model.a;
		return A2($gren_lang$core$Platform$Sub$map, $gren_lang$node$Node$MsgReceived, appSubs(appModel));
	}
};
var $gren_lang$node$Node$subscriptions = F2($gren_lang$node$Node$subscriptions$);
var $gren_lang$node$Node$Initialized = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$Platform$Cmd$batch = _Platform_batch;
var $gren_lang$core$Platform$Cmd$none = $gren_lang$core$Platform$Cmd$batch([  ]);
var $gren_lang$node$Node$update$ = function(appUpdate, msg, model) {
	if (!model.$) {
		if (!msg.$) {
			var initResult = msg.a;
			return { c_: A2($gren_lang$core$Platform$Cmd$map, $gren_lang$node$Node$MsgReceived, initResult.c_), dz: $gren_lang$node$Node$Initialized(initResult.dz) };
		} else {
			return { c_: $gren_lang$core$Platform$Cmd$none, dz: model };
		}
	} else {
		var appModel = model.a;
		if (!msg.$) {
			return { c_: $gren_lang$core$Platform$Cmd$none, dz: model };
		} else {
			var appMsg = msg.a;
			var updateResult = A2(appUpdate, appMsg, appModel);
			return { c_: A2($gren_lang$core$Platform$Cmd$map, $gren_lang$node$Node$MsgReceived, updateResult.c_), dz: $gren_lang$node$Node$Initialized(updateResult.dz) };
		}
	}
};
var $gren_lang$node$Node$update = F3($gren_lang$node$Node$update$);
var $gren_lang$core$Platform$worker = _Platform_worker;
var $gren_lang$node$Node$defineProgram = function(config) {
	return $gren_lang$core$Platform$worker({ fA: $gren_lang$node$Node$initProgram(config.fA), gP: $gren_lang$node$Node$subscriptions(config.gP), g1: $gren_lang$node$Node$update(config.g1) });
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Exited = { $: 0 };
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Running = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$String$Parser$Advanced$Other = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Number$errorToString = function(error) {
	switch (error) {
		case 0:
			return 'Not a valid number';
		case 1:
			return 'Leading zero is not allowed';
		case 2:
			return 'Expected integer';
		default:
			return 'Expected hexadecimal digits';
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Operator$errorToString = function(error) {
	switch (error) {
		case 0:
			return 'Invalid use of \'.\'';
		case 1:
			return 'Invalid use of \'|>\'';
		case 2:
			return 'Invalid use of \'->\'';
		case 3:
			return 'Invalid use of \'=\'';
		case 4:
			return 'Invalid use of \':\'';
		default:
			return 'Invalid operator character';
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Space$errorToString = function(error) {
	switch (error) {
		case 0:
			return 'Expected line comment';
		case 1:
			return 'Expected {-';
		case 2:
			return 'Expected -}';
		default:
			return 'Invalid whitespace character';
	}
};
var $gren_lang$compiler_common$Compiler$Parse$String$errorToString = function(error) {
	switch (error.$) {
		case 0:
			return 'Expected quote';
		case 1:
			return 'Expected a character';
		case 2:
			var escapeSeq = error.a;
			return 'Invalid escape sequence: \'' + (escapeSeq + '\'');
		case 3:
			return 'Expected unicode opening \'u{\'';
		case 4:
			return 'Invalid unicode value';
		case 5:
			return 'Expected unicode closing \'}\'';
		case 6:
			return 'Expected newline';
		default:
			return 'Multi-line string quotes are misaligned';
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Variable$errorToString = function(error) {
	switch (error.$) {
		case 0:
			return 'Invalid character in variable name';
		case 1:
			return 'Expected \'.\' character';
		default:
			var word = error.a;
			return 'Reserved word used as variable: \'' + (word + '\'');
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$errorToString = function(error) {
	switch (error.$) {
		case 0:
			var _char = error.a;
			return 'Expected character \'' + ($gren_lang$core$String$fromChar(_char) + '\'');
		case 1:
			var keyword = error.a;
			return 'Expected keyword \'' + (keyword + '\'');
		case 2:
			var varError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Variable$errorToString(varError);
		case 3:
			var numError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Number$errorToString(numError);
		case 4:
			return 'Float patterns are not supported';
		case 5:
			var strError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$String$errorToString(strError);
		default:
			var spaceError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Space$errorToString(spaceError);
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Type$errorToString = function(error) {
	switch (error.$) {
		case 0:
			var _char = error.a;
			return 'Expected \'' + ($gren_lang$core$String$fromChar(_char) + '\'');
		case 1:
			var str = error.a;
			return 'Expected string \'' + (str + '\'');
		case 2:
			var varError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Variable$errorToString(varError);
		case 3:
			return 'Expected indentation';
		default:
			var spaceError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Space$errorToString(spaceError);
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$errorToString = function(error) {
	switch (error.$) {
		case 0:
			var _char = error.a;
			return 'Expected character \'' + ($gren_lang$core$String$fromChar(_char) + '\'');
		case 1:
			var keyword = error.a;
			return 'Expected keyword \'' + (keyword + '\'');
		case 2:
			var varError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Variable$errorToString(varError);
		case 3:
			var numError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Number$errorToString(numError);
		case 4:
			var strError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$String$errorToString(strError);
		case 5:
			var patError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Pattern$errorToString(patError);
		case 6:
			var typeError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Type$errorToString(typeError);
		case 7:
			return 'Wildcard patterns are not allowed in expressions';
		case 8:
			return 'Expected lower case variable';
		case 9:
			var _v1 = error.a;
			var first = _v1.fk;
			var second = _v1.gD;
			return 'Name mismatch: expected \'' + (first + ('\' but got \'' + (second + '\'')));
		case 10:
			return 'Indentation error';
		case 11:
			var op = error.a;
			return 'Invalid operator: \'' + (op + '\'');
		case 12:
			return 'Invalid operator character';
		case 13:
			var spaceError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Space$errorToString(spaceError);
		case 14:
			var opError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Operator$errorToString(opError);
		default:
			return 'Internal parser error';
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$errorToString = function(error) {
	switch (error.$) {
		case 0:
			var keyword = error.a;
			return 'Expected keyword \'' + (keyword + '\'');
		case 1:
			var _char = error.a;
			return 'Expected character \'' + ($gren_lang$core$String$fromChar(_char) + '\'');
		case 2:
			var varError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Variable$errorToString(varError);
		case 3:
			var typeError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Type$errorToString(typeError);
		case 4:
			var exprError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Expression$errorToString(exprError);
		case 5:
			var spaceError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Space$errorToString(spaceError);
		default:
			return 'Expected more indentation than above line';
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Module$errorToString = function(error) {
	switch (error.$) {
		case 0:
			var keyword = error.a;
			return 'Expected keyword \'' + (keyword + '\'');
		case 1:
			var _char = error.a;
			return 'Expected character \'' + ($gren_lang$core$String$fromChar(_char) + '\'');
		case 2:
			var varError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Variable$errorToString(varError);
		case 3:
			var opError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Operator$errorToString(opError);
		case 4:
			return 'Expected integer precedence value';
		case 5:
			var declError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Declaration$errorToString(declError);
		case 6:
			var spaceError = error.a;
			return $gren_lang$compiler_common$Compiler$Parse$Space$errorToString(spaceError);
		default:
			return 'Expected end of file';
	}
};
var $gren_lang$core$String$Parser$Advanced$Line = $gren_lang$core$Basics$identity;
var $gren_lang$core$Array$flatten = _Array_flat;
var $gren_lang$core$Basics$max$ = function(x, y) {
	return (_Utils_cmp(x, y) > 0) ? x : y;
};
var $gren_lang$core$Basics$max = F2($gren_lang$core$Basics$max$);
var $gren_lang$core$String$repeat = _String_repeat;
var $gren_lang$core$String$padLeft$ = function(n, _char, string) {
	return _Utils_ap(A2($gren_lang$core$String$repeat, n - $gren_lang$core$String$count(string), $gren_lang$core$String$fromChar(_char)), string);
};
var $gren_lang$core$String$padLeft = F3($gren_lang$core$String$padLeft$);
var $gren_lang$core$String$Parser$Advanced$formatSourceFragment$ = function(output, head, lines) {
	var line = $gren_lang$core$Maybe$withDefault$({ bl: head.bl, gO: '' }, A2($gren_lang$core$Array$get, head.bl - 1, lines));
	var before = A2($gren_lang$core$Array$keepIf, function(_v2) {
			var row = _v2.bl;
			return _Utils_cmp(row, head.bl) < 0;
		}, $gren_lang$core$Array$takeFirst$(output.fV, $gren_lang$core$Array$dropFirst$($gren_lang$core$Basics$max$(0, (head.bl - output.fV) - 1), lines)));
	var after = $gren_lang$core$Array$takeFirst$(output.fV, $gren_lang$core$Array$dropFirst$(head.bl, lines));
	var numLength = $gren_lang$core$String$count($gren_lang$core$String$fromInt($gren_lang$core$Maybe$withDefault$(head.bl, $gren_lang$core$Maybe$map$(function(_v1) {
						var row = _v1.bl;
						return row;
					}, $gren_lang$core$Array$last(after)))));
	var caret = [ output.gV(A2($gren_lang$core$String$repeat, (numLength + head.aZ) + 1, ' ')), output.fo(output.gV('^')) ];
	var formatLine = function(_v0) {
		var row = _v0.bl;
		var l = _v0.gO;
		return [ output.gV($gren_lang$core$String$padLeft$(numLength, ' ', $gren_lang$core$String$fromInt(row)) + ('| ' + l)) ];
	};
	return _Utils_ap(A2($gren_lang$core$Array$map, formatLine, before), _Utils_ap([ formatLine(line), caret ], A2($gren_lang$core$Array$map, formatLine, after)));
};
var $gren_lang$core$String$Parser$Advanced$formatSourceFragment = F3($gren_lang$core$String$Parser$Advanced$formatSourceFragment$);
var $gren_lang$core$Array$partition$ = function(fn, array) {
	return A3($gren_lang$core$Array$foldl, F2(function(val, _v0) {
				var trues = _v0.cI;
				var falses = _v0.ca;
				return fn(val) ? { ca: falses, cI: $gren_lang$core$Array$pushLast$(val, trues) } : { ca: $gren_lang$core$Array$pushLast$(val, falses), cI: trues };
			}), { ca: [  ], cI: [  ] }, array);
};
var $gren_lang$core$Array$partition = F2($gren_lang$core$Array$partition$);
var $gren_lang$core$String$Parser$Advanced$gatherEqualsBy$ = function(fn, array) {
	var helper = F2(function(gathered, scattered) {
			helper:
			while (true) {
				var _v0 = $gren_lang$core$Array$popFirst(scattered);
				if (_v0.$ === 1) {
					return gathered;
				} else {
					var _v1 = _v0.a;
					var first = _v1.fk;
					var rest = _v1.gz;
					var firstComp = fn(first);
					var _v2 = $gren_lang$core$Array$partition$(function(a) {
							return _Utils_eq(firstComp, fn(a));
						}, scattered);
					var group = _v2.cI;
					var stillScattered = _v2.ca;
					var $temp$gathered = $gren_lang$core$Array$pushLast$(group, gathered),
					$temp$scattered = stillScattered;
					gathered = $temp$gathered;
					scattered = $temp$scattered;
					continue helper;
				}
			}
		});
	return A2(helper, [  ], array);
};
var $gren_lang$core$String$Parser$Advanced$gatherEqualsBy = F2($gren_lang$core$String$Parser$Advanced$gatherEqualsBy$);
var $gren_lang$core$Array$sort = _Array_sort;
var $gren_lang$core$String$Parser$Advanced$deadEndToString$ = function(output, extract, lines, deadEnds) {
	var sourceFragment = function () {
		var _v6 = $gren_lang$core$Array$popFirst(deadEnds);
		if (_v6.$ === 1) {
			return [  ];
		} else {
			var first = _v6.a.fk;
			return $gren_lang$core$String$Parser$Advanced$formatSourceFragment$(output, { aZ: first.aZ, bl: first.bl }, lines);
		}
	}();
	var grouped = A2($gren_lang$core$Array$map, function(group) {
			var _v4 = $gren_lang$core$Array$popFirst(group);
			if (_v4.$ === 1) {
				return { aZ: 1, eQ: '', dS: A2($gren_lang$core$Array$map, function ($) {
						return $.dR;
					}, group), bl: 1 };
			} else {
				var _v5 = _v4.a;
				var first = _v5.fk;
				var rest = _v5.gz;
				var extractedFirst = extract.eW(first);
				return { aZ: extractedFirst.aZ, eQ: extractedFirst.eQ, dS: A2($gren_lang$core$Array$map, function ($) {
						return $.dR;
					}, group), bl: extractedFirst.bl };
			}
		}, $gren_lang$core$String$Parser$Advanced$gatherEqualsBy$(extract.eW, deadEnds));
	var groupToString = function(_v3) {
		var context = _v3.eQ;
		var problems = _v3.dS;
		var _v0 = A3($gren_lang$core$Array$foldl, F2(function(prob, acc) {
					var _v1 = extract.gp(prob);
					if (!_v1.$) {
						var e = _v1.a;
						return { a2: $gren_lang$core$Set$set$(e, acc.a2), bg: acc.bg };
					} else {
						var o = _v1.a;
						return { a2: acc.a2, bg: $gren_lang$core$Set$set$(o, acc.bg) };
					}
				}), { a2: $gren_lang$core$Set$empty, bg: $gren_lang$core$Set$empty }, problems);
		var expected = _v0.a2;
		var other = _v0.bg;
		var groupedExpected = function () {
			var _v2 = $gren_lang$core$Set$toArray(expected);
			switch (_v2.length) {
				case 0:
					return [  ];
				case 1:
					var x = _v2[0];
					return [ 'Expecting ' + x ];
				default:
					var rest = _v2;
					return [ 'Expecting one of ' + A2($gren_lang$core$String$join, ', ', rest) ];
			}
		}();
		var problemsLines = A2($gren_lang$core$Array$map, function(l) {
				return [ output.gV(l) ];
			}, $gren_lang$core$Array$sort(_Utils_ap(groupedExpected, $gren_lang$core$Set$toArray(other))));
		return $gren_lang$core$String$isEmpty(context) ? problemsLines : $gren_lang$core$Array$pushLast$([ output.gV('- '), output.fp(output.gV(context)), output.gV(':') ], problemsLines);
	};
	return $gren_lang$core$Array$flatten([ sourceFragment, [ [ output.gV('') ] ], A2($gren_lang$core$Array$mapAndFlatten, groupToString, grouped) ]);
};
var $gren_lang$core$String$Parser$Advanced$deadEndToString = F4($gren_lang$core$String$Parser$Advanced$deadEndToString$);
var $gren_lang$core$Array$intersperse$ = function(sep, xs) {
	var _v0 = $gren_lang$core$Array$popFirst(xs);
	if (_v0.$ === 1) {
		return [  ];
	} else {
		var _v1 = _v0.a;
		var head = _v1.fk;
		var tail = _v1.gz;
		return $gren_lang$core$Array$pushFirst$(head, A2($gren_lang$core$Array$mapAndFlatten, function(val) {
					return [ sep, val ];
				}, tail));
	}
};
var $gren_lang$core$Array$intersperse = F2($gren_lang$core$Array$intersperse$);
var $gren_lang$core$Array$sortBy = _Array_sortBy;
var $gren_lang$core$String$Parser$Advanced$renderDeadEnds$ = function(output, extract, src, deadEnds) {
	var lines = A2($gren_lang$core$Array$indexedMap, F2(function(i, l) {
				return { bl: i + 1, gO: l };
			}), A2($gren_lang$core$String$split, '\n', src));
	return A2($gren_lang$core$Array$mapAndFlatten, function(_v1) {
			var l = _v1;
			return l;
		}, $gren_lang$core$Array$intersperse$([ output.f7 ], A2($gren_lang$core$Array$mapAndFlatten, function(line) {
					return $gren_lang$core$String$Parser$Advanced$deadEndToString$(output, extract, lines, A2($gren_lang$core$Array$sortBy, function ($) {
								return $.aZ;
							}, line));
				}, $gren_lang$core$String$Parser$Advanced$gatherEqualsBy$(function(_v0) {
						var row = _v0.bl;
						var col = _v0.aZ;
						return [ row, col ];
					}, deadEnds))));
};
var $gren_lang$core$String$Parser$Advanced$renderDeadEnds = F4($gren_lang$core$String$Parser$Advanced$renderDeadEnds$);
var $gren_lang$compiler_common$Compiler$Parse$Module$errorsToString$ = function(src, deadEnds) {
	return A2($gren_lang$core$String$join, '', $gren_lang$core$String$Parser$Advanced$renderDeadEnds$({ fo: $gren_lang$core$Basics$identity, fp: $gren_lang$core$Basics$identity, fV: 2, f7: '\n', gV: $gren_lang$core$Basics$identity }, { eW: function(de) {
				return { aZ: de.aZ, eQ: '', bl: de.bl };
			}, gp: function(err) {
				return $gren_lang$core$String$Parser$Advanced$Other($gren_lang$compiler_common$Compiler$Parse$Module$errorToString(err));
			} }, src, A2($gren_lang$core$Array$map, function(de) {
					return { aZ: de.aZ, gh: {  }, dR: de.dR, bl: de.bl };
				}, deadEnds)));
};
var $gren_lang$compiler_common$Compiler$Parse$Module$errorsToString = F2($gren_lang$compiler_common$Compiler$Parse$Module$errorsToString$);
var $gren_lang$core$Result$mapError$ = function(f, result) {
	if (!result.$) {
		var v = result.a;
		return $gren_lang$core$Result$Ok(v);
	} else {
		var e = result.a;
		return $gren_lang$core$Result$Err(f(e));
	}
};
var $gren_lang$core$Result$mapError = F2($gren_lang$core$Result$mapError$);
var $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Manager = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Ports = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Module$DeclarationError = function (a) {
	return { $: 5, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedEnd = { $: 7 };
var $gren_lang$core$String$Parser$Advanced$end = function(x) {
	return function(s) {
		return _Utils_eq($gren_lang$core$String$unitLength(s.d), s.g) ? $gren_lang$core$String$Parser$Advanced$Good({ c: false, ea: s, bZ: {  } }) : $gren_lang$core$String$Parser$Advanced$Bad({ k: $gren_lang$core$String$Parser$Advanced$fromState$(s, x), c: false });
	};
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$ExpectedKeyword = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$ExprError = function (a) {
	return { $: 4, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$Value = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$docParser = function(toErr) {
	var spaceErr = function(spaceError) {
		switch (spaceError) {
			case 0:
				return toErr('expected line comment');
			case 1:
				return toErr('expected {-');
			case 2:
				return toErr('expected -}');
			default:
				return toErr('expected white space character');
		}
	};
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$mapError$(spaceErr, $gren_lang$compiler_common$Compiler$Parse$Space$parser), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('-}', toErr('-}')), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$map$($gren_lang$core$String$trim, $gren_lang$core$String$Parser$Advanced$getChompedString($gren_lang$core$String$Parser$Advanced$chompUntil$('-}', toErr('-}')))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$mapError$(spaceErr, $gren_lang$compiler_common$Compiler$Parse$Space$parser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('{-|', toErr('{-|')), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(docStart, doc, docEnd) {
												return $gren_lang$core$Maybe$Just($gren_lang$compiler_common$SourcePosition$at$(docStart, docEnd, doc));
											}))))))))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Nothing) ]);
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Accessor = function (a) {
	return { $: 16, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$ArrayLiteral = function (a) {
	return { $: 5, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$CapVar = 1;
var $gren_lang$compiler_common$Compiler$Ast$Source$CharLiteral = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Define = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Destruct = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedKeyword = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedLowerVariable = function (a) {
	return { $: 8, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$If = function (a) {
	return { $: 14, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$InternalError = { $: 15 };
var $gren_lang$compiler_common$Compiler$Ast$Source$Lambda = function (a) {
	return { $: 11, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Let = function (a) {
	return { $: 13, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$LowVar = 0;
var $gren_lang$compiler_common$Compiler$Parse$Expression$NameMismatch = function (a) {
	return { $: 9, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Negate = function (a) {
	return { $: 9, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$NumberError = function (a) {
	return { $: 3, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$NumberLiteral = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Operator = function (a) {
	return { $: 8, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Parens = function (a) {
	return { $: 18, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$PatternError = function (a) {
	return { $: 5, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Record = function (a) {
	return { $: 6, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$StringError = function (a) {
	return { $: 4, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$StringLiteral = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$TypeError = function (a) {
	return { $: 6, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Update = function (a) {
	return { $: 7, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Var = function (a) {
	return { $: 3, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$VarQual = function (a) {
	return { $: 4, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$VariableError = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$When = function (a) {
	return { $: 15, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$WildcardAttempt = { $: 7 };
var $gren_lang$compiler_common$Compiler$Ast$Source$Access = function (a) {
	return { $: 17, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$lowerCaseVariable = $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$lowerCase);
var $gren_lang$compiler_common$Compiler$Parse$Expression$accessible = function(currentExpression) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$andThen$($gren_lang$compiler_common$Compiler$Parse$Expression$accessible, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$lowerCaseVariable, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('.', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('.')), $gren_lang$core$String$Parser$Advanced$succeed(F3(function(start, name, end) {
										return $gren_lang$compiler_common$SourcePosition$at$(start, end, $gren_lang$compiler_common$Compiler$Ast$Source$Access({ ep: name, dc: currentExpression }));
									}))))))), $gren_lang$core$String$Parser$Advanced$succeed(currentExpression) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$String$ExpectedQuote = { $: 0 };
var $gren_lang$compiler_common$Compiler$Parse$String$charQuote = $gren_lang$core$String$Parser$Advanced$token$('\'', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedQuote);
var $gren_lang$compiler_common$Compiler$Parse$String$ExpectedChar = { $: 1 };
var $gren_lang$compiler_common$Compiler$Parse$String$ExpectedEscapeChar = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$String$ExpectedUnicodeClosing = { $: 5 };
var $gren_lang$compiler_common$Compiler$Parse$String$ExpectedValidUnicode = { $: 4 };
var $gren_lang$core$Char$fromCode = _Char_fromCode;
var $gren_lang$core$Basics$mul = _Basics_mul;
var $gren_lang$compiler_common$Compiler$Parse$Number$hexFolder$ = function(_char, acc) {
	var charCode = $gren_lang$core$Char$toCode(_char);
	return ((charCode >= 48) && (charCode <= 57)) ? (((16 * acc) + charCode) - 48) : (((charCode >= 65) && (charCode <= 70)) ? ((((16 * acc) + 10) + charCode) - 65) : (((charCode >= 97) && (charCode <= 102)) ? ((((16 * acc) + 10) + charCode) - 97) : acc));
};
var $gren_lang$compiler_common$Compiler$Parse$Number$hexFolder = F2($gren_lang$compiler_common$Compiler$Parse$Number$hexFolder$);
var $gren_lang$core$Char$isHexDigit = function(_char) {
	var code = $gren_lang$core$Char$toCode(_char);
	return ((48 <= code) && (code <= 57)) || (((65 <= code) && (code <= 70)) || ((97 <= code) && (code <= 102)));
};
var $gren_lang$compiler_common$Compiler$Parse$Number$hexParser = function(err) {
	return $gren_lang$core$String$Parser$Advanced$andThen$(function(hexString) {
			return $gren_lang$core$String$Parser$Advanced$succeed(A3($gren_lang$core$String$foldl, $gren_lang$compiler_common$Compiler$Parse$Number$hexFolder, 0, hexString));
		}, $gren_lang$core$String$Parser$Advanced$getChompedString($gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompWhile($gren_lang$core$Char$isHexDigit), $gren_lang$core$String$Parser$Advanced$chompIf$($gren_lang$core$Char$isHexDigit, err))));
};
var $gren_lang$compiler_common$Compiler$Parse$String$ExpectedUnicodeOpening = { $: 3 };
var $gren_lang$compiler_common$Compiler$Parse$String$unicodeOpening = $gren_lang$core$String$Parser$Advanced$token$('u{', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedUnicodeOpening);
var $gren_lang$compiler_common$Compiler$Parse$String$coreParser = $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$andThen$(function(_v0) {
			return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$map$(function(_v1) {
						return '\n';
					}, $gren_lang$core$String$Parser$Advanced$chompChar$('n', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedChar)), $gren_lang$core$String$Parser$Advanced$map$(function(_v2) {
						return '\r';
					}, $gren_lang$core$String$Parser$Advanced$chompChar$('r', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedChar)), $gren_lang$core$String$Parser$Advanced$map$(function(_v3) {
						return '\t';
					}, $gren_lang$core$String$Parser$Advanced$chompChar$('t', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedChar)), $gren_lang$core$String$Parser$Advanced$map$(function(_v4) {
						return '\\';
					}, $gren_lang$core$String$Parser$Advanced$chompChar$('\\', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedChar)), $gren_lang$core$String$Parser$Advanced$map$(function(_v5) {
						return '\'';
					}, $gren_lang$core$String$Parser$Advanced$chompChar$('\'', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedChar)), $gren_lang$core$String$Parser$Advanced$map$(function(_v6) {
						return '\"';
					}, $gren_lang$core$String$Parser$Advanced$chompChar$('\"', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedChar)), $gren_lang$core$String$Parser$Advanced$andThen$(function(num) {
						var character = $gren_lang$core$Char$fromCode(num);
						return (character === '\uFFFD') ? $gren_lang$core$String$Parser$Advanced$problem($gren_lang$compiler_common$Compiler$Parse$String$ExpectedValidUnicode) : $gren_lang$core$String$Parser$Advanced$succeed(character);
					}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('}', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedUnicodeClosing), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Number$hexParser($gren_lang$compiler_common$Compiler$Parse$String$ExpectedValidUnicode), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$String$unicodeOpening, $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))))), $gren_lang$core$String$Parser$Advanced$andThen$($gren_lang$core$Basics$composeL$($gren_lang$core$String$Parser$Advanced$problem, $gren_lang$compiler_common$Compiler$Parse$String$ExpectedEscapeChar), $gren_lang$core$String$Parser$Advanced$getChompedString($gren_lang$core$String$Parser$Advanced$chompIf$(function(_v7) {
								return true;
							}, $gren_lang$compiler_common$Compiler$Parse$String$ExpectedChar))) ]);
		}, $gren_lang$core$String$Parser$Advanced$chompChar$('\\', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedChar)), $gren_lang$core$String$Parser$Advanced$andThen$(function(str) {
			var _v9 = $gren_lang$core$String$popFirst(str);
			if (_v9.$ === 1) {
				return $gren_lang$core$String$Parser$Advanced$problem($gren_lang$compiler_common$Compiler$Parse$String$ExpectedChar);
			} else {
				var c = _v9.a.fk;
				return $gren_lang$core$String$Parser$Advanced$succeed(c);
			}
		}, $gren_lang$core$String$Parser$Advanced$getChompedString($gren_lang$core$String$Parser$Advanced$chompIf$(function(_v8) {
					return true;
				}, $gren_lang$compiler_common$Compiler$Parse$String$ExpectedChar))) ]);
var $gren_lang$compiler_common$Compiler$Parse$String$char = $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$String$charQuote, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$String$coreParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$String$charQuote, $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))));
var $gren_lang$compiler_common$Compiler$Parse$Expression$IndentError = { $: 10 };
var $gren_lang$compiler_common$Compiler$Parse$Expression$checkIndent = $gren_lang$core$String$Parser$Advanced$mapError$(function(_v0) {
		return $gren_lang$compiler_common$Compiler$Parse$Expression$IndentError;
	}, $gren_lang$compiler_common$Compiler$Parse$Space$checkIndent);
var $gren_lang$compiler_common$Compiler$Parse$Variable$foreignVarLoop = function(acc) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Variable$upperCase, $gren_lang$core$String$Parser$Advanced$succeed(function(next) {
							return $gren_lang$core$String$Parser$Advanced$Loop({ f3: $gren_lang$core$Array$pushLast$(acc.bK, acc.f3), bK: next });
						})), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Variable$lowerCase, $gren_lang$core$String$Parser$Advanced$succeed(function(varName) {
							return $gren_lang$core$String$Parser$Advanced$Done({ f3: $gren_lang$core$Array$pushLast$(acc.bK, acc.f3), bK: varName });
						})) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('.', $gren_lang$compiler_common$Compiler$Parse$Variable$ExpectedDot), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(acc)) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Variable$foreignVar = $gren_lang$core$String$Parser$Advanced$andThen$(function(first) {
		return $gren_lang$core$String$Parser$Advanced$map$(function(_v0) {
				var module_ = _v0.f3;
				var name = _v0.bK;
				if (module_.length === 0) {
					return $gren_lang$compiler_common$Compiler$Parse$Variable$Unqualified(name);
				} else {
					return $gren_lang$compiler_common$Compiler$Parse$Variable$Qualified({ f3: A2($gren_lang$core$String$join, '.', module_), bK: name });
				}
			}, $gren_lang$core$String$Parser$Advanced$loop$({ f3: [  ], bK: first }, $gren_lang$compiler_common$Compiler$Parse$Variable$foreignVarLoop));
	}, $gren_lang$compiler_common$Compiler$Parse$Variable$upperCase);
var $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedKeyword = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$PAlias = function (a) {
	return { $: 3, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$PAnything = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$PArray = function (a) {
	return { $: 6, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$PChr = function (a) {
	return { $: 7, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$PCtor = function (a) {
	return { $: 4, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$PCtorQual = function (a) {
	return { $: 5, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$PRecord = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$PStr = function (a) {
	return { $: 8, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$PVar = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$StringError = function (a) {
	return { $: 5, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$VariableError = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$lowerCaseVariable = $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Pattern$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$lowerCase);
var $gren_lang$compiler_common$Compiler$Parse$Pattern$FloatNotSupported = { $: 4 };
var $gren_lang$compiler_common$Compiler$Parse$Pattern$NumberError = function (a) {
	return { $: 3, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$PInt = function (a) {
	return { $: 9, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$numberBy = function(numParser) {
	return $gren_lang$core$String$Parser$Advanced$andThen$(function(num) {
			switch (num.$) {
				case 0:
					var _int = num.a;
					return $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$PInt({ dp: false, bZ: _int }));
				case 2:
					var _int = num.a;
					return $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$PInt({ dp: true, bZ: _int }));
				default:
					return $gren_lang$core$String$Parser$Advanced$problem($gren_lang$compiler_common$Compiler$Parse$Pattern$FloatNotSupported);
			}
		}, $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Pattern$NumberError, numParser));
};
var $gren_lang$compiler_common$Compiler$Parse$Number$FloatingPoint = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Number$Hex = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Number$Integer = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Number$NotANumber = 0;
var $gren_lang$compiler_common$Compiler$Parse$Number$ExpectedHex = 3;
var $gren_lang$compiler_common$Compiler$Parse$Number$LeadingZero = 1;
var $gren_lang$compiler_common$Compiler$Parse$Number$ExpectedInt = 2;
var $gren_lang$core$String$toFloat = _String_toFloat;
var $gren_lang$compiler_common$Compiler$Parse$Number$fractalParser = function(str) {
	return $gren_lang$core$String$Parser$Advanced$andThen$(function(postDot) {
			var _v0 = $gren_lang$core$String$toFloat(str + ('.' + postDot));
			if (_v0.$ === 1) {
				return $gren_lang$core$String$Parser$Advanced$problem(0);
			} else {
				var _float = _v0.a;
				return $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Parse$Number$FloatingPoint(_float));
			}
		}, $gren_lang$core$String$Parser$Advanced$getChompedString($gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompWhile($gren_lang$core$Char$isDigit), $gren_lang$core$String$Parser$Advanced$chompIf$($gren_lang$core$Char$isDigit, 2))));
};
var $gren_lang$compiler_common$Compiler$Parse$Number$zeroOrHigher = $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$andThen$(function(_v0) {
			return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$map$($gren_lang$compiler_common$Compiler$Parse$Number$Hex, $gren_lang$core$String$Parser$Advanced$andThen$(function(_v1) {
							return $gren_lang$compiler_common$Compiler$Parse$Number$hexParser(3);
						}, $gren_lang$core$String$Parser$Advanced$chompChar$('x', 0))), $gren_lang$core$String$Parser$Advanced$andThen$(function(_v2) {
						return $gren_lang$compiler_common$Compiler$Parse$Number$fractalParser('0');
					}, $gren_lang$core$String$Parser$Advanced$chompChar$('.', 0)), $gren_lang$core$String$Parser$Advanced$andThen$(function(_v3) {
						return $gren_lang$core$String$Parser$Advanced$problem(1);
					}, $gren_lang$core$String$Parser$Advanced$chompIf$($gren_lang$core$Char$isDigit, 0)), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Parse$Number$Integer(0)) ]);
		}, $gren_lang$core$String$Parser$Advanced$chompChar$('0', 0)), $gren_lang$core$String$Parser$Advanced$andThen$(function(str) {
			var _v4 = $gren_lang$core$String$toInt(str);
			if (_v4.$ === 1) {
				return $gren_lang$core$String$Parser$Advanced$problem(0);
			} else {
				var num = _v4.a;
				return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$andThen$(function(_v5) {
							return $gren_lang$compiler_common$Compiler$Parse$Number$fractalParser(str);
						}, $gren_lang$core$String$Parser$Advanced$chompChar$('.', 0)), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Parse$Number$Integer(num)) ]);
			}
		}, $gren_lang$core$String$Parser$Advanced$getChompedString($gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompWhile($gren_lang$core$Char$isDigit), $gren_lang$core$String$Parser$Advanced$chompIf$($gren_lang$core$Char$isDigit, 0)))) ]);
var $gren_lang$compiler_common$Compiler$Parse$Number$parser = $gren_lang$core$String$Parser$Advanced$andThen$(function(successCase) {
		return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$andThen$(function(_v1) {
					return $gren_lang$core$String$Parser$Advanced$problem(0);
				}, $gren_lang$core$String$Parser$Advanced$chompIf$($gren_lang$core$Char$isAlpha, 0)), $gren_lang$core$String$Parser$Advanced$succeed(successCase) ]);
	}, $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Number$zeroOrHigher, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('-', 0), $gren_lang$core$String$Parser$Advanced$succeed(function(outcome) {
						switch (outcome.$) {
							case 0:
								var _int = outcome.a;
								return $gren_lang$compiler_common$Compiler$Parse$Number$Integer(-_int);
							case 1:
								var _float = outcome.a;
								return $gren_lang$compiler_common$Compiler$Parse$Number$FloatingPoint(-_float);
							default:
								var hex = outcome.a;
								return $gren_lang$compiler_common$Compiler$Parse$Number$Hex(-hex);
						}
					}))), $gren_lang$compiler_common$Compiler$Parse$Number$zeroOrHigher ]));
var $gren_lang$compiler_common$SourcePosition$parser = function(p) {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$(p, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(start, v, end) {
							return $gren_lang$compiler_common$SourcePosition$at$(start, end, v);
						})))));
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$SpaceError = function (a) {
	return { $: 6, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser = $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Pattern$SpaceError, $gren_lang$compiler_common$Compiler$Parse$Space$parser);
var $gren_lang$compiler_common$Compiler$Parse$String$ExpectedNewline = { $: 6 };
var $gren_lang$compiler_common$Compiler$Parse$String$MisalignedMultiQuotes = { $: 7 };
var $gren_lang$compiler_common$Compiler$Parse$String$crlf = $gren_lang$core$String$Parser$Advanced$token$('\r\n', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedNewline);
var $gren_lang$compiler_common$Compiler$Parse$String$innerSingleLineString$ = function(endToken, str) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$map$(function(_v0) {
				return $gren_lang$core$String$Parser$Advanced$Done(str);
			}, $gren_lang$core$String$Parser$Advanced$skip$(endToken, $gren_lang$core$String$Parser$Advanced$succeed({  }))), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$String$crlf, $gren_lang$core$String$Parser$Advanced$succeed(function(_v1) {
					return $gren_lang$core$String$Parser$Advanced$Loop(A2($gren_lang$core$String$pushLast, '\n', str));
				})), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$String$coreParser, $gren_lang$core$String$Parser$Advanced$succeed(function(chr) {
					return $gren_lang$core$String$Parser$Advanced$Loop(A2($gren_lang$core$String$pushLast, chr, str));
				})) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$String$innerSingleLineString = F2($gren_lang$compiler_common$Compiler$Parse$String$innerSingleLineString$);
var $gren_lang$compiler_common$Compiler$Parse$String$multiLineStrQuote = $gren_lang$core$String$Parser$Advanced$token$('\"\"\"', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedQuote);
var $gren_lang$compiler_common$Compiler$Parse$String$singleLineStrQuote = $gren_lang$core$String$Parser$Advanced$token$('\"', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedQuote);
var $gren_lang$core$String$takeFirst$ = function(n, string) {
	return (n < 1) ? '' : A3($gren_lang$core$String$slice, 0, n, string);
};
var $gren_lang$core$String$takeFirst = F2($gren_lang$core$String$takeFirst$);
var $gren_lang$core$String$trimRight = _String_trimRight;
var $gren_lang$compiler_common$Compiler$Parse$String$string = $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$andThen$(function(_v0) {
			var start = _v0.cE;
			var str = _v0.gM;
			var end = _v0.c6;
			if (!_Utils_eq(end.aZ - 3, start.aZ)) {
				return $gren_lang$core$String$Parser$Advanced$problem($gren_lang$compiler_common$Compiler$Parse$String$MisalignedMultiQuotes);
			} else {
				var requiredIndent = start.aZ - 1;
				var lines = A2($gren_lang$core$String$split, '\n', str);
				var linesSufficientlyIndented = $gren_lang$core$Array$all$(function(line) {
						var whiteSpacePortion = $gren_lang$core$String$takeFirst$(requiredIndent, line);
						return _Utils_eq($gren_lang$core$String$count(whiteSpacePortion), requiredIndent) && $gren_lang$core$String$all$(function(c) {
								return c === ' ';
							}, whiteSpacePortion);
					}, lines);
				return linesSufficientlyIndented ? $gren_lang$core$String$Parser$Advanced$succeed(A2($gren_lang$core$String$join, '\n', A2($gren_lang$core$Array$map, $gren_lang$core$String$dropFirst(requiredIndent), lines))) : $gren_lang$core$String$Parser$Advanced$problem($gren_lang$compiler_common$Compiler$Parse$String$MisalignedMultiQuotes);
			}
		}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$('', $gren_lang$compiler_common$Compiler$Parse$String$innerSingleLineString($gren_lang$compiler_common$Compiler$Parse$String$multiLineStrQuote)), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$chompChar$('\n', $gren_lang$compiler_common$Compiler$Parse$String$ExpectedNewline), $gren_lang$compiler_common$Compiler$Parse$String$crlf ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$String$multiLineStrQuote, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(startPos, str, endPos) {
										return { c6: endPos, cE: startPos, gM: $gren_lang$core$String$trimRight(str) };
									})))))))), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$('', $gren_lang$compiler_common$Compiler$Parse$String$innerSingleLineString($gren_lang$compiler_common$Compiler$Parse$String$singleLineStrQuote)), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$String$singleLineStrQuote, $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))) ]);
var $gren_lang$compiler_common$Compiler$Parse$Pattern$arrayInnerLoop = function(acc) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(']', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar(']')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(acc))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parser(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(',', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar(',')), $gren_lang$core$String$Parser$Advanced$succeed(function(expr) {
								return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(expr, acc));
							}))))) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$recordInnerLoop = function(acc) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('}', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar('}')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(acc))), $gren_lang$core$String$Parser$Advanced$andThen$(function(field) {
				return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('}', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar('}')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done($gren_lang$core$Array$pushLast$({ dd: field, dO: $gren_lang$core$Maybe$Nothing }, acc)))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(',', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar(',')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$({ dd: field, dO: $gren_lang$core$Maybe$Nothing }, acc))))), $gren_lang$core$String$Parser$Advanced$andThen$(function(pattern) {
							return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(',', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar(',')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$({ dd: field, dO: $gren_lang$core$Maybe$Just(pattern) }, acc))))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('}', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar('}')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done($gren_lang$core$Array$pushLast$({ dd: field, dO: $gren_lang$core$Maybe$Just(pattern) }, acc)))) ]);
						}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parser(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('=', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar('=')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))))) ]);
			}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Pattern$lowerCaseVariable, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(start, fieldName, end) {
										return $gren_lang$compiler_common$SourcePosition$at$(start, end, fieldName);
									}))))))) ]);
};
function $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parser() {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Pattern$lowerCaseVariable), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('as', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedKeyword('as')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Just)))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Nothing) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parserNoAlias(), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(pattern, alias) {
							if (!alias.$) {
								var name = alias.a;
								return $gren_lang$compiler_common$SourcePosition$at$(pattern.cE, name.c6, $gren_lang$compiler_common$Compiler$Ast$Source$PAlias({ bK: name, dO: pattern }));
							} else {
								return pattern;
							}
						})))));
}
function $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parserNoAlias() {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$record(), $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$array(), $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parenthesized(), $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$term() ]);
}
function $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$array() {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$andThen$(function(firstArg) {
						return $gren_lang$core$String$Parser$Advanced$loop$([ firstArg ], $gren_lang$compiler_common$Compiler$Parse$Pattern$arrayInnerLoop);
					}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$lazy(function(_v9) {
								return $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parserNoAlias();
							}))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(']', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar(']')), $gren_lang$core$String$Parser$Advanced$succeed([  ])) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('[', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar('[')), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(start, arr, end) {
									return $gren_lang$compiler_common$SourcePosition$at$(start, end, $gren_lang$compiler_common$Compiler$Ast$Source$PArray(arr));
								})))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parenthesized() {
	return $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(')', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar(')')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Pattern$numberBy($gren_lang$compiler_common$Compiler$Parse$Number$parser)), $gren_lang$core$String$Parser$Advanced$lazy(function(_v8) {
							return $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parser();
						}) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('(', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar('(')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$record() {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([  ], $gren_lang$compiler_common$Compiler$Parse$Pattern$recordInnerLoop), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('{', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar('{')), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(start, fields, end) {
									return $gren_lang$compiler_common$SourcePosition$at$(start, end, $gren_lang$compiler_common$Compiler$Ast$Source$PRecord(fields));
								})))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$term() {
	return $gren_lang$core$String$Parser$Advanced$map$(function(t) {
			switch (t.bZ.$) {
				case 4:
					var _v6 = t.bZ.a;
					var name = _v6.bK;
					var arg = _v6.b$;
					return { c6: $gren_lang$core$Maybe$withDefault$(name.c6, $gren_lang$core$Maybe$map$(function ($) {
								return $.c6;
							}, arg)), cE: t.cE, bZ: t.bZ };
				case 5:
					var _v7 = t.bZ.a;
					var varRegion = _v7.g5;
					var arg = _v7.b$;
					return { c6: $gren_lang$core$Maybe$withDefault$(varRegion.c6, $gren_lang$core$Maybe$map$(function ($) {
								return $.c6;
							}, arg)), cE: t.cE, bZ: t.bZ };
				default:
					return t;
			}
		}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$compiler_common$Compiler$Parse$Pattern$lowerCaseVariable, $gren_lang$core$String$Parser$Advanced$succeed('') ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('_', $gren_lang$compiler_common$Compiler$Parse$Pattern$ExpectedChar('_')), $gren_lang$core$String$Parser$Advanced$succeed(function(name) {
									return $gren_lang$compiler_common$Compiler$Ast$Source$PAnything(name);
								}))), $gren_lang$core$String$Parser$Advanced$map$($gren_lang$compiler_common$Compiler$Ast$Source$PVar, $gren_lang$compiler_common$Compiler$Parse$Pattern$lowerCaseVariable), $gren_lang$core$String$Parser$Advanced$map$(function(_v1) {
							var _v2 = _v1.eU;
							var start = _v2.cE;
							var end = _v2.c6;
							var value = _v2.bZ;
							var arg = _v1.b$;
							if (!value.$) {
								var ctor = value.a;
								return $gren_lang$compiler_common$Compiler$Ast$Source$PCtor({ b$: arg, bK: $gren_lang$compiler_common$SourcePosition$at$(start, end, ctor) });
							} else {
								var _v4 = value.a;
								var module_ = _v4.f3;
								var name = _v4.bK;
								return $gren_lang$compiler_common$Compiler$Ast$Source$PCtorQual({ b$: arg, f3: module_, bK: name, g5: { c6: end, cE: start } });
							}
						}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v0) {
											return $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parserNoAlias();
										}), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Just)), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Nothing) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Pattern$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$SourcePosition$parser($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Pattern$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$foreignUpper)), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(_var, arg) {
												return { b$: arg, eU: _var };
											})))))), $gren_lang$compiler_common$Compiler$Parse$Pattern$numberBy($gren_lang$compiler_common$Compiler$Parse$Number$zeroOrHigher), $gren_lang$core$String$Parser$Advanced$map$($gren_lang$compiler_common$Compiler$Ast$Source$PStr, $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Pattern$StringError, $gren_lang$compiler_common$Compiler$Parse$String$string)), $gren_lang$core$String$Parser$Advanced$map$($gren_lang$compiler_common$Compiler$Ast$Source$PChr, $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Pattern$StringError, $gren_lang$compiler_common$Compiler$Parse$String$char)) ]), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(start, expr, end) {
								return $gren_lang$compiler_common$SourcePosition$at$(start, end, expr);
							}))))));
}
var $gren_lang$compiler_common$Compiler$Parse$Pattern$parser = $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parser();
$gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Pattern$parser;
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$parserNoAlias = $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parserNoAlias();
$gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parserNoAlias = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Pattern$parserNoAlias;
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$array = $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$array();
$gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$array = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Pattern$array;
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$parenthesized = $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parenthesized();
$gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$parenthesized = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Pattern$parenthesized;
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$record = $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$record();
$gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$record = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Pattern$record;
};
var $gren_lang$compiler_common$Compiler$Parse$Pattern$term = $gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$term();
$gren_lang$compiler_common$Compiler$Parse$Pattern$cyclic$term = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Pattern$term;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$SpaceError = function (a) {
	return { $: 13, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser = $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$SpaceError, $gren_lang$compiler_common$Compiler$Parse$Space$parser);
var $gren_lang$compiler_common$Compiler$Parse$Expression$functionArgsParser$ = function(terminator, array) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$(terminator, $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedKeyword(terminator)), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(array))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$PatternError, $gren_lang$compiler_common$Compiler$Parse$Pattern$parser), $gren_lang$core$String$Parser$Advanced$succeed(function(expr) {
						return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(expr, array));
					}))) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$functionArgsParser = F2($gren_lang$compiler_common$Compiler$Parse$Expression$functionArgsParser$);
var $gren_lang$core$String$Parser$Advanced$keyword$ = function(kwd, expecting) {
	var progress = !$gren_lang$core$String$isEmpty(kwd);
	return function(s) {
		var _v0 = $gren_lang$core$String$Parser$Advanced$isSubString$(kwd, s.g, s.bl, s.aZ, s.d);
		var newOffset = _v0.cq;
		var newRow = _v0.cr;
		var newCol = _v0.cp;
		return (_Utils_eq(newOffset, -1) || (0 <= $gren_lang$core$String$Parser$Advanced$isSubChar$(function(c) {
				return $gren_lang$core$Char$isAlphaNum(c) || (c === '_');
			}, newOffset, s.d))) ? $gren_lang$core$String$Parser$Advanced$Bad({ k: $gren_lang$core$String$Parser$Advanced$fromState$(s, expecting), c: false }) : $gren_lang$core$String$Parser$Advanced$Good({ c: progress, ea: { aZ: newCol, g: newOffset, gh: s.gh, bl: newRow, d: s.d }, bZ: {  } });
	};
};
var $gren_lang$core$String$Parser$Advanced$keyword = F2($gren_lang$core$String$Parser$Advanced$keyword$);
var $gren_lang$compiler_common$Compiler$Parse$Expression$OperatorError = function (a) {
	return { $: 14, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Operator$BadArrow = 2;
var $gren_lang$compiler_common$Compiler$Parse$Operator$BadDot = 0;
var $gren_lang$compiler_common$Compiler$Parse$Operator$BadEquals = 3;
var $gren_lang$compiler_common$Compiler$Parse$Operator$BadHasType = 4;
var $gren_lang$compiler_common$Compiler$Parse$Operator$BadOperatorCharacter = 5;
var $gren_lang$compiler_common$Compiler$Parse$Operator$BadPipe = 1;
var $gren_lang$compiler_common$Compiler$Parse$Operator$opCharSet = $gren_lang$core$Set$set$('!', $gren_lang$core$Set$set$('%', $gren_lang$core$Set$set$('?', $gren_lang$core$Set$set$('^', $gren_lang$core$Set$set$('|', $gren_lang$core$Set$set$('&', $gren_lang$core$Set$set$(':', $gren_lang$core$Set$set$('>', $gren_lang$core$Set$set$('<', $gren_lang$core$Set$set$('.', $gren_lang$core$Set$set$('=', $gren_lang$core$Set$set$('*', $gren_lang$core$Set$set$('/', $gren_lang$core$Set$set$('-', $gren_lang$core$Set$set$('+', $gren_lang$core$Set$empty)))))))))))))));
var $gren_lang$compiler_common$Compiler$Parse$Operator$parser = $gren_lang$core$String$Parser$Advanced$andThen$(function(operator) {
		switch (operator) {
			case '.':
				return $gren_lang$core$String$Parser$Advanced$problem(0);
			case '|':
				return $gren_lang$core$String$Parser$Advanced$problem(1);
			case '->':
				return $gren_lang$core$String$Parser$Advanced$problem(2);
			case '=':
				return $gren_lang$core$String$Parser$Advanced$problem(3);
			case ':':
				return $gren_lang$core$String$Parser$Advanced$problem(4);
			default:
				return $gren_lang$core$String$Parser$Advanced$succeed(operator);
		}
	}, $gren_lang$core$String$Parser$Advanced$getChompedString($gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompWhile(function(c) {
					return $gren_lang$core$Set$member$(c, $gren_lang$compiler_common$Compiler$Parse$Operator$opCharSet);
				}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompIf$(function(c) {
						return $gren_lang$core$Set$member$(c, $gren_lang$compiler_common$Compiler$Parse$Operator$opCharSet);
					}, 5), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$join(''))))));
var $gren_lang$compiler_common$Compiler$Parse$Expression$operatorParser = $gren_lang$core$String$Parser$Advanced$backtrackable($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$OperatorError, $gren_lang$compiler_common$Compiler$Parse$Operator$parser));
var $gren_lang$compiler_common$Compiler$Parse$Expression$pushStateArg$ = function(arg, state) {
	return _Utils_update(state, { ap: $gren_lang$core$Array$pushLast$(arg, state.ap) });
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$pushStateArg = F2($gren_lang$compiler_common$Compiler$Parse$Expression$pushStateArg$);
var $gren_lang$compiler_common$Compiler$Ast$Source$Binops = function (a) {
	return { $: 10, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Call = function (a) {
	return { $: 12, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$toCall$ = function(fn, args) {
	if ($gren_lang$core$Array$isEmpty(args)) {
		return fn;
	} else {
		var argsEnd = $gren_lang$core$Maybe$withDefault$(fn.c6, $gren_lang$core$Maybe$map$(function ($) {
					return $.c6;
				}, $gren_lang$core$Array$last(args)));
		return $gren_lang$compiler_common$SourcePosition$at$(fn.cE, argsEnd, $gren_lang$compiler_common$Compiler$Ast$Source$Call({ cR: args, fn: fn }));
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$toCall = F2($gren_lang$compiler_common$Compiler$Parse$Expression$toCall$);
var $gren_lang$compiler_common$Compiler$Parse$Expression$pushStateOperator$ = function(expr, operator, state) {
	var leftExpression = $gren_lang$compiler_common$Compiler$Parse$Expression$toCall$(state.a$, state.ap);
	var binopExpression = $gren_lang$compiler_common$SourcePosition$at$(leftExpression.cE, expr.c6, $gren_lang$compiler_common$Compiler$Ast$Source$Binops({ du: leftExpression, dK: operator, d0: expr }));
	var _v0 = state.aY;
	if (!_v0.$) {
		var existingBinop = _v0.a;
		return { aY: $gren_lang$core$Maybe$Just($gren_lang$compiler_common$SourcePosition$at$(existingBinop.cE, binopExpression.c6, $gren_lang$compiler_common$Compiler$Ast$Source$Binops({ du: existingBinop, dK: operator, d0: binopExpression }))), ap: [  ], a$: binopExpression };
	} else {
		return { aY: $gren_lang$core$Maybe$Just(binopExpression), ap: [  ], a$: expr };
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$pushStateOperator = F3($gren_lang$compiler_common$Compiler$Parse$Expression$pushStateOperator$);
var $gren_lang$core$String$Parser$Advanced$scopedUpdatePayload$ = function(beforeGet, afterGet, update, _v0) {
	var parse = _v0;
	return function(s) {
		var before = beforeGet(s.gh);
		var after = afterGet(s.gh);
		var _v1 = parse($gren_lang$core$String$Parser$Advanced$setStatePayload$(A2(update, before, s.gh), s));
		if (!_v1.$) {
			var _v2 = _v1.a;
			var pred = _v2.c;
			var value = _v2.bZ;
			var state = _v2.ea;
			return $gren_lang$core$String$Parser$Advanced$Good({ c: pred, ea: $gren_lang$core$String$Parser$Advanced$setStatePayload$(A2(update, after, state.gh), state), bZ: value });
		} else {
			var bad = _v1;
			return bad;
		}
	};
};
var $gren_lang$core$String$Parser$Advanced$scopedUpdatePayload = F4($gren_lang$core$String$Parser$Advanced$scopedUpdatePayload$);
var $gren_lang$compiler_common$Compiler$Parse$Space$scopeIndentToLineStart = function(p) {
	return $gren_lang$core$String$Parser$Advanced$scopedUpdatePayload$(function ($) {
			return $.fU;
		}, function ($) {
			return $.fx;
		}, F2(function(newIndent, payload) {
				return _Utils_update(payload, { fx: newIndent });
			}), p);
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$argOrOperatorLoop = function(state) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$andThen$(function(operator) {
					return (operator.bZ === '-') ? $gren_lang$core$String$Parser$Advanced$andThen$(function(pos) {
							return _Utils_eq(operator.c6.aZ, pos.aZ) ? $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$term(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$checkIndent, $gren_lang$core$String$Parser$Advanced$succeed(function(term_) {
											return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$compiler_common$Compiler$Parse$Expression$pushStateArg$($gren_lang$compiler_common$SourcePosition$at$(operator.cE, term_.c6, $gren_lang$compiler_common$Compiler$Ast$Source$Negate(term_)), state));
										}))) : $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser(), $gren_lang$core$String$Parser$Advanced$succeed(function(nextTerm) {
										return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$compiler_common$Compiler$Parse$Expression$pushStateOperator$(nextTerm, operator, state));
									}));
						}, $gren_lang$core$String$Parser$Advanced$getPosition) : $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser(), $gren_lang$core$String$Parser$Advanced$succeed(function(nextTerm) {
								return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$compiler_common$Compiler$Parse$Expression$pushStateOperator$(nextTerm, operator, state));
							}));
				}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Expression$operatorParser), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$term(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$checkIndent, $gren_lang$core$String$Parser$Advanced$succeed(function(arg) {
							return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$compiler_common$Compiler$Parse$Expression$pushStateArg$(arg, state));
						})))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(state)) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$ifElseLoop$ = function(startPos, branches) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$ifBranchParser(), $gren_lang$core$String$Parser$Advanced$succeed(function(branch) {
					return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(branch, branches));
				})), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser(), $gren_lang$core$String$Parser$Advanced$succeed(function(expr) {
						return $gren_lang$core$String$Parser$Advanced$Done($gren_lang$compiler_common$SourcePosition$at$(startPos, expr.c6, $gren_lang$compiler_common$Compiler$Ast$Source$If({ cV: branches, e3: expr })));
					}))) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$ifElseLoop = F2($gren_lang$compiler_common$Compiler$Parse$Expression$ifElseLoop$);
var $gren_lang$compiler_common$Compiler$Parse$Expression$innerArrayParser = function(array) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(']', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar(']')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(array))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v14) {
						return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
					}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(',', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar(',')), $gren_lang$core$String$Parser$Advanced$succeed(function(expr) {
								return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(expr, array));
							}))))) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$innerRecordParser = function(array) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('}', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('}')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(array))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$recordFieldParser(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(',', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar(',')), $gren_lang$core$String$Parser$Advanced$succeed(function(expr) {
								return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(expr, array));
							}))))) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$letDefLoopParser = function(defs) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$keyword$('in', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedKeyword('in')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(defs))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefParser(), $gren_lang$core$String$Parser$Advanced$succeed(function(def) {
						return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(def, defs));
					}))) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$whenBranchLoopParser = function(branches) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$whenBranchParser(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$checkIndent, $gren_lang$core$String$Parser$Advanced$succeed(function(branch) {
						return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(branch, branches));
					}))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(branches)) ]);
};
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser() {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$ifParser(), $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$whenParser(), $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letParser(), $gren_lang$core$String$Parser$Advanced$andThen$(function(firstTerm) {
				var completionParser = $gren_lang$core$String$Parser$Advanced$map$(function(state) {
						var finalExpression = $gren_lang$compiler_common$Compiler$Parse$Expression$toCall$(state.a$, state.ap);
						var _v27 = state.aY;
						if (!_v27.$) {
							var binopExpr = _v27.a;
							return binopExpr;
						} else {
							return finalExpression;
						}
					}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$({ aY: $gren_lang$core$Maybe$Nothing, ap: [  ], a$: firstTerm }, $gren_lang$compiler_common$Compiler$Parse$Expression$argOrOperatorLoop), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))));
				var indentationBumped = $gren_lang$compiler_common$Compiler$Parse$Space$scopeIndentToLineStart(completionParser);
				var _v26 = firstTerm.bZ;
				switch (_v26.$) {
					case 3:
						return indentationBumped;
					case 4:
						return indentationBumped;
					default:
						return completionParser;
				}
			}, $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$possiblyNegativeTerm()) ]);
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$possiblyNegativeTerm() {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$term(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('-', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('-')), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(start, expr, end) {
									return $gren_lang$compiler_common$SourcePosition$at$(start, end, $gren_lang$compiler_common$Compiler$Ast$Source$Negate(expr));
								})))))), $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$term() ]);
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$term() {
	return $gren_lang$core$String$Parser$Advanced$andThen$(function(expr) {
			var _v24 = expr.bZ;
			_v24$2:
			while (true) {
				switch (_v24.$) {
					case 3:
						if (!_v24.a.b_) {
							var _v25 = _v24.a.b_;
							return $gren_lang$compiler_common$Compiler$Parse$Expression$accessible(expr);
						} else {
							break _v24$2;
						}
					case 11:
						var body = _v24.a.eC;
						return $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$SourcePosition$at$(expr.cE, body.c6, expr.bZ));
					default:
						break _v24$2;
				}
			}
			return $gren_lang$core$String$Parser$Advanced$succeed(expr);
		}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(')', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar(')')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$andThen$(function(operator) {
											return (operator.bZ === '-') ? $gren_lang$core$String$Parser$Advanced$andThen$(function(pos) {
													return _Utils_eq(operator.c6.aZ, pos.aZ) ? $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$term(), $gren_lang$core$String$Parser$Advanced$succeed(function(term_) {
																return $gren_lang$compiler_common$SourcePosition$at$(operator.cE, term_.c6, $gren_lang$compiler_common$Compiler$Ast$Source$Negate(term_));
															})) : $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
												}, $gren_lang$core$String$Parser$Advanced$getPosition) : $gren_lang$core$String$Parser$Advanced$succeed({ c6: operator.c6, cE: operator.cE, bZ: $gren_lang$compiler_common$Compiler$Ast$Source$Operator(operator.bZ) });
										}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Expression$operatorParser), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity)))), $gren_lang$core$String$Parser$Advanced$lazy(function(_v19) {
											return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
										}) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('(', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('(')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$Parens)))))), $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$function(), $gren_lang$core$String$Parser$Advanced$map$(function(name) {
							return $gren_lang$compiler_common$Compiler$Ast$Source$Var({ bK: name, b_: 0 });
						}, $gren_lang$compiler_common$Compiler$Parse$Expression$lowerCaseVariable), $gren_lang$core$String$Parser$Advanced$andThen$(function(foreign) {
							if (!foreign.$) {
								var name = foreign.a;
								return $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$Var({ bK: name, b_: 1 }));
							} else {
								var _v21 = foreign.a;
								var module_ = _v21.f3;
								var name = _v21.bK;
								var _v22 = $gren_lang$core$String$popFirst(name);
								if (!_v22.$) {
									var first = _v22.a.fk;
									return $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Char$isUpper(first) ? $gren_lang$compiler_common$Compiler$Ast$Source$VarQual({ bK: name, dV: module_, b_: 1 }) : $gren_lang$compiler_common$Compiler$Ast$Source$VarQual({ bK: name, dV: module_, b_: 0 }));
								} else {
									return $gren_lang$core$String$Parser$Advanced$problem($gren_lang$compiler_common$Compiler$Parse$Expression$InternalError);
								}
							}
						}, $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$foreignVar)), $gren_lang$core$String$Parser$Advanced$map$($gren_lang$compiler_common$Compiler$Ast$Source$NumberLiteral, $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$NumberError, $gren_lang$compiler_common$Compiler$Parse$Number$parser)), $gren_lang$core$String$Parser$Advanced$map$($gren_lang$compiler_common$Compiler$Ast$Source$CharLiteral, $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$StringError, $gren_lang$compiler_common$Compiler$Parse$String$char)), $gren_lang$core$String$Parser$Advanced$map$($gren_lang$compiler_common$Compiler$Ast$Source$StringLiteral, $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$StringError, $gren_lang$compiler_common$Compiler$Parse$String$string)), $gren_lang$core$String$Parser$Advanced$map$($gren_lang$compiler_common$Compiler$Ast$Source$ArrayLiteral, $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$arrayParser()), $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$recordParser(), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$lowerCaseVariable, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('.', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('.')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$Accessor))), $gren_lang$core$String$Parser$Advanced$andThen$(function(_v23) {
							return $gren_lang$core$String$Parser$Advanced$problem($gren_lang$compiler_common$Compiler$Parse$Expression$WildcardAttempt);
						}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$lowerCaseVariable, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('_', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('_')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity)))) ]), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(start, expr, end) {
								return $gren_lang$compiler_common$SourcePosition$at$(start, end, expr);
							}))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$arrayParser() {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(']', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar(']')), $gren_lang$core$String$Parser$Advanced$succeed([  ])), $gren_lang$core$String$Parser$Advanced$andThen$(function(firstElement) {
					return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([ firstElement ], $gren_lang$compiler_common$Compiler$Parse$Expression$innerArrayParser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity)));
				}, $gren_lang$core$String$Parser$Advanced$lazy(function(_v18) {
						return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
					})) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('[', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('[')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$function() {
	return $gren_lang$core$String$Parser$Advanced$andThen$(function(firstArg) {
			return $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([ firstArg ], $gren_lang$compiler_common$Compiler$Parse$Expression$functionArgsParser('->')), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(args, body) {
										return $gren_lang$compiler_common$Compiler$Ast$Source$Lambda({ eC: body, gg: args });
									}))))));
		}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$PatternError, $gren_lang$compiler_common$Compiler$Parse$Pattern$parser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('\\', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('\\')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$ifParser() {
	return $gren_lang$core$String$Parser$Advanced$andThen$(function(_v17) {
			var startPos = _v17.gK;
			var firstBranch = _v17.de;
			return $gren_lang$core$String$Parser$Advanced$loop$([ firstBranch ], $gren_lang$compiler_common$Compiler$Parse$Expression$ifElseLoop(startPos));
		}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$ifBranchParser(), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F2(function(startPos, firstBranch) {
							return { de: firstBranch, gK: startPos };
						})))));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$ifBranchParser() {
	return $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$keyword$('else', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedKeyword('else')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v16) {
							return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
						}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$keyword$('then', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedKeyword('then')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v15) {
											return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
										}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$keyword$('if', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedKeyword('if')), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(test, body) {
														return { eC: body, gU: test };
													}))))))))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letParser() {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v13) {
					return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
				}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([  ], $gren_lang$compiler_common$Compiler$Parse$Expression$letDefLoopParser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefParser(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$keyword$('let', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedKeyword('let')), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F5(function(start, firstDef, defs, body, end) {
													return $gren_lang$compiler_common$SourcePosition$at$(start, end, $gren_lang$compiler_common$Compiler$Ast$Source$Let({ eC: body, eX: $gren_lang$core$Array$pushFirst$(firstDef, defs) }));
												})))))))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefParser() {
	return $gren_lang$compiler_common$Compiler$Parse$Space$scopeIndentToLineStart($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$map$(function(_v12) {
					var start = _v12.cE;
					var value = _v12.bZ;
					var end = _v12.c6;
					return $gren_lang$compiler_common$SourcePosition$at$(start, end, $gren_lang$compiler_common$Compiler$Ast$Source$Define(value));
				}, $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefNamedParser()), $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefDestructParser() ]));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefDestructParser() {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v11) {
				return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
			}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('=', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('=')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$PatternError, $gren_lang$compiler_common$Compiler$Parse$Pattern$parser), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(pattern, body) {
									return $gren_lang$compiler_common$SourcePosition$at$(pattern.cE, body.c6, $gren_lang$compiler_common$Compiler$Ast$Source$Destruct({ eC: body, dO: pattern }));
								})))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefNamedParser() {
	return $gren_lang$core$String$Parser$Advanced$andThen$(function(_var) {
			return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v10) {
						return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
					}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([  ], $gren_lang$compiler_common$Compiler$Parse$Expression$functionArgsParser('=')), $gren_lang$core$String$Parser$Advanced$scopedUpdatePayload$(function(_v9) {
								return _var.cE.aZ;
							}, function ($) {
								return $.fx;
							}, F2(function(nextValue, payload) {
									return _Utils_update(payload, { fx: nextValue });
								}), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$andThen$(function(var2) {
													return (!_Utils_eq(_var.bZ, var2)) ? $gren_lang$core$String$Parser$Advanced$problem($gren_lang$compiler_common$Compiler$Parse$Expression$NameMismatch({ fk: _var.bZ, gD: var2 })) : $gren_lang$core$String$Parser$Advanced$succeed({  });
												}, $gren_lang$compiler_common$Compiler$Parse$Expression$lowerCaseVariable), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$TypeError, $gren_lang$compiler_common$Compiler$Parse$Type$expression), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(':', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar(':')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Just)))))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Nothing) ]), $gren_lang$core$String$Parser$Advanced$succeed(F3(function(signature, args, body) {
											var bodyEnd = body.c6;
											return $gren_lang$compiler_common$SourcePosition$at$(_var.cE, bodyEnd, { cR: args, eC: body, bK: _var, g_: signature });
										})))))));
		}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Expression$lowerCaseVariable), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$recordFieldParser() {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v8) {
				return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
			}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('=', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('=')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$lowerCaseVariable, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F4(function(fieldStart, field, fieldEnd, value) {
											return { dd: $gren_lang$compiler_common$SourcePosition$at$(fieldStart, fieldEnd, field), bZ: value };
										})))))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$recordParser() {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('}', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('}')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$Record([  ]))), $gren_lang$core$String$Parser$Advanced$andThen$(function(firstVarName) {
					return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$andThen$(function(firstPair) {
								return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([ firstPair ], $gren_lang$compiler_common$Compiler$Parse$Expression$innerRecordParser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$succeed(function(fields) {
												return $gren_lang$compiler_common$Compiler$Ast$Source$Update({ f6: fields, gv: firstVarName });
											})));
							}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$recordFieldParser(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('|', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('|')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))))), $gren_lang$core$String$Parser$Advanced$andThen$(function(value) {
								var _v5 = firstVarName.bZ;
								if ((_v5.$ === 3) && (!_v5.a.b_)) {
									var _v6 = _v5.a;
									var name = _v6.bK;
									var _v7 = _v6.b_;
									var locatedField = $gren_lang$compiler_common$SourcePosition$at$(firstVarName.cE, firstVarName.c6, name);
									return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([ { dd: locatedField, bZ: value } ], $gren_lang$compiler_common$Compiler$Parse$Expression$innerRecordParser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$Record)));
								} else {
									return $gren_lang$core$String$Parser$Advanced$problem($gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedLowerVariable(firstVarName));
								}
							}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v4) {
											return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
										}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('=', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('=')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity)))))) ]);
				}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v3) {
								return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
							}), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity)))) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('{', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedChar('{')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$whenParser() {
	return $gren_lang$compiler_common$Compiler$Parse$Space$scopeIndentToLineStart($gren_lang$core$String$Parser$Advanced$andThen$(function(_v2) {
				var start = _v2.cE;
				var expr = _v2.fg;
				var firstBranch = _v2.de;
				return $gren_lang$core$String$Parser$Advanced$map$(function(branches) {
						var endLocation = $gren_lang$core$Maybe$withDefault$({ aZ: 1, bl: 1 }, $gren_lang$core$Maybe$map$(function ($) {
									return $.c6;
								}, $gren_lang$core$Maybe$map$(function ($) {
										return $.eC;
									}, $gren_lang$core$Array$last(branches))));
						return $gren_lang$compiler_common$SourcePosition$at$(start, endLocation, $gren_lang$compiler_common$Compiler$Ast$Source$When({ cV: branches, dc: expr }));
					}, $gren_lang$core$String$Parser$Advanced$loop$([ firstBranch ], $gren_lang$compiler_common$Compiler$Parse$Expression$whenBranchLoopParser));
			}, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$whenBranchParser(), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$keyword$('is', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedKeyword('is')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v1) {
										return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
									}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$keyword$('when', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedKeyword('when')), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F3(function(start, expr, firstBranch) {
														return { fg: expr, de: firstBranch, cE: start };
													}))))))))))));
}
function $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$whenBranchParser() {
	return $gren_lang$compiler_common$Compiler$Parse$Space$scopeIndentToLineStart($gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$lazy(function(_v0) {
					return $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
				}), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$keyword$('->', $gren_lang$compiler_common$Compiler$Parse$Expression$ExpectedKeyword('->')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Expression$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Expression$PatternError, $gren_lang$compiler_common$Compiler$Parse$Pattern$parser), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(pattern, body) {
										return { eC: body, dO: pattern };
									}))))))));
}
var $gren_lang$compiler_common$Compiler$Parse$Expression$parser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$parser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$parser;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$possiblyNegativeTerm = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$possiblyNegativeTerm();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$possiblyNegativeTerm = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$possiblyNegativeTerm;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$term = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$term();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$term = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$term;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$arrayParser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$arrayParser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$arrayParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$arrayParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$function = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$function();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$function = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$function;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$ifParser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$ifParser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$ifParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$ifParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$ifBranchParser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$ifBranchParser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$ifBranchParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$ifBranchParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$letParser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letParser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$letParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$letDefParser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefParser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$letDefParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$letDefDestructParser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefDestructParser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefDestructParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$letDefDestructParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$letDefNamedParser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefNamedParser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$letDefNamedParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$letDefNamedParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$recordFieldParser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$recordFieldParser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$recordFieldParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$recordFieldParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$recordParser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$recordParser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$recordParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$recordParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$whenParser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$whenParser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$whenParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$whenParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Expression$whenBranchParser = $gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$whenBranchParser();
$gren_lang$compiler_common$Compiler$Parse$Expression$cyclic$whenBranchParser = function () {
	return $gren_lang$compiler_common$Compiler$Parse$Expression$whenBranchParser;
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$ExpectedChar = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$Port = function (a) {
	return { $: 3, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$TypeError = function (a) {
	return { $: 3, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$VariableError = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$lowerCaseVariable = $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Declaration$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$lowerCase);
var $gren_lang$compiler_common$Compiler$Parse$Declaration$SpaceError = function (a) {
	return { $: 5, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser = $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Declaration$SpaceError, $gren_lang$compiler_common$Compiler$Parse$Space$parser);
var $gren_lang$compiler_common$Compiler$Parse$Declaration$portParser = $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Declaration$TypeError, $gren_lang$compiler_common$Compiler$Parse$Type$expression), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(':', $gren_lang$compiler_common$Compiler$Parse$Declaration$ExpectedChar(':')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Declaration$lowerCaseVariable), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('port', $gren_lang$compiler_common$Compiler$Parse$Declaration$ExpectedKeyword('port')), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(name, tipe) {
										return $gren_lang$compiler_common$Compiler$Parse$Declaration$Port({ bK: name, d7: tipe });
									})))))))));
var $gren_lang$compiler_common$Compiler$Parse$Declaration$Alias = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$typeArgLoopParser = function(vars) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('=', $gren_lang$compiler_common$Compiler$Parse$Declaration$ExpectedChar('=')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(vars))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Declaration$lowerCaseVariable), $gren_lang$core$String$Parser$Advanced$succeed(function(_var) {
						return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(_var, vars));
					}))) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$upperCaseVariable = $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Declaration$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$upperCase);
var $gren_lang$compiler_common$Compiler$Parse$Declaration$aliasParser = $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Declaration$TypeError, $gren_lang$compiler_common$Compiler$Parse$Type$expression), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([  ], $gren_lang$compiler_common$Compiler$Parse$Declaration$typeArgLoopParser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Declaration$upperCaseVariable), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('alias', $gren_lang$compiler_common$Compiler$Parse$Declaration$ExpectedKeyword('alias')), $gren_lang$core$String$Parser$Advanced$succeed(F3(function(name, vars, tipe) {
										return $gren_lang$compiler_common$Compiler$Parse$Declaration$Alias({ bK: name, g$: tipe, em: vars });
									})))))))));
var $gren_lang$compiler_common$Compiler$Parse$Declaration$Union = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$IndentationError = { $: 6 };
var $gren_lang$compiler_common$Compiler$Parse$Declaration$variantParser = $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Declaration$TypeError, $gren_lang$compiler_common$Compiler$Parse$Type$expression), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$mapError$(function(_v0) {
						return $gren_lang$compiler_common$Compiler$Parse$Declaration$IndentationError;
					}, $gren_lang$compiler_common$Compiler$Parse$Space$checkIndent), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Just))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Nothing) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Declaration$upperCaseVariable), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(name, payload) {
						var variantEnd = $gren_lang$core$Maybe$withDefault$(name.c6, $gren_lang$core$Maybe$map$(function ($) {
									return $.c6;
								}, payload));
						return $gren_lang$compiler_common$SourcePosition$at$(name.cE, variantEnd, { bK: name, gh: payload });
					})))));
var $gren_lang$compiler_common$Compiler$Parse$Declaration$variantLoopParser = function(variants) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Declaration$variantParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('|', $gren_lang$compiler_common$Compiler$Parse$Declaration$ExpectedChar('|')), $gren_lang$core$String$Parser$Advanced$succeed(function(variant) {
							return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(variant, variants));
						})))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(variants)) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Declaration$unionParser = $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$andThen$(function(firstVariant) {
			return $gren_lang$core$String$Parser$Advanced$loop$([ firstVariant ], $gren_lang$compiler_common$Compiler$Parse$Declaration$variantLoopParser);
		}, $gren_lang$compiler_common$Compiler$Parse$Declaration$variantParser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([  ], $gren_lang$compiler_common$Compiler$Parse$Declaration$typeArgLoopParser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Declaration$upperCaseVariable), $gren_lang$core$String$Parser$Advanced$succeed(F3(function(name, vars, variants) {
								return $gren_lang$compiler_common$Compiler$Parse$Declaration$Union({ bK: name, g6: variants, em: vars });
							})))))));
var $gren_lang$compiler_common$Compiler$Parse$Declaration$typeParser = $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$compiler_common$Compiler$Parse$Declaration$aliasParser, $gren_lang$compiler_common$Compiler$Parse$Declaration$unionParser ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Declaration$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('type', $gren_lang$compiler_common$Compiler$Parse$Declaration$ExpectedKeyword('type')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))));
var $gren_lang$compiler_common$Compiler$Parse$Declaration$parser = $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$compiler_common$Compiler$Parse$Declaration$typeParser, $gren_lang$compiler_common$Compiler$Parse$Declaration$portParser, $gren_lang$core$String$Parser$Advanced$map$(function(def) {
				return $gren_lang$compiler_common$Compiler$Parse$Declaration$Value({ cR: def.bZ.cR, eC: def.bZ.eC, bK: def.bZ.bK, d7: def.bZ.g_ });
			}, $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Declaration$ExprError, $gren_lang$compiler_common$Compiler$Parse$Expression$letDefNamedParser)) ]), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Declaration$docParser($gren_lang$compiler_common$Compiler$Parse$Declaration$ExpectedKeyword), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(docs, value) {
					return { e1: docs, bZ: value };
				}))));
var $gren_lang$compiler_common$Compiler$Parse$Module$SpaceError = function (a) {
	return { $: 6, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Module$spaceParser = $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Module$SpaceError, $gren_lang$compiler_common$Compiler$Parse$Space$parser);
var $gren_lang$compiler_common$Compiler$Parse$Module$declarationLoopParser = function(decls) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Module$DeclarationError, $gren_lang$compiler_common$Compiler$Parse$Declaration$parser), $gren_lang$core$String$Parser$Advanced$succeed(function(decl) {
						return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(decl, decls));
					}))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$end($gren_lang$compiler_common$Compiler$Parse$Module$ExpectedEnd), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(decls))) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Module$declarationToModuleAlias = function(decl) {
	var _v0 = decl.bZ;
	if (!_v0.$) {
		var v = _v0.a;
		return $gren_lang$core$Maybe$Just($gren_lang$compiler_common$SourcePosition$at$({ aZ: 1, bl: v.bK.cE.bl }, v.g$.c6, { e1: decl.e1, bZ: v }));
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Module$declarationToModulePort = function(decl) {
	var _v0 = decl.bZ;
	if (_v0.$ === 3) {
		var v = _v0.a;
		return $gren_lang$core$Maybe$Just($gren_lang$compiler_common$SourcePosition$at$({ aZ: 1, bl: v.bK.cE.bl }, v.d7.c6, { e1: decl.e1, bZ: v }));
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Module$declarationToModuleUnion = function(decl) {
	var _v0 = decl.bZ;
	if (_v0.$ === 1) {
		var v = _v0.a;
		var endPos = $gren_lang$core$Maybe$withDefault$(v.bK.c6, $gren_lang$core$Maybe$map$(function ($) {
					return $.c6;
				}, $gren_lang$core$Array$last(v.g6)));
		return $gren_lang$core$Maybe$Just($gren_lang$compiler_common$SourcePosition$at$({ aZ: 1, bl: v.bK.cE.bl }, endPos, { e1: decl.e1, bZ: v }));
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Module$declarationToModuleValue = function(decl) {
	var _v0 = decl.bZ;
	if (_v0.$ === 2) {
		var v = _v0.a;
		return $gren_lang$core$Maybe$Just($gren_lang$compiler_common$SourcePosition$at$(v.bK.cE, v.eC.c6, { e1: decl.e1, bZ: v }));
	} else {
		return $gren_lang$core$Maybe$Nothing;
	}
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Cmd = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Fx = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Sub = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Module$VariableError = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Module$ctorNameParser = $gren_lang$compiler_common$SourcePosition$parser($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Module$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$upperCase));
var $gren_lang$compiler_common$Compiler$Parse$Module$cmdSubParser = function(fieldName) {
	return $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$ctorNameParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('=', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar('=')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$(fieldName, $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword(fieldName)), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))))));
};
var $gren_lang$compiler_common$Compiler$Parse$Module$effectParser = $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('}', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar('}')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$cmdSubParser('subscription'), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(',', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar(',')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Just)))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Nothing) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$cmdSubParser('command'), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(cmd, maybeSub) {
										if (!maybeSub.$) {
											var sub = maybeSub.a;
											return $gren_lang$compiler_common$Compiler$Ast$Source$Fx({ cX: cmd, ef: sub });
										} else {
											return $gren_lang$compiler_common$Compiler$Ast$Source$Cmd(cmd);
										}
									}))))), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$cmdSubParser('command'), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(',', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar(',')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Just)))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Maybe$Nothing) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$cmdSubParser('subscription'), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(sub, maybeCmd) {
										if (!maybeCmd.$) {
											var cmd = maybeCmd.a;
											return $gren_lang$compiler_common$Compiler$Ast$Source$Fx({ cX: cmd, ef: sub });
										} else {
											return $gren_lang$compiler_common$Compiler$Ast$Source$Sub(sub);
										}
									}))))) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('{', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar('{')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('where', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('where')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))))))));
var $gren_lang$compiler_common$Compiler$Ast$Source$Explicit = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Variable$foreignVarToString = function(fv) {
	if (!fv.$) {
		var str = fv.a;
		return str;
	} else {
		var _v1 = fv.a;
		var module_ = _v1.f3;
		var name = _v1.bK;
		return module_ + ('.' + name);
	}
};
var $gren_lang$compiler_common$Compiler$Parse$Module$moduleNameParser = $gren_lang$compiler_common$SourcePosition$parser($gren_lang$core$String$Parser$Advanced$map$($gren_lang$compiler_common$Compiler$Parse$Variable$foreignVarToString, $gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Module$VariableError, $gren_lang$compiler_common$Compiler$Parse$Variable$foreignUpper)));
var $gren_lang$compiler_common$Compiler$Ast$Source$ExposedLower = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$ExposedOperator = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$ExposedUpper = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$compiler_common$Compiler$Parse$Module$OperatorError = function (a) {
	return { $: 3, a: a };
};
var $gren_lang$compiler_common$Compiler$Ast$Source$Private = 1;
var $gren_lang$compiler_common$Compiler$Ast$Source$Public = 0;
var $gren_lang$compiler_common$Compiler$Parse$Module$parseExposingValue = $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Module$VariableError, $gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Variable$lowerCase)), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$ExposedLower)), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(')', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar(')')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('..', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('..')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('(', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar('(')), $gren_lang$core$String$Parser$Advanced$succeed(0)))))), $gren_lang$core$String$Parser$Advanced$succeed(1) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Module$VariableError, $gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Variable$upperCase)), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(name, privacy) {
							return $gren_lang$compiler_common$Compiler$Ast$Source$ExposedUpper({ bK: name, go: privacy });
						}))))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(')', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar(')')), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Module$OperatorError, $gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Operator$parser)), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('(', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar('(')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$ExposedOperator)))) ]);
var $gren_lang$compiler_common$Compiler$Parse$Module$parseExposingArray = function(exps) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(')', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar(')')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(exps))), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$parseExposingValue, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(',', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar(',')), $gren_lang$core$String$Parser$Advanced$succeed(function(next) {
								return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(next, exps));
							}))))) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Module$parseExposingStatement = $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(')', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar(')')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('..', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('..')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$Open)))), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$andThen$(function(firstExposing) {
					return $gren_lang$core$String$Parser$Advanced$loop$([ firstExposing ], $gren_lang$compiler_common$Compiler$Parse$Module$parseExposingArray);
				}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$compiler_common$Compiler$Parse$Module$parseExposingValue)), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$Explicit)) ]), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('(', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar('(')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('exposing', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('exposing')), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$Basics$identity))))));
var $gren_lang$compiler_common$Compiler$Parse$Module$importLoopParser = function(imps) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$map$(function(finalImport) {
				return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(finalImport, imps));
			}, $gren_lang$core$String$Parser$Advanced$andThen$(function(importWithAlias) {
					return $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$compiler_common$Compiler$Parse$Module$parseExposingStatement, $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$compiler_common$Compiler$Ast$Source$Explicit([  ])) ]), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(expose, endPos) {
											return _Utils_update(importWithAlias, { c6: _Utils_eq(expose, $gren_lang$compiler_common$Compiler$Ast$Source$Explicit([  ])) ? importWithAlias.c6 : endPos, bZ: _Utils_update(importWithAlias.bZ, { da: expose }) });
										})))));
				}, $gren_lang$core$String$Parser$Advanced$andThen$(function(baseImport) {
						return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$moduleNameParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('as', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('as')), $gren_lang$core$String$Parser$Advanced$succeed(function(alias) {
													return _Utils_update(baseImport, { c6: alias.c6, bZ: _Utils_update(baseImport.bZ, { cQ: $gren_lang$core$Maybe$Just(alias.bZ) }) });
												}))))), $gren_lang$core$String$Parser$Advanced$succeed(baseImport) ]);
					}, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$moduleNameParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('import', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('import')), $gren_lang$core$String$Parser$Advanced$succeed(function(moduleName) {
											return $gren_lang$compiler_common$SourcePosition$at$(_Utils_update(moduleName.cE, { aZ: 1 }), moduleName.c6, { cQ: $gren_lang$core$Maybe$Nothing, da: $gren_lang$compiler_common$Compiler$Ast$Source$Explicit([  ]), f3: moduleName });
										})))))))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(imps)) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Module$parseAssociativity = $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('left', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('left')), $gren_lang$core$String$Parser$Advanced$succeed(0)), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('right', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('right')), $gren_lang$core$String$Parser$Advanced$succeed(2)), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('non', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('non')), $gren_lang$core$String$Parser$Advanced$succeed(1)) ]);
var $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedIntPrecedence = { $: 4 };
var $gren_lang$compiler_common$Compiler$Parse$Module$parsePrecedence = $gren_lang$core$String$Parser$Advanced$andThen$(function(outcome) {
		if (!outcome.$) {
			var _int = outcome.a;
			return $gren_lang$core$String$Parser$Advanced$succeed(_int);
		} else {
			return $gren_lang$core$String$Parser$Advanced$problem($gren_lang$compiler_common$Compiler$Parse$Module$ExpectedIntPrecedence);
		}
	}, $gren_lang$core$String$Parser$Advanced$mapError$(function(_v0) {
			return $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedIntPrecedence;
		}, $gren_lang$compiler_common$Compiler$Parse$Number$parser));
var $gren_lang$compiler_common$Compiler$Parse$Module$parseOperatorDeclaration = $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Module$VariableError, $gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Variable$lowerCase)), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('=', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar('=')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$(')', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar(')')), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$mapError$($gren_lang$compiler_common$Compiler$Parse$Module$OperatorError, $gren_lang$compiler_common$SourcePosition$parser($gren_lang$compiler_common$Compiler$Parse$Operator$parser)), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$chompChar$('(', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedChar('(')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$parsePrecedence, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$parseAssociativity, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('infix', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('infix')), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$getPosition, $gren_lang$core$String$Parser$Advanced$succeed(F6(function(start, assoc, prec, op, func, end) {
																		return $gren_lang$compiler_common$SourcePosition$at$(start, end, { ev: assoc, fn: func.bZ, gm: prec, gR: op.bZ });
																	})))))))))))))))));
var $gren_lang$compiler_common$Compiler$Parse$Module$operatorLoopParser = function(ops) {
	return $gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$parseOperatorDeclaration, $gren_lang$core$String$Parser$Advanced$succeed(function(op) {
						return $gren_lang$core$String$Parser$Advanced$Loop($gren_lang$core$Array$pushLast$(op, ops));
					}))), $gren_lang$core$String$Parser$Advanced$succeed($gren_lang$core$String$Parser$Advanced$Done(ops)) ]);
};
var $gren_lang$compiler_common$Compiler$Parse$Module$parser = $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([  ], $gren_lang$compiler_common$Compiler$Parse$Module$declarationLoopParser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([  ], $gren_lang$compiler_common$Compiler$Parse$Module$operatorLoopParser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$loop$([  ], $gren_lang$compiler_common$Compiler$Parse$Module$importLoopParser), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Declaration$docParser($gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$parseExposingStatement, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$effectParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$moduleNameParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('module', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('module')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('effect', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('effect')), $gren_lang$core$String$Parser$Advanced$succeed(F2(function(name, effects) {
																						return { b3: $gren_lang$compiler_common$Compiler$Ast$Source$Manager(effects), bK: name };
																					}))))))))), $gren_lang$core$String$Parser$Advanced$keep$($gren_lang$compiler_common$Compiler$Parse$Module$moduleNameParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('module', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('module')), $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$oneOf([ $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$compiler_common$Compiler$Parse$Module$spaceParser, $gren_lang$core$String$Parser$Advanced$skip$($gren_lang$core$String$Parser$Advanced$token$('port', $gren_lang$compiler_common$Compiler$Parse$Module$ExpectedKeyword('port')), $gren_lang$core$String$Parser$Advanced$succeed({  }))), $gren_lang$core$String$Parser$Advanced$succeed({  }) ]), $gren_lang$core$String$Parser$Advanced$succeed(function(name) {
																		return { b3: $gren_lang$compiler_common$Compiler$Ast$Source$NoEffects, bK: name };
																	}))))) ]), $gren_lang$core$String$Parser$Advanced$succeed(F6(function(_v0, exports, docs, imports, binops, decls) {
														var name = _v0.bK;
														var effects = _v0.b3;
														var values = $gren_lang$core$Array$mapAndKeepJust$($gren_lang$compiler_common$Compiler$Parse$Module$declarationToModuleValue, decls);
														var unions = $gren_lang$core$Array$mapAndKeepJust$($gren_lang$compiler_common$Compiler$Parse$Module$declarationToModuleUnion, decls);
														var ports = $gren_lang$core$Array$mapAndKeepJust$($gren_lang$compiler_common$Compiler$Parse$Module$declarationToModulePort, decls);
														var aliases = $gren_lang$core$Array$mapAndKeepJust$($gren_lang$compiler_common$Compiler$Parse$Module$declarationToModuleAlias, decls);
														return { eq: aliases, ez: binops, e1: docs, b3: function () {
															if (ports.length === 0) {
																return effects;
															} else {
																return $gren_lang$compiler_common$Compiler$Ast$Source$Ports(ports);
															}
														}(), ff: exports, fu: imports, bK: name, g0: unions, g4: values };
													})))))))))))));
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$allModuleFilesToWithParsedSyntax = function(moduleFiles) {
	return $gren_lang$core$Result$map$($gren_lang$core$Array$Builder$toArray, $gren_lang$core$Result$mapError$($gren_lang$core$Array$Builder$toArray, A3($gren_lang$core$Array$foldl, F2(function(moduleFile, soFar) {
						var _v0 = $gren_lang$core$String$Parser$Advanced$run$($gren_lang$compiler_common$Compiler$Parse$Module$parser, $gren_lang$compiler_common$Compiler$Parse$Context$empty, moduleFile.gF);
						if (_v0.$ === 1) {
							var moduleParseDeadEnds = _v0.a;
							var error = { b4: $gren_lang$compiler_common$Compiler$Parse$Module$errorsToString$(moduleFile.gF, moduleParseDeadEnds), ct: moduleFile.ct };
							if (!soFar.$) {
								return $gren_lang$core$Result$Err(A2($gren_lang$core$Array$Builder$pushLast, error, $gren_lang$core$Array$Builder$empty(1)));
							} else {
								var soFarErrors = soFar.a;
								return $gren_lang$core$Result$Err(A2($gren_lang$core$Array$Builder$pushLast, error, soFarErrors));
							}
						} else {
							var syntax = _v0.a;
							if (soFar.$ === 1) {
								var soFarErrorPaths = soFar.a;
								return $gren_lang$core$Result$Err(soFarErrorPaths);
							} else {
								var soFarWithParsedSyntax = soFar.a;
								return $gren_lang$core$Result$Ok(A2($gren_lang$core$Array$Builder$pushLast, { ct: moduleFile.ct, gF: moduleFile.gF, gS: syntax }, soFarWithParsedSyntax));
							}
						}
					}), $gren_lang$core$Result$Ok($gren_lang$core$Array$Builder$empty(2)), moduleFiles)));
};
var $gren_lang$core$Task$map2 = _Scheduler_map2;
var $gren_lang$core$Task$andMap = $gren_lang$core$Task$map2($gren_lang$core$Basics$apR);
var $gren_lang$node$Internal$Init$Task = $gren_lang$core$Basics$identity;
var $gren_lang$node$Init$unwrap = function(_v0) {
	var task = _v0;
	return task;
};
var $gren_lang$node$Init$await$ = function(_v0, fn) {
	var task = _v0;
	return A2($gren_lang$core$Task$andThen, $gren_lang$core$Basics$composeL$($gren_lang$node$Init$unwrap, fn), task);
};
var $gren_lang$node$Init$await = F2($gren_lang$node$Init$await$);
var $gren_lang$node$Init$awaitTask$ = function(task, fn) {
	return A2($gren_lang$core$Task$andThen, $gren_lang$core$Basics$composeL$($gren_lang$node$Init$unwrap, fn), task);
};
var $gren_lang$node$Init$awaitTask = F2($gren_lang$node$Init$awaitTask$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$AllUnfixable = function (a) {
	return { $: 0, a: a };
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Fixable = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$Dict$isEmpty = function(dict) {
	if (dict.$ === -2) {
		return true;
	} else {
		return false;
	}
};
var $gren_lang$core$Dict$keepIf$ = function(isGood, dict) {
	return $gren_lang$core$Dict$foldl$(F3(function(k, v, d) {
				return A2(isGood, k, v) ? $gren_lang$core$Dict$set$(k, v, d) : d;
			}), $gren_lang$core$Dict$empty, dict);
};
var $gren_lang$core$Dict$keepIf = F2($gren_lang$core$Dict$keepIf$);
var $lue_bird$gren_extra_checks$ExtraCheck$AfterFixIsUnchanged = 0;
var $lue_bird$gren_extra_checks$ExtraCheck$FixHasCollisionsInRanges = 1;
var $lue_bird$gren_extra_checks$Unicode$dropFirst$ = function(n, string) {
	return $gren_lang$core$String$fromArray($gren_lang$core$Array$dropFirst$(n, $gren_lang$core$String$toArray(string)));
};
var $lue_bird$gren_extra_checks$Unicode$dropFirst = F2($lue_bird$gren_extra_checks$Unicode$dropFirst$);
var $gren_lang$core$Array$set = _Array_set;
var $gren_lang$core$Array$update$ = function(idx, fn, array) {
	var _v0 = A2($gren_lang$core$Array$get, idx, array);
	if (_v0.$ === 1) {
		return array;
	} else {
		var val = _v0.a;
		return A3($gren_lang$core$Array$set, idx, fn(val), array);
	}
};
var $gren_lang$core$Array$update = F3($gren_lang$core$Array$update$);
var $lue_bird$gren_extra_checks$ArrayLocalExtra$lastMap$ = function(mapper, array) {
	return $gren_lang$core$Array$update$($gren_lang$core$Array$length(array) - 1, mapper, array);
};
var $lue_bird$gren_extra_checks$ArrayLocalExtra$lastMap = F2($lue_bird$gren_extra_checks$ArrayLocalExtra$lastMap$);
var $lue_bird$gren_extra_checks$ExtraCheck$applyFixSingle$ = function(fixToApply, lines) {
	var replace = fixToApply;
	var startLine = $lue_bird$gren_extra_checks$Unicode$takeFirst$(replace.bO.cE.aZ - 1, $gren_lang$core$Maybe$withDefault$('', A2($gren_lang$core$Array$get, replace.bO.cE.bl - 1, lines)));
	var linesBefore = $gren_lang$core$Array$takeFirst$(replace.bO.cE.bl - 1, lines);
	var linesAfter = $gren_lang$core$Array$dropFirst$(replace.bO.c6.bl, lines);
	var endLine = $lue_bird$gren_extra_checks$Unicode$dropFirst$(replace.bO.c6.aZ - 1, $gren_lang$core$Maybe$withDefault$('', A2($gren_lang$core$Array$get, replace.bO.c6.bl - 1, lines)));
	return _Utils_ap(linesBefore, _Utils_ap($lue_bird$gren_extra_checks$ArrayLocalExtra$lastMap$(function(replacementLastLine) {
					return _Utils_ap(replacementLastLine, endLine);
				}, $gren_lang$core$Array$update$(0, function(replacementFirstLine) {
						return _Utils_ap(startLine, replacementFirstLine);
					}, $gren_lang$core$String$lines(replace.dY))), linesAfter));
};
var $lue_bird$gren_extra_checks$ExtraCheck$applyFixSingle = F2($lue_bird$gren_extra_checks$ExtraCheck$applyFixSingle$);
var $lue_bird$gren_extra_checks$ExtraCheck$fixRange = function(fix) {
	var replace = fix;
	return replace.bO;
};
var $gren_lang$core$Array$sortWith = _Array_sortWith;
var $gren_lang$core$Array$any$ = function(fn, array) {
	var _v0 = A2($gren_lang$core$Array$findFirst, fn, array);
	if (!_v0.$) {
		return true;
	} else {
		return false;
	}
};
var $gren_lang$core$Array$any = F2($gren_lang$core$Array$any$);
var $lue_bird$gren_extra_checks$ArrayLocalExtra$anyPair$ = function(isFound, array) {
	anyPair:
	while (true) {
		var _v0 = $gren_lang$core$Array$popLast(array);
		if (_v0.$ === 1) {
			return false;
		} else {
			var _v1 = _v0.a;
			var last = _v1.fO;
			var initial = _v1.fB;
			if ($gren_lang$core$Array$any$(function(tailElement) {
					return A2(isFound, last, tailElement);
				}, initial)) {
				return true;
			} else {
				var $temp$isFound = isFound,
				$temp$array = initial;
				isFound = $temp$isFound;
				array = $temp$array;
				continue anyPair;
			}
		}
	}
};
var $lue_bird$gren_extra_checks$ArrayLocalExtra$anyPair = F2($lue_bird$gren_extra_checks$ArrayLocalExtra$anyPair$);
var $lue_bird$gren_extra_checks$ExtraCheck$sourcePositionCompare$ = function(a, b) {
	var _v0 = A2($gren_lang$core$Basics$compare, a.aZ, b.aZ);
	switch (_v0) {
		case 0:
			return 0;
		case 2:
			return 2;
		default:
			return A2($gren_lang$core$Basics$compare, a.bl, b.bl);
	}
};
var $lue_bird$gren_extra_checks$ExtraCheck$sourcePositionCompare = F2($lue_bird$gren_extra_checks$ExtraCheck$sourcePositionCompare$);
var $lue_bird$gren_extra_checks$ExtraCheck$rangesCollide$ = function(a, b) {
	var _v0 = $lue_bird$gren_extra_checks$ExtraCheck$sourcePositionCompare$(a.c6, b.cE);
	switch (_v0) {
		case 0:
			return false;
		case 1:
			return false;
		default:
			var _v1 = $lue_bird$gren_extra_checks$ExtraCheck$sourcePositionCompare$(b.c6, a.cE);
			switch (_v1) {
				case 0:
					return false;
				case 1:
					return false;
				default:
					return true;
			}
	}
};
var $lue_bird$gren_extra_checks$ExtraCheck$rangesCollide = F2($lue_bird$gren_extra_checks$ExtraCheck$rangesCollide$);
var $lue_bird$gren_extra_checks$ExtraCheck$sourceEditsContainRangeCollisions = function(fixes) {
	return $lue_bird$gren_extra_checks$ArrayLocalExtra$anyPair$(F2(function(edit0, edit1) {
				return $lue_bird$gren_extra_checks$ExtraCheck$rangesCollide$($lue_bird$gren_extra_checks$ExtraCheck$fixRange(edit0), $lue_bird$gren_extra_checks$ExtraCheck$fixRange(edit1));
			}), fixes);
};
var $lue_bird$gren_extra_checks$ExtraCheck$sourceApplyEdits$ = function(fixes, sourceCode) {
	if ($lue_bird$gren_extra_checks$ExtraCheck$sourceEditsContainRangeCollisions(fixes)) {
		return $gren_lang$core$Result$Err(1);
	} else {
		var resultAfterFix = A2($gren_lang$core$String$join, '\n', A3($gren_lang$core$Array$foldl, $lue_bird$gren_extra_checks$ExtraCheck$applyFixSingle, $gren_lang$core$String$lines(sourceCode), A2($gren_lang$core$Array$sortWith, F2(function(a, b) {
							return $lue_bird$gren_extra_checks$ExtraCheck$sourcePositionCompare$($lue_bird$gren_extra_checks$ExtraCheck$fixRange(b).cE, $lue_bird$gren_extra_checks$ExtraCheck$fixRange(a).cE);
						}), fixes)));
		return _Utils_eq(sourceCode, resultAfterFix) ? $gren_lang$core$Result$Err(0) : $gren_lang$core$Result$Ok(resultAfterFix);
	}
};
var $lue_bird$gren_extra_checks$ExtraCheck$sourceApplyEdits = F2($lue_bird$gren_extra_checks$ExtraCheck$sourceApplyEdits$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsByPathToNextFixableErrorOrAll$ = function(project, errorsByPath) {
	var sourceAtPath = function(path) {
		if (path === 'gren.json') {
			return $gren_lang$core$Maybe$Just(project.aq);
		} else {
			var filePath = path;
			return $gren_lang$core$Dict$get$(filePath, project.o);
		}
	};
	var nextFixableErrorOrAll = $gren_lang$core$Dict$foldl$(F3(function(path, errors, soFar) {
				var errorsFixableErrorOrAll = function () {
					var _v2 = soFar.E;
					if (!_v2.$) {
						var soFarFix = _v2.a;
						return { E: $gren_lang$core$Maybe$Just(soFarFix), j: errors };
					} else {
						var _v3 = sourceAtPath(path);
						if (_v3.$ === 1) {
							return { E: $gren_lang$core$Maybe$Nothing, j: [  ] };
						} else {
							var pathSource = _v3.a;
							return function(result) {
								return { E: result.E, j: $gren_lang$core$Array$Builder$toArray(result.j) };
							}(A3($gren_lang$core$Array$foldl, F2(function(error, errorsResultSoFar) {
											var fixedSources = $gren_lang$core$Array$Builder$toArray($gren_lang$core$Dict$foldl$(F3(function(fixPath, fileEdits, soFarFixedSources) {
															var _v4 = sourceAtPath(fixPath);
															if (_v4.$ === 1) {
																return soFarFixedSources;
															} else {
																var sourceToFix = _v4.a;
																var _v5 = $lue_bird$gren_extra_checks$ExtraCheck$sourceApplyEdits$(fileEdits, sourceToFix);
																if (!_v5.$) {
																	var fixedSource = _v5.a;
																	return A2($gren_lang$core$Array$Builder$pushLast, { ce: fixedSource, dL: sourceToFix, ct: fixPath }, soFarFixedSources);
																} else {
																	return soFarFixedSources;
																}
															}
														}), $gren_lang$core$Array$Builder$empty(0), error.df));
											return $gren_lang$core$Array$isEmpty(fixedSources) ? { E: $gren_lang$core$Maybe$Nothing, j: A2($gren_lang$core$Array$Builder$pushLast, error, errorsResultSoFar.j) } : { E: $gren_lang$core$Maybe$Just({ eZ: error.eZ, a6: fixedSources, f$: error.f$, ct: path, bO: error.bO, gF: pathSource }), j: errorsResultSoFar.j };
										}), { E: $gren_lang$core$Maybe$Nothing, j: $gren_lang$core$Array$Builder$empty(0) }, errors));
						}
					}
				}();
				return { E: errorsFixableErrorOrAll.E, j: $gren_lang$core$Dict$set$(path, errorsFixableErrorOrAll.j, soFar.j) };
			}), { E: $gren_lang$core$Maybe$Nothing, j: $gren_lang$core$Dict$empty }, errorsByPath);
	var otherErrorsByPath = $gren_lang$core$Dict$keepIf$(F2(function(_v1, errors) {
				return !$gren_lang$core$Array$isEmpty(errors);
			}), nextFixableErrorOrAll.j);
	var _v0 = nextFixableErrorOrAll.E;
	if (!_v0.$) {
		var fixable = _v0.a;
		return $gren_lang$core$Maybe$Just($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Fixable({ E: fixable, j: otherErrorsByPath }));
	} else {
		return $gren_lang$core$Dict$isEmpty(otherErrorsByPath) ? $gren_lang$core$Maybe$Nothing : $gren_lang$core$Maybe$Just($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$AllUnfixable(otherErrorsByPath));
	}
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsByPathToNextFixableErrorOrAll = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsByPathToNextFixableErrorOrAll$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ErrorFixRejected = { $: 6 };
var $gren_lang$core$Array$prepend = _Array_append;
var $gren_lang$core$Array$append$ = function(fst, second) {
	return A2($gren_lang$core$Array$prepend, second, fst);
};
var $gren_lang$core$Array$append = F2($gren_lang$core$Array$append$);
var $gren_lang$node$FileSystem$Path$filenameWithExtension = function(path) {
	return $gren_lang$core$String$isEmpty(path.fh) ? path.W : (path.W + ('.' + path.fh));
};
var $gren_lang$node$FileSystem$Path$prepend$ = function(left, right) {
	return _Utils_update(left, { aE: A2($gren_lang$core$Array$keepIf, function(dir) {
				return dir !== '';
			}, $gren_lang$core$Array$append$(right.aE, $gren_lang$core$Array$pushLast$($gren_lang$node$FileSystem$Path$filenameWithExtension(left), left.aE))), fh: right.fh, W: right.W });
};
var $gren_lang$node$FileSystem$Path$prepend = F2($gren_lang$node$FileSystem$Path$prepend$);
var $gren_lang$node$FileSystem$Path$appendPosixString$ = function(str, path) {
	return $gren_lang$node$FileSystem$Path$prepend$(path, $gren_lang$node$FileSystem$Path$fromPosixString(str));
};
var $gren_lang$node$FileSystem$Path$appendPosixString = F2($gren_lang$node$FileSystem$Path$appendPosixString$);
var $gren_lang$core$Task$concurrent = _Scheduler_concurrent;


// BYTES

var _Bytes_empty = new DataView(new ArrayBuffer(0));

function _Bytes_length(bytes) {
  return bytes.byteLength;
}

var _Bytes_getHostEndianness = F2(function (le, be) {
  return _Scheduler_binding(function (callback) {
    callback(
      _Scheduler_succeed(
        new Uint8Array(new Uint32Array([1]))[0] === 1 ? le : be,
      ),
    );
  });
});

function _Bytes_fromString(str) {
  var encoder = new TextEncoder();
  var uint8s = encoder.encode(str);
  return new DataView(uint8s.buffer);
}

function _Bytes_toString(bytes) {
  var decoder = new TextDecoder("utf-8", { fatal: true });

  try {
    return $gren_lang$core$Maybe$Just(decoder.decode(bytes));
  } catch (e) {
    return $gren_lang$core$Maybe$Nothing;
  }
}

function _Bytes_flatten(arrayOfBytes) {
  var requiredSize = 0;
  for (var i = 0; i < arrayOfBytes.length; i++) {
    requiredSize += arrayOfBytes[i].byteLength;
  }

  var offset = 0;
  var result = new Uint8Array(requiredSize);

  for (var i = 0; i < arrayOfBytes.length; i++) {
    var currentBytes = new Uint8Array(arrayOfBytes[i].buffer);
    var currentByteLength = arrayOfBytes[i].byteLength;

    for (var j = 0; j < currentByteLength; j++) {
      result[offset] = currentBytes[j];
      offset++;
    }
  }

  return new DataView(result.buffer);
}

// ENCODERS

function _Bytes_encode(encoder) {
  var mutableBytes = new DataView(new ArrayBuffer($gren_lang$core$Bytes$Encode$getLength(encoder)));
  A3($gren_lang$core$Bytes$Encode$write, encoder, mutableBytes, 0);
  return mutableBytes;
}

// SIGNED INTEGERS

var _Bytes_write_i8 = F3(function (mb, i, n) {
  mb.setInt8(i, n);
  return i + 1;
});
var _Bytes_write_i16 = F4(function (mb, i, n, isLE) {
  mb.setInt16(i, n, isLE);
  return i + 2;
});
var _Bytes_write_i32 = F4(function (mb, i, n, isLE) {
  mb.setInt32(i, n, isLE);
  return i + 4;
});

// UNSIGNED INTEGERS

var _Bytes_write_u8 = F3(function (mb, i, n) {
  mb.setUint8(i, n);
  return i + 1;
});
var _Bytes_write_u16 = F4(function (mb, i, n, isLE) {
  mb.setUint16(i, n, isLE);
  return i + 2;
});
var _Bytes_write_u32 = F4(function (mb, i, n, isLE) {
  mb.setUint32(i, n, isLE);
  return i + 4;
});

// FLOATS

var _Bytes_write_f32 = F4(function (mb, i, n, isLE) {
  mb.setFloat32(i, n, isLE);
  return i + 4;
});
var _Bytes_write_f64 = F4(function (mb, i, n, isLE) {
  mb.setFloat64(i, n, isLE);
  return i + 8;
});

// BYTES

var _Bytes_write_bytes = F3(function (mb, offset, bytes) {
  for (var i = 0, len = bytes.byteLength, limit = len - 4; i <= limit; i += 4) {
    mb.setUint32(offset + i, bytes.getUint32(i));
  }
  for (; i < len; i++) {
    mb.setUint8(offset + i, bytes.getUint8(i));
  }
  return offset + len;
});

// DECODER

var _Bytes_decode = F2(function (decoder, bytes) {
  try {
    return $gren_lang$core$Maybe$Just(A2(decoder, bytes, 0).bZ);
  } catch (e) {
    if (e instanceof RangeError) {
      return $gren_lang$core$Maybe$Nothing;
    } else {
      throw e;
    }
  }
});

var _Bytes_read_i8 = F2(function (bytes, offset) {
  return { g: offset + 1, bZ: bytes.getInt8(offset) };
});
var _Bytes_read_i16 = F3(function (isLE, bytes, offset) {
  return { g: offset + 2, bZ: bytes.getInt16(offset, isLE) };
});
var _Bytes_read_i32 = F3(function (isLE, bytes, offset) {
  return { g: offset + 4, bZ: bytes.getInt32(offset, isLE) };
});
var _Bytes_read_u8 = F2(function (bytes, offset) {
  return { g: offset + 1, bZ: bytes.getUint8(offset) };
});
var _Bytes_read_u16 = F3(function (isLE, bytes, offset) {
  return { g: offset + 2, bZ: bytes.getUint16(offset, isLE) };
});
var _Bytes_read_u32 = F3(function (isLE, bytes, offset) {
  return { g: offset + 4, bZ: bytes.getUint32(offset, isLE) };
});
var _Bytes_read_f32 = F3(function (isLE, bytes, offset) {
  return { g: offset + 4, bZ: bytes.getFloat32(offset, isLE) };
});
var _Bytes_read_f64 = F3(function (isLE, bytes, offset) {
  return { g: offset + 8, bZ: bytes.getFloat64(offset, isLE) };
});

var _Bytes_read_bytes = F3(function (len, bytes, offset) {
  return {
    g: offset + len,
    bZ: new DataView(bytes.buffer, bytes.byteOffset + offset, len),
  };
});

var _Bytes_decodeFailure = F2(function () {
  throw 0;
});
var $gren_lang$core$Bytes$Encode$getLength = function(builder) {
	switch (builder.$) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 4;
		case 3:
			return 1;
		case 4:
			return 2;
		case 5:
			return 4;
		case 6:
			return 4;
		case 7:
			return 8;
		case 8:
			var w = builder.a.hb;
			return w;
		default:
			var bs = builder.a;
			return _Bytes_length(bs);
	}
};
var $gren_lang$core$Bytes$LE = 0;
var $gren_lang$core$Bytes$Encode$write$ = function(builder, mb, offset) {
	switch (builder.$) {
		case 0:
			var n = builder.a;
			return A3(_Bytes_write_i8, mb, offset, n);
		case 1:
			var _v1 = builder.a;
			var e = _v1.aF;
			var n = _v1.aI;
			return A4(_Bytes_write_i16, mb, offset, n, !e);
		case 2:
			var _v2 = builder.a;
			var e = _v2.aF;
			var n = _v2.aI;
			return A4(_Bytes_write_i32, mb, offset, n, !e);
		case 3:
			var n = builder.a;
			return A3(_Bytes_write_u8, mb, offset, n);
		case 4:
			var _v3 = builder.a;
			var e = _v3.aF;
			var n = _v3.aI;
			return A4(_Bytes_write_u16, mb, offset, n, !e);
		case 5:
			var _v4 = builder.a;
			var e = _v4.aF;
			var n = _v4.aI;
			return A4(_Bytes_write_u32, mb, offset, n, !e);
		case 6:
			var _v5 = builder.a;
			var e = _v5.aF;
			var n = _v5.aI;
			return A4(_Bytes_write_f32, mb, offset, n, !e);
		case 7:
			var _v6 = builder.a;
			var e = _v6.aF;
			var n = _v6.aI;
			return A4(_Bytes_write_f64, mb, offset, n, !e);
		case 8:
			var bs = builder.a.fK;
			return $gren_lang$core$Bytes$Encode$writeSequence$(bs, mb, offset);
		default:
			var bs = builder.a;
			return A3(_Bytes_write_bytes, mb, offset, bs);
	}
};
var $gren_lang$core$Bytes$Encode$write = F3($gren_lang$core$Bytes$Encode$write$);
var $gren_lang$core$Bytes$Encode$writeSequence$ = function(builders, mb, offset) {
	return A3($gren_lang$core$Array$foldl, F2(function(builder, currentOffset) {
				return $gren_lang$core$Bytes$Encode$write$(builder, mb, currentOffset);
			}), offset, builders);
};
var $gren_lang$core$Bytes$Encode$writeSequence = F3($gren_lang$core$Bytes$Encode$writeSequence$);
var $gren_lang$core$Bytes$Encode$encode = _Bytes_encode;
var $gren_lang$core$Bytes$Encode$U8 = function (a) {
	return { $: 3, a: a };
};
var $gren_lang$core$Bytes$Encode$unsignedInt8 = function(n) {
	return $gren_lang$core$Bytes$Encode$U8(n);
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ctrlCBytes = $gren_lang$core$Bytes$Encode$encode($gren_lang$core$Bytes$Encode$unsignedInt8(3));
var $lue_bird$gren_extra_checks$Ansi$bold = function(text) {
	return '\u001B[1m' + (text + '\u001B[22m');
};
var $lue_bird$gren_extra_checks$Ansi$applyBackgroundColor$ = function(color, string) {
	return '\u001B[' + (color + ('m' + (string + '\u001B[0m')));
};
var $lue_bird$gren_extra_checks$Ansi$applyBackgroundColor = F2($lue_bird$gren_extra_checks$Ansi$applyBackgroundColor$);
var $lue_bird$gren_extra_checks$Ansi$backgroundRed = $lue_bird$gren_extra_checks$Ansi$applyBackgroundColor('41');
var $gren_lang$core$String$trimLeft = _String_trimLeft;
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$getIndexOfFirstNonSpace = function(string) {
	return $gren_lang$core$String$unitLength(string) - $gren_lang$core$String$unitLength($gren_lang$core$String$trimLeft(string));
};
var $gren_lang$core$Array$initialize = _Array_initialize;
var $gren_lang$core$Array$range$ = function(from, to) {
	return (_Utils_cmp(from, to) > 0) ? [  ] : (_Utils_eq(from, to) ? [ from ] : A3($gren_lang$core$Array$initialize, (to - from) + 1, from, $gren_lang$core$Basics$identity));
};
var $gren_lang$core$Array$range = F2($gren_lang$core$Array$range$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$withErrorHighlightedRange$ = function(lineRange, lineContent) {
	return _Utils_ap($lue_bird$gren_extra_checks$Unicode$takeFirst$(lineRange.cE - 1, lineContent), _Utils_ap($lue_bird$gren_extra_checks$Ansi$backgroundRed($lue_bird$gren_extra_checks$Unicode$takeFirst$(lineRange.c6 - lineRange.cE, $lue_bird$gren_extra_checks$Unicode$dropFirst$(lineRange.cE - 1, lineContent))), $lue_bird$gren_extra_checks$Unicode$dropFirst$(((lineRange.cE - 1) + lineRange.c6) - lineRange.cE, lineContent)));
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$withErrorHighlightedRange = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$withErrorHighlightedRange$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$codeExtract$ = function(source, region) {
	var sourceLines = $gren_lang$core$String$lines(source);
	var sourceLineAtRow = function(rowIndex) {
		var _v0 = A2($gren_lang$core$Array$get, rowIndex, sourceLines);
		if (!_v0.$) {
			var line = _v0.a;
			return $gren_lang$core$String$trimRight(line);
		} else {
			return '';
		}
	};
	return _Utils_eq(region.cE.bl, region.c6.bl) ? (_Utils_eq(region.cE.aZ, region.c6.aZ) ? '' : A2($gren_lang$core$String$join, '\n', A2($gren_lang$core$Array$keepIf, function(l) {
				return !$gren_lang$core$String$isEmpty(l);
			}, [ sourceLineAtRow(region.cE.bl - 2), $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$withErrorHighlightedRange$({ c6: region.c6.aZ, cE: region.cE.aZ }, sourceLineAtRow(region.cE.bl - 1)), sourceLineAtRow(region.c6.bl) ]))) : A2($gren_lang$core$String$join, '\n', [ A2($gren_lang$core$String$join, '\n', A2($gren_lang$core$Array$keepIf, function(l) {
					return !$gren_lang$core$String$isEmpty(l);
				}, [ sourceLineAtRow(region.cE.bl - 2), function () {
					var startLineContent = sourceLineAtRow(region.cE.bl - 1);
					return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$withErrorHighlightedRange$({ c6: $lue_bird$gren_extra_checks$Unicode$length(startLineContent) + 1, cE: region.cE.aZ }, startLineContent);
				}() ])), A2($gren_lang$core$String$join, '\n', A2($gren_lang$core$Array$map, function(middleLine) {
					return $lue_bird$gren_extra_checks$Ansi$backgroundRed(sourceLineAtRow(middleLine));
				}, $gren_lang$core$Array$range$(region.cE.bl, region.c6.bl - 2))), A2($gren_lang$core$String$join, '\n', A2($gren_lang$core$Array$keepIf, function(l) {
					return !$gren_lang$core$String$isEmpty(l);
				}, [ function () {
					var endLineContent = sourceLineAtRow(region.c6.bl - 1);
					return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$withErrorHighlightedRange$({ c6: region.c6.aZ, cE: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$getIndexOfFirstNonSpace(endLineContent) + 1 }, endLineContent);
				}(), sourceLineAtRow(region.c6.bl) ])) ]);
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$codeExtract = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$codeExtract$);
var $lue_bird$gren_extra_checks$Ansi$applyColor$ = function(color, string) {
	return '\u001B[' + (color + ('m' + (string + '\u001B[39m')));
};
var $lue_bird$gren_extra_checks$Ansi$applyColor = F2($lue_bird$gren_extra_checks$Ansi$applyColor$);
var $lue_bird$gren_extra_checks$Ansi$cyan = $lue_bird$gren_extra_checks$Ansi$applyColor('36');
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$continuousNoChangeLinesCollapse = function(noChangeLines) {
	var _v0 = $gren_lang$core$Array$popFirst(noChangeLines);
	if (_v0.$ === 1) {
		return '';
	} else {
		var _v1 = _v0.a;
		var noChangeLine0 = _v1.fk;
		var noChangeLine1Up = _v1.gz;
		var _v2 = $gren_lang$core$Array$last(noChangeLine1Up);
		if (_v2.$ === 1) {
			return '\n|   ' + noChangeLine0;
		} else {
			var lastLine = _v2.a;
			return ($gren_lang$core$Array$length(noChangeLines) === 2) ? ('\n|   ' + (noChangeLine0 + ('\n' + ('|   ' + lastLine)))) : ('\n|   ' + (noChangeLine0 + ('\n⋮\n' + ('|   ' + lastLine))));
		}
	}
};
var $lue_bird$gren_extra_checks$Diff$Added = function (a) {
	return { $: 0, a: a };
};
var $lue_bird$gren_extra_checks$Diff$CannotGetA = 0;
var $lue_bird$gren_extra_checks$Diff$CannotGetB = 1;
var $lue_bird$gren_extra_checks$Diff$NoChange = function (a) {
	return { $: 2, a: a };
};
var $lue_bird$gren_extra_checks$Diff$Removed = function (a) {
	return { $: 1, a: a };
};
var $lue_bird$gren_extra_checks$Diff$UnexpectedPath = 2;
var $lue_bird$gren_extra_checks$Diff$makeChangesHelp$ = function(changes, getA, getB, ab, path) {
	makeChangesHelp:
	while (true) {
		var _v0 = $gren_lang$core$Array$popFirst(path);
		if (_v0.$ === 1) {
			return $gren_lang$core$Result$Ok(changes);
		} else {
			var _v1 = _v0.a;
			var prev = _v1.fk;
			var tail = _v1.gz;
			if (_Utils_eq(ab.p - 1, prev.p) && _Utils_eq(ab.n - 1, prev.n)) {
				var _v2 = getA(ab.p);
				if (!_v2.$) {
					var a = _v2.a;
					var $temp$changes = $gren_lang$core$Array$pushFirst$($lue_bird$gren_extra_checks$Diff$NoChange(a), changes),
					$temp$getA = getA,
					$temp$getB = getB,
					$temp$ab = prev,
					$temp$path = tail;
					changes = $temp$changes;
					getA = $temp$getA;
					getB = $temp$getB;
					ab = $temp$ab;
					path = $temp$path;
					continue makeChangesHelp;
				} else {
					return $gren_lang$core$Result$Err(0);
				}
			} else {
				if (_Utils_eq(ab.p, prev.p)) {
					var _v3 = getB(ab.n);
					if (!_v3.$) {
						var b = _v3.a;
						var $temp$changes = $gren_lang$core$Array$pushFirst$($lue_bird$gren_extra_checks$Diff$Added(b), changes),
						$temp$getA = getA,
						$temp$getB = getB,
						$temp$ab = prev,
						$temp$path = tail;
						changes = $temp$changes;
						getA = $temp$getA;
						getB = $temp$getB;
						ab = $temp$ab;
						path = $temp$path;
						continue makeChangesHelp;
					} else {
						return $gren_lang$core$Result$Err(1);
					}
				} else {
					if (_Utils_eq(ab.n, prev.n)) {
						var _v4 = getA(ab.p);
						if (!_v4.$) {
							var a = _v4.a;
							var $temp$changes = $gren_lang$core$Array$pushFirst$($lue_bird$gren_extra_checks$Diff$Removed(a), changes),
							$temp$getA = getA,
							$temp$getB = getB,
							$temp$ab = prev,
							$temp$path = tail;
							changes = $temp$changes;
							getA = $temp$getA;
							getB = $temp$getB;
							ab = $temp$ab;
							path = $temp$path;
							continue makeChangesHelp;
						} else {
							return $gren_lang$core$Result$Err(0);
						}
					} else {
						return $gren_lang$core$Result$Err(2);
					}
				}
			}
		}
	}
};
var $lue_bird$gren_extra_checks$Diff$makeChangesHelp = F5($lue_bird$gren_extra_checks$Diff$makeChangesHelp$);
var $lue_bird$gren_extra_checks$Diff$makeChanges$ = function(getA, getB, path) {
	var _v0 = $gren_lang$core$Array$popFirst(path);
	if (_v0.$ === 1) {
		return $gren_lang$core$Result$Ok([  ]);
	} else {
		var _v1 = _v0.a;
		var latest = _v1.fk;
		var tail = _v1.gz;
		return $lue_bird$gren_extra_checks$Diff$makeChangesHelp$([  ], getA, getB, latest, tail);
	}
};
var $lue_bird$gren_extra_checks$Diff$makeChanges = F3($lue_bird$gren_extra_checks$Diff$makeChanges$);
var $lue_bird$gren_extra_checks$Diff$Continue = function (a) {
	return { $: 0, a: a };
};
var $lue_bird$gren_extra_checks$Diff$Found = function (a) {
	return { $: 1, a: a };
};
var $lue_bird$gren_extra_checks$Diff$step$ = function(snake_, offset, k, v) {
	var fromTop = $gren_lang$core$Maybe$withDefault$([  ], A2($gren_lang$core$Array$get, (k + 1) + offset, v));
	var fromLeft = $gren_lang$core$Maybe$withDefault$([  ], A2($gren_lang$core$Array$get, (k - 1) + offset, v));
	var _v0 = function () {
		var _v1 = $gren_lang$core$Array$popFirst(fromLeft);
		if (_v1.$ === 1) {
			var _v2 = $gren_lang$core$Array$popFirst(fromTop);
			if (_v2.$ === 1) {
				return { aS: { p: 0, n: 0 }, ct: [  ] };
			} else {
				var _v3 = _v2.a;
				var top = _v3.fk;
				var topTail = _v3.gz;
				return { aS: { p: top.p + 1, n: top.n }, ct: $gren_lang$core$Array$pushFirst$(top, topTail) };
			}
		} else {
			var _v4 = _v1.a;
			var left = _v4.fk;
			var leftTail = _v4.gz;
			var _v5 = $gren_lang$core$Array$popFirst(fromTop);
			if (_v5.$ === 1) {
				return { aS: { p: left.p, n: left.n + 1 }, ct: $gren_lang$core$Array$pushFirst$(left, leftTail) };
			} else {
				var _v6 = _v5.a;
				var top = _v6.fk;
				var topTail = _v6.gz;
				return (_Utils_cmp(left.n + 1, top.n) > -1) ? { aS: { p: left.p, n: left.n + 1 }, ct: $gren_lang$core$Array$pushFirst$(left, leftTail) } : { aS: { p: top.p + 1, n: top.n }, ct: $gren_lang$core$Array$pushFirst$(top, topTail) };
			}
		}
	}();
	var path = _v0.ct;
	var ab = _v0.aS;
	var snaked = A3(snake_, ab.p + 1, ab.n + 1, $gren_lang$core$Array$pushFirst$(ab, path));
	return snaked.a0 ? $lue_bird$gren_extra_checks$Diff$Found(snaked.ct) : $lue_bird$gren_extra_checks$Diff$Continue(A3($gren_lang$core$Array$set, k + offset, snaked.ct, v));
};
var $lue_bird$gren_extra_checks$Diff$step = F4($lue_bird$gren_extra_checks$Diff$step$);
var $lue_bird$gren_extra_checks$Diff$onpLoopK$ = function(snake_, offset, ks, v) {
	onpLoopK:
	while (true) {
		var _v0 = $gren_lang$core$Array$popFirst(ks);
		if (_v0.$ === 1) {
			return $lue_bird$gren_extra_checks$Diff$Continue(v);
		} else {
			var _v1 = _v0.a;
			var k = _v1.fk;
			var ks_ = _v1.gz;
			var _v2 = $lue_bird$gren_extra_checks$Diff$step$(snake_, offset, k, v);
			if (_v2.$ === 1) {
				var path = _v2.a;
				return $lue_bird$gren_extra_checks$Diff$Found(path);
			} else {
				var v_ = _v2.a;
				var $temp$snake_ = snake_,
				$temp$offset = offset,
				$temp$ks = ks_,
				$temp$v = v_;
				snake_ = $temp$snake_;
				offset = $temp$offset;
				ks = $temp$ks;
				v = $temp$v;
				continue onpLoopK;
			}
		}
	}
};
var $lue_bird$gren_extra_checks$Diff$onpLoopK = F4($lue_bird$gren_extra_checks$Diff$onpLoopK$);
var $gren_lang$core$Array$reverse = _Array_reverse;
var $lue_bird$gren_extra_checks$Diff$onpLoopP$ = function(snake_, delta, offset, p, v) {
	onpLoopP:
	while (true) {
		var ks = (delta > 0) ? _Utils_ap($gren_lang$core$Array$reverse($gren_lang$core$Array$range$(delta + 1, delta + p)), $gren_lang$core$Array$range$(-p, delta)) : _Utils_ap($gren_lang$core$Array$reverse($gren_lang$core$Array$range$(delta + 1, p)), $gren_lang$core$Array$range$(delta - p, delta));
		var _v0 = $lue_bird$gren_extra_checks$Diff$onpLoopK$(snake_, offset, ks, v);
		if (_v0.$ === 1) {
			var path = _v0.a;
			return path;
		} else {
			var v_ = _v0.a;
			var $temp$snake_ = snake_,
			$temp$delta = delta,
			$temp$offset = offset,
			$temp$p = p + 1,
			$temp$v = v_;
			snake_ = $temp$snake_;
			delta = $temp$delta;
			offset = $temp$offset;
			p = $temp$p;
			v = $temp$v;
			continue onpLoopP;
		}
	}
};
var $lue_bird$gren_extra_checks$Diff$onpLoopP = F5($lue_bird$gren_extra_checks$Diff$onpLoopP$);
var $gren_lang$core$Array$repeat$ = function(n, val) {
	return A3($gren_lang$core$Array$initialize, n, 0, function(_v0) {
			return val;
		});
};
var $gren_lang$core$Array$repeat = F2($gren_lang$core$Array$repeat$);
var $lue_bird$gren_extra_checks$Diff$snake$ = function(getA, getB, nextA, nextB, path) {
	snake:
	while (true) {
		var _v0 = getA(nextA);
		if (!_v0.$) {
			var a = _v0.a;
			var _v1 = getB(nextB);
			if (_v1.$ === 1) {
				return { a0: false, ct: path };
			} else {
				var b = _v1.a;
				if (_Utils_eq(a, b)) {
					var $temp$getA = getA,
					$temp$getB = getB,
					$temp$nextA = nextA + 1,
					$temp$nextB = nextB + 1,
					$temp$path = $gren_lang$core$Array$pushFirst$({ p: nextA, n: nextB }, path);
					getA = $temp$getA;
					getB = $temp$getB;
					nextA = $temp$nextA;
					nextB = $temp$nextB;
					path = $temp$path;
					continue snake;
				} else {
					return { a0: false, ct: path };
				}
			}
		} else {
			var _v2 = getB(nextB);
			if (!_v2.$) {
				return { a0: false, ct: path };
			} else {
				return { a0: true, ct: path };
			}
		}
	}
};
var $lue_bird$gren_extra_checks$Diff$snake = F5($lue_bird$gren_extra_checks$Diff$snake$);
var $lue_bird$gren_extra_checks$Diff$testDiff$ = function(arrA, arrB) {
	var getB = function(b) {
		return A2($gren_lang$core$Array$get, b - 1, arrB);
	};
	var getA = function(a) {
		return A2($gren_lang$core$Array$get, a - 1, arrA);
	};
	var bLength = $gren_lang$core$Array$length(arrB);
	var aLength = $gren_lang$core$Array$length(arrA);
	return $lue_bird$gren_extra_checks$Diff$makeChanges$(getA, getB, $lue_bird$gren_extra_checks$Diff$onpLoopP$(A2($lue_bird$gren_extra_checks$Diff$snake, getA, getB), bLength - aLength, aLength, 0, $gren_lang$core$Array$repeat$((aLength + bLength) + 1, [  ])));
};
var $lue_bird$gren_extra_checks$Diff$testDiff = F2($lue_bird$gren_extra_checks$Diff$testDiff$);
var $lue_bird$gren_extra_checks$Diff$diff$ = function(a, b) {
	var _v0 = $lue_bird$gren_extra_checks$Diff$testDiff$(a, b);
	if (!_v0.$) {
		var changes = _v0.a;
		return changes;
	} else {
		return [  ];
	}
};
var $lue_bird$gren_extra_checks$Diff$diff = F2($lue_bird$gren_extra_checks$Diff$diff$);
var $lue_bird$gren_extra_checks$Ansi$green = $lue_bird$gren_extra_checks$Ansi$applyColor('32');
var $lue_bird$gren_extra_checks$Ansi$red = $lue_bird$gren_extra_checks$Ansi$applyColor('31');
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourceHighlightDifferentLines$ = function(aString, bString) {
	var highlightedAndFinalNoChangeLines = A3($gren_lang$core$Array$foldl, F2(function(change, soFar) {
				switch (change.$) {
					case 2:
						var line = change.a;
						return { ab: A2($gren_lang$core$Array$Builder$pushLast, line, soFar.ab), X: soFar.X };
					case 0:
						var line = change.a;
						return { ab: $gren_lang$core$Array$Builder$empty(0), X: soFar.X + ($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$continuousNoChangeLinesCollapse($gren_lang$core$Array$Builder$toArray(soFar.ab)) + ('\n' + $lue_bird$gren_extra_checks$Ansi$green('|   ' + line))) };
					default:
						var line = change.a;
						return { ab: $gren_lang$core$Array$Builder$empty(0), X: soFar.X + ($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$continuousNoChangeLinesCollapse($gren_lang$core$Array$Builder$toArray(soFar.ab)) + ('\n' + $lue_bird$gren_extra_checks$Ansi$red('|   ' + line))) };
				}
			}), { ab: $gren_lang$core$Array$Builder$empty(0), X: '' }, $lue_bird$gren_extra_checks$Diff$diff$($gren_lang$core$String$lines(aString), $gren_lang$core$String$lines(bString)));
	var _v0 = $gren_lang$core$Array$first($gren_lang$core$Array$Builder$toArray(highlightedAndFinalNoChangeLines.ab));
	if (_v0.$ === 1) {
		return highlightedAndFinalNoChangeLines.X;
	} else {
		var nextNoChangeLine = _v0.a;
		return highlightedAndFinalNoChangeLines.X + ('\n|   ' + nextNoChangeLine);
	}
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourceHighlightDifferentLines = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourceHighlightDifferentLines$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorDisplay$ = function(source, error) {
	return $lue_bird$gren_extra_checks$Ansi$bold($lue_bird$gren_extra_checks$Ansi$cyan(error.f$)) + ('  in ' + (error.ct + (':' + ($gren_lang$core$String$fromInt(error.bO.cE.bl) + (':' + ($gren_lang$core$String$fromInt(error.bO.cE.aZ) + ('\n\n' + (A2($gren_lang$core$String$join, '\n', A2($gren_lang$core$Array$map, function(line) {
				return '|   ' + line;
			}, A2($gren_lang$core$String$split, '\n', $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$codeExtract$(source, error.bO)))) + ('\n\n' + (A2($gren_lang$core$String$join, '\n\n', error.eZ) + ($gren_lang$core$Array$isEmpty(error.a6) ? '' : ('\n\nI can fix this for you by changing\n' + A2($gren_lang$core$String$join, '\n\n', A2($gren_lang$core$Array$map, function(fileFixedSource) {
				return 'in ' + (fileFixedSource.ct + ('\n' + $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourceHighlightDifferentLines$(fileFixedSource.dL, fileFixedSource.ce)));
			}, error.a6))))))))))))));
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorDisplay = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorDisplay$);
var $gren_lang$node$FileSystem$errorToString = function(_v0) {
	var message = _v0.f$;
	return message;
};
var $gren_lang$core$Task$executeCmd = function(task) {
	return $gren_lang$core$Task$command($gren_lang$core$Task$ExecuteCmd(task));
};
var $gren_lang$node$Node$exitWithCode = function(code) {
	return _Node_exitWithCode(code);
};
var $gren_lang$core$Bytes$fromString = _Bytes_fromString;
var $gren_lang$core$Task$onError = _Scheduler_onError;


var _Stream_read = function (stream) {
  return _Scheduler_binding(function (callback) {
    if (stream.locked) {
      return callback(_Scheduler_fail($gren_lang$core$Stream$Locked));
    }

    const reader = stream.getReader();
    reader
      .read()
      .then(({ done, value }) => {
        reader.releaseLock();

        if (done) {
          return callback(_Scheduler_fail($gren_lang$core$Stream$Closed));
        }

        if (value instanceof Uint8Array) {
          value = new DataView(
            value.buffer,
            value.byteOffset,
            value.byteLength,
          );
        }

        callback(_Scheduler_succeed(value));
      })
      .catch((err) => {
        reader.releaseLock();
        callback(
          _Scheduler_fail(
            $gren_lang$core$Stream$Cancelled(_Stream_cancellationErrorString(err)),
          ),
        );
      });
  });
};

var _Stream_cancellationErrorString = function (err) {
  if (err instanceof Error) {
    return err.toString();
  }

  if (typeof err === "string") {
    return err;
  }

  return "Unknown error";
};

var _Stream_write = F2(function (value, stream) {
  return _Scheduler_binding(function (callback) {
    if (stream.locked) {
      return callback(_Scheduler_fail($gren_lang$core$Stream$Locked));
    }

    if (value instanceof DataView) {
      value = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    }

    const writer = stream.getWriter();
    writer.ready
      .then(() => {
        const writePromise = writer.write(value);
        writer.releaseLock();
        return writePromise;
      })
      .then(() => {
        callback(_Scheduler_succeed(stream));
      })
      .catch((err) => {
        callback(
          _Scheduler_fail(
            $gren_lang$core$Stream$Cancelled(_Stream_cancellationErrorString(err)),
          ),
        );
      });
  });
});

var _Stream_enqueue = F2(function (value, stream) {
  return _Scheduler_binding(function (callback) {
    if (stream.locked) {
      return callback(_Scheduler_fail($gren_lang$core$Stream$Locked));
    }

    if (value instanceof DataView) {
      value = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    }

    const writer = stream.getWriter();
    writer.ready.then(() => {
      writer.write(value);
      writer.releaseLock();

      callback(_Scheduler_succeed(stream));
    });
  });
});

var _Stream_cancelReadable = F2(function (reason, stream) {
  return _Scheduler_binding(function (callback) {
    if (stream.locked) {
      return callback(_Scheduler_fail($gren_lang$core$Stream$Locked));
    }

    stream.cancel(reason).then(() => {
      callback(_Scheduler_succeed({}));
    });
  });
});

var _Stream_cancelWritable = F2(function (reason, stream) {
  return _Scheduler_binding(function (callback) {
    if (stream.locked) {
      return callback(_Scheduler_fail($gren_lang$core$Stream$Locked));
    }

    stream.abort(reason).then(() => {
      callback(_Scheduler_succeed({}));
    });
  });
});

var _Stream_closeWritable = function (stream) {
  return _Scheduler_binding(function (callback) {
    if (stream.locked) {
      return callback(_Scheduler_fail($gren_lang$core$Stream$Locked));
    }

    const writer = stream.getWriter();
    writer.close();
    writer.releaseLock();

    callback(_Scheduler_succeed({}));
  });
};

var _Stream_pipeThrough = F2(function (transformer, readable) {
  return _Scheduler_binding(function (callback) {
    if (readable.locked || transformer.writable.locked) {
      return callback(_Scheduler_fail($gren_lang$core$Stream$Locked));
    }

    const transformedReader = readable.pipeThrough(transformer);
    return callback(_Scheduler_succeed(transformedReader));
  });
});

var _Stream_pipeTo = F2(function (writable, readable) {
  return _Scheduler_binding(function (callback) {
    if (readable.locked || writable.locked) {
      return callback(_Scheduler_fail($gren_lang$core$Stream$Locked));
    }

    readable
      .pipeTo(writable)
      .then(() => {
        callback(_Scheduler_succeed({}));
      })
      .catch((err) => {
        callback(
          _Scheduler_fail(
            $gren_lang$core$Stream$Cancelled(_Stream_cancellationErrorString(err)),
          ),
        );
      });
  });
});

var _Stream_identityTransformation = F2(function (readCapacity, writeCapacity) {
  return _Scheduler_binding(function (callback) {
    const transformStream = new TransformStream(
      {},
      new CountQueuingStrategy({ highWaterMark: writeCapacity }),
      new CountQueuingStrategy({ highWaterMark: readCapacity }),
    );

    return callback(_Scheduler_succeed(transformStream));
  });
});

var _Stream_customTransformation = F4(
  function (toAction, initState, readCapacity, writeCapacity) {
    return _Scheduler_binding(function (callback) {
      const transformStream = new TransformStream(
        {
          start() {
            this.state = initState;
          },
          transform(chunk, controller) {
            if (chunk instanceof Uint8Array) {
              chunk = new DataView(
                chunk.buffer,
                chunk.byteOffset,
                chunk.byteLength,
              );
            }

            const action = A2(toAction, this.state, chunk);
            switch (action.eU) {
              case "UpdateState":
                this.state = action.ea;
                break;
              case "Send":
                this.state = action.ea;
                for (let value of action.d4) {
                  if (value instanceof DataView) {
                    value = new Uint8Array(
                      value.buffer,
                      value.byteOffset,
                      value.byteLength,
                    );
                  }

                  controller.enqueue(value);
                }
                break;
              case "Close":
                for (let value of action.d4) {
                  if (value instanceof DataView) {
                    value = new Uint8Array(
                      value.buffer,
                      value.byteOffset,
                      value.byteLength,
                    );
                  }

                  controller.enqueue(value);
                }
                controller.terminate();
                break;
              case "Cancel":
                controller.error(action.eG);
                break;
            }
          },
        },
        new CountQueuingStrategy({ highWaterMark: writeCapacity }),
        new CountQueuingStrategy({ highWaterMark: readCapacity }),
      );

      return callback(_Scheduler_succeed(transformStream));
    });
  },
);

var _Stream_readable = function (transformStream) {
  return transformStream.readable;
};

var _Stream_writable = function (transformStream) {
  return transformStream.writable;
};

var _Stream_textEncoder = _Scheduler_binding(function (callback) {
  return callback(_Scheduler_succeed(new TextEncoderStream()));
});

var _Stream_textDecoder = _Scheduler_binding(function (callback) {
  return callback(_Scheduler_succeed(new TextDecoderStream()));
});

var _Stream_compressor = function (algo) {
  return _Scheduler_binding(function (callback) {
    return callback(_Scheduler_succeed(new CompressionStream(algo)));
  });
};

var _Stream_decompressor = function (algo) {
  return _Scheduler_binding(function (callback) {
    return callback(_Scheduler_succeed(new DecompressionStream(algo)));
  });
};
var $gren_lang$core$Stream$Cancelled = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$core$Stream$Closed = { $: 0 };
var $gren_lang$core$Stream$Locked = { $: 2 };
var $gren_lang$core$Stream$write = _Stream_write;
var $gren_lang$core$Stream$Log$bytes$ = function(stream, data) {
	return A2($gren_lang$core$Task$onError, function(_v1) {
			return $gren_lang$core$Task$succeed({  });
		}, A2($gren_lang$core$Task$andThen, function(_v0) {
				return $gren_lang$core$Task$succeed({  });
			}, A2($gren_lang$core$Stream$write, data, stream)));
};
var $gren_lang$core$Stream$Log$bytes = F2($gren_lang$core$Stream$Log$bytes$);
var $gren_lang$core$Stream$Log$string$ = function(stream, data) {
	return $gren_lang$core$Stream$Log$bytes$(stream, $gren_lang$core$Bytes$fromString(data));
};
var $gren_lang$core$Stream$Log$string = F2($gren_lang$core$Stream$Log$string$);
var $gren_lang$core$Stream$Log$line$ = function(stream, data) {
	return $gren_lang$core$Stream$Log$string$(stream, data + '\n');
};
var $gren_lang$core$Stream$Log$line = F2($gren_lang$core$Stream$Log$line$);
var $gren_lang$core$Stream$read = _Stream_read;
var $gren_lang$core$Task$execute = function(task) {
	return $gren_lang$core$Task$command($gren_lang$core$Task$Execute($gren_lang$core$Task$map$(function(_v0) {
					return {  };
				}, task)));
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute = function(task) {
	return $gren_lang$core$Task$execute(task);
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskSucceedToResult = function(task) {
	return A2($gren_lang$core$Task$onError, function(error) {
			return $gren_lang$core$Task$succeed($gren_lang$core$Result$Err(error));
		}, $gren_lang$core$Task$map$($gren_lang$core$Result$Ok, task));
};
var $gren_lang$core$Bytes$toString = _Bytes_toString;


var fs = require("node:fs");
var bufferNs = require("node:buffer");
var process = require("node:process");
var path = require("node:path");
var os = require("node:os");
var stream = require("node:stream");

var _FileSystem_coerce = function (fh) {
  return fh;
};

var _FileSystem_open = F2(function (access, path) {
  return _Scheduler_binding(function (callback) {
    fs.open(_FilePath_toString(path), access, function (err, fd) {
      if (err != null) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed({ ct: path, K: fd }));
      }
    });
  });
});

var _FileSystem_constructError = function (path, err) {
  return $gren_lang$node$FileSystem$Error({
    ct: path,
    eL: err.code || "",
    f$: err.message || "",
  });
};

var _FileSystem_close = function (fh) {
  return _Scheduler_binding(function (callback) {
    fs.close(fh.K, function (err) {
      if (err != null) {
        callback(_Scheduler_fail(_FileSystem_constructError(fh.ct, err)));
      } else {
        callback(_Scheduler_succeed({}));
      }
    });
  });
};

var _FileSystem_readFromOffset = F2(function (fh, options) {
  var requestedLength =
    options.a9 < 0 || options.a9 > bufferNs.constants.MAX_LENGTH
      ? bufferNs.constants.MAX_LENGTH
      : options.a9;

  var fileOffset = options.g < 0 ? 0 : options.g;

  return _Scheduler_binding(function (callback) {
    var initialBufferSize =
      requestedLength === bufferNs.constants.MAX_LENGTH
        ? 16 * 1024
        : requestedLength;
    var buffer = Buffer.allocUnsafe(initialBufferSize);

    _FileSystem_readHelper(
      fh,
      buffer,
      0,
      fileOffset,
      buffer.byteLength,
      requestedLength,
      callback,
    );
  });
});

var _FileSystem_readHelper = function (
  fh,
  buffer,
  bufferOffset,
  fileOffset,
  maxReadLength,
  requestedReadLength,
  callback,
) {
  fs.read(
    fh.K,
    buffer,
    bufferOffset,
    maxReadLength,
    fileOffset,
    function (err, bytesRead, _buff) {
      if (err != null) {
        callback(_Scheduler_fail(_FileSystem_constructError(fh.ct, err)));
        return;
      }

      var newBufferOffset = bufferOffset + bytesRead;

      if (bytesRead === 0 || newBufferOffset >= requestedReadLength) {
        callback(
          _Scheduler_succeed(
            new DataView(buffer.buffer, buffer.byteOffset, newBufferOffset),
          ),
        );
        return;
      }

      var newMaxReadLength = maxReadLength - bytesRead;
      if (newMaxReadLength <= 0) {
        var oldBuffer = buffer;
        buffer = Buffer.allocUnsafe(oldBuffer.byteLength * 1.5);
        oldBuffer.copy(buffer);

        newMaxReadLength = buffer.byteLength - oldBuffer.byteLength;
      }

      _FileSystem_readHelper(
        fh,
        buffer,
        newBufferOffset,
        fileOffset + bytesRead,
        newMaxReadLength,
        requestedReadLength,
        callback,
      );
    },
  );
};

var _FileSystem_writeFromOffset = F3(function (fh, options, bytes) {
  return _Scheduler_binding(function (callback) {
    _FileSystem_writeHelper(
      fh,
      bytes,
      0,
      bytes.byteLength,
      options.g,
      callback,
    );
  });
});

var _FileSystem_writeHelper = function (
  fh,
  buffer,
  bufferOffset,
  length,
  fileOffset,
  callback,
) {
  fs.write(
    fh.K,
    buffer,
    bufferOffset,
    length,
    fileOffset,
    function (err, bytesWritten, buffer) {
      if (err != null) {
        callback(_Scheduler_fail(_FileSystem_constructError(fh.ct, err)));
        return;
      }

      if (bytesWritten === length) {
        callback(_Scheduler_succeed(fh));
        return;
      }

      var newBufferOffset = bufferOffset + bytesWritten;
      var newFileOffset = fileOffset + bytesWritten;

      _FileSystem_writeHelper(
        fh,
        buffer,
        newBufferOffset,
        length - bytesWritten,
        newFileOffset,
        callback,
      );
    },
  );
};

var _FileSystem_remove = F2(function (options, path) {
  var rmOpts = {
    recursive: options.cx,
  };

  return _Scheduler_binding(function (callback) {
    fs.rm(_FilePath_toString(path), rmOpts, function (err) {
      if (err != null) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(path));
      }
    });
  });
});

var _FileSystem_makeDirectory = F2(function (options, path) {
  return _Scheduler_binding(function (callback) {
    fs.mkdir(
      _FilePath_toString(path),
      { recursive: options.cx },
      function (err) {
        if (err != null) {
          callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
        } else {
          callback(_Scheduler_succeed(path));
        }
      },
    );
  });
});

// List of dir contents as DirEntry values holding filename string
var _FileSystem_listDirectory = function (path) {
  return _Scheduler_binding(function (callback) {
    fs.readdir(
      _FilePath_toString(path),
      { withFileTypes: true },
      function (err, content) {
        if (err != null) {
          callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
        } else {
          callback(
            _Scheduler_succeed(
              content.map((f) => ({
                ct: _FilePath_fromString(f.name),
                e5: _FileSystem_toEntityType(f),
              })),
            ),
          );
        }
      },
    );
  });
};

var _FileSystem_toEntityType = function (dirEnt) {
  if (dirEnt.isFile()) {
    return $gren_lang$node$FileSystem$File;
  } else if (dirEnt.isDirectory()) {
    return $gren_lang$node$FileSystem$Directory;
  } else if (dirEnt.isFIFO()) {
    return $gren_lang$node$FileSystem$Pipe;
  } else if (dirEnt.isSocket()) {
    return $gren_lang$node$FileSystem$Socket;
  } else if (dirEnt.isSymbolicLink()) {
    return $gren_lang$node$FileSystem$Symlink;
  } else {
    return $gren_lang$node$FileSystem$Device;
  }
};

var _FileSystem_fchmod = F2(function (mode, fd) {
  return _Scheduler_binding(function (callback) {
    fs.fchmod(fd.K, mode, function (err) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(fd.ct, err)));
      } else {
        callback(_Scheduler_succeed(fd));
      }
    });
  });
});

var _FileSystem_fchown = F2(function (ids, fd) {
  return _Scheduler_binding(function (callback) {
    fs.fchown(fd.K, ids.bY, ids.bE, function (err) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(fd.ct, err)));
      } else {
        callback(_Scheduler_succeed(fd));
      }
    });
  });
});

var _FileSystem_fdatasync = function (fd) {
  return _Scheduler_binding(function (callback) {
    fs.fdatasync(fd.K, function (err) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(fd.ct, err)));
      } else {
        callback(_Scheduler_succeed(fd));
      }
    });
  });
};

var _FileSystem_fsync = function (fd) {
  return _Scheduler_binding(function (callback) {
    fs.fsync(fd.K, function (err) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(fd.ct, err)));
      } else {
        callback(_Scheduler_succeed(fd));
      }
    });
  });
};

var _FileSystem_fstat = function (fd) {
  return _Scheduler_binding(function (callback) {
    fs.fstat(fd.K, function (err, stats) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(fd.ct, err)));
      } else {
        callback(_Scheduler_succeed(_FileSystem_statToGrenRecord(stats)));
      }
    });
  });
};

var _FileSystem_ftruncate = F2(function (len, fd) {
  return _Scheduler_binding(function (callback) {
    fs.ftruncate(fd.K, len, function (err) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(fd.ct, err)));
      } else {
        callback(_Scheduler_succeed(fd));
      }
    });
  });
});

var _FileSystem_futimes = F3(function (atime, mtime, fd) {
  return _Scheduler_binding(function (callback) {
    fs.futimes(fd.K, atime, mtime, function (err) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(fd.ct, err)));
      } else {
        callback(_Scheduler_succeed(fd));
      }
    });
  });
});

var _FileSystem_access = F2(function (permissions, path) {
  var mode = fs.constants.F_OK;

  if (permissions.includes($gren_lang$node$FileSystem$Read)) {
    mode = mode | fs.constants.R_OK;
  }

  if (permissions.includes($gren_lang$node$FileSystem$Write)) {
    mode = mode | fs.constants.W_OK;
  }

  if (permissions.includes($gren_lang$node$FileSystem$Execute)) {
    mode = mode | fs.constants.X_OK;
  }

  return _Scheduler_binding(function (callback) {
    fs.access(_FilePath_toString(path), mode, function (err) {
      if (err != null) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(path));
      }
    });
  });
});

var _FileSystem_appendFile = F2(function (data, path) {
  return _Scheduler_binding(function (callback) {
    fs.appendFile(_FilePath_toString(path), data, function (err) {
      if (err != null) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(path));
      }
    });
  });
});

var _FileSystem_chmod = F2(function (mode, path) {
  return _Scheduler_binding(function (callback) {
    fs.chmod(_FilePath_toString(path), mode, function (err) {
      if (err != null) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(path));
      }
    });
  });
});

var _FileSystem_chown = F2(function (ids, path) {
  return _Scheduler_binding(function (callback) {
    fs.chown(
      _FilePath_toString(path),
      ids.bY,
      ids.bE,
      function (err) {
        if (err) {
          callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
        } else {
          callback(_Scheduler_succeed(path));
        }
      },
    );
  });
});

var _FileSystem_lchown = F2(function (ids, path) {
  return _Scheduler_binding(function (callback) {
    fs.lchown(
      _FilePath_toString(path),
      ids.bY,
      ids.bE,
      function (err) {
        if (err) {
          callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
        } else {
          callback(_Scheduler_succeed(path));
        }
      },
    );
  });
});

var _FileSystem_copyFile = F2(function (src, dest) {
  return _Scheduler_binding(function (callback) {
    fs.copyFile(
      _FilePath_toString(src),
      _FilePath_toString(dest),
      0,
      function (err) {
        if (err) {
          callback(_Scheduler_fail(_FileSystem_constructError(dest, err)));
        } else {
          callback(_Scheduler_succeed(dest));
        }
      },
    );
  });
});

var _FileSystem_link = F2(function (src, dest) {
  return _Scheduler_binding(function (callback) {
    fs.link(
      _FilePath_toString(src),
      _FilePath_toString(dest),
      function (err) {
        if (err) {
          callback(_Scheduler_fail(_FileSystem_constructError(dest, err)));
        } else {
          callback(_Scheduler_succeed(dest));
        }
      },
    );
  });
});

var _FileSystem_symlink = F2(function (src, dest) {
  return _Scheduler_binding(function (callback) {
    fs.symlink(
      _FilePath_toString(src),
      _FilePath_toString(dest),
      function (err) {
        if (err) {
          callback(_Scheduler_fail(_FileSystem_constructError(dest, err)));
        } else {
          callback(_Scheduler_succeed(dest));
        }
      },
    );
  });
});

var _FileSystem_unlink = function (src) {
  return _Scheduler_binding(function (callback) {
    fs.unlink(_FilePath_toString(src), function (err) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(src, err)));
      } else {
        callback(_Scheduler_succeed(src));
      }
    });
  });
};

var _FileSystem_mkdtemp = function (prefix) {
  return _Scheduler_binding(function (callback) {
    fs.mkdtemp(path.join(os.tmpdir(), prefix), function (err, dir) {
      if (err) {
        callback(
          _Scheduler_fail(
            _FileSystem_constructError(_FilePath_fromString(dir), err),
          ),
        );
      } else {
        callback(_Scheduler_succeed(_FilePath_fromString(dir)));
      }
    });
  });
};

var _FileSystem_readFile = function (path) {
  return _Scheduler_binding(function (callback) {
    fs.readFile(_FilePath_toString(path), function (err, data) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(
          _Scheduler_succeed(
            new DataView(data.buffer, data.byteOffset, data.byteLength),
          ),
        );
      }
    });
  });
};

var _FileSystem_readFileStream = F2(function (opts, path) {
  return _Scheduler_binding(function (callback) {
    try {
      var fstream = fs.createReadStream(_FilePath_toString(path), {
        start: opts.cE,
        end: opts.c6 === -1 ? undefined : opts.c6,
      });
      callback(_Scheduler_succeed(stream.Readable.toWeb(fstream)));
    } catch (err) {
      callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
    }
  });
});

var _FileSystem_readLink = function (path) {
  return _Scheduler_binding(function (callback) {
    fs.readlink(_FilePath_toString(path), function (err, linkedPath) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(_FilePath_fromString(linkedPath)));
      }
    });
  });
};

var _FileSystem_rename = F2(function (oldPath, newPath) {
  return _Scheduler_binding(function (callback) {
    fs.rename(
      _FilePath_toString(oldPath),
      _FilePath_toString(newPath),
      function (err) {
        if (err) {
          callback(_Scheduler_fail(_FileSystem_constructError(newPath, err)));
        } else {
          callback(_Scheduler_succeed(newPath));
        }
      },
    );
  });
});

var _FileSystem_realpath = function (path) {
  return _Scheduler_binding(function (callback) {
    fs.realpath(_FilePath_toString(path), function (err, resolvedPath) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(_FilePath_fromString(resolvedPath)));
      }
    });
  });
};

var _FileSystem_stat = function (path) {
  return _Scheduler_binding(function (callback) {
    fs.stat(_FilePath_toString(path), function (err, stats) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(_FileSystem_statToGrenRecord(stats)));
      }
    });
  });
};

var _FileSystem_lstat = function (path) {
  return _Scheduler_binding(function (callback) {
    fs.lstat(_FilePath_toString(path), function (err, stats) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(_FileSystem_statToGrenRecord(stats)));
      }
    });
  });
};

var _FileSystem_statToGrenRecord = function (stats) {
  return {
    e5: _FileSystem_toEntityType(stats),
    eA: stats.blksize,
    eB: stats.blocks,
    eF: stats.size,
    eT: $gren_lang$core$Time$millisToPosix(Math.floor(stats.birthtimeMs)),
    e_: stats.dev,
    bE: stats.gid,
    dt: $gren_lang$core$Time$millisToPosix(Math.floor(stats.atimeMs)),
    fP: $gren_lang$core$Time$millisToPosix(Math.floor(stats.ctimeMs)),
    fQ: $gren_lang$core$Time$millisToPosix(Math.floor(stats.mtimeMs)),
    bY: stats.uid,
  };
};

var _FileSystem_truncate = F2(function (len, path) {
  return _Scheduler_binding(function (callback) {
    fs.truncate(_FilePath_toString(path), len, function (err) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(path));
      }
    });
  });
});

var _FileSystem_utimes = F3(function (atime, mtime, path) {
  return _Scheduler_binding(function (callback) {
    fs.utimes(_FilePath_toString(path), atime, mtime, function (err) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(path));
      }
    });
  });
});

var _FileSystem_lutimes = F3(function (atime, mtime, path) {
  return _Scheduler_binding(function (callback) {
    fs.lutimes(_FilePath_toString(path), atime, mtime, function (err) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(path));
      }
    });
  });
});

var _FileSystem_writeFile = F2(function (data, path) {
  return _Scheduler_binding(function (callback) {
    fs.writeFile(_FilePath_toString(path), data, function (err) {
      if (err) {
        callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
      } else {
        callback(_Scheduler_succeed(path));
      }
    });
  });
});

var _FileSystem_writeFileStream = F2(function (pos, path) {
  return _Scheduler_binding(function (callback) {
    try {
      var fstream = fs.createWriteStream(_FilePath_toString(path), {
        flags: pos === 0 ? "w" : pos === -1 ? "a" : "r+",
        start: pos === 0 ? undefined : pos,
      });
      callback(_Scheduler_succeed(stream.Writable.toWeb(fstream)));
    } catch (err) {
      callback(_Scheduler_fail(_FileSystem_constructError(path, err)));
    }
  });
});

var _FileSystem_watch = F3(function (path, isRecursive, sendToSelf) {
  return _Scheduler_binding(function (_callback) {
    var watcher = null;

    try {
      watcher = fs.watch(
        path,
        { recursive: isRecursive },
        function (eventType, filename) {
          var maybePath = filename
            ? $gren_lang$core$Maybe$Just(_FilePath_fromString(filename))
            : $gren_lang$core$Maybe$Nothing;

          if (eventType === "rename") {
            _Scheduler_rawSpawn(sendToSelf($gren_lang$node$FileSystem$Moved(maybePath)));
          } else if (eventType === "change") {
            _Scheduler_rawSpawn(sendToSelf($gren_lang$node$FileSystem$Changed(maybePath)));
          }

          // other change types are ignored
        },
      );
    } catch (e) {
      // ignore errors
    }

    return function () {
      if (watcher) {
        watcher.close();
      }
    };
  });
});
var _FileSystem_homeDir = _Scheduler_binding(function (callback) {
  callback(_Scheduler_succeed(_FilePath_fromString(os.homedir())));
});

var _FileSystem_currentWorkingDirectory = _Scheduler_binding(
  function (callback) {
    callback(_Scheduler_succeed(_FilePath_fromString(process.cwd())));
  },
);

var _FileSystem_tmpDir = _Scheduler_binding(function (callback) {
  callback(_Scheduler_succeed(_FilePath_fromString(os.tmpdir())));
});

var _FileSystem_devNull = _Scheduler_binding(function (callback) {
  callback(_Scheduler_succeed(_FilePath_fromString(os.devNull)));
});
var $gren_lang$node$FileSystem$Changed = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$node$FileSystem$Device = 4;
var $gren_lang$node$FileSystem$Directory = 1;
var $gren_lang$node$FileSystem$Error = $gren_lang$core$Basics$identity;
var $gren_lang$node$FileSystem$Execute = 2;
var $gren_lang$node$FileSystem$File = 0;
var $gren_lang$node$FileSystem$Moved = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$node$FileSystem$Pipe = 5;
var $gren_lang$node$FileSystem$Read = 0;
var $gren_lang$node$FileSystem$Socket = 2;
var $gren_lang$node$FileSystem$Symlink = 3;
var $gren_lang$node$FileSystem$Write = 1;
var $gren_lang$core$Time$Posix = $gren_lang$core$Basics$identity;
var $gren_lang$core$Time$millisToPosix = $gren_lang$core$Basics$identity;
var $gren_lang$node$FileSystem$writeFile$ = function(_v0, bytes, path) {
	return A2(_FileSystem_writeFile, bytes, path);
};
var $gren_lang$node$FileSystem$writeFile = F3($gren_lang$node$FileSystem$writeFile$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsReceived$ = function(_v0, _v1) {
	var fileSystemPermission = _v0.m;
	var stdin = _v0.gL;
	var stdout = _v0.ee;
	var projectFilesByPath = _v1.aN;
	var errors = _v1.A;
	if (!errors.$) {
		var unfixableErrors = errors.a;
		return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$core$Stream$Log$string$(stdout, $gren_lang$core$Dict$foldl$(F3(function(path, pathErrors, soFar) {
							return soFar + (A2($gren_lang$core$String$join, '\n\n', A2($gren_lang$core$Array$map, function(error) {
										return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorDisplay$($gren_lang$core$Maybe$withDefault$('', $gren_lang$core$Dict$get$(path, projectFilesByPath)), { eZ: error.eZ, a6: [  ], f$: error.f$, ct: path, bO: error.bO });
									}, pathErrors)) + '\n\n\n');
						}), '', unfixableErrors)));
	} else {
		var _v3 = errors.a;
		var fixable = _v3.E;
		var otherErrors = _v3.j;
		return $gren_lang$core$Task$executeCmd(A2($gren_lang$core$Task$andThen, function(_v5) {
					return $gren_lang$core$Task$map$(function(response) {
							var acceptedOrExitErr = function () {
								if (response.$ === 1) {
									return $gren_lang$core$Result$Ok(false);
								} else {
									var responseBytes = response.a;
									return _Utils_eq(responseBytes, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ctrlCBytes) ? $gren_lang$core$Result$Err({  }) : $gren_lang$core$Result$Ok(function () {
											var _v11 = $gren_lang$core$Bytes$toString(responseBytes);
											_v11$3:
											while (true) {
												if (!_v11.$) {
													switch (_v11.a) {
														case 'y':
															return true;
														case 'Y':
															return true;
														case '\n':
															return true;
														default:
															break _v11$3;
													}
												} else {
													break _v11$3;
												}
											}
											return false;
										}());
								}
							}();
							if (acceptedOrExitErr.$ === 1) {
								return $gren_lang$core$Task$executeCmd($gren_lang$core$Task$map$(function(_v7) {
											return $gren_lang$node$Node$exitWithCode(1);
										}, $gren_lang$core$Stream$Log$line$(stdout, '')));
							} else {
								if (acceptedOrExitErr.a) {
									return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute(A2($gren_lang$core$Task$andThen, function(result) {
												if (result.$ === 1) {
													var error = result.a;
													return $gren_lang$core$Stream$Log$line$(stdout, 'Failed to apply this fix to at least one file: ' + ($gren_lang$node$FileSystem$errorToString(error) + '\n'));
												} else {
													return $gren_lang$core$Stream$Log$line$(stdout, 'Ok, this fix was applied successfully.\n');
												}
											}, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskSucceedToResult($gren_lang$core$Task$concurrent(A2($gren_lang$core$Array$map, function(fix) {
															return $gren_lang$node$FileSystem$writeFile$(fileSystemPermission, $gren_lang$core$Bytes$fromString(fix.ce), $gren_lang$node$FileSystem$Path$appendPosixString$(fix.ct, $gren_lang$node$FileSystem$Path$fromPosixString('..')));
														}, fixable.a6)))));
								} else {
									return $gren_lang$core$Task$perform$(function(_v9) {
											return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ErrorFixRejected;
										}, $gren_lang$core$Stream$Log$line$(stdout, 'Ok, this fix was not applied.\n'));
								}
							}
						}, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskSucceedToResult($gren_lang$core$Stream$read(stdin)));
				}, A2($gren_lang$core$Task$andThen, function(_v4) {
						return $gren_lang$core$Stream$Log$line$(stdout, '\nApply these edits by pressing y. Reject by pressing n');
					}, $gren_lang$core$Stream$Log$line$(stdout, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorDisplay$(fixable.gF, fixable)))));
	}
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsReceived = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsReceived$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$failedToParseModulesMessage = function(pathsThatFailedToParse) {
	switch (pathsThatFailedToParse.length) {
		case 0:
			return 'weird bug in gren-extra-checks: failed to parse paths but none were recorded';
		case 1:
			var _v1 = pathsThatFailedToParse[0];
			var errorPath = _v1.ct;
			var deadEndsAsString = _v1.b4;
			return 'module at path ' + (errorPath + (' failed to parse:\n' + deadEndsAsString));
		default:
			var nonSinglePathsThatFailedToParse = pathsThatFailedToParse;
			return 'modules failed to parse:' + A3($gren_lang$core$Array$foldl, F2(function(_v2, soFar) {
						var errorPath = _v2.ct;
						var deadEndsAsString = _v2.b4;
						return soFar + ('\n\n- at path ' + (errorPath + (':\n' + deadEndsAsString)));
					}), '', nonSinglePathsThatFailedToParse);
	}
};
var $gren_lang$node$FileSystem$Path$append$ = function(left, right) {
	return $gren_lang$node$FileSystem$Path$prepend$(right, left);
};
var $gren_lang$node$FileSystem$Path$append = F2($gren_lang$node$FileSystem$Path$append$);
var $gren_lang$compiler_node$Compiler$Paths$CacheRoot = $gren_lang$core$Basics$identity;
var $gren_lang$node$FileSystem$Path$fromWin32String = _FilePath_fromWin32;
var $gren_lang$compiler_common$SemanticVersion$toString = function(_v0) {
	var major = _v0.ci;
	var minor = _v0.ck;
	var patch = _v0.cs;
	return $gren_lang$core$String$fromInt(major) + ('.' + ($gren_lang$core$String$fromInt(minor) + ('.' + $gren_lang$core$String$fromInt(patch))));
};
var $gren_lang$compiler_node$Compiler$Paths$cacheRoot$ = function(platform, envVars, homeDir, grenVersion) {
	var startPath = function () {
		switch (platform.$) {
			case 0:
				return $gren_lang$core$Maybe$withDefault$($gren_lang$node$FileSystem$Path$prepend$(homeDir, $gren_lang$node$FileSystem$Path$fromPosixString('AppData/Local')), $gren_lang$core$Maybe$map$($gren_lang$node$FileSystem$Path$fromWin32String, $gren_lang$core$Dict$get$('LOCALAPPDATA', envVars)));
			case 1:
				return $gren_lang$node$FileSystem$Path$prepend$(homeDir, $gren_lang$node$FileSystem$Path$fromPosixString('Library/Caches'));
			default:
				return $gren_lang$core$Maybe$withDefault$($gren_lang$node$FileSystem$Path$append$($gren_lang$node$FileSystem$Path$fromPosixString('.cache'), homeDir), $gren_lang$core$Maybe$map$($gren_lang$node$FileSystem$Path$fromPosixString, $gren_lang$core$Dict$get$('XDG_CACHE_HOME', envVars)));
		}
	}();
	var endPath = $gren_lang$node$FileSystem$Path$fromPosixString(A2($gren_lang$core$String$join, '/', [ 'gren', $gren_lang$compiler_common$SemanticVersion$toString(grenVersion) ]));
	return $gren_lang$node$FileSystem$Path$prepend$(startPath, endPath);
};
var $gren_lang$compiler_node$Compiler$Paths$cacheRoot = F4($gren_lang$compiler_node$Compiler$Paths$cacheRoot$);
var $gren_lang$compiler_common$SemanticVersionRange$lowerBound = function(_v0) {
	var lower = _v0.w;
	return lower;
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$compilerOutlineDirectDependencies = function(outline) {
	if (!outline.$) {
		var app = outline.a;
		return $gren_lang$core$Array$Builder$toArray($gren_lang$core$Dict$foldl$(F3(function(dependencyName, dependencyVersionConstraint, soFar) {
						return A2($gren_lang$core$Array$Builder$pushLast, { bK: dependencyName, br: dependencyVersionConstraint }, soFar);
					}), $gren_lang$core$Array$Builder$empty(1), app.eY.c3));
	} else {
		var pkg = outline.a;
		return $gren_lang$core$Array$Builder$toArray($gren_lang$core$Dict$foldl$(F3(function(dependencyName, dependencyVersionConstraint, soFar) {
						return A2($gren_lang$core$Array$Builder$pushLast, { bK: dependencyName, br: function () {
								if (dependencyVersionConstraint.$ === 1) {
									var localPath = dependencyVersionConstraint.a;
									return $gren_lang$compiler_node$Compiler$Outline$LocalPath(localPath);
								} else {
									var versionRange = dependencyVersionConstraint.a;
									return $gren_lang$compiler_node$Compiler$Outline$Version($gren_lang$compiler_common$SemanticVersionRange$lowerBound(versionRange));
								}
							}() }, soFar);
					}), $gren_lang$core$Array$Builder$empty(1), pkg.eY));
	}
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$compilerOutlineGrenVersionMinimum = function(outline) {
	if (!outline.$) {
		var app = outline.a;
		return app.bD;
	} else {
		var pkg = outline.a;
		return $gren_lang$compiler_common$SemanticVersionRange$lowerBound(pkg.bD);
	}
};
var $gren_lang$core$Task$fail = _Scheduler_fail;
var $gren_lang$node$FileSystem$Path$empty = { aE: [  ], fh: '', W: '', gC: '' };
var $gren_lang$compiler_node$Compiler$Outline$FileSystemError = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_node$Compiler$Outline$kernelCodePrefixPath = $gren_lang$node$FileSystem$Path$fromPosixString('Gren/Kernel');
var $gren_lang$node$FileSystem$Path$parentPath = function(path) {
	var _v0 = $gren_lang$core$Array$popLast(path.aE);
	if (_v0.$ === 1) {
		return ($gren_lang$node$FileSystem$Path$filenameWithExtension(path) === '') ? $gren_lang$core$Maybe$Nothing : $gren_lang$core$Maybe$Just(_Utils_update(path, { fh: '', W: '' }));
	} else {
		var _v1 = _v0.a;
		var last = _v1.fO;
		var initial = _v1.fB;
		var _v2 = function () {
			var _v3 = A2($gren_lang$core$String$split, '.', last);
			if (_v3.length === 2) {
				var file = _v3[0];
				var ext = _v3[1];
				return { fh: ext, W: file };
			} else {
				return { fh: '', W: last };
			}
		}();
		var filename = _v2.W;
		var extension = _v2.fh;
		return $gren_lang$core$Maybe$Just(_Utils_update(path, { aE: initial, fh: extension, W: filename }));
	}
};
var $gren_lang$compiler_node$Compiler$Outline$isKernelCode = function(path) {
	if (path.fh === 'js') {
		var _v0 = $gren_lang$node$FileSystem$Path$parentPath(path);
		if (!_v0.$) {
			var parent = _v0.a;
			return _Utils_eq(parent, $gren_lang$compiler_node$Compiler$Outline$kernelCodePrefixPath);
		} else {
			return false;
		}
	} else {
		return false;
	}
};
var $gren_lang$node$FileSystem$listDirectory$ = function(_v0, path) {
	return _FileSystem_listDirectory(path);
};
var $gren_lang$node$FileSystem$listDirectory = F2($gren_lang$node$FileSystem$listDirectory$);
var $gren_lang$core$Task$mapError$ = function(convert, task) {
	return A2($gren_lang$core$Task$onError, $gren_lang$core$Basics$composeL$($gren_lang$core$Task$fail, convert), task);
};
var $gren_lang$core$Task$mapError = F2($gren_lang$core$Task$mapError$);
var $gren_lang$compiler_node$Compiler$Outline$findSourceFilesHelp$ = function(fsPerm, local, root) {
	return A2($gren_lang$core$Task$andThen, function(paths) {
			return $gren_lang$core$Task$map$($gren_lang$core$Array$flatten, $gren_lang$core$Task$concurrent($gren_lang$core$Array$mapAndKeepJust$(function(entry) {
							var _v0 = entry.e5;
							switch (_v0) {
								case 1:
									return $gren_lang$core$Maybe$Just($gren_lang$compiler_node$Compiler$Outline$findSourceFilesHelp$(fsPerm, $gren_lang$node$FileSystem$Path$append$(entry.ct, local), $gren_lang$node$FileSystem$Path$append$(entry.ct, root)));
								case 0:
									var fullLocalPath = $gren_lang$node$FileSystem$Path$append$(entry.ct, local);
									return ((entry.ct.fh === 'gren') || $gren_lang$compiler_node$Compiler$Outline$isKernelCode(fullLocalPath)) ? $gren_lang$core$Maybe$Just($gren_lang$core$Task$succeed([ { eo: $gren_lang$node$FileSystem$Path$append$(entry.ct, root), gw: fullLocalPath } ])) : $gren_lang$core$Maybe$Nothing;
								default:
									return $gren_lang$core$Maybe$Nothing;
							}
						}, paths)));
		}, $gren_lang$core$Task$mapError$($gren_lang$compiler_node$Compiler$Outline$FileSystemError, $gren_lang$node$FileSystem$listDirectory$(fsPerm, root)));
};
var $gren_lang$compiler_node$Compiler$Outline$findSourceFilesHelp = F3($gren_lang$compiler_node$Compiler$Outline$findSourceFilesHelp$);
var $gren_lang$compiler_node$Compiler$Outline$FileContentNotValidString = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_node$Compiler$Outline$FilePathInvalidModuleName = function (a) {
	return { $: 1, a: a };
};
var $gren_lang$node$FileSystem$readFile$ = function(_v0, path) {
	return _FileSystem_readFile(path);
};
var $gren_lang$node$FileSystem$readFile = F2($gren_lang$node$FileSystem$readFile$);
var $gren_lang$core$String$replace$ = function(before, after, string) {
	return A2($gren_lang$core$String$join, after, A2($gren_lang$core$String$split, before, string));
};
var $gren_lang$core$String$replace = F3($gren_lang$core$String$replace$);
var $gren_lang$compiler_node$Compiler$Outline$readSourceFile$ = function(fsPerm, _v0) {
	var absolute = _v0.eo;
	var relative = _v0.gw;
	return A2($gren_lang$core$Task$andThen, function(source) {
			var sourceString = $gren_lang$core$Bytes$toString(source);
			var inferredModuleName = $gren_lang$core$String$replace$('/', '.', $gren_lang$node$FileSystem$Path$toPosixString(_Utils_update(relative, { fh: '' })));
			var _v1 = { dB: $gren_lang$compiler_common$Compiler$ModuleName$fromString(inferredModuleName), gH: sourceString };
			if (!_v1.dB.$) {
				if (!_v1.gH.$) {
					var modName = _v1.dB.a;
					var srcStr = _v1.gH.a;
					return $gren_lang$core$Task$succeed({ dB: modName, ct: absolute, gF: srcStr });
				} else {
					var _v3 = _v1.gH;
					return $gren_lang$core$Task$fail($gren_lang$compiler_node$Compiler$Outline$FileContentNotValidString(relative));
				}
			} else {
				var _v2 = _v1.dB;
				return $gren_lang$core$Task$fail($gren_lang$compiler_node$Compiler$Outline$FilePathInvalidModuleName({ fz: inferredModuleName, ct: relative }));
			}
		}, $gren_lang$core$Task$mapError$($gren_lang$compiler_node$Compiler$Outline$FileSystemError, $gren_lang$node$FileSystem$readFile$(fsPerm, absolute)));
};
var $gren_lang$compiler_node$Compiler$Outline$readSourceFile = F2($gren_lang$compiler_node$Compiler$Outline$readSourceFile$);
var $gren_lang$compiler_node$Compiler$Outline$findSourceFiles$ = function(fsPerm, outline, outlinePath) {
	var sourceDirs = function () {
		if (!outline.$) {
			var appOutline = outline.a;
			return appOutline.cD;
		} else {
			return [ $gren_lang$node$FileSystem$Path$fromPosixString('src') ];
		}
	}();
	return A2($gren_lang$core$Task$andThen, function(paths) {
			return $gren_lang$core$Task$concurrent(A2($gren_lang$core$Array$map, $gren_lang$compiler_node$Compiler$Outline$readSourceFile(fsPerm), paths));
		}, $gren_lang$core$Task$map$($gren_lang$core$Array$flatten, $gren_lang$core$Task$concurrent(A2($gren_lang$core$Array$map, A2($gren_lang$compiler_node$Compiler$Outline$findSourceFilesHelp, fsPerm, $gren_lang$node$FileSystem$Path$empty), A2($gren_lang$core$Array$map, function(srcDir) {
							return $gren_lang$node$FileSystem$Path$append$(srcDir, outlinePath);
						}, sourceDirs)))));
};
var $gren_lang$compiler_node$Compiler$Outline$findSourceFiles = F3($gren_lang$compiler_node$Compiler$Outline$findSourceFiles$);
var $gren_lang$node$Node$getEnvironmentVariables = _Node_getEnvironmentVariables;
var $gren_lang$node$FileSystem$homeDirectory = function(_v0) {
	return _FileSystem_homeDir;
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$parseCompilerPackage = function(_package) {
	return { dC: $gren_lang$core$Array$Builder$toArray($gren_lang$core$Dict$foldl$(F3(function(path, source, soFar) {
					var _v0 = $gren_lang$core$String$Parser$Advanced$run$($gren_lang$compiler_common$Compiler$Parse$Module$parser, $gren_lang$compiler_common$Compiler$Parse$Context$empty, source);
					if (_v0.$ === 1) {
						return soFar;
					} else {
						var syntax = _v0.a;
						return A2($gren_lang$core$Array$Builder$pushLast, { ct: path, gF: source, gS: syntax }, soFar);
					}
				}), $gren_lang$core$Array$Builder$empty(1), _package.gJ)), T: _package.T };
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readFileString$ = function(fileSystemPermission, path) {
	return A2($gren_lang$core$Task$andThen, function(bytes) {
			var _v1 = $gren_lang$core$Bytes$toString(bytes);
			if (!_v1.$) {
				var string = _v1.a;
				return $gren_lang$core$Task$succeed(string);
			} else {
				return $gren_lang$core$Task$fail('invalid string, reading ' + $gren_lang$node$FileSystem$Path$toPosixString(path));
			}
		}, $gren_lang$core$Task$mapError$(function(_v0) {
				return 'file system error, reading ' + $gren_lang$node$FileSystem$Path$toPosixString(path);
			}, $gren_lang$node$FileSystem$readFile$(fileSystemPermission, path)));
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readFileString = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readFileString$);
var $gren_lang$compiler_node$Compiler$Package$FromPathFindSourcesError = function (a) {
	return { $: 4, a: a };
};
var $gren_lang$compiler_node$Compiler$Package$FromPathOutlineFileSystemError = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_node$Compiler$Package$FromPathOutlineInvalidJson = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_node$Compiler$Package$FromPathOutlineInvalidString = { $: 1 };
var $gren_lang$compiler_node$Compiler$Package$FromPathOutlineIsApp = { $: 3 };
var $gren_lang$compiler_node$Compiler$Outline$FromPathFileSystemError = function (a) {
	return { $: 0, a: a };
};
var $gren_lang$compiler_node$Compiler$Outline$FromPathInvalidJson = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$compiler_node$Compiler$Outline$FromPathInvalidString = { $: 1 };
var $gren_lang$compiler_node$Compiler$Outline$readFromPath$ = function(fsPerm, path) {
	return A2($gren_lang$core$Task$andThen, function(bytes) {
			var _v0 = $gren_lang$core$Bytes$toString(bytes);
			if (!_v0.$) {
				var str = _v0.a;
				var _v1 = A2($gren_lang$core$Json$Decode$decodeString, $gren_lang$compiler_node$Compiler$Outline$jsonDecoder, str);
				if (!_v1.$) {
					var outline = _v1.a;
					return $gren_lang$core$Task$succeed(outline);
				} else {
					var jsonErr = _v1.a;
					return $gren_lang$core$Task$fail($gren_lang$compiler_node$Compiler$Outline$FromPathInvalidJson(jsonErr));
				}
			} else {
				return $gren_lang$core$Task$fail($gren_lang$compiler_node$Compiler$Outline$FromPathInvalidString);
			}
		}, $gren_lang$core$Task$mapError$($gren_lang$compiler_node$Compiler$Outline$FromPathFileSystemError, $gren_lang$node$FileSystem$readFile$(fsPerm, path)));
};
var $gren_lang$compiler_node$Compiler$Outline$readFromPath = F2($gren_lang$compiler_node$Compiler$Outline$readFromPath$);
var $gren_lang$node$FileSystem$realPath$ = function(_v0, path) {
	return _FileSystem_realpath(path);
};
var $gren_lang$node$FileSystem$realPath = F2($gren_lang$node$FileSystem$realPath$);
var $gren_lang$compiler_common$Compiler$ModuleName$toString = function(_v0) {
	var name = _v0;
	return name;
};
var $gren_lang$compiler_node$Compiler$Package$loadFromPath$ = function(fsPermission, path) {
	return A2($gren_lang$core$Task$andThen, function(realPath) {
			var outlinePath = $gren_lang$node$FileSystem$Path$append$($gren_lang$node$FileSystem$Path$fromPosixString('gren.json'), realPath);
			return A2($gren_lang$core$Task$andThen, function(outline) {
					if (!outline.$) {
						return $gren_lang$core$Task$fail($gren_lang$compiler_node$Compiler$Package$FromPathOutlineIsApp);
					} else {
						var pkgOutline = outline.a;
						return $gren_lang$core$Task$map$(function(sourceFiles) {
								return { T: pkgOutline, gJ: A3($gren_lang$core$Array$foldl, F2(function(_v2, acc) {
											var moduleName = _v2.dB;
											var source = _v2.gF;
											return $gren_lang$core$Dict$set$($gren_lang$compiler_common$Compiler$ModuleName$toString(moduleName), source, acc);
										}), $gren_lang$core$Dict$empty, sourceFiles) };
							}, $gren_lang$core$Task$mapError$($gren_lang$compiler_node$Compiler$Package$FromPathFindSourcesError, $gren_lang$compiler_node$Compiler$Outline$findSourceFiles$(fsPermission, outline, realPath)));
					}
				}, $gren_lang$core$Task$mapError$(function(readError) {
						switch (readError.$) {
							case 0:
								var fsErr = readError.a;
								return $gren_lang$compiler_node$Compiler$Package$FromPathOutlineFileSystemError(fsErr);
							case 1:
								return $gren_lang$compiler_node$Compiler$Package$FromPathOutlineInvalidString;
							default:
								var jsonErr = readError.a;
								return $gren_lang$compiler_node$Compiler$Package$FromPathOutlineInvalidJson(jsonErr);
						}
					}, $gren_lang$compiler_node$Compiler$Outline$readFromPath$(fsPermission, outlinePath)));
		}, $gren_lang$core$Task$mapError$($gren_lang$compiler_node$Compiler$Package$FromPathOutlineFileSystemError, $gren_lang$node$FileSystem$realPath$(fsPermission, path)));
};
var $gren_lang$compiler_node$Compiler$Package$loadFromPath = F2($gren_lang$compiler_node$Compiler$Package$loadFromPath$);
var $gren_lang$compiler_node$Compiler$Paths$packageSources = function(_v0) {
	var cache = _v0;
	return $gren_lang$node$FileSystem$Path$prepend$(cache, $gren_lang$node$FileSystem$Path$fromPosixString('packages'));
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readGrenPackage$ = function(fileSystemPermission, cacheRoot, _v0) {
	var name = _v0.bK;
	var version = _v0.br;
	return $gren_lang$core$Task$mapError$(function(error) {
			return function () {
				switch (error.$) {
					case 1:
						return 'invalid string';
					case 0:
						var fileSystemError = error.a;
						return 'file system error: ' + ($gren_lang$node$FileSystem$errorToString(fileSystemError) + ' (Is the gren version correct? If not, please modify your minimum-supported gren-version in your checked project\'s gren.json)');
					case 2:
						var jsonError = error.a;
						return 'invalid gren.json: ' + $gren_lang$core$Json$Decode$errorToString(jsonError);
					case 3:
						return 'invalid gren.json, expected type package';
					default:
						return 'failed to find sources';
				}
			}() + (', reading package ' + (name + (', ' + function () {
				if (version.$ === 1) {
					var localPath = version.a;
					return 'from path ' + $gren_lang$node$FileSystem$Path$toPosixString(localPath);
				} else {
					var semanticVersion = version.a;
					return 'version ' + $gren_lang$compiler_common$SemanticVersion$toString(semanticVersion);
				}
			}())));
		}, $gren_lang$compiler_node$Compiler$Package$loadFromPath$(fileSystemPermission, function () {
				if (version.$ === 1) {
					var localPath = version.a;
					return $gren_lang$node$FileSystem$Path$append$(localPath, $gren_lang$node$FileSystem$Path$fromPosixString('..'));
				} else {
					var semanticVersion = version.a;
					return $gren_lang$node$FileSystem$Path$appendPosixString$($gren_lang$core$String$replace$('/', '_', name) + ('__' + $gren_lang$core$String$replace$('.', '_', $gren_lang$compiler_common$SemanticVersion$toString(semanticVersion))), $gren_lang$compiler_node$Compiler$Paths$packageSources(cacheRoot));
				}
			}()));
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readGrenPackage = F3($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readGrenPackage$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$initialInfoTask = function(_v0) {
	var extraPaths = _v0.fj;
	var fileSystemPermission = _v0.m;
	var platform = _v0.gk;
	return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskSucceedToResult(A2($gren_lang$core$Task$andThen, function(grenJson) {
				return A2($gren_lang$core$Task$andMap, $gren_lang$core$Task$concurrent(A2($gren_lang$core$Array$map, function(extraPath) {
								return $gren_lang$core$Task$map$(function(source) {
										return { ct: extraPath, gF: source };
									}, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readFileString$(fileSystemPermission, $gren_lang$node$FileSystem$Path$append$($gren_lang$node$FileSystem$Path$fromPosixString(extraPath), $gren_lang$node$FileSystem$Path$fromPosixString('..'))));
							}, extraPaths)), A2($gren_lang$core$Task$andMap, $gren_lang$core$Task$mapError$(function(error) {
								switch (error.$) {
									case 0:
										return 'file system error, reading gren source files in ..';
									case 1:
										var _v5 = error.a;
										var path = _v5.ct;
										var inferredModuleName = _v5.fz;
										return 'invalid file module name, reading gren source file ' + ($gren_lang$node$FileSystem$Path$toPosixString(path) + ('. Inferred module name would be ' + inferredModuleName));
									default:
										return 'invalid string, reading gren source files in ..';
								}
							}, $gren_lang$compiler_node$Compiler$Outline$findSourceFiles$(fileSystemPermission, grenJson.T, $gren_lang$node$FileSystem$Path$fromPosixString('..'))), A2($gren_lang$core$Task$andMap, A2($gren_lang$core$Task$andThen, $gren_lang$core$Basics$identity, A2($gren_lang$core$Task$andMap, $gren_lang$node$Node$getEnvironmentVariables, A2($gren_lang$core$Task$andMap, $gren_lang$node$FileSystem$homeDirectory(fileSystemPermission), $gren_lang$core$Task$succeed(F2(function(homeDirectory, environmentVariables) {
													var cacheRoot = $gren_lang$compiler_node$Compiler$Paths$cacheRoot$(platform, environmentVariables, homeDirectory, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$compilerOutlineGrenVersionMinimum(grenJson.T));
													return $gren_lang$core$Task$concurrent(A2($gren_lang$core$Array$map, function(directDependency) {
																return $gren_lang$core$Task$map$($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$parseCompilerPackage, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readGrenPackage$(fileSystemPermission, cacheRoot, directDependency));
															}, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$compilerOutlineDirectDependencies(grenJson.T)));
												}))))), $gren_lang$core$Task$succeed(F3(function(directDependencies, modules, extraFileSources) {
										return { aD: directDependencies, b9: extraFileSources, Q: grenJson, dC: A2($gren_lang$core$Array$map, function(module_) {
												return { ct: $gren_lang$core$String$dropFirst$($gren_lang$core$String$unitLength('../'), $gren_lang$node$FileSystem$Path$toPosixString(module_.ct)), gF: module_.gF };
											}, modules) };
									})))));
			}, A2($gren_lang$core$Task$andThen, function(bytes) {
					var _v2 = $gren_lang$core$Bytes$toString(bytes);
					if (!_v2.$) {
						var source = _v2.a;
						var _v3 = A2($gren_lang$core$Json$Decode$decodeString, $gren_lang$compiler_node$Compiler$Outline$jsonDecoder, source);
						if (!_v3.$) {
							var outline = _v3.a;
							return $gren_lang$core$Task$succeed({ T: outline, gF: source });
						} else {
							var jsonError = _v3.a;
							return $gren_lang$core$Task$fail('invalid json, reading ../gren.json: ' + $gren_lang$core$Json$Decode$errorToString(jsonError));
						}
					} else {
						return $gren_lang$core$Task$fail('invalid string, reading ../gren.json');
					}
				}, $gren_lang$core$Task$mapError$(function(_v1) {
						return 'file system error, reading ../gren.json';
					}, $gren_lang$node$FileSystem$readFile$(fileSystemPermission, $gren_lang$node$FileSystem$Path$fromPosixString('../gren.json'))))));
};
var $gren_lang$node$FileSystem$Permission = 0;
var $gren_lang$node$FileSystem$initialize = $gren_lang$core$Task$succeed(0);


var process = require("node:process");

var _Terminal_init = _Scheduler_binding(function (callback) {
  callback(
    _Scheduler_succeed({
      fJ: process.stdout.isTTY,
      eM: process.stdout.getColorDepth
        ? process.stdout.getColorDepth()
        : 0,
      cZ: process.stdout.columns,
      d2: process.stdout.rows,
    }),
  );
});

var _Terminal_attachListener = function (sendToApp) {
  return _Scheduler_binding(function (_callback) {
    var listener = function (data) {
      _Scheduler_rawSpawn(
        sendToApp({
          cZ: process.stdout.columns,
          d2: process.stdout.rows,
        }),
      );
    };

    process.stdout.on("resize", listener);

    return function () {
      process.stdout.off("resize", listener);
      process.stdout.pause();
    };
  });
};

var _Terminal_setStdInRawMode = function (toggle) {
  return _Scheduler_binding(function (callback) {
    process.stdin.setRawMode(toggle);
    callback(_Scheduler_succeed({}));
  });
};

var _Terminal_setProcessTitle = function (title) {
  return _Scheduler_binding(function (callback) {
    process.title = title;
    callback(_Scheduler_succeed({}));
  });
};
var $gren_lang$node$Terminal$Permission = 0;
var $gren_lang$node$Terminal$initialize = $gren_lang$core$Task$map$(function(raw) {
		return raw.fJ ? $gren_lang$core$Maybe$Just({ eM: raw.eM, cZ: raw.cZ, gj: 0, d2: raw.d2 }) : $gren_lang$core$Maybe$Nothing;
	}, _Terminal_init);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$noErrorsWaitingForChanges = function(_v0) {
	var stdin = _v0.gL;
	var stdout = _v0.ee;
	return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$core$Stream$Log$line$(stdout, '\nNo further errors currently, watching for changes... Exit with ctrl+c\n'));
};
var $lue_bird$gren_extra_checks$ExtraCheck$run$ = function(check, project) {
	return A3($gren_lang$core$Basics$apR, check.bQ, function(_v0) {
			var r = _v0;
			return r;
		}, project);
};
var $lue_bird$gren_extra_checks$ExtraCheck$run = F2($lue_bird$gren_extra_checks$ExtraCheck$run$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourcePositionCompare$ = function(a, b) {
	var _v0 = A2($gren_lang$core$Basics$compare, a.aZ, b.aZ);
	switch (_v0) {
		case 0:
			return 0;
		case 2:
			return 2;
		default:
			return A2($gren_lang$core$Basics$compare, a.bl, b.bl);
	}
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourcePositionCompare = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourcePositionCompare$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourceRegionCompare$ = function(a, b) {
	var _v0 = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourcePositionCompare$(a.cE, b.cE);
	switch (_v0) {
		case 0:
			return 0;
		case 2:
			return 2;
		default:
			return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourcePositionCompare$(a.c6, b.c6);
	}
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourceRegionCompare = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourceRegionCompare$);
var $gren_lang$core$Dict$countHelp$ = function(n, dict) {
	countHelp:
	while (true) {
		if (dict.$ === -2) {
			return n;
		} else {
			var _v1 = dict.a;
			var left = _v1.du;
			var right = _v1.d0;
			var $temp$n = $gren_lang$core$Dict$countHelp$(n + 1, right),
			$temp$dict = left;
			n = $temp$n;
			dict = $temp$dict;
			continue countHelp;
		}
	}
};
var $gren_lang$core$Dict$countHelp = F2($gren_lang$core$Dict$countHelp$);
var $gren_lang$core$Dict$count = function(dict) {
	return $gren_lang$core$Dict$countHelp$(0, dict);
};
var $lue_bird$gren_extra_checks$DictLocalExtra$unionWith$ = function(valueABMerge, aDict, bDict) {
	return (_Utils_cmp($gren_lang$core$Dict$count(aDict), $gren_lang$core$Dict$count(bDict)) > 0) ? $gren_lang$core$Dict$foldl$(F3(function(key, b, soFar) {
				return $gren_lang$core$Dict$update$(key, function(existingValueAtKey) {
						if (existingValueAtKey.$ === 1) {
							return $gren_lang$core$Maybe$Just(b);
						} else {
							var a = existingValueAtKey.a;
							return $gren_lang$core$Maybe$Just(A2(valueABMerge, a, b));
						}
					}, soFar);
			}), aDict, bDict) : $gren_lang$core$Dict$foldl$(F3(function(key, a, soFar) {
				return $gren_lang$core$Dict$update$(key, function(existingValueAtKey) {
						if (existingValueAtKey.$ === 1) {
							return $gren_lang$core$Maybe$Just(a);
						} else {
							var b = existingValueAtKey.a;
							return $gren_lang$core$Maybe$Just(A2(valueABMerge, a, b));
						}
					}, soFar);
			}), bDict, aDict);
};
var $lue_bird$gren_extra_checks$DictLocalExtra$unionWith = F3($lue_bird$gren_extra_checks$DictLocalExtra$unionWith$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewRunList$ = function(checks, project) {
	var runResultsForReviews = A2($gren_lang$core$Array$map, function(review) {
			return $lue_bird$gren_extra_checks$ExtraCheck$run$(review, project);
		}, checks);
	return { b6: $gren_lang$core$Dict$map$(F2(function(_v0, errors) {
				return A2($gren_lang$core$Array$sortWith, F2(function(a, b) {
							return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$sourceRegionCompare$(a.bO, b.bO);
						}), errors);
			}), A3($gren_lang$core$Array$foldl, F2(function(runResultForReview, soFar) {
					return $lue_bird$gren_extra_checks$DictLocalExtra$unionWith$(F2(function(_new, already) {
								return _Utils_ap(_new, already);
							}), runResultForReview.b6, soFar);
				}), $gren_lang$core$Dict$empty, runResultsForReviews)), x: A2($gren_lang$core$Array$map, function ($) {
			return $.dJ;
		}, runResultsForReviews) };
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewRunList = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewRunList$);
var $gren_lang$node$Node$setExitCode = function(code) {
	return _Node_setExitCode(code);
};
var $gren_lang$node$Terminal$setStdInRawMode$ = function(_v0, toggle) {
	return _Terminal_setStdInRawMode(toggle);
};
var $gren_lang$node$Terminal$setStdInRawMode = F2($gren_lang$node$Terminal$setStdInRawMode$);
var $gren_lang$node$Node$startProgram = function(initResult) {
	return $gren_lang$core$Task$succeed(initResult);
};
var $gren_lang$core$Dict$union$ = function(t1, t2) {
	return $gren_lang$core$Dict$foldl$($gren_lang$core$Dict$set, t2, t1);
};
var $gren_lang$core$Dict$union = F2($gren_lang$core$Dict$union$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$initialize$ = function(config, environment) {
	return $gren_lang$node$Init$await$($gren_lang$node$Terminal$initialize, function(maybeTerminalConfig) {
			return $gren_lang$node$Init$await$($gren_lang$node$FileSystem$initialize, function(fileSystemPermission) {
					return $gren_lang$node$Init$awaitTask$(A2($gren_lang$core$Task$andMap, function () {
								if (maybeTerminalConfig.$ === 1) {
									return $gren_lang$core$Task$succeed({  });
								} else {
									var terminalConfig = maybeTerminalConfig.a;
									return $gren_lang$node$Terminal$setStdInRawMode$(terminalConfig.gj, true);
								}
							}(), A2($gren_lang$core$Task$andMap, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$initialInfoTask({ fj: config.fj, m: fileSystemPermission, gk: environment.gk }), $gren_lang$core$Task$succeed(F2(function(info, _v0) {
											return info;
										})))), function(initialInfoOrError) {
							return $gren_lang$node$Node$startProgram(function () {
									if (initialInfoOrError.$ === 1) {
										var error = initialInfoOrError.a;
										return { c_: $gren_lang$core$Platform$Cmd$batch([ $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$core$Stream$Log$line$(environment.ed, error)), $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$node$Node$setExitCode(1)) ]), dz: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Exited };
									} else {
										var initialInfo = initialInfoOrError.a;
										var _v3 = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$allModuleFilesToWithParsedSyntax(initialInfo.dC);
										if (_v3.$ === 1) {
											var parseErrors = _v3.a;
											return { c_: $gren_lang$core$Platform$Cmd$batch([ $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$core$Stream$Log$line$(environment.ed, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$failedToParseModulesMessage(parseErrors))), $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$node$Node$setExitCode(1)) ]), dz: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Exited };
										} else {
											var modules = _v3.a;
											var runResult = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewRunList$(config.eK, { cO: initialInfo.b9, cP: modules, aD: initialInfo.aD, Q: initialInfo.Q, dW: [  ], dX: [  ] });
											var initialFilesByPath = $gren_lang$core$Dict$union$($lue_bird$gren_extra_checks$DictLocalExtra$fromArrayMap$(function(file) {
														return { fL: file.ct, bZ: file.gF };
													}, initialInfo.b9), $lue_bird$gren_extra_checks$DictLocalExtra$fromArrayMap$(function(file) {
														return { fL: file.ct, bZ: file.gF };
													}, initialInfo.dC));
											var maybeNextFixableErrorOrAllUnfixable = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsByPathToNextFixableErrorOrAll$({ aq: initialInfo.Q.gF, o: initialFilesByPath }, runResult.b6);
											return { c_: function () {
												if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
													return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$noErrorsWaitingForChanges({ gL: environment.gL, ee: environment.ee });
												} else {
													var nextFixableErrorOrAllUnfixable = maybeNextFixableErrorOrAllUnfixable.a;
													return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsReceived$({ m: fileSystemPermission, gL: environment.gL, ee: environment.ee }, { A: nextFixableErrorOrAllUnfixable, aN: $gren_lang$core$Dict$set$('gren.json', initialInfo.Q.gF, initialFilesByPath) });
												}
											}(), dz: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Running({ an: function () {
													if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
														return $gren_lang$core$Dict$empty;
													} else {
														if (!maybeNextFixableErrorOrAllUnfixable.a.$) {
															return $gren_lang$core$Dict$empty;
														} else {
															var nextFixable = maybeNextFixableErrorOrAllUnfixable.a.a;
															return nextFixable.j;
														}
													}
												}(), aD: initialInfo.aD, f: environment, m: fileSystemPermission, o: initialFilesByPath, Q: initialInfo.Q, x: runResult.x }) };
										}
									}
								}());
						});
				});
		});
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$initialize = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$initialize$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ExtraFileAddedOrChanged = function (a) {
	return { $: 4, a: a };
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ExtraFileRemoved = function (a) {
	return { $: 5, a: a };
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ModuleAddedOrChanged = function (a) {
	return { $: 1, a: a };
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ModuleRemoved = function (a) {
	return { $: 2, a: a };
};
var $gren_lang$core$Task$attempt$ = function(resultToMessage, task) {
	return $gren_lang$core$Task$command($gren_lang$core$Task$Perform(A2($gren_lang$core$Task$onError, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($gren_lang$core$Task$succeed, resultToMessage), $gren_lang$core$Result$Err), A2($gren_lang$core$Task$andThen, $gren_lang$core$Basics$composeL$($gren_lang$core$Basics$composeL$($gren_lang$core$Task$succeed, resultToMessage), $gren_lang$core$Result$Ok), task))));
};
var $gren_lang$core$Task$attempt = F2($gren_lang$core$Task$attempt$);
var $gren_lang$core$Array$map2 = _Array_map2;
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewWithRun$ = function(nextRun, review) {
	return { cg: review.cg, bQ: nextRun };
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewWithRun = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewWithRun$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reactToEvent$ = function(config, event, stateOrExited) {
	if (!stateOrExited.$) {
		return { c_: $gren_lang$core$Platform$Cmd$none, dz: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Exited };
	} else {
		var state = stateOrExited.a;
		switch (event.$) {
			case 6:
				var maybeNextFixableErrorOrAllUnfixable = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsByPathToNextFixableErrorOrAll$({ aq: state.Q.gF, o: state.o }, state.an);
				return { c_: function () {
					if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
						return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$noErrorsWaitingForChanges({ gL: state.f.gL, ee: state.f.ee });
					} else {
						var nextFixableErrorOrAllUnfixable = maybeNextFixableErrorOrAllUnfixable.a;
						return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsReceived$({ m: state.m, gL: state.f.gL, ee: state.f.ee }, { A: nextFixableErrorOrAllUnfixable, aN: $gren_lang$core$Dict$set$('gren.json', state.Q.gF, state.o) });
					}
				}(), dz: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Running(_Utils_update(state, { an: function () {
							if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
								return $gren_lang$core$Dict$empty;
							} else {
								if (!maybeNextFixableErrorOrAllUnfixable.a.$) {
									return $gren_lang$core$Dict$empty;
								} else {
									var nextFixable = maybeNextFixableErrorOrAllUnfixable.a.a;
									return nextFixable.j;
								}
							}
						}() })) };
			case 0:
				var _v4 = event.a;
				var sourceDirectory = _v4.gG;
				var watchEvent = _v4.e9;
				return { c_: function () {
					if (watchEvent.$ === 1) {
						if (watchEvent.a.$ === 1) {
							var _v6 = watchEvent.a;
							return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$core$Stream$Log$line$(state.f.ed, 'warning: while watching the source directory ' + ($gren_lang$node$FileSystem$Path$toPosixString(sourceDirectory) + ', I got a change event with a missing path, so it was discarded, possibly leading to de-synched project state.')));
						} else {
							var subPath = watchEvent.a.a;
							var removedOrAddedModulePath = $gren_lang$node$FileSystem$Path$append$(subPath, sourceDirectory);
							return $gren_lang$core$Task$attempt$(function(result) {
									if (result.$ === 1) {
										return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ModuleRemoved({ ct: removedOrAddedModulePath });
									} else {
										var source = result.a;
										return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ModuleAddedOrChanged({ ct: removedOrAddedModulePath, gF: $gren_lang$core$Result$Ok(source) });
									}
								}, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readFileString$(state.m, $gren_lang$node$FileSystem$Path$append$(removedOrAddedModulePath, $gren_lang$node$FileSystem$Path$fromPosixString('..'))));
						}
					} else {
						if (watchEvent.a.$ === 1) {
							var _v7 = watchEvent.a;
							return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$core$Stream$Log$line$(state.f.ed, 'warning: while watching the source directory ' + ($gren_lang$node$FileSystem$Path$toPosixString(sourceDirectory) + ', I got a change event with a missing path, so it was discarded, possibly leading to de-synched project state.')));
						} else {
							var subPath = watchEvent.a.a;
							var changedModulePath = $gren_lang$node$FileSystem$Path$append$(subPath, sourceDirectory);
							return $gren_lang$core$Task$attempt$(function(sourceOrError) {
									return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ModuleAddedOrChanged({ ct: changedModulePath, gF: sourceOrError });
								}, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readFileString$(state.m, $gren_lang$node$FileSystem$Path$append$(changedModulePath, $gren_lang$node$FileSystem$Path$fromPosixString('..'))));
						}
					}
				}(), dz: stateOrExited };
			case 1:
				var moduleAddedOrChanged = event.a;
				var _v9 = moduleAddedOrChanged.gF;
				if (_v9.$ === 1) {
					var error = _v9.a;
					return { c_: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$core$Stream$Log$line$(state.f.ed, error)), dz: stateOrExited };
				} else {
					var moduleAddedOrChangedSource = _v9.a;
					var moduleAddedOrChangedPathPosix = $gren_lang$node$FileSystem$Path$toPosixString(moduleAddedOrChanged.ct);
					var _v10 = $gren_lang$core$String$Parser$Advanced$run$($gren_lang$compiler_common$Compiler$Parse$Module$parser, $gren_lang$compiler_common$Compiler$Parse$Context$empty, moduleAddedOrChangedSource);
					if (_v10.$ === 1) {
						var moduleParseError = _v10.a;
						return { c_: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$core$Stream$Log$line$(state.f.ed, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$failedToParseModulesMessage([ { b4: $gren_lang$compiler_common$Compiler$Parse$Module$errorsToString$(moduleAddedOrChangedSource, moduleParseError), ct: moduleAddedOrChangedPathPosix } ]))), dz: stateOrExited };
					} else {
						var moduleAddedOrChangedParsed = _v10.a;
						var runResult = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewRunList$(A3($gren_lang$core$Array$map2, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewWithRun, state.x, config.eK), { cO: [  ], cP: [ { ct: moduleAddedOrChangedPathPosix, gF: moduleAddedOrChangedSource, gS: moduleAddedOrChangedParsed } ], aD: [  ], Q: state.Q, dW: [  ], dX: [  ] });
						var filesByPathWithAddedOrChanged = $gren_lang$core$Dict$set$(moduleAddedOrChangedPathPosix, moduleAddedOrChangedSource, state.o);
						var maybeNextFixableErrorOrAllUnfixable = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsByPathToNextFixableErrorOrAll$({ aq: state.Q.gF, o: filesByPathWithAddedOrChanged }, runResult.b6);
						return { c_: function () {
							if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
								return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$noErrorsWaitingForChanges({ gL: state.f.gL, ee: state.f.ee });
							} else {
								var nextFixableErrorOrAllUnfixable = maybeNextFixableErrorOrAllUnfixable.a;
								return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsReceived$({ m: state.m, gL: state.f.gL, ee: state.f.ee }, { A: nextFixableErrorOrAllUnfixable, aN: $gren_lang$core$Dict$set$('gren.json', state.Q.gF, filesByPathWithAddedOrChanged) });
							}
						}(), dz: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Running(_Utils_update(state, { an: function () {
									if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
										return $gren_lang$core$Dict$empty;
									} else {
										if (!maybeNextFixableErrorOrAllUnfixable.a.$) {
											return $gren_lang$core$Dict$empty;
										} else {
											var nextFixable = maybeNextFixableErrorOrAllUnfixable.a.a;
											return nextFixable.j;
										}
									}
								}(), o: filesByPathWithAddedOrChanged, Q: state.Q, x: runResult.x })) };
					}
				}
			case 2:
				var moduleRemoved = event.a;
				var moduleRemovedPathPosix = $gren_lang$node$FileSystem$Path$toPosixString(moduleRemoved.ct);
				var runResult = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewRunList$(A3($gren_lang$core$Array$map2, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewWithRun, state.x, config.eK), { cO: [  ], cP: [  ], aD: [  ], Q: state.Q, dW: [  ], dX: [ moduleRemovedPathPosix ] });
				var filesByPathWithRemoved = $gren_lang$core$Dict$remove$(moduleRemovedPathPosix, state.o);
				var maybeNextFixableErrorOrAllUnfixable = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsByPathToNextFixableErrorOrAll$({ aq: state.Q.gF, o: filesByPathWithRemoved }, runResult.b6);
				return { c_: function () {
					if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
						return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$noErrorsWaitingForChanges({ gL: state.f.gL, ee: state.f.ee });
					} else {
						var nextFixableErrorOrAllUnfixable = maybeNextFixableErrorOrAllUnfixable.a;
						return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsReceived$({ m: state.m, gL: state.f.gL, ee: state.f.ee }, { A: nextFixableErrorOrAllUnfixable, aN: $gren_lang$core$Dict$set$('gren.json', state.Q.gF, filesByPathWithRemoved) });
					}
				}(), dz: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Running(_Utils_update(state, { an: function () {
							if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
								return $gren_lang$core$Dict$empty;
							} else {
								if (!maybeNextFixableErrorOrAllUnfixable.a.$) {
									return $gren_lang$core$Dict$empty;
								} else {
									var nextFixable = maybeNextFixableErrorOrAllUnfixable.a.a;
									return nextFixable.j;
								}
							}
						}(), o: filesByPathWithRemoved, Q: state.Q, x: runResult.x })) };
			case 3:
				var _v15 = event.a;
				var extraPath = _v15.ct;
				var watchEvent = _v15.e9;
				return { c_: function () {
					if (watchEvent.$ === 1) {
						if (watchEvent.a.$ === 1) {
							var _v17 = watchEvent.a;
							return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$core$Stream$Log$line$(state.f.ed, 'warning: while watching the extra path ' + (extraPath + ', I got a change event with a missing path, so it was discarded, possibly leading to de-synched project state.')));
						} else {
							var subPath = watchEvent.a.a;
							var removedOrAddedModulePath = $gren_lang$node$FileSystem$Path$append$(subPath, $gren_lang$node$FileSystem$Path$fromPosixString(extraPath));
							return $gren_lang$core$Task$attempt$(function(result) {
									if (result.$ === 1) {
										return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ExtraFileRemoved({ ct: removedOrAddedModulePath });
									} else {
										var source = result.a;
										return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ExtraFileAddedOrChanged({ ct: removedOrAddedModulePath, gF: $gren_lang$core$Result$Ok(source) });
									}
								}, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readFileString$(state.m, $gren_lang$node$FileSystem$Path$append$(removedOrAddedModulePath, $gren_lang$node$FileSystem$Path$fromPosixString('..'))));
						}
					} else {
						if (watchEvent.a.$ === 1) {
							var _v18 = watchEvent.a;
							return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$core$Stream$Log$line$(state.f.ed, 'warning: while watching a the extra path ' + (extraPath + ', I got a change event with a missing path, so it was discarded, possibly leading to de-synched project state.')));
						} else {
							var subPath = watchEvent.a.a;
							var changedModulePath = $gren_lang$node$FileSystem$Path$append$(subPath, $gren_lang$node$FileSystem$Path$fromPosixString(extraPath));
							return $gren_lang$core$Task$attempt$(function(sourceOrError) {
									return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ExtraFileAddedOrChanged({ ct: changedModulePath, gF: sourceOrError });
								}, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$readFileString$(state.m, $gren_lang$node$FileSystem$Path$append$(changedModulePath, $gren_lang$node$FileSystem$Path$fromPosixString('..'))));
						}
					}
				}(), dz: stateOrExited };
			case 4:
				var extraFileAddedOrChanged = event.a;
				var _v20 = extraFileAddedOrChanged.gF;
				if (_v20.$ === 1) {
					var error = _v20.a;
					return { c_: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$taskExecute($gren_lang$core$Stream$Log$line$(state.f.ed, error)), dz: stateOrExited };
				} else {
					var extraFileAddedOrChangedSource = _v20.a;
					var fileAddedOrChangedPathPosix = $gren_lang$node$FileSystem$Path$toPosixString(extraFileAddedOrChanged.ct);
					var filesByPathWithAddedOrChanged = $gren_lang$core$Dict$set$(fileAddedOrChangedPathPosix, extraFileAddedOrChangedSource, state.o);
					var runResult = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewRunList$(A3($gren_lang$core$Array$map2, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewWithRun, state.x, config.eK), { cO: [ { ct: fileAddedOrChangedPathPosix, gF: extraFileAddedOrChangedSource } ], cP: [  ], aD: [  ], Q: state.Q, dW: [  ], dX: [  ] });
					var maybeNextFixableErrorOrAllUnfixable = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsByPathToNextFixableErrorOrAll$({ aq: state.Q.gF, o: filesByPathWithAddedOrChanged }, runResult.b6);
					return { c_: function () {
						if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
							return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$noErrorsWaitingForChanges({ gL: state.f.gL, ee: state.f.ee });
						} else {
							var nextFixableErrorOrAllUnfixable = maybeNextFixableErrorOrAllUnfixable.a;
							return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsReceived$({ m: state.m, gL: state.f.gL, ee: state.f.ee }, { A: nextFixableErrorOrAllUnfixable, aN: $gren_lang$core$Dict$set$('gren.json', state.Q.gF, filesByPathWithAddedOrChanged) });
						}
					}(), dz: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Running(_Utils_update(state, { an: function () {
								if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
									return $gren_lang$core$Dict$empty;
								} else {
									if (!maybeNextFixableErrorOrAllUnfixable.a.$) {
										return $gren_lang$core$Dict$empty;
									} else {
										var nextFixable = maybeNextFixableErrorOrAllUnfixable.a.a;
										return nextFixable.j;
									}
								}
							}(), o: filesByPathWithAddedOrChanged, Q: state.Q, x: runResult.x })) };
				}
			default:
				var fileRemoved = event.a;
				var fileRemovedPathPosix = $gren_lang$node$FileSystem$Path$toPosixString(fileRemoved.ct);
				var filesByPathWithRemoved = $gren_lang$core$Dict$remove$(fileRemovedPathPosix, state.o);
				var runResult = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewRunList$(A3($gren_lang$core$Array$map2, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reviewWithRun, state.x, config.eK), { cO: [  ], cP: [  ], aD: [  ], Q: state.Q, dW: [ fileRemovedPathPosix ], dX: [  ] });
				var maybeNextFixableErrorOrAllUnfixable = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsByPathToNextFixableErrorOrAll$({ aq: state.Q.gF, o: filesByPathWithRemoved }, runResult.b6);
				return { c_: function () {
					if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
						return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$noErrorsWaitingForChanges({ gL: state.f.gL, ee: state.f.ee });
					} else {
						var nextFixableErrorOrAllUnfixable = maybeNextFixableErrorOrAllUnfixable.a;
						return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$errorsReceived$({ m: state.m, gL: state.f.gL, ee: state.f.ee }, { A: nextFixableErrorOrAllUnfixable, aN: $gren_lang$core$Dict$set$('gren.json', state.Q.gF, filesByPathWithRemoved) });
					}
				}(), dz: $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$Running(_Utils_update(state, { an: function () {
							if (maybeNextFixableErrorOrAllUnfixable.$ === 1) {
								return $gren_lang$core$Dict$empty;
							} else {
								if (!maybeNextFixableErrorOrAllUnfixable.a.$) {
									return $gren_lang$core$Dict$empty;
								} else {
									var nextFixable = maybeNextFixableErrorOrAllUnfixable.a.a;
									return nextFixable.j;
								}
							}
						}(), o: filesByPathWithRemoved, Q: state.Q, x: runResult.x })) };
		}
	}
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reactToEvent = F3($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reactToEvent$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ExtraFileWatchEvent = function (a) {
	return { $: 3, a: a };
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ModuleWatchEvent = function (a) {
	return { $: 0, a: a };
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$compilerOutlineSourceDirectories = function(outline) {
	if (!outline.$) {
		var application = outline.a;
		return application.cD;
	} else {
		return [ $gren_lang$node$FileSystem$Path$fromPosixString('src') ];
	}
};
var $gren_lang$node$FileSystem$Watch = $gren_lang$core$Basics$identity;
var $gren_lang$node$FileSystem$init = $gren_lang$core$Task$succeed({ dT: $gren_lang$core$Dict$empty, bk: $gren_lang$core$Dict$empty, bs: $gren_lang$core$Dict$empty });
var $gren_lang$node$FileSystem$WatchPathChange = $gren_lang$core$Basics$identity;
var $gren_lang$node$FileSystem$attachWatcher = _FileSystem_watch;
var $gren_lang$core$Dict$diff$ = function(t1, t2) {
	return $gren_lang$core$Dict$foldl$(F3(function(k, v, t) {
				return $gren_lang$core$Dict$remove$(k, t);
			}), t1, t2);
};
var $gren_lang$core$Dict$diff = F2($gren_lang$core$Dict$diff$);
var $gren_lang$core$Process$kill = _Scheduler_kill;
var $gren_lang$core$Platform$sendToSelf = _Platform_sendToSelf;
var $gren_lang$core$Process$spawn = _Scheduler_spawn;
var $gren_lang$node$FileSystem$subToWatcher$ = function(sub, taggers) {
	var _v1 = sub;
	var path = _v1.ct;
	var tagger = _v1.cn;
	var key = _FilePath_toString(path);
	var _v2 = $gren_lang$core$Dict$get$(key, taggers);
	if (!_v2.$) {
		var data = _v2.a;
		return $gren_lang$core$Dict$set$(key, $gren_lang$core$Array$pushLast$(tagger, data), taggers);
	} else {
		return $gren_lang$core$Dict$set$(key, [ tagger ], taggers);
	}
};
var $gren_lang$node$FileSystem$subToWatcher = F2($gren_lang$node$FileSystem$subToWatcher$);
var $gren_lang$node$FileSystem$onEffects$ = function(router, subs, state) {
	var taskStopper = function(keyMapper) {
		return F2(function(key, accTask) {
				return A2($gren_lang$core$Task$andThen, function(processes) {
						var realKey = keyMapper(key);
						var _v2 = $gren_lang$core$Dict$get$(realKey, processes);
						if (!_v2.$) {
							var processId = _v2.a;
							return $gren_lang$core$Task$map$(function(_v3) {
									return $gren_lang$core$Dict$remove$(realKey, processes);
								}, $gren_lang$core$Process$kill(processId));
						} else {
							return accTask;
						}
					}, accTask);
			});
	};
	var taskSpawner = F2(function(keyMapper, isRecursive) {
			return F2(function(key, accTask) {
					return A2($gren_lang$core$Task$andThen, function(processes) {
							return $gren_lang$core$Task$map$(function(id) {
									return $gren_lang$core$Dict$set$(keyMapper(key), id, processes);
								}, $gren_lang$core$Process$spawn(A3($gren_lang$node$FileSystem$attachWatcher, key, isRecursive, function(event) {
											return A2($gren_lang$core$Platform$sendToSelf, router, { e9: event, fL: key, cx: isRecursive });
										})));
						}, accTask);
				});
		});
	var newWatchers = A3($gren_lang$core$Array$foldl, $gren_lang$node$FileSystem$subToWatcher, $gren_lang$core$Dict$empty, A2($gren_lang$core$Array$keepIf, function(_v1) {
				var recursive = _v1.cx;
				return !recursive;
			}, subs));
	var toSpawn = $gren_lang$core$Dict$keys($gren_lang$core$Dict$diff$(newWatchers, state.bs));
	var toStop = $gren_lang$core$Dict$keys($gren_lang$core$Dict$diff$(state.bs, newWatchers));
	var newRecursiveWatchers = A3($gren_lang$core$Array$foldl, $gren_lang$node$FileSystem$subToWatcher, $gren_lang$core$Dict$empty, A2($gren_lang$core$Array$keepIf, function(_v0) {
				var recursive = _v0.cx;
				return recursive;
			}, subs));
	var recursiveToSpawn = $gren_lang$core$Dict$keys($gren_lang$core$Dict$diff$(newRecursiveWatchers, state.bk));
	var recursiveToStop = $gren_lang$core$Dict$keys($gren_lang$core$Dict$diff$(state.bk, newRecursiveWatchers));
	var flipFold = F3(function(fn, array, initial) {
			return A3($gren_lang$core$Array$foldl, fn, initial, array);
		});
	var asRecursiveKey = function(key) {
		return key + '$recursive';
	};
	return $gren_lang$core$Task$map$(function(newProcesses) {
			return { dT: newProcesses, bk: newRecursiveWatchers, bs: newWatchers };
		}, A3(flipFold, A2(taskSpawner, asRecursiveKey, true), recursiveToSpawn, A3(flipFold, A2(taskSpawner, $gren_lang$core$Basics$identity, false), toSpawn, A3(flipFold, taskStopper(asRecursiveKey), recursiveToStop, A3($gren_lang$core$Array$foldl, taskStopper($gren_lang$core$Basics$identity), $gren_lang$core$Task$succeed(state.dT), toStop)))));
};
var $gren_lang$node$FileSystem$onEffects = F3($gren_lang$node$FileSystem$onEffects$);
var $gren_lang$node$FileSystem$onSelfMsg$ = function(router, _v0, state) {
	var _v1 = _v0;
	var recursive = _v1.cx;
	var key = _v1.fL;
	var event = _v1.e9;
	var notifyApplication = function(taggers) {
		return $gren_lang$core$Task$map$(function(_v5) {
				return state;
			}, A3($gren_lang$core$Array$foldl, F2(function(tagger, tasks) {
						return A2($gren_lang$core$Task$andThen, function(_v4) {
								return A2($gren_lang$core$Platform$sendToApp, router, tagger(event));
							}, tasks);
					}), $gren_lang$core$Task$succeed({  }), taggers));
	};
	if (recursive) {
		var _v2 = $gren_lang$core$Dict$get$(key, state.bk);
		if (!_v2.$) {
			var taggers = _v2.a;
			return notifyApplication(taggers);
		} else {
			return $gren_lang$core$Task$succeed(state);
		}
	} else {
		var _v3 = $gren_lang$core$Dict$get$(key, state.bs);
		if (!_v3.$) {
			var taggers = _v3.a;
			return notifyApplication(taggers);
		} else {
			return $gren_lang$core$Task$succeed(state);
		}
	}
};
var $gren_lang$node$FileSystem$onSelfMsg = F3($gren_lang$node$FileSystem$onSelfMsg$);
var $gren_lang$node$FileSystem$subMap$ = function(mapFn, sub) {
	var _v1 = sub;
	var path = _v1.ct;
	var recursive = _v1.cx;
	var msgMap = _v1.cn;
	return { cn: $gren_lang$core$Basics$composeL$(mapFn, msgMap), ct: path, cx: recursive };
};
var $gren_lang$node$FileSystem$subMap = F2($gren_lang$node$FileSystem$subMap$);
_Platform_effectManagers['FileSystem'] = _Platform_createManager($gren_lang$node$FileSystem$init, $gren_lang$node$FileSystem$onEffects, $gren_lang$node$FileSystem$onSelfMsg, 0, $gren_lang$node$FileSystem$subMap);
var $gren_lang$node$FileSystem$subscription = _Platform_leaf('FileSystem');
var $gren_lang$node$FileSystem$watchRecursive$ = function(_v0, msgMap, path) {
	return $gren_lang$node$FileSystem$subscription({ cn: msgMap, ct: path, cx: true });
};
var $gren_lang$node$FileSystem$watchRecursive = F3($gren_lang$node$FileSystem$watchRecursive$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$subscribe$ = function(config, stateOrExited) {
	if (!stateOrExited.$) {
		return $gren_lang$core$Platform$Sub$none;
	} else {
		var state = stateOrExited.a;
		return $gren_lang$core$Platform$Sub$batch([ $gren_lang$core$Platform$Sub$batch(A2($gren_lang$core$Array$map, function(sourceDirectory) {
						var relativeSourceDirectoryPath = $gren_lang$node$FileSystem$Path$append$(sourceDirectory, $gren_lang$node$FileSystem$Path$fromPosixString('..'));
						return $gren_lang$node$FileSystem$watchRecursive$(state.m, function(fileWatchEvent) {
								return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ModuleWatchEvent({ e9: fileWatchEvent, gG: sourceDirectory });
							}, relativeSourceDirectoryPath);
					}, $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$compilerOutlineSourceDirectories(state.Q.T))), $gren_lang$core$Platform$Sub$batch(A2($gren_lang$core$Array$map, function(extraPath) {
						var relativeExtraPath = $gren_lang$node$FileSystem$Path$appendPosixString$(extraPath, $gren_lang$node$FileSystem$Path$fromPosixString('..'));
						return $gren_lang$node$FileSystem$watchRecursive$(state.m, function(fileWatchEvent) {
								return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$ExtraFileWatchEvent({ e9: fileWatchEvent, ct: extraPath });
							}, relativeExtraPath);
					}, config.fj)) ]);
	}
};
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$subscribe = F2($lue_bird$gren_extra_checks$ExtraChecksRunnerNode$subscribe$);
var $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$program = function(config) {
	return $gren_lang$node$Node$defineProgram({ fA: function(environment) {
			return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$initialize$(config, environment);
		}, gP: function(state) {
			return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$subscribe$(config, state);
		}, g1: F2(function(event, state) {
				return $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$reactToEvent$(config, event, state);
			}) });
};
var $author$project$Main$main = $lue_bird$gren_extra_checks$ExtraChecksRunnerNode$program({ eK: [ $author$project$StringSpellsCompanyNameCorrectly$check ], fj: [ 'README.md' ] });
_Platform_export({'Main':{'init':$author$project$Main$main($gren_lang$core$Json$Decode$succeed({  }))}});}(this.module ? this.module.exports : this));}).call(output); output.Gren.Main.init();