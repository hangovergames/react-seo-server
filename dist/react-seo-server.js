#!/usr/bin/env node
'use strict';

var HTTP$1 = require('http');
var FS = require('fs');
var PATH = require('path');
var QueryString = require('querystring');
var URL = require('url');
var jsxRuntime = require('react/jsx-runtime');
var ReactDOMServer = require('react-dom/server');
var server = require('react-router-dom/server');
var i18n = require('i18next');
var reactI18next = require('react-i18next');
var require$$1 = require('events');
require('buffer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var HTTP__default = /*#__PURE__*/_interopDefaultLegacy(HTTP$1);
var FS__default = /*#__PURE__*/_interopDefaultLegacy(FS);
var PATH__default = /*#__PURE__*/_interopDefaultLegacy(PATH);
var QueryString__namespace = /*#__PURE__*/_interopNamespace(QueryString);
var URL__default = /*#__PURE__*/_interopDefaultLegacy(URL);
var ReactDOMServer__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOMServer);
var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */

function arrayMap$4(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap$4;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$3(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$3;

var eq$2 = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$2(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$4(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype['delete'] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;

var _ListCache = ListCache$4;

var ListCache$3 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$3;
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$8 = freeGlobal || freeSelf || Function('return this')();

var _root = root$8;

var root$7 = _root;

/** Built-in value references. */
var Symbol$5 = root$7.Symbol;

var _Symbol = Symbol$5;

var Symbol$4 = _Symbol;

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$c.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$9.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$b = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$b.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$3 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$8(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$8;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$6(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$6;

var baseGetTag$7 = _baseGetTag,
    isObject$5 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$2(value) {
  if (!isObject$5(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$7(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$2;

var root$6 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$6['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$2;

var isFunction$1 = isFunction_1,
    isMasked = _isMasked,
    isObject$4 = isObject_1,
    toSource$1 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$a = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$8).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject$4(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$7;

var getNative$6 = _getNative,
    root$5 = _root;

/* Built-in method references that are verified to be native. */
var Map$4 = getNative$6(root$5, 'Map');

var _Map = Map$4;

var getNative$5 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$5(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$7.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

var Hash = _Hash,
    ListCache$2 = _ListCache,
    Map$3 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$3 || ListCache$2),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$3(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype['delete'] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;

var _MapCache = MapCache$3;

var ListCache$1 = _ListCache,
    Map$2 = _Map,
    MapCache$2 = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$2(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$2.prototype.clear = stackClear;
Stack$2.prototype['delete'] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;

var _Stack = Stack$2;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

var _setCacheAdd = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */

function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;

var MapCache$1 = _MapCache,
    setCacheAdd = _setCacheAdd,
    setCacheHas = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache$1;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;

var _SetCache = SetCache$1;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */

function arraySome$2(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$2;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$1;

var SetCache = _SetCache,
    arraySome$1 = _arraySome,
    cacheHas = _cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$3) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome$1(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$2;

var root$4 = _root;

/** Built-in value references. */
var Uint8Array$1 = root$4.Uint8Array;

var _Uint8Array = Uint8Array$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

function setToArray$2(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$2;

var Symbol$2 = _Symbol,
    Uint8Array = _Uint8Array,
    eq$1 = eq_1,
    equalArrays$1 = _equalArrays,
    mapToArray = _mapToArray,
    setToArray$1 = _setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag$2 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$2 = '[object Map]',
    numberTag$2 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$1 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$2:
    case dateTag$1:
    case numberTag$2:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq$1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$2:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$2:
      var convert = mapToArray;

    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray$1);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush$3(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$3;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$j = Array.isArray;

var isArray_1 = isArray$j;

var arrayPush$2 = _arrayPush,
    isArray$i = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$i(object) ? result : arrayPush$2(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$1;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter$2(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter$2;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */

function stubArray$1() {
  return [];
}

var stubArray_1 = stubArray$1;

var arrayFilter$1 = _arrayFilter,
    stubArray = stubArray_1;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter$1(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols$1;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$8(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$8;

var baseGetTag$6 = _baseGetTag,
    isObjectLike$7 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$7(value) && baseGetTag$6(value) == argsTag$2;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
    isObjectLike$6 = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$3 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike$6(value) && hasOwnProperty$5.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments$3;

var isBuffer$2 = {exports: {}};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

(function (module, exports) {
var root = _root,
    stubFalse = stubFalse_1;

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
}(isBuffer$2, isBuffer$2.exports));

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$3(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$3;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$3(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength$3;

var baseGetTag$5 = _baseGetTag,
    isLength$2 = isLength_1,
    isObjectLike$5 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$5(value) &&
    isLength$2(value.length) && !!typedArrayTags[baseGetTag$5(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary$2(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$2;

var _nodeUtil = {exports: {}};

(function (module, exports) {
var freeGlobal = _freeGlobal;

/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
}(_nodeUtil, _nodeUtil.exports));

var baseIsTypedArray = _baseIsTypedArray,
    baseUnary$1 = _baseUnary,
    nodeUtil$1 = _nodeUtil.exports;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$2 = nodeIsTypedArray ? baseUnary$1(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$2;

var baseTimes = _baseTimes,
    isArguments$2 = isArguments_1,
    isArray$h = isArray_1,
    isBuffer$1 = isBuffer$2.exports,
    isIndex$2 = _isIndex,
    isTypedArray$1 = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$h(value),
      isArg = !isArr && isArguments$2(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex$2(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$1;

/** Used for built-in method references. */

var objectProto$4 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$4;

  return value === proto;
}

var _isPrototype = isPrototype$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;

var overArg = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype = _isPrototype,
    nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var isFunction = isFunction_1,
    isLength$1 = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$5(value) {
  return value != null && isLength$1(value.length) && !isFunction(value);
}

var isArrayLike_1 = isArrayLike$5;

var arrayLikeKeys = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike$4 = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$6(object) {
  return isArrayLike$4(object) ? arrayLikeKeys(object) : baseKeys(object);
}

var keys_1 = keys$6;

var baseGetAllKeys = _baseGetAllKeys,
    getSymbols = _getSymbols,
    keys$5 = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys$5, getSymbols);
}

var _getAllKeys = getAllKeys$1;

var getAllKeys = _getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;

var getNative$4 = _getNative,
    root$3 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$4(root$3, 'DataView');

var _DataView = DataView$1;

var getNative$3 = _getNative,
    root$2 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$3(root$2, 'Promise');

var _Promise = Promise$2;

var getNative$2 = _getNative,
    root$1 = _root;

/* Built-in method references that are verified to be native. */
var Set$3 = getNative$2(root$1, 'Set');

var _Set = Set$3;

var getNative$1 = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative$1(root, 'WeakMap');

var _WeakMap = WeakMap$1;

var DataView = _DataView,
    Map$1 = _Map,
    Promise$1 = _Promise,
    Set$2 = _Set,
    WeakMap = _WeakMap,
    baseGetTag$4 = _baseGetTag,
    toSource = _toSource;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$2),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag$4;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map$1 && getTag$1(new Map$1) != mapTag) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set$2 && getTag$1(new Set$2) != setTag) ||
    (WeakMap && getTag$1(new WeakMap) != weakMapTag)) {
  getTag$1 = function(value) {
    var result = baseGetTag$4(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

var Stack$1 = _Stack,
    equalArrays = _equalArrays,
    equalByTag = _equalByTag,
    equalObjects = _equalObjects,
    getTag = _getTag,
    isArray$g = isArray_1,
    isBuffer = isBuffer$2.exports,
    isTypedArray = isTypedArray_1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$g(object),
      othIsArr = isArray$g(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$1.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack$1);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;

var baseIsEqualDeep = _baseIsEqualDeep,
    isObjectLike$4 = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike$4(value) && !isObjectLike$4(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}

var _baseIsEqual = baseIsEqual$2;

var Stack = _Stack,
    baseIsEqual$1 = _baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch$1(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch$1;

var isObject$3 = isObject_1;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable$2(value) {
  return value === value && !isObject$3(value);
}

var _isStrictComparable = isStrictComparable$2;

var isStrictComparable$1 = _isStrictComparable,
    keys$4 = keys_1;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData$1(object) {
  var result = keys$4(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}

var _getMatchData = getMatchData$1;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */

function matchesStrictComparable$2(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable$2;

var baseIsMatch = _baseIsMatch,
    getMatchData = _getMatchData,
    matchesStrictComparable$1 = _matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches$1;

var baseGetTag$3 = _baseGetTag,
    isObjectLike$3 = isObjectLike_1;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$5(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$3(value) && baseGetTag$3(value) == symbolTag);
}

var isSymbol_1 = isSymbol$5;

var isArray$f = isArray_1,
    isSymbol$4 = isSymbol_1;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey$3(value, object) {
  if (isArray$f(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol$4(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey$3;

var MapCache = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize$1(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize$1.Cache = MapCache;

var memoize_1 = memoize$1;

var memoize = memoize_1;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped$1;

var memoizeCapped = _memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath$1 = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath$1;

var Symbol$1 = _Symbol,
    arrayMap$3 = _arrayMap,
    isArray$e = isArray_1,
    isSymbol$3 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$3 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString$4(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray$e(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap$3(value, baseToString$4) + '';
  }
  if (isSymbol$3(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$3) ? '-0' : result;
}

var _baseToString = baseToString$4;

var baseToString$3 = _baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$4(value) {
  return value == null ? '' : baseToString$3(value);
}

var toString_1 = toString$4;

var isArray$d = isArray_1,
    isKey$2 = _isKey,
    stringToPath = _stringToPath,
    toString$3 = toString_1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath$2(value, object) {
  if (isArray$d(value)) {
    return value;
  }
  return isKey$2(value, object) ? [value] : stringToPath(toString$3(value));
}

var _castPath = castPath$2;

var isSymbol$2 = isSymbol_1;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey$4(value) {
  if (typeof value == 'string' || isSymbol$2(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$2) ? '-0' : result;
}

var _toKey = toKey$4;

var castPath$1 = _castPath,
    toKey$3 = _toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet$3(object, path) {
  path = castPath$1(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey$3(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet$3;

var baseGet$2 = _baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get$1(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet$2(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get$1;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */

function baseHasIn$1(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn$1;

var castPath = _castPath,
    isArguments$1 = isArguments_1,
    isArray$c = isArray_1,
    isIndex$1 = _isIndex,
    isLength = isLength_1,
    toKey$2 = _toKey;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath$2(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey$2(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex$1(key, length) &&
    (isArray$c(object) || isArguments$1(object));
}

var _hasPath = hasPath$2;

var baseHasIn = _baseHasIn,
    hasPath$1 = _hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn$1(object, path) {
  return object != null && hasPath$1(object, path, baseHasIn);
}

var hasIn_1 = hasIn$1;

var baseIsEqual = _baseIsEqual,
    get = get_1,
    hasIn = hasIn_1,
    isKey$1 = _isKey,
    isStrictComparable = _isStrictComparable,
    matchesStrictComparable = _matchesStrictComparable,
    toKey$1 = _toKey;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

var _baseMatchesProperty = baseMatchesProperty$1;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */

function identity$5(value) {
  return value;
}

var identity_1 = identity$5;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */

function baseProperty$1(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty$1;

var baseGet$1 = _baseGet;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep$1(path) {
  return function(object) {
    return baseGet$1(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep$1;

var baseProperty = _baseProperty,
    basePropertyDeep = _basePropertyDeep,
    isKey = _isKey,
    toKey = _toKey;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

var property_1 = property$1;

var baseMatches = _baseMatches,
    baseMatchesProperty = _baseMatchesProperty,
    identity$4 = identity_1,
    isArray$b = isArray_1,
    property = property_1;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee$8(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity$4;
  }
  if (typeof value == 'object') {
    return isArray$b(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

var _baseIteratee = baseIteratee$8;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */

function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor$1;

var createBaseFor = _createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = createBaseFor();

var _baseFor = baseFor$1;

var baseFor = _baseFor,
    keys$3 = keys_1;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys$3);
}

var _baseForOwn = baseForOwn$1;

var isArrayLike$3 = isArrayLike_1;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$3(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach$1;

var baseForOwn = _baseForOwn,
    createBaseEach = _createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach$6 = createBaseEach(baseForOwn);

var _baseEach = baseEach$6;

var baseEach$5 = _baseEach,
    isArrayLike$2 = isArrayLike_1;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap$2(collection, iteratee) {
  var index = -1,
      result = isArrayLike$2(collection) ? Array(collection.length) : [];

  baseEach$5(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap$2;

var arrayMap$2 = _arrayMap,
    baseIteratee$7 = _baseIteratee,
    baseMap$1 = _baseMap,
    isArray$a = isArray_1;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray$a(collection) ? arrayMap$2 : baseMap$1;
  return func(collection, baseIteratee$7(iteratee));
}

var map_1 = map;

var baseEach$4 = _baseEach;

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome$1(collection, predicate) {
  var result;

  baseEach$4(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

var _baseSome = baseSome$1;

var eq = eq_1,
    isArrayLike$1 = isArrayLike_1,
    isIndex = _isIndex,
    isObject$2 = isObject_1;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall$3(value, index, object) {
  if (!isObject$2(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike$1(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall$3;

var arraySome = _arraySome,
    baseIteratee$6 = _baseIteratee,
    baseSome = _baseSome,
    isArray$9 = isArray_1,
    isIterateeCall$2 = _isIterateeCall;

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some$1(collection, predicate, guard) {
  var func = isArray$9(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall$2(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee$6(predicate));
}

var some_1 = some$1;

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */

function arrayEvery$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

var _arrayEvery = arrayEvery$1;

var baseEach$3 = _baseEach;

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery$1(collection, predicate) {
  var result = true;
  baseEach$3(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

var _baseEvery = baseEvery$1;

var arrayEvery = _arrayEvery,
    baseEvery = _baseEvery,
    baseIteratee$5 = _baseIteratee,
    isArray$8 = isArray_1,
    isIterateeCall$1 = _isIterateeCall;

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every$1(collection, predicate, guard) {
  var func = isArray$8(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall$1(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee$5(predicate));
}

var every_1 = every$1;

var getNative = _getNative;

var defineProperty$1 = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty$1;

var Symbol = _Symbol,
    isArguments = isArguments_1,
    isArray$7 = isArray_1;

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable$1(value) {
  return isArray$7(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable$1;

var arrayPush$1 = _arrayPush,
    isFlattenable = _isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten$2(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten$2(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush$1(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten$2;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */

function copyArray$1(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray$1;

var arrayPush = _arrayPush,
    baseFlatten$1 = _baseFlatten,
    copyArray = _copyArray,
    isArray$6 = isArray_1;

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(isArray$6(array) ? copyArray(array) : [array], baseFlatten$1(args, 1));
}

var concat_1 = concat;

var baseIteratee$4 = _baseIteratee,
    isArrayLike = isArrayLike_1,
    keys$2 = keys_1;

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind$1(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee$4(predicate);
      collection = keys$2(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

var _createFind = createFind$1;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function baseFindIndex$2(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex$2;

/** Used to match a single whitespace character. */

var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex$1(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

var _trimmedEndIndex = trimmedEndIndex$1;

var trimmedEndIndex = _trimmedEndIndex;

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim$2(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

var _baseTrim = baseTrim$2;

var baseTrim$1 = _baseTrim,
    isObject$1 = isObject_1,
    isSymbol$1 = isSymbol_1;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim$1(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber$1;

var toNumber = toNumber_1;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite$1(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY$1 || value === -INFINITY$1) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite$1;

var toFinite = toFinite_1;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger$3(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger$3;

var baseFindIndex$1 = _baseFindIndex,
    baseIteratee$3 = _baseIteratee,
    toInteger$2 = toInteger_1;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex$1(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger$2(fromIndex);
  if (index < 0) {
    index = nativeMax$1(length + index, 0);
  }
  return baseFindIndex$1(array, baseIteratee$3(predicate), index);
}

var findIndex_1 = findIndex$1;

var createFind = _createFind,
    findIndex = findIndex_1;

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

var find_1 = find;

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */

function arrayReduce$1(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce$1;

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */

function baseReduce$1(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

var _baseReduce = baseReduce$1;

var arrayReduce = _arrayReduce,
    baseEach$2 = _baseEach,
    baseIteratee$2 = _baseIteratee,
    baseReduce = _baseReduce,
    isArray$5 = isArray_1;

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray$5(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee$2(iteratee), accumulator, initAccum, baseEach$2);
}

var reduce_1 = reduce;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */

function baseSlice$1(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice$1;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */

function baseIsNaN$1(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN$1;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function strictIndexOf$1(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf$1;

var baseFindIndex = _baseFindIndex,
    baseIsNaN = _baseIsNaN,
    strictIndexOf = _strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf$2(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf$2;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */

function noop$1() {
  // No operation performed.
}

var noop_1 = noop$1;

var Set$1 = _Set,
    noop = noop_1,
    setToArray = _setToArray;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
!(Set$1 && (1 / setToArray(new Set$1([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set$1(values);
};

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */

function baseSortBy$1(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

var _baseSortBy = baseSortBy$1;

var isSymbol = isSymbol_1;

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending$1(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

var _compareAscending = compareAscending$1;

var compareAscending = _compareAscending;

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple$1(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

var _compareMultiple = compareMultiple$1;

var arrayMap$1 = _arrayMap,
    baseGet = _baseGet,
    baseIteratee$1 = _baseIteratee,
    baseMap = _baseMap,
    baseSortBy = _baseSortBy,
    baseUnary = _baseUnary,
    compareMultiple = _compareMultiple,
    identity$3 = identity_1,
    isArray$4 = isArray_1;

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy$1(collection, iteratees, orders) {
  if (iteratees.length) {
    iteratees = arrayMap$1(iteratees, function(iteratee) {
      if (isArray$4(iteratee)) {
        return function(value) {
          return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        }
      }
      return iteratee;
    });
  } else {
    iteratees = [identity$3];
  }

  var index = -1;
  iteratees = arrayMap$1(iteratees, baseUnary(baseIteratee$1));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap$1(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

var _baseOrderBy = baseOrderBy$1;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */

function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply$1;

var apply = _apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest$1(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

var _overRest = overRest$1;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */

function constant$1(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant$1;

var constant = constant_1,
    defineProperty = _defineProperty,
    identity$2 = identity_1;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString$1 = !defineProperty ? identity$2 : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString$1;

/** Used to detect hot functions by number of calls within a span of milliseconds. */

var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut$1(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut$1;

var baseSetToString = _baseSetToString,
    shortOut = _shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString$1 = shortOut(baseSetToString);

var _setToString = setToString$1;

var identity$1 = identity_1,
    overRest = _overRest,
    setToString = _setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest$1(func, start) {
  return setToString(overRest(func, start, identity$1), func + '');
}

var _baseRest = baseRest$1;

var baseFlatten = _baseFlatten,
    baseOrderBy = _baseOrderBy,
    baseRest = _baseRest,
    isIterateeCall = _isIterateeCall;

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */
baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

var baseEach$1 = _baseEach;

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter$1(collection, predicate) {
  var result = [];
  baseEach$1(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

var _baseFilter = baseFilter$1;

var arrayFilter = _arrayFilter,
    baseFilter = _baseFilter,
    baseIteratee = _baseIteratee,
    isArray$3 = isArray_1;

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 *
 * // Combining several predicates using `_.overEvery` or `_.overSome`.
 * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
 * // => objects for ['fred', 'barney']
 */
function filter(collection, predicate) {
  var func = isArray$3(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate));
}

var filter_1 = filter;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */

function arrayEach$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach$1;

var identity = identity_1;

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction$1(value) {
  return typeof value == 'function' ? value : identity;
}

var _castFunction = castFunction$1;

var arrayEach = _arrayEach,
    baseEach = _baseEach,
    castFunction = _castFunction,
    isArray$2 = isArray_1;

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray$2(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

var forEach_1 = forEach;

var baseSlice = _baseSlice;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice$1(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

var _castSlice = castSlice$1;

/** Used to compose unicode character classes. */

var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$1 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$1 + rsVarRange$1 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode$1(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode$1;

var nodeUtil = _nodeUtil.exports;

/* Node.js helper references. */
nodeUtil && nodeUtil.isRegExp;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */

function asciiToArray$1(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray$1;

/** Used to compose unicode character classes. */

var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray$1(string) {
  return string.match(reUnicode) || [];
}

var _unicodeToArray = unicodeToArray$1;

var asciiToArray = _asciiToArray,
    hasUnicode = _hasUnicode,
    unicodeToArray = _unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray$1(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

var _stringToArray = stringToArray$1;

var baseIndexOf$1 = _baseIndexOf;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the last unmatched string symbol.
 */
function charsEndIndex$1(strSymbols, chrSymbols) {
  var index = strSymbols.length;

  while (index-- && baseIndexOf$1(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

var _charsEndIndex = charsEndIndex$1;

var baseIndexOf = _baseIndexOf;

/**
 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
 * that is not found in the character symbols.
 *
 * @private
 * @param {Array} strSymbols The string symbols to inspect.
 * @param {Array} chrSymbols The character symbols to find.
 * @returns {number} Returns the index of the first unmatched string symbol.
 */
function charsStartIndex$1(strSymbols, chrSymbols) {
  var index = -1,
      length = strSymbols.length;

  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
  return index;
}

var _charsStartIndex = charsStartIndex$1;

var baseToString$2 = _baseToString,
    baseTrim = _baseTrim,
    castSlice = _castSlice,
    charsEndIndex = _charsEndIndex,
    charsStartIndex = _charsStartIndex,
    stringToArray = _stringToArray,
    toString$2 = toString_1;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */
function trim(string, chars, guard) {
  string = toString$2(string);
  if (string && (guard || chars === undefined)) {
    return baseTrim(string);
  }
  if (!string || !(chars = baseToString$2(chars))) {
    return string;
  }
  var strSymbols = stringToArray(string),
      chrSymbols = stringToArray(chars),
      start = charsStartIndex(strSymbols, chrSymbols),
      end = charsEndIndex(strSymbols, chrSymbols) + 1;

  return castSlice(strSymbols, start, end).join('');
}

var trim_1 = trim;

/** Used for built-in method references. */

var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas$1(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

var _baseHas = baseHas$1;

var baseHas = _baseHas,
    hasPath = _hasPath;

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

var has_1 = has;

var baseGetTag$2 = _baseGetTag,
    isObjectLike$2 = isObjectLike_1;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike$2(value) && baseGetTag$2(value) == boolTag);
}

var isBoolean_1 = isBoolean;

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */

function isNull(value) {
  return value === null;
}

var isNull_1 = isNull;

var baseGetTag$1 = _baseGetTag,
    isArray$1 = isArray_1,
    isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString$1(value) {
  return typeof value == 'string' ||
    (!isArray$1(value) && isObjectLike$1(value) && baseGetTag$1(value) == stringTag);
}

var isString_1 = isString$1;

var baseGetTag = _baseGetTag,
    isObjectLike = isObjectLike_1;

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber$1(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

var isNumber_1 = isNumber$1;

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */

function baseClamp$2(number, lower, upper) {
  if (number === number) {
    if (upper !== undefined) {
      number = number <= upper ? number : upper;
    }
    if (lower !== undefined) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}

var _baseClamp = baseClamp$2;

var baseClamp$1 = _baseClamp,
    baseToString$1 = _baseToString,
    toInteger$1 = toInteger_1,
    toString$1 = toString_1;

/**
 * Checks if `string` starts with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`.
 * @example
 *
 * _.startsWith('abc', 'a');
 * // => true
 *
 * _.startsWith('abc', 'b');
 * // => false
 *
 * _.startsWith('abc', 'b', 1);
 * // => true
 */
function startsWith(string, target, position) {
  string = toString$1(string);
  position = position == null
    ? 0
    : baseClamp$1(toInteger$1(position), 0, string.length);

  target = baseToString$1(target);
  return string.slice(position, position + target.length) == target;
}

var startsWith_1 = startsWith;

var baseClamp = _baseClamp,
    baseToString = _baseToString,
    toInteger = toInteger_1,
    toString = toString_1;

/**
 * Checks if `string` ends with the given target string.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search up to.
 * @returns {boolean} Returns `true` if `string` ends with `target`,
 *  else `false`.
 * @example
 *
 * _.endsWith('abc', 'c');
 * // => true
 *
 * _.endsWith('abc', 'b');
 * // => false
 *
 * _.endsWith('abc', 'b', 2);
 * // => true
 */
function endsWith(string, target, position) {
  string = toString(string);
  target = baseToString(target);

  var length = string.length;
  position = position === undefined
    ? length
    : baseClamp(toInteger(position), 0, length);

  var end = position;
  position -= target.length;
  return position >= 0 && string.slice(position, end) == target;
}

var endsWith_1 = endsWith;

var arrayMap = _arrayMap;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues$1(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

var _baseValues = baseValues$1;

var baseValues = _baseValues,
    keys$1 = keys_1;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys$1(object));
}

var values_1 = values;

// Copyright (c) 2020-2021 Sendanor. All rights reserved.

function isUndefined(value) {
    return value === undefined;
}

function isArray(value) {
    return isArray_1(value);
}

function isArrayOf(value, isItem = undefined, minLength = undefined, maxLength = undefined) {
    if (!isArray_1(value))
        return false;
    const len = value?.length ?? 0;
    if (minLength !== undefined && len < minLength) {
        return false;
    }
    if (maxLength !== undefined && len > maxLength) {
        return false;
    }
    if (isItem !== undefined) {
        return every(value, isItem);
    }
    return true;
}

function isString(value) {
    return isString_1(value);
}

function isNumber(value) {
    return isNumber_1(value);
}

function some(value, isValue) {
    return some_1(value, isValue);
}

function every(value, isValue) {
    return every_1(value, isValue);
}

function everyKey(value, isKey) {
    return isObject_1(value) && every(keys(value), isKey);
}

function everyValue(value, isItem) {
    return isObject_1(value) && every(values_1(value), isItem);
}

function everyProperty(value, isKey = isString, isItem = undefined) {
    if (isItem !== undefined && !everyValue(value, isItem)) {
        return false;
    }
    if (isKey !== undefined) {
        return everyKey(value, isKey);
    }
    return everyKey(value, isString);
}

function isRegularObject(value) {
    if (!isObject_1(value))
        return false;
    if (value instanceof Date)
        return false;
    if (isFunction_1(value))
        return false;
    if (isArray(value))
        return false;
    return everyProperty(value, isString, undefined);
}

function createOr(...callbacks) {
    return (value) => some(callbacks, callback => callback(value));
}

function isObject(value) {
    return isObject_1(value);
}

function parseNonEmptyString$1(value) {
    if (value === undefined)
        return undefined;
    if (value === '')
        return undefined;
    return `${value}`;
}
function keys(value, isKey = isString) {
    if (isArray(value)) {
        const indexes = map_1(value, (item, index) => index);
        const items = filter_1(indexes, (key) => isKey(key));
        return items;
    }
    else if (isObject(value)) {
        const allKeys = Reflect.ownKeys(value);
        const items = filter_1(allKeys, (key) => isKey(key));
        return items;
    }
    return [];
}

// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARN"] = 2] = "WARN";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
    LogLevel[LogLevel["NONE"] = 4] = "NONE";
})(LogLevel || (LogLevel = {}));
function isLogLevel(value) {
    switch (value) {
        case LogLevel.DEBUG:
        case LogLevel.INFO:
        case LogLevel.WARN:
        case LogLevel.ERROR:
        case LogLevel.NONE:
            return true;
        default:
            return false;
    }
}
function stringifyLogLevel(value) {
    switch (value) {
        case LogLevel.DEBUG: return 'DEBUG';
        case LogLevel.INFO: return 'INFO';
        case LogLevel.WARN: return 'WARN';
        case LogLevel.ERROR: return 'ERROR';
        case LogLevel.NONE: return 'NONE';
        default: return `Unknown:${value}`;
    }
}
function parseLogLevel(value) {
    if (!value)
        return undefined;
    if (isLogLevel(value))
        return value;
    value = `${value}`.toUpperCase();
    switch (value) {
        case 'ALL':
        case 'DEBUG':
            return LogLevel.DEBUG;
        case 'INFO':
            return LogLevel.INFO;
        case 'WARN':
        case 'WARNING':
            return LogLevel.WARN;
        case 'ERR':
        case 'ERROR':
            return LogLevel.ERROR;
        case 'FALSE':
        case 'OFF':
        case 'QUIET':
        case 'SILENT':
        case 'NONE':
            return LogLevel.NONE;
        default:
            return undefined;
    }
}
var LogLevel$1 = LogLevel;

// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.
class ContextLogger {
    _logger;
    name;
    _level;
    constructor(name, logService) {
        this.name = name;
        this._logger = logService;
        this._level = undefined;
    }
    getLogLevel() {
        return this._level ?? this._logger.getLogLevel();
    }
    setLogLevel(level) {
        this._level = level;
        return this;
    }
    debug(...args) {
        if (this._level === undefined || this._level <= LogLevel$1.DEBUG) {
            this._logger.debug(`[${this.name}]`, ...args);
        }
    }
    info(...args) {
        if (this._level === undefined || this._level <= LogLevel$1.INFO) {
            this._logger.info(`[${this.name}]`, ...args);
        }
    }
    warn(...args) {
        if (this._level === undefined || this._level <= LogLevel$1.WARN) {
            this._logger.warn(`[${this.name}]`, ...args);
        }
    }
    error(...args) {
        if (this._level === undefined || this._level <= LogLevel$1.ERROR) {
            this._logger.error(`[${this.name}]`, ...args);
        }
    }
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
class LogService {
    static Level = LogLevel$1;
    static _level = LogLevel$1.DEBUG;
    static _logger = console;
    static setLogLevel(value) {
        if (value) {
            this._level = value;
        }
        return this;
    }
    static getLogLevel() {
        return this._level;
    }
    static getLogLevelString() {
        return stringifyLogLevel(this._level);
    }
    static setLogger(value) {
        if (!value)
            throw new TypeError(`The logger was not defined`);
        this._logger = value;
    }
    static debug(...args) {
        if (this._level <= LogLevel$1.DEBUG) {
            this._logger.debug(...args);
        }
    }
    static info(...args) {
        if (this._level <= LogLevel$1.INFO) {
            this._logger.info(...args);
        }
    }
    static warn(...args) {
        if (this._level <= LogLevel$1.WARN) {
            this._logger.warn(...args);
        }
    }
    static error(...args) {
        if (this._level <= LogLevel$1.ERROR) {
            this._logger.error(...args);
        }
    }
    static createLogger(name) {
        return new ContextLogger(name, LogService);
    }
}

// Copyright (c) 2020 Sendanor. All rights reserved.
const LOG$c = LogService.createLogger('ProcessUtils');
class ProcessUtils {
    static getArguments() {
        return process.argv.slice(2);
    }
    static parseEnvFileLine(obj, line) {
        if (line.indexOf('=') < 0) {
            if (line.length) {
                obj[line] = '';
            }
            return obj;
        }
        const parts = line.split('=');
        let key = parts.shift();
        key = trim_1(key);
        if (key.length) {
            obj[key] = parts.join('=').trim();
        }
        return obj;
    }
    static parseEnvFile(file) {
        const input = FS__default["default"].readFileSync(file, { encoding: "utf-8" });
        const rows = input.split('\n');
        return rows.reduce(ProcessUtils.parseEnvFileLine, {});
    }
    static initEnvFromFile(file) {
        const params = ProcessUtils.parseEnvFile(file);
        process.env = {
            ...params,
            ...process.env
        };
    }
    static initEnvFromDefaultFiles() {
        const file = PATH__default["default"].join(process.cwd(), '.env');
        if (FS__default["default"].existsSync(file)) {
            ProcessUtils.initEnvFromFile(file);
        }
    }
    /**
     *
     * @param callback
     * @param errorHandler
     */
    static setupDestroyHandler(callback, errorHandler) {
        let destroyed = false;
        const closeProcessInternal = () => {
            try {
                if (destroyed)
                    return;
                destroyed = true;
                callback();
            }
            catch (err) {
                errorHandler(err);
            }
        };
        const closeProcess = (reason) => {
            return (err) => {
                ProcessUtils._printErrors(reason, err);
                closeProcessInternal();
            };
        };
        process.on('exit', closeProcess('exit'));
        process.on('SIGTERM', closeProcess('SIGTERM'));
        process.on('SIGINT', closeProcess('SIGINT'));
        process.on('SIGUSR1', closeProcess('SIGUSR1'));
        process.on('SIGUSR2', closeProcess('SIGUSR2'));
        process.on('uncaughtException', closeProcess('uncaughtException'));
    }
    static _printErrors(reason, err) {
        try {
            if (err) {
                LOG$c.debug(`Closing process because "${reason}" event: `, err);
            }
            else {
                LOG$c.debug(`Closing process because "${reason}" event`);
            }
        }
        catch (err2) {
            console.error('Error while printing errors: ', err2);
        }
    }
}

// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
function parseNonEmptyString(value) {
    if (value.startsWith('%' + '{') && value.endsWith('}'))
        return undefined;
    return parseNonEmptyString$1(value);
}

parseNonEmptyString('0.0.1') ?? '?';

const BUILD_COMMAND_NAME = parseNonEmptyString('') ?? 'react-seo-server';

const BUILD_LOG_LEVEL = parseNonEmptyString('') ?? '';

parseNonEmptyString('production') ?? 'development';

parseNonEmptyString('2021-12-06T19:55:41.796Z') ?? '';

// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
const BACKEND_LOG_LEVEL = parseLogLevel(parseNonEmptyString$1(process?.env?.BACKEND_LOG_LEVEL) ?? parseNonEmptyString$1(BUILD_LOG_LEVEL)) ?? LogLevel$1.INFO;
const BACKEND_SCRIPT_NAME = parseNonEmptyString$1(process?.env?.BACKEND_SCRIPT_NAME) ?? BUILD_COMMAND_NAME;
const BACKEND_PORT = normalizePort(process?.env?.PORT || '3000');
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port))
        return val;
    if (port >= 0)
        return port;
    return false;
}

// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
var ExitStatus;
(function (ExitStatus) {
    /** Standard successful termination */
    ExitStatus[ExitStatus["OK"] = 0] = "OK";
    // From Advanced Bash scripting guide
    ExitStatus[ExitStatus["GENERAL_ERRORS"] = 1] = "GENERAL_ERRORS";
    ExitStatus[ExitStatus["MISUSE_OF_SHELL_BUILTINS"] = 2] = "MISUSE_OF_SHELL_BUILTINS";
    // Our custom errors
    ExitStatus[ExitStatus["ARGUMENT_PARSE_ERROR"] = 3] = "ARGUMENT_PARSE_ERROR";
    ExitStatus[ExitStatus["UNKNOWN_ARGUMENT"] = 4] = "UNKNOWN_ARGUMENT";
    ExitStatus[ExitStatus["UNIMPLEMENTED_FEATURE"] = 5] = "UNIMPLEMENTED_FEATURE";
    ExitStatus[ExitStatus["FATAL_ERROR"] = 6] = "FATAL_ERROR";
    ExitStatus[ExitStatus["CONFLICT"] = 7] = "CONFLICT";
    // From Linux sysexits.h
    ExitStatus[ExitStatus["USAGE"] = 64] = "USAGE";
    ExitStatus[ExitStatus["DATAERR"] = 65] = "DATAERR";
    ExitStatus[ExitStatus["NOINPUT"] = 66] = "NOINPUT";
    ExitStatus[ExitStatus["NOUSER"] = 67] = "NOUSER";
    ExitStatus[ExitStatus["NOHOST"] = 68] = "NOHOST";
    ExitStatus[ExitStatus["UNAVAILABLE"] = 69] = "UNAVAILABLE";
    ExitStatus[ExitStatus["SOFTWARE"] = 70] = "SOFTWARE";
    ExitStatus[ExitStatus["OSERR"] = 71] = "OSERR";
    ExitStatus[ExitStatus["OSFILE"] = 72] = "OSFILE";
    ExitStatus[ExitStatus["CANTCREAT"] = 73] = "CANTCREAT";
    ExitStatus[ExitStatus["IOERR"] = 74] = "IOERR";
    ExitStatus[ExitStatus["TEMPFAIL"] = 75] = "TEMPFAIL";
    ExitStatus[ExitStatus["PROTOCOL"] = 76] = "PROTOCOL";
    ExitStatus[ExitStatus["NOPERM"] = 77] = "NOPERM";
    ExitStatus[ExitStatus["CONFIG"] = 78] = "CONFIG";
    // From Advanced Bash scripting guide
    ExitStatus[ExitStatus["COMMAND_INVOKED_CANNOT_EXECUTE"] = 126] = "COMMAND_INVOKED_CANNOT_EXECUTE";
    ExitStatus[ExitStatus["COMMAND_NOT_FOUND"] = 127] = "COMMAND_NOT_FOUND";
    ExitStatus[ExitStatus["INVALID_ARGUMENT_TO_EXIT"] = 128] = "INVALID_ARGUMENT_TO_EXIT";
    ExitStatus[ExitStatus["FATAL_SIGNAL_RANGE_START"] = 129] = "FATAL_SIGNAL_RANGE_START";
    ExitStatus[ExitStatus["FATAL_SIGNAL_RANGE_END"] = 254] = "FATAL_SIGNAL_RANGE_END";
    ExitStatus[ExitStatus["EXIT_STATUS_OUT_OF_RANGE"] = 255] = "EXIT_STATUS_OUT_OF_RANGE";
})(ExitStatus || (ExitStatus = {}));
var ExitStatus$1 = ExitStatus;

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["OPTIONS"] = 0] = "OPTIONS";
    RequestMethod[RequestMethod["GET"] = 1] = "GET";
    RequestMethod[RequestMethod["POST"] = 2] = "POST";
    RequestMethod[RequestMethod["PUT"] = 3] = "PUT";
    RequestMethod[RequestMethod["DELETE"] = 4] = "DELETE";
    RequestMethod[RequestMethod["PATCH"] = 5] = "PATCH";
})(RequestMethod || (RequestMethod = {}));
function stringifyRequestMethod(value) {
    if (isNumber(value)) {
        switch (value) {
            case RequestMethod.OPTIONS: return 'options';
            case RequestMethod.GET: return 'get';
            case RequestMethod.POST: return 'post';
            case RequestMethod.PUT: return 'put';
            case RequestMethod.DELETE: return 'delete';
            case RequestMethod.PATCH: return 'patch';
        }
    }
    throw new TypeError(`Unsupported value for stringifyRequestMethod(): ${value}`);
}
function isRequestMethod(value) {
    return isNumber(value) && value >= 0 && value <= 5;
}
function parseRequestMethod(value) {
    if (isRequestMethod(value))
        return value;
    if (isString(value)) {
        value = value.toLowerCase();
        switch (value) {
            case 'options': return RequestMethod.OPTIONS;
            case 'get': return RequestMethod.GET;
            case 'post': return RequestMethod.POST;
            case 'put': return RequestMethod.PUT;
            case 'delete': return RequestMethod.DELETE;
            case 'patch': return RequestMethod.PATCH;
        }
    }
    throw new TypeError(`Cannot parse value "${value}" as a valid RequestMethod`);
}
var RequestMethod$1 = RequestMethod;

const NOR_REQUEST_CLIENT_MODE = process?.env?.NOR_REQUEST_CLIENT_MODE ?? process?.env?.REACT_APP_REQUEST_CLIENT_MODE ?? '';
const REQUEST_CLIENT_FETCH_ENABLED = NOR_REQUEST_CLIENT_MODE === 'WINDOW' ? true : !!(typeof window !== 'undefined' && window.fetch);
const REQUEST_CLIENT_NODE_ENABLED = NOR_REQUEST_CLIENT_MODE === 'NODE' ? true : !REQUEST_CLIENT_FETCH_ENABLED;

class NodeHttpUtils {
    /**
     * Get request body data as Buffer object.
     *
     * @param request
     * @return The request input data
     */
    static async getRequestDataAsBuffer(request) {
        return new Promise((resolve, reject) => {
            const chunks = [];
            request.on('data', (chunk) => {
                try {
                    chunks.push(chunk);
                }
                catch (err) {
                    reject(err);
                }
            });
            request.on('end', () => {
                try {
                    resolve(Buffer.concat(chunks));
                }
                catch (err) {
                    reject(err);
                }
            });
        });
    }
    /**
     * Get request body data as string.
     *
     * @param request
     * @param encoding
     * @return The request input data
     */
    static async getRequestDataAsString(request, encoding = 'utf8') {
        const buffer = await NodeHttpUtils.getRequestDataAsBuffer(request);
        return buffer.toString(encoding);
    }
    /**
     * Get request body data as "application/x-www-form-urlencoded".
     *
     * @param request
     * @return The request input data. If request data is an empty string, an `undefined` will be returned.
     */
    static async getRequestDataAsFormUrlEncoded(request) {
        const dataString = await NodeHttpUtils.getRequestDataAsString(request);
        if (dataString === "") {
            return undefined;
        }
        return QueryString__namespace.parse(dataString);
    }
    /**
     * Get request body data as JSON.
     *
     * @param request
     * @return The request input data. If request data is an empty string, an `undefined` will be returned.
     */
    static async getRequestDataAsJson(request) {
        const dataString = await NodeHttpUtils.getRequestDataAsString(request);
        if (dataString === "") {
            return undefined;
        }
        return JSON.parse(dataString);
    }
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var RequestStatus;
(function (RequestStatus) {
    RequestStatus[RequestStatus["Continue"] = 100] = "Continue";
    RequestStatus[RequestStatus["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    RequestStatus[RequestStatus["Processing"] = 102] = "Processing";
    RequestStatus[RequestStatus["CheckPoint"] = 103] = "CheckPoint";
    RequestStatus[RequestStatus["OK"] = 200] = "OK";
    RequestStatus[RequestStatus["Created"] = 201] = "Created";
    RequestStatus[RequestStatus["Accepted"] = 202] = "Accepted";
    RequestStatus[RequestStatus["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    RequestStatus[RequestStatus["NoContent"] = 204] = "NoContent";
    RequestStatus[RequestStatus["ResetContent"] = 205] = "ResetContent";
    RequestStatus[RequestStatus["PartialContent"] = 206] = "PartialContent";
    RequestStatus[RequestStatus["MultiStatus"] = 207] = "MultiStatus";
    RequestStatus[RequestStatus["AlreadyReported"] = 208] = "AlreadyReported";
    RequestStatus[RequestStatus["IMUsed"] = 226] = "IMUsed";
    RequestStatus[RequestStatus["MultipleChoices"] = 300] = "MultipleChoices";
    RequestStatus[RequestStatus["MovedPermanently"] = 301] = "MovedPermanently";
    RequestStatus[RequestStatus["Found"] = 302] = "Found";
    RequestStatus[RequestStatus["SeeOther"] = 303] = "SeeOther";
    RequestStatus[RequestStatus["NotModified"] = 304] = "NotModified";
    RequestStatus[RequestStatus["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RequestStatus[RequestStatus["PermanentRedirect"] = 308] = "PermanentRedirect";
    RequestStatus[RequestStatus["BadRequest"] = 400] = "BadRequest";
    RequestStatus[RequestStatus["Unauthorized"] = 401] = "Unauthorized";
    RequestStatus[RequestStatus["PaymentRequired"] = 402] = "PaymentRequired";
    RequestStatus[RequestStatus["Forbidden"] = 403] = "Forbidden";
    RequestStatus[RequestStatus["NotFound"] = 404] = "NotFound";
    RequestStatus[RequestStatus["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    RequestStatus[RequestStatus["NotAcceptable"] = 406] = "NotAcceptable";
    RequestStatus[RequestStatus["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    RequestStatus[RequestStatus["RequestTimeout"] = 408] = "RequestTimeout";
    RequestStatus[RequestStatus["Conflict"] = 409] = "Conflict";
    RequestStatus[RequestStatus["Gone"] = 410] = "Gone";
    RequestStatus[RequestStatus["LengthRequired"] = 411] = "LengthRequired";
    RequestStatus[RequestStatus["PreconditionFailed"] = 412] = "PreconditionFailed";
    RequestStatus[RequestStatus["PayloadTooLarge"] = 413] = "PayloadTooLarge";
    RequestStatus[RequestStatus["URITooLong"] = 414] = "URITooLong";
    RequestStatus[RequestStatus["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    RequestStatus[RequestStatus["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    RequestStatus[RequestStatus["ExpectationFailed"] = 417] = "ExpectationFailed";
    RequestStatus[RequestStatus["IAmATeapot"] = 418] = "IAmATeapot";
    RequestStatus[RequestStatus["UnprocessableEntity"] = 422] = "UnprocessableEntity";
    RequestStatus[RequestStatus["Locked"] = 423] = "Locked";
    RequestStatus[RequestStatus["FailedDependency"] = 424] = "FailedDependency";
    RequestStatus[RequestStatus["TooEarly"] = 425] = "TooEarly";
    RequestStatus[RequestStatus["UpgradeRequired"] = 426] = "UpgradeRequired";
    RequestStatus[RequestStatus["PreconditionRequired"] = 428] = "PreconditionRequired";
    RequestStatus[RequestStatus["TooManyRequests"] = 429] = "TooManyRequests";
    RequestStatus[RequestStatus["RequestHeaderFieldsTooLarge"] = 431] = "RequestHeaderFieldsTooLarge";
    RequestStatus[RequestStatus["UnavailableForLegalReasons"] = 451] = "UnavailableForLegalReasons";
    /**
     * @deprecated Use RequestStatus.InternalServerError
     */
    RequestStatus[RequestStatus["InternalError"] = 500] = "InternalError";
    RequestStatus[RequestStatus["InternalServerError"] = 500] = "InternalServerError";
    RequestStatus[RequestStatus["NotImplemented"] = 501] = "NotImplemented";
    RequestStatus[RequestStatus["BadGateway"] = 502] = "BadGateway";
    RequestStatus[RequestStatus["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    RequestStatus[RequestStatus["GatewayTimeout"] = 504] = "GatewayTimeout";
    RequestStatus[RequestStatus["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
    RequestStatus[RequestStatus["VariantAlsoNegotiates"] = 506] = "VariantAlsoNegotiates";
    RequestStatus[RequestStatus["InsufficientStorage"] = 507] = "InsufficientStorage";
    RequestStatus[RequestStatus["LoopDetected"] = 508] = "LoopDetected";
    RequestStatus[RequestStatus["BandwidthLimitExceeded"] = 509] = "BandwidthLimitExceeded";
    RequestStatus[RequestStatus["NotExtended"] = 510] = "NotExtended";
    RequestStatus[RequestStatus["NetworkAuthenticationRequired"] = 511] = "NetworkAuthenticationRequired";
})(RequestStatus || (RequestStatus = {}));
function isRequestStatus(value) {
    if (!isNumber(value))
        return false;
    switch (value) {
        case RequestStatus.Continue:
        case RequestStatus.SwitchingProtocols:
        case RequestStatus.Processing:
        case RequestStatus.CheckPoint:
        case RequestStatus.OK:
        case RequestStatus.Created:
        case RequestStatus.Accepted:
        case RequestStatus.NonAuthoritativeInformation:
        case RequestStatus.NoContent:
        case RequestStatus.ResetContent:
        case RequestStatus.PartialContent:
        case RequestStatus.MultiStatus:
        case RequestStatus.AlreadyReported:
        case RequestStatus.IMUsed:
        case RequestStatus.MultipleChoices:
        case RequestStatus.MovedPermanently:
        case RequestStatus.Found:
        case RequestStatus.SeeOther:
        case RequestStatus.NotModified:
        case RequestStatus.TemporaryRedirect:
        case RequestStatus.PermanentRedirect:
        case RequestStatus.BadRequest:
        case RequestStatus.Unauthorized:
        case RequestStatus.PaymentRequired:
        case RequestStatus.Forbidden:
        case RequestStatus.NotFound:
        case RequestStatus.MethodNotAllowed:
        case RequestStatus.NotAcceptable:
        case RequestStatus.ProxyAuthenticationRequired:
        case RequestStatus.RequestTimeout:
        case RequestStatus.Conflict:
        case RequestStatus.Gone:
        case RequestStatus.LengthRequired:
        case RequestStatus.PreconditionFailed:
        case RequestStatus.PayloadTooLarge:
        case RequestStatus.URITooLong:
        case RequestStatus.UnsupportedMediaType:
        case RequestStatus.RequestedRangeNotSatisfiable:
        case RequestStatus.ExpectationFailed:
        case RequestStatus.IAmATeapot:
        case RequestStatus.UnprocessableEntity:
        case RequestStatus.Locked:
        case RequestStatus.FailedDependency:
        case RequestStatus.TooEarly:
        case RequestStatus.UpgradeRequired:
        case RequestStatus.PreconditionRequired:
        case RequestStatus.TooManyRequests:
        case RequestStatus.RequestHeaderFieldsTooLarge:
        case RequestStatus.UnavailableForLegalReasons:
        case RequestStatus.InternalServerError:
        case RequestStatus.NotImplemented:
        case RequestStatus.BadGateway:
        case RequestStatus.ServiceUnavailable:
        case RequestStatus.GatewayTimeout:
        case RequestStatus.HttpVersionNotSupported:
        case RequestStatus.VariantAlsoNegotiates:
        case RequestStatus.InsufficientStorage:
        case RequestStatus.LoopDetected:
        case RequestStatus.BandwidthLimitExceeded:
        case RequestStatus.NotExtended:
        case RequestStatus.NetworkAuthenticationRequired:
            return true;
    }
    return false;
}
function stringifyRequestStatus(value) {
    switch (value) {
        case RequestStatus.Continue: return 'Continue';
        case RequestStatus.SwitchingProtocols: return 'Switching Protocols';
        case RequestStatus.Processing: return 'Processing';
        case RequestStatus.CheckPoint: return 'Check Point';
        case RequestStatus.OK: return 'OK';
        case RequestStatus.Created: return 'Created';
        case RequestStatus.Accepted: return 'Accepted';
        case RequestStatus.NonAuthoritativeInformation: return 'Non-Authoritative Information';
        case RequestStatus.NoContent: return 'No Content';
        case RequestStatus.ResetContent: return 'Reset Content';
        case RequestStatus.PartialContent: return 'Partial Content';
        case RequestStatus.MultiStatus: return 'Multi Status';
        case RequestStatus.AlreadyReported: return 'Already Reported';
        case RequestStatus.IMUsed: return 'IM Used';
        case RequestStatus.MultipleChoices: return 'Multiple Choices';
        case RequestStatus.MovedPermanently: return 'Moved Permanently';
        case RequestStatus.Found: return 'Found';
        case RequestStatus.SeeOther: return 'See Other';
        case RequestStatus.NotModified: return 'Not Modified';
        case RequestStatus.TemporaryRedirect: return 'Temporary Redirect';
        case RequestStatus.PermanentRedirect: return 'Permanent Redirect';
        case RequestStatus.BadRequest: return 'Bad Request';
        case RequestStatus.Unauthorized: return 'Unauthorized';
        case RequestStatus.PaymentRequired: return 'Payment Required';
        case RequestStatus.Forbidden: return 'Forbidden';
        case RequestStatus.NotFound: return 'Not Found';
        case RequestStatus.MethodNotAllowed: return 'Method Not Allowed';
        case RequestStatus.NotAcceptable: return 'Not Acceptable';
        case RequestStatus.ProxyAuthenticationRequired: return 'Proxy Authentication Required';
        case RequestStatus.RequestTimeout: return 'Request Timeout';
        case RequestStatus.Conflict: return 'Conflict';
        case RequestStatus.Gone: return 'Gone';
        case RequestStatus.LengthRequired: return 'Length Required';
        case RequestStatus.PreconditionFailed: return 'Precondition Failed';
        case RequestStatus.PayloadTooLarge: return 'Payload Too Large';
        case RequestStatus.URITooLong: return 'URI Too Long';
        case RequestStatus.UnsupportedMediaType: return 'Unsupported Media Type';
        case RequestStatus.RequestedRangeNotSatisfiable: return 'Requested Range Not Satisfiable';
        case RequestStatus.ExpectationFailed: return 'Expectation Failed';
        case RequestStatus.IAmATeapot: return 'I Am a Teapot';
        case RequestStatus.UnprocessableEntity: return 'Unprocessable Entity';
        case RequestStatus.Locked: return 'Locked';
        case RequestStatus.FailedDependency: return 'Failed Dependency';
        case RequestStatus.TooEarly: return 'Too Early';
        case RequestStatus.UpgradeRequired: return 'Upgrade Required';
        case RequestStatus.PreconditionRequired: return 'Precondition Required';
        case RequestStatus.TooManyRequests: return 'Too Many Requests';
        case RequestStatus.RequestHeaderFieldsTooLarge: return 'Request Header Fields Too Large';
        case RequestStatus.UnavailableForLegalReasons: return 'Unavailable For Legal Reasons';
        case RequestStatus.InternalServerError: return 'Internal Server Error';
        case RequestStatus.NotImplemented: return 'Not Implemented';
        case RequestStatus.BadGateway: return 'Bad Gateway';
        case RequestStatus.ServiceUnavailable: return 'Service Unavailable';
        case RequestStatus.GatewayTimeout: return 'Gateway Timeout';
        case RequestStatus.HttpVersionNotSupported: return 'Http Version Not Supported';
        case RequestStatus.VariantAlsoNegotiates: return 'Variant Also Negotiates';
        case RequestStatus.InsufficientStorage: return 'Insufficient Storage';
        case RequestStatus.LoopDetected: return 'Loop Detected';
        case RequestStatus.BandwidthLimitExceeded: return 'Bandwidth Limit Exceeded';
        case RequestStatus.NotExtended: return 'Not Extended';
        case RequestStatus.NetworkAuthenticationRequired: return 'Network Authentication Required';
        default:
            if (value < 400)
                return 'HTTP Status';
            return 'HTTP Error';
    }
}
var RequestStatus$1 = RequestStatus;

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var RequestType;
(function (RequestType) {
    RequestType["ERROR"] = "error";
})(RequestType || (RequestType = {}));
var RequestType$1 = RequestType;

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
class RequestError extends Error {
    status;
    method;
    url;
    body;
    __proto__;
    constructor(status, message = undefined, method = undefined, url = undefined, body = undefined) {
        super(message ? message : stringifyRequestStatus(status));
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(this, actualProto);
        }
        else {
            this.__proto__ = actualProto;
        }
        this.status = status;
        this.method = method;
        this.url = url;
        this.body = body;
    }
    valueOf() {
        return this.status;
    }
    toString() {
        return `${this.status} ${this.message}`;
    }
    toJSON() {
        return {
            type: RequestType$1.ERROR,
            status: this.status,
            message: this.message
        };
    }
    getStatusCode() {
        return this.status;
    }
    getMethod() {
        return this.method;
    }
    getUrl() {
        return this.url;
    }
    getBody() {
        return this.body;
    }
}
function createRequestError(status, message = undefined) {
    return new RequestError(status, message);
}
function isRequestError(value) {
    return (!!value
        && value instanceof RequestError);
}

const FsPromises = REQUEST_CLIENT_NODE_ENABLED ? require("fs").promises : undefined;
const LOG$b = LogService.createLogger('NodeRequestClient');
class NodeRequestClient {
    static setLogLevel(level) {
        LOG$b.setLogLevel(level);
    }
    _http;
    _https;
    constructor(http, https) {
        this._http = http;
        this._https = https;
    }
    async jsonRequest(method, url, headers, data) {
        switch (method) {
            case RequestMethod$1.GET: return await this._getJson(url, headers, data);
            case RequestMethod$1.POST: return await this._postJson(url, headers, data);
            case RequestMethod$1.PATCH: return await this._patchJson(url, headers, data);
            case RequestMethod$1.PUT: return await this._putJson(url, headers, data);
            case RequestMethod$1.DELETE: return await this._deleteJson(url, headers, data);
            default: throw new TypeError(`[Node]RequestClient: Unsupported method: ${method}`);
        }
    }
    /**
     * If the result is true, this is a socket file.
     * If the result is false, you cannot find socket from the parent file.
     * If the result is undefined, you may search parent paths.
     *
     * @param path
     * @private
     */
    async _checkSocketFile(path) {
        try {
            // LOG.debug('_checkSocketFile: path =', path);
            const stat = await FsPromises.stat(path);
            // LOG.debug('_checkSocketFile: stat =', stat);
            if (stat.isSocket())
                return true;
            // if ( stat.isFile()      ) return false;
            // if ( stat.isDirectory() ) return false;
            return false;
        }
        catch (err) {
            const code = err?.code;
            if (code === 'ENOTDIR') {
                LOG$b.debug('_checkSocketFile: ENOTDIR: ', err);
                return undefined;
            }
            if (code === 'ENOENT') {
                LOG$b.debug('_checkSocketFile: ENOENT: ', err);
                return undefined;
            }
            LOG$b.error(`_checkSocketFile: Error "${code}" passed on: `, err);
            throw err;
        }
    }
    async _findSocketFile(fullPath) {
        // LOG.debug('_findSocketFile: fullPath: ', fullPath);
        let socketExists = await this._checkSocketFile(fullPath);
        // LOG.debug('_findSocketFile: socketExists: ', socketExists);
        if (socketExists === true)
            return fullPath;
        if (socketExists === false)
            return undefined;
        const parentPath = PATH__default["default"].dirname(fullPath);
        // LOG.debug('_findSocketFile: parentPath: ', parentPath);
        if (parentPath === "/" || parentPath === fullPath) {
            return undefined;
        }
        return await this._findSocketFile(parentPath);
    }
    async _httpRequest(url, options, body) {
        // LOG.debug('_httpRequest: url, options, body = ', url, options, body);
        const bodyString = body ? JSON.stringify(body) + '\n' : undefined;
        const urlParsed = new URL__default["default"].URL(url);
        // LOG.debug('urlParsed = ', urlParsed);
        let httpModule;
        const protocol = urlParsed?.protocol ?? '';
        if (protocol === 'unix:' || protocol === 'socket:') {
            const fullSocketPath = urlParsed?.pathname ? urlParsed?.pathname : '/';
            if (fullSocketPath === '/') {
                throw new TypeError(`No socket path found for unix protocol URL: ${url}`);
            }
            // LOG.debug('_httpRequest: fullSocketPath: ', fullSocketPath);
            const realSocketPath = await this._findSocketFile(fullSocketPath);
            if (!realSocketPath) {
                throw new TypeError(`No socket path found for unix protocol URL: ${url}`);
            }
            const socketSuffix = realSocketPath.length < fullSocketPath.length ? fullSocketPath.substr(realSocketPath.length) : '';
            const path = `${socketSuffix}${urlParsed.search !== '?' ? urlParsed.search : ''}`;
            // LOG.debug('Using unix socket: ', realSocketPath, path, urlParsed);
            options = {
                ...options,
                socketPath: realSocketPath,
                path
            };
            url = '';
            httpModule = this._http;
        }
        else if (protocol === 'https:') {
            httpModule = this._https;
        }
        else {
            httpModule = this._http;
        }
        // LOG.debug('Calling inside a promise...');
        return await new Promise((resolve, reject) => {
            let resolved = false;
            try {
                if (!httpModule) {
                    throw new Error('HTTP module not defined. This error should not happen.');
                }
                const callback = (res) => {
                    if (resolved) {
                        LOG$b.warn('Warning! Request had already ended when the response was received.');
                    }
                    else {
                        resolved = true;
                        resolve(res);
                    }
                };
                let req;
                if (url) {
                    options = {
                        ...options,
                        hostname: urlParsed.hostname,
                        port: (urlParsed?.port ? parseInt(urlParsed.port, 10) : undefined) ?? (protocol === "https:" ? 443 : 80),
                        path: urlParsed.pathname + urlParsed.search
                    };
                    // LOG.debug(`Requesting "${url}" with options:`, options);
                }
                else {
                    // LOG.debug('Requesting with options ', options);
                }
                req = httpModule.request(options, callback);
                req.on('error', err => {
                    if (resolved) {
                        LOG$b.warn('Warning! Request had already ended when the response was received.');
                        LOG$b.debug('Error from event: ', err);
                    }
                    else {
                        LOG$b.debug('Passing on error from event: ', err);
                        resolved = true;
                        reject(err);
                    }
                });
                if (bodyString) {
                    // LOG.debug('_request: writing bodyString = ', bodyString);
                    req.write(bodyString);
                }
                else {
                    // LOG.debug('_request: no body');
                }
                req.end();
            }
            catch (err) {
                if (resolved) {
                    LOG$b.warn('Warning! Request had already ended when the response was received.');
                    LOG$b.debug('Exception: ', err);
                }
                else {
                    LOG$b.debug('Passing on error: ', err);
                    resolved = true;
                    reject(err);
                }
            }
        });
    }
    async _request(method, url, options, body) {
        // LOG.debug('_request: url, options, body = ', url, options, body);
        const response = await this._httpRequest(url, options, body);
        // LOG.debug('Reading response for request...');
        const result = await NodeHttpUtils.getRequestDataAsJson(response);
        // LOG.debug('Received: ', result);
        const statusCode = response?.statusCode ?? 0;
        // LOG.debug('_request: statusCode = ', statusCode);
        const myResponse = {
            method: method,
            url,
            statusCode,
            headers: response.headers,
            body: result
        };
        // LOG.debug('_request: myResponse = ', myResponse);
        return myResponse;
    }
    async _getJson(url, headers, data) {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        };
        if (headers) {
            options.headers = {
                ...options.headers,
                ...headers
            };
        }
        return await this._request(RequestMethod$1.GET, url, options, data).then(NodeRequestClient._successResponse);
    }
    async _putJson(url, headers, data) {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        };
        if (headers) {
            options.headers = {
                ...options.headers,
                ...headers
            };
        }
        return await this._request(RequestMethod$1.PUT, url, options, data).then(NodeRequestClient._successResponse);
    }
    async _postJson(url, headers, data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        };
        if (headers) {
            options.headers = {
                ...options.headers,
                ...headers
            };
        }
        return await this._request(RequestMethod$1.POST, url, options, data).then(NodeRequestClient._successResponse);
    }
    async _patchJson(url, headers, data) {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            }
        };
        if (headers) {
            options.headers = {
                ...options.headers,
                ...headers
            };
        }
        return await this._request(RequestMethod$1.PATCH, url, options, data).then(NodeRequestClient._successResponse);
    }
    async _deleteJson(url, headers, data) {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        };
        if (headers) {
            options.headers = {
                ...options.headers,
                ...headers
            };
        }
        return await this._request(RequestMethod$1.DELETE, url, options, data).then(NodeRequestClient._successResponse);
    }
    static async _successResponse(response) {
        const statusCode = response?.statusCode;
        if (statusCode < 200 || statusCode >= 400) {
            LOG$b.error(`Unsuccessful response with status ${statusCode}: `, response);
            throw new RequestError(statusCode, `Error ${statusCode} for ${stringifyRequestMethod(response.method)} ${response.url}`, response.method, response.url, response.body);
        }
        //LOG.debug(`Successful response with status ${statusCode}: `, response);
        return response.body;
    }
}

class FetchRequestClient {
    _fetch;
    constructor(fetch) {
        this._fetch = fetch;
    }
    jsonRequest(method, url, headers, data) {
        switch (method) {
            case RequestMethod$1.GET: return this._getJson(url, headers, data);
            case RequestMethod$1.POST: return this._postJson(url, headers, data);
            case RequestMethod$1.PUT: return this._putJson(url, headers, data);
            case RequestMethod$1.DELETE: return this._deleteJson(url, headers, data);
            default: throw new TypeError(`[Fetch]RequestClient: Unsupported method: ${method}`);
        }
    }
    _getJson(url, headers, data) {
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        };
        if (headers) {
            options.headers = {
                ...options.headers,
                ...headers
            };
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        return this._fetch(url, options).then(response => FetchRequestClient._successResponse(response, RequestMethod$1.GET));
    }
    _putJson(url, headers, data) {
        const options = {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        };
        if (headers) {
            options.headers = {
                ...options.headers,
                ...headers
            };
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        return this._fetch(url, options).then(response => FetchRequestClient._successResponse(response, RequestMethod$1.PUT));
    }
    _postJson(url, headers, data) {
        const options = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        };
        if (headers) {
            options.headers = {
                ...options.headers,
                ...headers
            };
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        return this._fetch(url, options).then(response => FetchRequestClient._successResponse(response, RequestMethod$1.POST));
    }
    _deleteJson(url, headers, data) {
        const options = {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'same-origin'
        };
        if (headers) {
            options.headers = {
                ...options.headers,
                ...headers
            };
        }
        if (data) {
            options.body = JSON.stringify(data);
        }
        return this._fetch(url, options).then(response => FetchRequestClient._successResponse(response, RequestMethod$1.DELETE));
    }
    static _successResponse(response, method) {
        const statusCode = response.status;
        if (!response.ok || (statusCode < 200 || statusCode >= 400)) {
            const url = response.url;
            const message = `${statusCode} ${response.statusText} for ${stringifyRequestMethod(method)} ${url}`;
            //LOG.error(`Unsuccessful response with status ${statusCode}: `, response);
            return response.json().then(body => {
                throw new RequestError(statusCode, message, method, url, body);
            });
        }
        return response.json();
    }
}

const HTTP = REQUEST_CLIENT_NODE_ENABLED ? require('http') : undefined;
const HTTPS = REQUEST_CLIENT_NODE_ENABLED ? require('https') : undefined;
const LOG$a = LogService.createLogger('RequestClient');
class RequestClient {
    static setLogLevel(level) {
        LOG$a.setLogLevel(level);
        NodeRequestClient.setLogLevel(level);
    }
    static _client = RequestClient._initClient();
    static async jsonRequest(method, url, headers, data) {
        return await this._client.jsonRequest(method, url, headers, data);
    }
    static async getJson(url, headers) {
        // LOG.debug('.getJson: ', url, headers);
        return await this._client.jsonRequest(RequestMethod$1.GET, url, headers);
    }
    static async postJson(url, data, headers) {
        LOG$a.debug('.postJson: ', url, data, headers);
        return await this._client.jsonRequest(RequestMethod$1.POST, url, headers, data);
    }
    static async patchJson(url, data, headers) {
        LOG$a.debug('.patchJson: ', url, data, headers);
        return await this._client.jsonRequest(RequestMethod$1.PATCH, url, headers, data);
    }
    static async putJson(url, data, headers) {
        LOG$a.debug('.putJson: ', url, data, headers);
        return await this._client.jsonRequest(RequestMethod$1.PUT, url, headers, data);
    }
    static async deleteJson(url, headers, data) {
        LOG$a.debug('.deleteJson: ', url, data, headers);
        return await this._client.jsonRequest(RequestMethod$1.DELETE, url, headers, data);
    }
    static _initClient() {
        if (REQUEST_CLIENT_FETCH_ENABLED) {
            LOG$a.debug('Detected browser environment');
            return new FetchRequestClient(window.fetch.bind(window));
        }
        if (REQUEST_CLIENT_NODE_ENABLED) {
            // Could not control this with LOG_LEVEL on rolluped content
            // LOG.debug('Detected NodeJS environment');
            return new NodeRequestClient(HTTP, HTTPS);
        }
        throw new TypeError(`Could not detect request client implementation`);
    }
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
const LOG$9 = LogService.createLogger('HttpService');
const DEFAULT_HOSTNAME = undefined;
const DEFAULT_PORT = 3000;
class HttpServerService {
    _requestHandler;
    _hostname;
    _port;
    _closeCallback;
    _listenCallback;
    _server;
    _handler;
    /**
     *
     * @param port
     * @param hostname
     * @param handler
     * @fixme Convert to use a configuration string instead of port + hostname, so that also sockets, etc can be supported.
     */
    constructor(port = DEFAULT_PORT, hostname = DEFAULT_HOSTNAME, handler = undefined) {
        LOG$9.debug('new: ', hostname, port, handler);
        this._requestHandler = this._onRequest.bind(this);
        this._listenCallback = this._onListen.bind(this);
        this._closeCallback = this._onClose.bind(this);
        this._hostname = hostname;
        this._port = port;
        this._handler = handler;
        this._server = HTTP__default["default"].createServer(this._requestHandler);
    }
    start() {
        LOG$9.debug(`Starting server at ${this._getConnectionString()}`);
        if (this._hostname === undefined) {
            this._server.listen(this._port, this._listenCallback);
        }
        else {
            this._server.listen(this._port, this._hostname, this._listenCallback);
        }
    }
    stop() {
        LOG$9.debug(`Closing server at ${this._getConnectionString()}`);
        this._server.close(this._closeCallback);
    }
    setHandler(newHandler) {
        LOG$9.debug(this._hostname, this._port, ': Changing handler as: ', newHandler, ' was ', this._handler);
        this._handler = newHandler;
    }
    _getConnectionString() {
        if (this._hostname === undefined) {
            return `http://${this._port}`;
        }
        else {
            return `http://${this._hostname}:${this._port}`;
        }
    }
    async _callRequestHandler(req, res) {
        if (this._handler !== undefined) {
            try {
                await this._handler(req, res);
            }
            catch (e) {
                LOG$9.error(`"${req.method} ${req.url}": Response handler had an error: `, e);
            }
            if (!res.writableEnded) {
                LOG$9.warn(`"${req.method} ${req.url}": Warning! Request handler did not close the response.`);
                res.end();
            }
        }
        else {
            LOG$9.error(`"${req.method} ${req.url}": No handler configured"`);
            res.end('Error');
        }
    }
    _onRequest(req, res) {
        this._callRequestHandler(req, res).catch(err => {
            LOG$9.error('Request has an error: ', err);
        });
    }
    _onListen() {
        LOG$9.info(`Server started at ${this._getConnectionString()}`);
    }
    _onClose() {
        LOG$9.debug(`Closed server at ${this._getConnectionString()}`);
    }
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
class RequestInterfaceUtils {
    static isObject(value) {
        return isObject(value);
    }
    static hasPropertyMethods(value) {
        return has_1(value, 'methods');
    }
    static hasPropertyControllerProperties(value) {
        return has_1(value, 'controllerProperties');
    }
    static hasPropertyPaths(value) {
        return has_1(value, 'paths');
    }
    static hasPropertyParams(value) {
        return has_1(value, 'params');
    }
    static hasPropertyMappings(value) {
        return has_1(value, 'mappings');
    }
    static hasPropertyController(value) {
        return has_1(value, 'controller');
    }
    static hasPropertyQueryParam(value) {
        return has_1(value, 'queryParam');
    }
    static hasPropertyType(value) {
        return has_1(value, 'type');
    }
    static hasProperty__requestMappings(value) {
        return has_1(value, '__requestMappings');
    }
    static hasPropertyStatus(value) {
        return has_1(value, 'status');
    }
    static hasPropertyMessage(value) {
        return has_1(value, 'message');
    }
    static createOrFunction(...values) {
        return (item) => {
            return some(values, (item2) => {
                if (isFunction_1(item2))
                    return item2(item);
                return item === item2;
            });
        };
    }
    static everyPropertyIs(value, test) {
        return every(map_1(keys(value), (key) => value[key]), test);
    }
    static explainEveryPropertyIs(value, test, explain) {
        return filter_1(map_1(map_1(keys(value), (key) => value[key]), (item, index) => {
            if (!test(item)) {
                return `#${index}: ${explain(item)}`;
            }
            else {
                return "";
            }
        }), item => !!item);
    }
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
function isRequestMappingObject(value) {
    return (RequestInterfaceUtils.isObject(value)
        && RequestInterfaceUtils.hasPropertyMethods(value) && isArray(value.methods) && every(value.methods, isRequestMethod)
        && RequestInterfaceUtils.hasPropertyPaths(value) && isArray(value.paths) && every(value.paths, isString));
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var RequestParamValueType;
(function (RequestParamValueType) {
    RequestParamValueType[RequestParamValueType["JSON"] = 0] = "JSON";
    RequestParamValueType[RequestParamValueType["STRING"] = 1] = "STRING";
    RequestParamValueType[RequestParamValueType["INTEGER"] = 2] = "INTEGER";
    RequestParamValueType[RequestParamValueType["NUMBER"] = 3] = "NUMBER";
})(RequestParamValueType || (RequestParamValueType = {}));
function isRequestParamValueType(value) {
    if (!isNumber(value))
        return false;
    switch (value) {
        case RequestParamValueType.JSON:
        case RequestParamValueType.STRING:
        case RequestParamValueType.INTEGER:
        case RequestParamValueType.NUMBER:
            return true;
    }
    return false;
}
var RequestParamValueType$1 = RequestParamValueType;

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
var RequestParamObjectType;
(function (RequestParamObjectType) {
    RequestParamObjectType[RequestParamObjectType["REQUEST_BODY"] = 0] = "REQUEST_BODY";
    RequestParamObjectType[RequestParamObjectType["QUERY_PARAM"] = 1] = "QUERY_PARAM";
    RequestParamObjectType[RequestParamObjectType["REQUEST_HEADER"] = 2] = "REQUEST_HEADER";
    RequestParamObjectType[RequestParamObjectType["REQUEST_HEADER_MAP"] = 3] = "REQUEST_HEADER_MAP";
    RequestParamObjectType[RequestParamObjectType["PATH_VARIABLE"] = 4] = "PATH_VARIABLE";
    RequestParamObjectType[RequestParamObjectType["PATH_VARIABLE_MAP"] = 5] = "PATH_VARIABLE_MAP";
    RequestParamObjectType[RequestParamObjectType["MODEL_ATTRIBUTE"] = 6] = "MODEL_ATTRIBUTE";
})(RequestParamObjectType || (RequestParamObjectType = {}));
var RequestParamObjectType$1 = RequestParamObjectType;

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
function isRequestQueryParamObject(value) {
    return (!!value
        && value?.objectType === RequestParamObjectType$1.QUERY_PARAM
        && isString(value?.queryParam)
        && isRequestParamValueType(value?.valueType));
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
function isRequestBodyParamObject(value) {
    return (!!value
        && value?.objectType === RequestParamObjectType$1.REQUEST_BODY
        && isRequestParamValueType(value?.valueType));
}

function isRequestHeaderParamObject(value) {
    return (!!value
        && value?.objectType === RequestParamObjectType$1.REQUEST_HEADER
        && isString(value?.headerName)
        && isBoolean_1(value?.isRequired)
        && isRequestParamValueType(value?.valueType)
        && (value?.defaultValue === undefined || isString(value?.defaultValue)));
}

function isDefaultHeaderMapValuesType(value) {
    return (!!value
        && isObject(value)
        && RequestInterfaceUtils.everyPropertyIs(value, (item) => {
            return (isString(item)
                || (isArray(item) && every(item, isString)));
        }));
}

function isRequestHeaderMapParamObject(value) {
    return (!!value
        && value?.objectType === RequestParamObjectType$1.REQUEST_HEADER_MAP
        && (value?.defaultValues === undefined || isDefaultHeaderMapValuesType(value?.defaultValues)));
}

function isRequestPathVariableParamObject(value) {
    return (!!value
        && value?.objectType === RequestParamObjectType$1.PATH_VARIABLE
        && isString(value?.variableName)
        && isBoolean_1(value?.isRequired)
        && isRequestParamValueType(value?.valueType)
        && (value?.defaultValue === undefined || isString(value?.defaultValue)));
}

function isDefaultPathVariableMapValuesType(value) {
    return (!!value
        && isObject(value)
        && RequestInterfaceUtils.everyPropertyIs(value, isString));
}

function isRequestPathVariableMapParamObject(value) {
    return (!!value
        && value?.objectType === RequestParamObjectType$1.PATH_VARIABLE_MAP
        && (value?.defaultValues === undefined || isDefaultPathVariableMapValuesType(value?.defaultValues)));
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
function isRequestModelAttributeParamObject(value) {
    return (!!value
        && value?.objectType === RequestParamObjectType$1.MODEL_ATTRIBUTE
        && isString(value?.attributeName)
        && isRequestParamValueType(value?.valueType));
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
function isRequestParamObject(value) {
    return (isRequestQueryParamObject(value)
        || isRequestBodyParamObject(value)
        || isRequestHeaderParamObject(value)
        || isRequestHeaderMapParamObject(value)
        || isRequestPathVariableParamObject(value)
        || isRequestPathVariableMapParamObject(value)
        || isRequestModelAttributeParamObject(value));
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
function isRequestControllerMethodObject(value) {
    return (RequestInterfaceUtils.isObject(value)
        && RequestInterfaceUtils.hasPropertyMappings(value) && isArray(value.mappings) && every(value.mappings, isRequestMappingObject)
        && RequestInterfaceUtils.hasPropertyParams(value) && isArray(value.params) && every(value.params, RequestInterfaceUtils.createOrFunction(isRequestParamObject, isNull_1)));
}
function explainRequestControllerMethodObject(value) {
    if (!RequestInterfaceUtils.isObject(value))
        return "Value is not object";
    if (!RequestInterfaceUtils.hasPropertyMappings(value)) {
        return `Property "mappings" did not exist`;
    }
    if (!isArray(value.mappings)) {
        return `Property "mappings" was not an array`;
    }
    if (!every(value.mappings, isRequestMappingObject)) {
        return `Property "mappings" had some elements which were not RequestMappingObject`;
    }
    if (!RequestInterfaceUtils.hasPropertyParams(value)) {
        return `Property "params" did not exist`;
    }
    if (!isArray(value.params)) {
        return `Property "params" was not an array`;
    }
    const test = RequestInterfaceUtils.createOrFunction(isRequestParamObject, isNull_1);
    if (!every(value.params, test)) {
        return `Property "params" had some elements which were not RequestParamObject or null: ${filter_1(map_1(value.params, (item, index) => {
            if (!test(item)) {
                return `Item #${index} was not null or RequestParamObject`;
            }
            return "";
        }), item => !!item).join(', ')}`;
    }
    return "ok";
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
function isRequestControllerMappingObject(value) {
    return (RequestInterfaceUtils.isObject(value)
        && RequestInterfaceUtils.hasPropertyMappings(value) && isArray(value.mappings) && every(value.mappings, isRequestMappingObject)
        && RequestInterfaceUtils.hasPropertyControllerProperties(value) && isObject(value.controllerProperties) && RequestInterfaceUtils.everyPropertyIs(value.controllerProperties, isRequestControllerMethodObject));
}
function explainRequestControllerMappingObject(value) {
    if (!RequestInterfaceUtils.isObject(value))
        return "not object";
    if (!RequestInterfaceUtils.hasPropertyMappings(value)) {
        return `Property "mappings" was not valid: Did not exist`;
    }
    if (!isArray(value.mappings)) {
        return `Property "mappings" was not valid: Was not array`;
    }
    if (!every(value.mappings, isRequestMappingObject)) {
        return `Property "mappings" was not valid: Some items were not valid`;
    }
    if (!RequestInterfaceUtils.hasPropertyControllerProperties(value)) {
        return `Property "controllerProperties" was not valid: Property did not exist`;
    }
    if (!isObject(value.controllerProperties)) {
        return `Property "controllerProperties" was not valid: Property was not object`;
    }
    if (!RequestInterfaceUtils.everyPropertyIs(value.controllerProperties, isRequestControllerMethodObject)) {
        return `Property "controllerProperties" was not valid: Some properties were not valid: ${RequestInterfaceUtils.explainEveryPropertyIs(value.controllerProperties, isRequestControllerMethodObject, explainRequestControllerMethodObject)}`;
    }
    return "ok";
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
const LOG$8 = LogService.createLogger('RequestController');
const INTERNAL_KEYWORD = '__requestMappings';
function isRequestController(value) {
    if (!value)
        return false;
    const hasInternalValue = RequestInterfaceUtils.hasProperty__requestMappings(value);
    if (!hasInternalValue)
        return true;
    const internalValue = value[INTERNAL_KEYWORD];
    if (isRequestControllerMappingObject(internalValue)) {
        return true;
    }
    LOG$8.warn('The internal mapping object was not correct: ' + JSON.stringify(internalValue, null, 2) + ': ' + explainRequestControllerMappingObject(internalValue));
    return false;
}
function getInternalRequestMappingObject(value, controllerInstance) {
    if (!RequestInterfaceUtils.hasProperty__requestMappings(value)) {
        return undefined;
    }
    return {
        ...value[INTERNAL_KEYWORD],
        controller: controllerInstance
    };
}
function hasInternalRequestMappingObject(value) {
    return RequestInterfaceUtils.hasProperty__requestMappings(value);
}

// Copyright (c) 2020 Sendanor. All rights reserved.
function isFlatJsonValue(value) {
    return isString(value) || isNumber(value) || isBoolean_1(value) || isNull_1(value);
}
function isReadonlyJsonAny(value) {
    return isFlatJsonValue(value) || isReadonlyJsonArray(value) || isReadonlyJsonObject(value);
}
function isReadonlyJsonObject(value) {
    return isRegularObject(value) && everyProperty(value, isString, createOr(isReadonlyJsonAny, isUndefined));
}
function isReadonlyJsonArray(value) {
    return isArrayOf(value, createOr(isReadonlyJsonAny, isUndefined));
}

const LOG$7 = LogService.createLogger('Headers');
class Headers {
    static setLogLevel(level) {
        LOG$7.setLogLevel(level);
    }
    _value;
    _uninitializedValue;
    constructor(value) {
        this._value = undefined;
        this._uninitializedValue = value;
    }
    _initializeValue() {
        const value = this._value;
        const uninitializedValue = this._uninitializedValue;
        try {
            if (uninitializedValue) {
                this._uninitializedValue = undefined;
                this.addAll(uninitializedValue);
            }
        }
        catch (err) {
            this._value = value;
            this._uninitializedValue = uninitializedValue;
            throw err;
        }
    }
    clear() {
        this._value = {};
        this._uninitializedValue = undefined;
    }
    add(headerName, headerValue) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        LOG$7.debug('add header: ', headerName, headerValue);
        headerName = headerName.toLowerCase();
        const originalHeader = this._value && has_1(this._value, headerName) ? this._value[headerName] : undefined;
        if (this._value === undefined) {
            this._value = {
                [headerName]: headerValue
            };
        }
        else if (originalHeader !== undefined) {
            if (isReadonlyJsonArray(originalHeader)) {
                this._value = {
                    ...this._value,
                    [headerName]: concat_1([], originalHeader, [headerValue])
                };
            }
            else {
                this._value = {
                    ...this._value,
                    [headerName]: [originalHeader, headerValue]
                };
            }
        }
        else {
            this._value = {
                ...this._value,
                [headerName]: headerValue
            };
        }
    }
    containsKey(headerName) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        headerName = headerName.toLowerCase();
        return has_1(this._value, headerName);
    }
    isEmpty() {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        const headersObject = this._value;
        return !headersObject || keys(headersObject).length === 0;
    }
    keySet() {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        const set = new Set();
        if (this._value !== undefined) {
            const list = keys(this._value);
            forEach_1(list, (key) => {
                set.add(key);
            });
        }
        return set;
    }
    getValue(headerName) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        if (!this._value)
            return undefined;
        headerName = headerName.toLowerCase();
        return has_1(this._value, headerName) ? this._value[headerName] : undefined;
    }
    getFirst(headerName) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        const value = this.getValue(headerName);
        if (isReadonlyJsonArray(value)) {
            return value.length ? value[0] : undefined;
        }
        return value;
    }
    getHost() {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        return this.getFirst('host');
    }
    addAll(arg1, arg2) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        if (isString(arg1)) {
            const headerKey = arg1;
            const headerValues = arg2;
            if (!isArray(headerValues))
                throw new TypeError('Headers.addAll signature must be (string, string[]) or (HeadersObject)');
            forEach_1(headerValues, (item) => {
                this.add(headerKey, item);
            });
        }
        else {
            const values = arg1;
            forEach_1(keys(values), (headerKey) => {
                const headerValue = values[headerKey];
                if (isReadonlyJsonArray(headerValue)) {
                    forEach_1(headerValue, (item) => {
                        this.add(headerKey, item);
                    });
                }
                else if (headerValue !== undefined) {
                    this.add(headerKey, headerValue);
                }
            });
        }
    }
    remove(headerName) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        headerName = headerName.toLowerCase();
        const originalValue = this.getValue(headerName);
        const newValues = { ...this._value };
        if (newValues && has_1(newValues, headerName)) {
            delete newValues[headerName];
        }
        this._value = newValues;
        return originalValue;
    }
    set(headerName, headerValue) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        headerName = headerName.toLowerCase();
        if (this._value === undefined) {
            this._value = {
                [headerName]: headerValue
            };
        }
        else {
            this._value = {
                ...this._value,
                [headerName]: headerValue
            };
        }
    }
    setAll(values) {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        forEach_1(keys(values), (headerKey) => {
            this.set(headerKey, values[headerKey]);
        });
    }
    valueOf() {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        return this._value ?? undefined;
    }
    toString() {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        const headersObject = this._value;
        if (!headersObject || this.isEmpty())
            return 'Headers()';
        const headerKeys = keys(headersObject);
        const items = map_1(headerKeys, (headerKey) => {
            const headerValue = headersObject[headerKey];
            if (!headerValue)
                return `${headerKey}`;
            if (isArray(headerValue))
                return `${headerKey}: ${headerValue.map((item) => {
                    if (headerValue.indexOf(';') >= 0 || headerValue.indexOf(',') >= 0) {
                        return `"${headerValue}"`;
                    }
                    return headerValue;
                }).join(', ')}`;
            if (headerValue.indexOf(';') >= 0) {
                return `${headerKey}: "${headerValue}"`;
            }
            return `${headerKey}: ${headerValue}`;
        });
        return `Headers(${items.join('; ')})`;
    }
    clone() {
        if (this._uninitializedValue) {
            this._initializeValue();
        }
        return new Headers(this._value ? {
            ...this._value
        } : undefined);
    }
}
function isHeaders(value) {
    return (!!value
        && value instanceof Headers);
}

const ACCEPTED_KEYWORD_CHARACTERS = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890';
const ACCEPTED_START_KEYWORD_CHARACTERS = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._';
class StringUtils {
    /**
     * Converts arguments as a string.
     *
     * This is a helper function to make sure every value's string presentation is actually used.
     *
     * JavaScript uses .valueOf() in many instances instead of .toString().
     *
     * See also https://stackoverflow.com/a/2485794/901430
     *
     * @param values
     */
    static toString(...values) {
        return map_1(values, item => {
            if (isNull_1(item))
                return 'null';
            return `${item}`;
        }).join("");
    }
    /**
     * Convert any found variables in the input to corresponding values.
     *
     * The variable keyword may be a path to a variable inner in the `variables` structure.
     * Eg. when variables is `{"foo":{"bar":123}}`, the inner value `123` can be referenced using
     * `{variablePrefix}foo.bar{variableSuffix}` in the input.
     *
     * The input may be any JSON structure. Only string items will be processed. That means
     * keywords and scalar string values inside the structure.
     *
     * Returned structure is a partial (copy on write) version of the input structure.
     *
     */
    static processVariables(input, resolveVariable, variablePrefix, variableSuffix, defaultValue = undefined) {
        if (isReadonlyJsonArray(input)) {
            return map_1(input, (item) => StringUtils.processVariables(item, resolveVariable, variablePrefix, variableSuffix, defaultValue));
        }
        if (isReadonlyJsonObject(input)) {
            return reduce_1(keys(input), (obj, itemKey) => {
                const itemValue = input[itemKey];
                const parsedItemKey = `${StringUtils.processVariables(itemKey, resolveVariable, variablePrefix, variableSuffix, defaultValue)}`;
                obj[parsedItemKey] = StringUtils.processVariables(itemValue, resolveVariable, variablePrefix, variableSuffix, defaultValue);
                return obj;
            }, {});
        }
        if (isString(input)) {
            return StringUtils.processVariablesInString(input, resolveVariable, variablePrefix, variableSuffix, defaultValue);
        }
        return input;
    }
    /**
     *
     * @fixme This probably should be inside Pipeline code, not here, and configurable in processVariablesInString().
     * @param variableKey
     */
    static isValidKeyword(variableKey) {
        if (variableKey.length <= 0)
            return false;
        if (ACCEPTED_START_KEYWORD_CHARACTERS.includes(variableKey[0])) {
            return true;
        }
        return every(variableKey, (item) => ACCEPTED_KEYWORD_CHARACTERS.includes(item));
    }
    /**
     * Convert any found variables in the input to corresponding values.
     *
     * The variable keyword may be a path to a variable inner in the `variables` structure.
     * Eg. when variables is `{"foo":{"bar":123}}`, the inner value `123` can be referenced using
     * `{variablePrefix}foo.bar{variableSuffix}` in the input.
     *
     * Returns the string with any found variables converted.
     *
     */
    static processVariablesInString(input, resolveVariable, variablePrefix, variableSuffix, defaultValue = undefined) {
        if (input.length === 0)
            return '';
        let resolver;
        if (!isFunction_1(resolveVariable)) {
            resolver = (key) => get_1(resolveVariable, key, defaultValue);
        }
        else {
            resolver = resolveVariable;
        }
        // Special case which will support typed variables, when the full string is.
        if (startsWith_1(input, variablePrefix) && endsWith_1(input, variableSuffix)) {
            let variableKey = input.substr(variablePrefix.length, input.length - variablePrefix.length - variableSuffix.length);
            // Make sure we don't have multiple variables in the string
            if (variableKey.indexOf(variablePrefix) < 0) {
                variableKey = trim_1(variableKey);
                if (StringUtils.isValidKeyword(variableKey)) {
                    const resolvedValue = resolver(variableKey);
                    // LOG.debug(`Variable "${variableKey}" resolved as `, resolvedValue);
                    return resolvedValue;
                }
            }
        }
        let output = '';
        let index = 0;
        while ((index >= 0) && (index < input.length)) {
            const currentParsingStartIndex = index;
            index = input.indexOf(variablePrefix, currentParsingStartIndex);
            if (index < 0) {
                output += input.substr(currentParsingStartIndex);
                index = input.length;
            }
            else {
                const keyTokenStartIndex = index;
                const keyNameStartIndex = index + variablePrefix.length;
                const keyNameEndIndex = input.indexOf(variableSuffix, keyNameStartIndex);
                if (keyNameEndIndex < 0) {
                    throw new TypeError(`Parse error near "${input.substr(keyTokenStartIndex).substr(0, 20)}". End of variable not detected.`);
                }
                const keyTokenEndIndex = keyNameEndIndex + variableSuffix.length;
                const variableKey = trim_1(input.substr(keyNameStartIndex, keyNameEndIndex - keyNameStartIndex));
                if (!StringUtils.isValidKeyword(variableKey)) {
                    output += `${input.substr(currentParsingStartIndex, keyTokenEndIndex - currentParsingStartIndex)}`;
                    index = keyTokenEndIndex;
                }
                else {
                    const resolvedValue = resolver(variableKey);
                    // LOG.debug(`Variable "${variableKey}" at ${keyTokenStartIndex}-${keyTokenEndIndex} resolved as "${resolvedValue}": `, resolvedValue);
                    output += `${input.substr(currentParsingStartIndex, keyTokenStartIndex - currentParsingStartIndex)}${resolvedValue}`;
                    index = keyTokenEndIndex;
                }
            }
        }
        return output;
    }
}

function isEntityStatusType(value) {
    return isNumber(value);
}
class ResponseEntity {
    _status;
    _headers;
    _body;
    constructor(arg1, arg2, arg3) {
        let status;
        let headers;
        let body;
        if (isEntityStatusType(arg1) && !isEntityStatusType(arg2) && !isEntityStatusType(arg3)) {
            status = arg1;
            if (arg2 !== undefined)
                throw new TypeError('ResponseEntity signature is [body, ][headers, ]status');
            if (arg3 !== undefined)
                throw new TypeError('ResponseEntity signature is [body, ][headers, ]status');
        }
        else if (isEntityStatusType(arg2) && !isEntityStatusType(arg3)) {
            if (arg3 !== undefined)
                throw new TypeError('ResponseEntity signature is [body, ][headers, ]status');
            if (isHeaders(arg1)) {
                headers = arg1;
            }
            else {
                // @ts-ignore
                body = arg1;
            }
            status = arg2;
        }
        else if (isEntityStatusType(arg3)) {
            if (!isHeaders(arg2))
                throw new TypeError('ResponseEntity signature is [body, ][headers, ]status');
            // @ts-ignore
            body = arg1;
            headers = arg2;
            status = arg3;
        }
        else {
            throw new TypeError('ResponseEntity signature is [body, ][headers, ]status');
        }
        this._status = status;
        this._headers = headers ?? new Headers();
        this._body = body;
    }
    getStatusCode() {
        return this._status;
    }
    /**
     * In JavaScript, this is essentially same as .getStatusCode()
     */
    getStatusCodeValue() {
        return this._status;
    }
    status(value) {
        this._status = value;
        return this;
    }
    headers(value) {
        if (isHeaders(value)) {
            this._headers = value;
        }
        else {
            this._headers = new Headers(value);
        }
        return this;
    }
    body(value) {
        this._body = value;
        return this;
    }
    getHeaders() {
        return this._headers;
    }
    allow(...methods) {
        const parsedMethods = map_1(methods, parseRequestMethod);
        const stringMethods = map_1(parsedMethods, (item) => stringifyRequestMethod(item).toUpperCase());
        this._headers.set('Allow', stringMethods.join(', '));
        return this;
    }
    hasBody() {
        return this._body !== undefined;
    }
    getBody() {
        if (this._body === undefined)
            throw new TypeError('No body');
        return this._body;
    }
    toString() {
        const status = stringifyRequestStatus(this._status);
        const headersObject = this._headers;
        const headers = headersObject.isEmpty() ? '' : StringUtils.toString(headersObject);
        const body = this._body;
        if (body === undefined) {
            if (headers) {
                return `ResponseEntity(${status}, ${headers})`;
            }
            else {
                return `ResponseEntity(${status})`;
            }
        }
        let bodyDisplayValue = '';
        if (isReadonlyJsonAny(body)) {
            bodyDisplayValue = JSON.stringify(body, null, 2);
        }
        else {
            bodyDisplayValue = StringUtils.toString(body);
        }
        if (headers) {
            return `ResponseEntity(${status}, ${headers}, Body(${bodyDisplayValue}))`;
        }
        else {
            return `ResponseEntity(${status}, Body(${bodyDisplayValue}))`;
        }
    }
    static accepted() { return new ResponseEntity(RequestStatus$1.Accepted); }
    static badRequest() { return new ResponseEntity(RequestStatus$1.BadRequest); }
    static created(location) { return new ResponseEntity(new Headers({ "Location": location }), RequestStatus$1.Created); }
    static noContent() { return new ResponseEntity(RequestStatus$1.NoContent); }
    static notFound() { return new ResponseEntity(RequestStatus$1.NotFound); }
    static notImplemented() { return new ResponseEntity(RequestStatus$1.NotImplemented); }
    static internalServerError() { return new ResponseEntity(RequestStatus$1.InternalServerError); }
    static methodNotAllowed() { return new ResponseEntity(RequestStatus$1.MethodNotAllowed); }
    static unprocessableEntity() { return new ResponseEntity(RequestStatus$1.UnprocessableEntity); }
    static ok(body) { return body ? new ResponseEntity(body, RequestStatus$1.OK) : new ResponseEntity(RequestStatus$1.OK); }
}
function isResponseEntity(value) {
    return !!value && value instanceof ResponseEntity;
}

class ParamRoutes {
    _routes;
    constructor(routes) {
        const routePaths = keys(routes);
        const routeFunctions = map_1(routePaths, (itemKey) => {
            const itemValue = routes[itemKey];
            return ParamRoutes.createCallbackFunction(itemKey, itemValue);
        });
        this._routes = routeFunctions;
    }
    hasRoute(pathName) {
        return some(this._routes, (f) => {
            const [r] = f(pathName);
            return r !== undefined && r?.length >= 1;
        });
    }
    getRoute(pathName) {
        let lastResult = undefined;
        let lastParams = undefined;
        find_1(this._routes, (f) => {
            let [result, params] = f(pathName);
            if (result !== undefined) {
                lastResult = result;
                lastParams = params;
                return true;
            }
            return false;
        });
        if (lastResult !== undefined) {
            return [lastResult, lastParams];
        }
        else {
            return [undefined, undefined];
        }
    }
    static createCallbackFunction(itemKey, itemValue) {
        if (itemKey === '') {
            itemKey = '/';
        }
        const formatParts = itemKey.split('/');
        const formatPartsLen = formatParts.length;
        if (formatPartsLen === 0)
            throw new Error('Path format had no items. This should not happen.');
        const paramKeys = map_1(formatParts, (pathValue, pathIndex) => {
            if (pathValue.length >= 3 && pathValue[0] === '{' && pathValue[pathValue.length - 1] === '}') {
                return trim_1(pathValue.substr(1, pathValue.length - 2));
            }
            else {
                formatParts[pathIndex] = pathValue.toLowerCase();
                return null;
            }
        });
        const hasParamKeys = some(paramKeys, isString);
        if (!hasParamKeys) {
            const staticPath = itemKey.toLowerCase();
            return (requestPath) => {
                if (requestPath.toLowerCase() !== staticPath) {
                    return [undefined, undefined];
                }
                else {
                    return [itemValue, undefined];
                }
            };
        }
        return (requestPath) => {
            const requestParts = requestPath.split('/');
            const requestPartsLen = requestParts.length;
            // There should be at least one item always, since there should be at least one "/"
            if (requestPartsLen === 0) {
                return [undefined, undefined];
            }
            if (formatPartsLen !== requestPartsLen) {
                return [undefined, undefined];
            }
            let paramValues = {};
            if (every(paramKeys, (paramKey, paramIndex) => {
                if (isString(paramKey)) {
                    paramValues[paramKey] = requestParts[paramIndex];
                    return true;
                }
                else {
                    return formatParts[paramIndex] === requestParts[paramIndex].toLowerCase();
                }
            })) {
                return [itemValue, paramValues];
            }
            else {
                return [undefined, undefined];
            }
        };
    }
}

class StaticRoutes {
    _routes;
    constructor(routes) {
        const routePaths = keys(routes);
        const routePairs = map_1(routePaths, (itemKey) => {
            const itemValue = routes[itemKey];
            return [itemKey.toLowerCase(), itemValue];
        });
        this._routes = new Map(routePairs);
    }
    hasRoute(pathName) {
        return this._routes.has(pathName.toLowerCase());
    }
    getRoute(pathName) {
        const result = this._routes.get(pathName.toLowerCase());
        if (result !== undefined) {
            return [result, undefined];
        }
        return [undefined, undefined];
    }
}

class RouteUtils {
    static createRoutes(routes) {
        if (RouteUtils.routesHasParameter(routes)) {
            return new ParamRoutes(routes);
        }
        return new StaticRoutes(routes);
    }
    static pathHasParameter(value) {
        return value.split('/').some((item) => {
            return item.length >= 3 && item[0] === '{' && item[item.length - 1] === '}';
        });
    }
    static routesHasParameter(routes) {
        return some(keys(routes), RouteUtils.pathHasParameter);
    }
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
const LOG$6 = LogService.createLogger('RequestRouter');
class RequestRouter {
    static setLogLevel(level) {
        LOG$6.setLogLevel(level);
    }
    _controllers;
    _routes;
    _modelAttributeNames;
    _requestMappings;
    _initialized;
    constructor() {
        this._controllers = [];
        this._routes = undefined;
        this._requestMappings = undefined;
        this._modelAttributeNames = undefined;
        this._initialized = false;
    }
    attachController(controller) {
        this._controllers.push(controller);
        this._routes = undefined;
    }
    _initializeRequestMappings() {
        LOG$6.debug('Initializing request mappings.');
        if (!this._requestMappings) {
            this._requestMappings = this._getRequestMappings();
        }
    }
    _initializeRouter() {
        if (!this._initialized) {
            this._initialized = true;
            LOG$6.debug('Initializing...');
            this._initializeRequestMappings();
            this._initializeRoutes();
            this._initializeRequiredModelAttributeNames();
        }
    }
    _initializeRoutes() {
        LOG$6.debug('Initializing routes.');
        if (this._requestMappings?.length) {
            this._routes = RouteUtils.createRoutes(RequestRouter._parseMappingObject(this._requestMappings));
        }
        else {
            this._routes = RouteUtils.createRoutes({});
        }
    }
    _initializeRequiredModelAttributeNames() {
        LOG$6.debug('Initializing model attributes.');
        let values = [];
        if (this._requestMappings?.length) {
            values = reduce_1(this._requestMappings, (arr, item) => {
                const controller = item.controller;
                const controllerUniqueAttributeNames = reduce_1(keys(item.controllerProperties), (arr2, propertyKey) => {
                    LOG$6.debug('_initializeRequiredModelAttributeNames: propertyKey: ', propertyKey);
                    const propertyValue = item.controllerProperties[propertyKey];
                    const propertyAttributeNames = propertyValue.modelAttributes;
                    LOG$6.debug('_initializeRequiredModelAttributeNames: propertyAttributeNames: ', propertyAttributeNames);
                    const params = propertyValue.params;
                    forEach_1(propertyAttributeNames, (attributeName) => {
                        LOG$6.debug('_initializeRequiredModelAttributeNames: attributeName: ', attributeName);
                        if (find_1(arr2, (i) => i[0] === attributeName) === undefined) {
                            arr2.push([attributeName, propertyKey, params]);
                        }
                    });
                    return arr2;
                }, []);
                LOG$6.debug('controllerUniqueAttributeNames: ', controllerUniqueAttributeNames);
                values.push([controller, controllerUniqueAttributeNames]);
                return arr;
            }, values);
        }
        this._modelAttributeNames = new Map(values);
    }
    async handleRequest(methodString, urlString = undefined, parseRequestBody = undefined, requestHeaders) {
        try {
            const method = parseRequestMethod(methodString);
            const { pathName, queryParams } = RequestRouter._parseRequestPath(urlString);
            const requestPathName = pathName;
            // LOG.debug('requestPathName: ', requestPathName);
            const requestQueryParams = queryParams;
            // LOG.debug('requestQueryParams: ', requestQueryParams);
            if (requestQueryParams === undefined) {
                LOG$6.error('handleRequest: requestQueryParams was not initialized');
                return ResponseEntity.internalServerError().body({
                    error: 'Internal Server Error'
                });
            }
            if (requestPathName === undefined) {
                LOG$6.error('handleRequest: requestPathName was not initialized');
                return ResponseEntity.internalServerError().body({
                    error: 'Internal Server Error'
                });
            }
            if (!this._initialized) {
                this._initializeRouter();
            }
            const { routes, bodyRequired, pathVariables } = this._getRequestRoutesContext(method, requestPathName);
            if (!parseRequestBody && bodyRequired) {
                LOG$6.error('handleRequest: parseRequestBody was not provided and body is required');
                return ResponseEntity.internalServerError().body({
                    error: 'Internal Server Error'
                });
            }
            // LOG.debug('routes: ', routes);
            if (routes === undefined) {
                return ResponseEntity.methodNotAllowed().body({
                    error: 'Method Not Allowed'
                });
            }
            if (routes.length === 0) {
                return ResponseEntity.notFound().body({
                    error: 'Not Found'
                });
            }
            let responseEntity = undefined;
            // LOG.debug('handleRequest: requestBodyRequired: ', requestBodyRequired);
            const requestBody = parseRequestBody && bodyRequired ? await parseRequestBody(requestHeaders) : undefined;
            // LOG.debug('handleRequest: requestBody: ', requestBody);
            const requestModelAttributes = new Map();
            // Handle requests using controllers
            await reduce_1(routes, async (previousPromise, route) => {
                const routeController = route.controller;
                const routePropertyName = route.propertyName;
                const routePropertyParams = route.propertyParams;
                await previousPromise;
                if (this._modelAttributeNames && this._modelAttributeNames.has(routeController)) {
                    LOG$6.debug(`Populating attributes for property "${routePropertyName}"`);
                    const modelAttributeValues = RequestRouter._getOrCreateRequestModelAttributesForController(requestModelAttributes, routeController);
                    const routeAttributeNames = map_1(filter_1(routePropertyParams, (item) => isRequestModelAttributeParamObject(item)), (item) => item.attributeName);
                    LOG$6.debug('route attributeNames: ', routeAttributeNames);
                    const allModelAttributeNamesForRouteController = this._modelAttributeNames.get(routeController);
                    LOG$6.debug('all attributeNamePairs: ', allModelAttributeNamesForRouteController);
                    const attributeNamePairs = filter_1(allModelAttributeNamesForRouteController ?? [], (item) => routeAttributeNames.includes(item[0]));
                    LOG$6.debug('attributeNamePairs: ', attributeNamePairs);
                    await reduce_1(attributeNamePairs, async (p, pair) => {
                        const [attributeName, propertyName, propertyParams] = pair;
                        await p;
                        LOG$6.debug('attributeName: ', attributeName);
                        LOG$6.debug('propertyName: ', propertyName);
                        LOG$6.debug('propertyParams: ', propertyParams);
                        const stepParams = RequestRouter._bindRequestActionParams(requestQueryParams, requestBody, propertyParams, requestHeaders, pathVariables, modelAttributeValues);
                        const stepResult = await routeController[propertyName](...stepParams);
                        modelAttributeValues.set(attributeName, stepResult);
                    }, Promise.resolve());
                }
                const stepParams = RequestRouter._bindRequestActionParams(requestQueryParams, requestBody, routePropertyParams, requestHeaders, pathVariables, requestModelAttributes.get(routeController) ?? new Map());
                // LOG.debug('handleRequest: stepParams 1: ', stepParams);
                // LOG.debug('handleRequest: stepParams 2: ', stepParams);
                if (!has_1(routeController, routePropertyName)) {
                    LOG$6.warn(`Warning! No property by name "${routePropertyName}" found in the controller`);
                    responseEntity = ResponseEntity.notFound().body({ error: "404 - Not Found", code: 404 });
                    return;
                }
                LOG$6.debug(`Calling route property by name "${routePropertyName}"`);
                const stepResult = await routeController[routePropertyName](...stepParams);
                if (isRequestStatus(stepResult)) {
                    responseEntity = new ResponseEntity(stepResult);
                }
                else if (isRequestError(stepResult)) {
                    responseEntity = new ResponseEntity(stepResult.toJSON(), stepResult.getStatusCode());
                }
                else if (isResponseEntity(stepResult)) {
                    // FIXME: What if we already have stepResult??
                    if (responseEntity !== undefined) {
                        LOG$6.warn('Warning! ResponseEntity from previous call ignored.');
                    }
                    responseEntity = stepResult;
                }
                else if (isReadonlyJsonArray(stepResult)) {
                    if (responseEntity === undefined) {
                        responseEntity = ResponseEntity.ok(stepResult);
                    }
                    else {
                        responseEntity = new ResponseEntity(concat_1(responseEntity.getBody(), stepResult), responseEntity.getHeaders(), responseEntity.getStatusCode());
                    }
                }
                else if (isReadonlyJsonObject(stepResult)) {
                    if (responseEntity === undefined) {
                        responseEntity = ResponseEntity.ok(stepResult);
                    }
                    else {
                        responseEntity = new ResponseEntity({
                            ...responseEntity.getBody(),
                            ...stepResult
                        }, responseEntity.getHeaders(), responseEntity.getStatusCode());
                    }
                }
                else if (isReadonlyJsonAny(stepResult)) {
                    if (responseEntity === undefined) {
                        responseEntity = ResponseEntity.ok(stepResult);
                    }
                    else {
                        LOG$6.warn('Warning! ResponseEntity from previous call ignored.');
                        responseEntity = new ResponseEntity(stepResult, responseEntity.getHeaders(), responseEntity.getStatusCode());
                    }
                }
                else {
                    if (responseEntity === undefined) {
                        responseEntity = ResponseEntity.ok(stepResult);
                    }
                    else {
                        LOG$6.warn('Warning! ResponseEntity from previous call ignored.');
                        responseEntity = new ResponseEntity(stepResult, responseEntity.getHeaders(), responseEntity.getStatusCode());
                    }
                }
                // LOG.debug('handleRequest: result changed: ', responseEntity);
            }, Promise.resolve());
            LOG$6.debug('handleRequest: result finished: ' + responseEntity);
            // This never happens really, since 'routes' will always have more than one item at this point.
            if (responseEntity === undefined) {
                return ResponseEntity.noContent();
            }
            return responseEntity;
        }
        catch (err) {
            if (isRequestError(err)) {
                const status = err?.status ?? 0;
                if (status === 404) {
                    return ResponseEntity.notFound().body(err.toJSON());
                }
                if (status >= 400 && status < 500) {
                    return ResponseEntity.badRequest().status(status).body(err.toJSON());
                }
                return ResponseEntity.internalServerError().status(status).body(err.toJSON());
            }
            LOG$6.error('Exception: ', err);
            return ResponseEntity.internalServerError().body({
                error: 'Internal Server Error',
                code: 500
            });
        }
    }
    static _parseRequestPath(urlString) {
        const urlForParser = `http://localhost${urlString ?? ''}`;
        const parsedUrl = new URL__default["default"].URL(urlForParser);
        // LOG.debug('parsedUrl: ', parsedUrl);
        const pathName = parsedUrl.pathname;
        const queryParams = parsedUrl.searchParams;
        return {
            pathName,
            queryParams
        };
    }
    _getRequestRoutesContext(method, requestPathName) {
        if (!this._routes || !this._routes.hasRoute(requestPathName)) {
            return {
                routes: [],
                bodyRequired: false
            };
        }
        // LOG.debug('_getRequestRoutesContext: requestPathName: ', requestPathName);
        // LOG.debug('_getRequestRoutesContext: method: ', method);
        let [routes, pathVariables] = this._routes.getRoute(requestPathName);
        routes = filter_1(routes, (item) => {
            return item.methods.indexOf(method) >= 0;
        });
        // LOG.debug('_getRequestRoutesContext: routes: ', routes);
        if (!routes.length) {
            // There were matching routes, but not for this method; Method not allowed.
            return {
                routes: undefined,
                bodyRequired: false
            };
        }
        const requestBodyRequired = some(routes, item => item?.requestBodyRequired === true);
        return {
            routes,
            pathVariables,
            bodyRequired: requestBodyRequired
        };
    }
    _getRequestMappings() {
        if (this._controllers.length === 0) {
            return [];
        }
        return filter_1(map_1(this._controllers, (controller) => {
            // @ts-ignore
            if (hasInternalRequestMappingObject(controller.constructor)) {
                // @ts-ignore
                return getInternalRequestMappingObject(controller.constructor, controller);
            }
            return getInternalRequestMappingObject(controller, controller);
        }), (item) => !!item);
    }
    static _parseMappingObject(requestMappings) {
        const routeMappingResult = {};
        function setRouteMappingResult(path, mapping) {
            if (!has_1(routeMappingResult, path)) {
                routeMappingResult[path] = [mapping];
                return;
            }
            routeMappingResult[path].push(mapping);
        }
        forEach_1(requestMappings, (rootItem) => {
            const controller = rootItem.controller;
            const controllerProperties = rootItem.controllerProperties;
            const controllerPropertyNames = keys(controllerProperties);
            if (rootItem.mappings.length > 0) {
                // Controller has root mappings
                forEach_1(rootItem.mappings, (rootMappingItem) => {
                    const rootMethods = rootMappingItem.methods;
                    forEach_1(rootMappingItem.paths, (rootPath) => {
                        forEach_1(controllerPropertyNames, (propertyKey) => {
                            const propertyValue = controllerProperties[propertyKey];
                            const propertyParams = propertyValue.params;
                            forEach_1(propertyValue.mappings, (propertyMappingItem) => {
                                // Filters away any property routes which do not have common methods
                                const propertyMethods = propertyMappingItem.methods;
                                if (!RequestRouter._matchMethods(rootMethods, propertyMethods)) {
                                    return;
                                }
                                const propertyMethodsCommonWithRoot = RequestRouter._parseCommonMethods(rootMethods, propertyMethods);
                                const propertyPaths = propertyMappingItem.paths;
                                forEach_1(propertyPaths, (propertyPath) => {
                                    const fullPropertyPath = RequestRouter._joinRoutePaths(rootPath, propertyPath);
                                    setRouteMappingResult(fullPropertyPath, {
                                        requestBodyRequired: propertyValue?.requestBodyRequired ?? false,
                                        methods: propertyMethodsCommonWithRoot,
                                        controller: controller,
                                        propertyName: propertyKey,
                                        propertyParams: propertyParams
                                    });
                                });
                            });
                        });
                    });
                });
            }
            else {
                // We don't have parent controller mappings, so expect method mappings to be global.
                forEach_1(controllerPropertyNames, (propertyKey) => {
                    const propertyValue = controllerProperties[propertyKey];
                    const propertyParams = propertyValue.params;
                    forEach_1(propertyValue.mappings, (propertyMappingItem) => {
                        const propertyMethods = propertyMappingItem.methods;
                        const propertyPaths = propertyMappingItem.paths;
                        forEach_1(propertyPaths, (propertyPath) => {
                            setRouteMappingResult(propertyPath, {
                                requestBodyRequired: propertyValue?.requestBodyRequired ?? false,
                                methods: propertyMethods,
                                controller: controller,
                                propertyName: propertyKey,
                                propertyParams: propertyParams
                            });
                        });
                    });
                });
            }
        });
        return routeMappingResult;
    }
    static _matchMethods(rootMethods, propertyMethods) {
        if (rootMethods.length === 0)
            return true;
        if (propertyMethods.length == 0)
            return true;
        return some(rootMethods, (rootMethod) => {
            return some(propertyMethods, (propertyMethod) => {
                return rootMethod === propertyMethod;
            });
        });
    }
    static _parseCommonMethods(rootMethods, propertyMethods) {
        return (rootMethods.length !== 0
            ? filter_1(propertyMethods, (propertyMethod) => {
                return some(rootMethods, (rootMethod) => {
                    return rootMethod === propertyMethod;
                });
            })
            : propertyMethods);
    }
    static _joinRoutePaths(a, b) {
        a = trim_1(a);
        b = trim_1(trim_1(b), "/");
        if (b.length === 0)
            return a;
        if (a.length === 0)
            return b;
        if (a[a.length - 1] === '/' || b[0] === '/') {
            return a + b;
        }
        return a + '/' + b;
    }
    static _bindRequestActionParams(searchParams, requestBody, params, requestHeaders, pathVariables, modelAttributes) {
        return map_1(params, (item) => {
            if (item === null) {
                return undefined;
            }
            const objectType = item?.objectType;
            switch (objectType) {
                case RequestParamObjectType$1.REQUEST_BODY:
                    return requestBody;
                case RequestParamObjectType$1.QUERY_PARAM: {
                    const queryParamItem = item;
                    const key = queryParamItem.queryParam;
                    if (!searchParams.has(key))
                        return undefined;
                    const value = searchParams.get(key);
                    if (isNull_1(value))
                        return undefined;
                    return RequestRouter._castParam(value, queryParamItem.valueType);
                }
                case RequestParamObjectType$1.REQUEST_HEADER: {
                    const headerItem = item;
                    const headerName = headerItem.headerName;
                    if (!requestHeaders.containsKey(headerName)) {
                        if (headerItem.isRequired) {
                            throw new RequestError(400, `Bad Request: Header missing: ${headerName}`);
                        }
                        return headerItem?.defaultValue ?? undefined;
                    }
                    const headerValue = requestHeaders.getFirst(headerName);
                    if (headerValue === undefined)
                        return undefined;
                    return RequestRouter._castParam(headerValue, headerItem.valueType);
                }
                case RequestParamObjectType$1.REQUEST_HEADER_MAP: {
                    const headerItem = item;
                    const defaultHeaders = headerItem?.defaultValues;
                    if (requestHeaders.isEmpty()) {
                        if (defaultHeaders) {
                            return new Headers(defaultHeaders);
                        }
                        else {
                            return new Headers();
                        }
                    }
                    else {
                        if (defaultHeaders) {
                            return new Headers({
                                ...defaultHeaders,
                                ...requestHeaders.valueOf()
                            });
                        }
                        else {
                            return requestHeaders.clone();
                        }
                    }
                }
                case RequestParamObjectType$1.PATH_VARIABLE: {
                    const pathParamItem = item;
                    const variableName = pathParamItem.variableName;
                    const variableValue = pathVariables && has_1(pathVariables, variableName) ? pathVariables[variableName] : undefined;
                    if (variableValue !== undefined && variableValue !== '') {
                        if (pathParamItem.decodeValue) {
                            return decodeURIComponent(variableValue);
                        }
                        return variableValue;
                    }
                    else {
                        if (pathParamItem.isRequired) {
                            throw new RequestError(404, `Not Found`);
                        }
                        return pathParamItem.defaultValue ?? undefined;
                    }
                }
                case RequestParamObjectType$1.MODEL_ATTRIBUTE: {
                    const modelAttributeItem = item;
                    const key = modelAttributeItem.attributeName;
                    return modelAttributes.has(key) ? modelAttributes.get(key) : undefined;
                }
            }
            throw new TypeError(`Unsupported item type: ${item}`);
        });
    }
    static _castParam(value, type) {
        switch (type) {
            case RequestParamValueType$1.JSON:
                return JSON.parse(value);
            case RequestParamValueType$1.STRING:
                return value;
            case RequestParamValueType$1.INTEGER:
                return parseInt(value, 10);
            case RequestParamValueType$1.NUMBER:
                return parseFloat(value);
        }
        throw new TypeError(`Unsupported type: ${type}`);
    }
    static _getOrCreateRequestModelAttributesForController(requestModelAttributes, routeController) {
        let modelAttributeValues = requestModelAttributes.get(routeController);
        if (modelAttributeValues != undefined) {
            return modelAttributeValues;
        }
        modelAttributeValues = new Map();
        requestModelAttributes.set(routeController, modelAttributeValues);
        return modelAttributeValues;
    }
}

// Copyright (c) 2020 Sendanor. All rights reserved.
/**
 * This is a simple observer implementation for implementing synchronous in-process events for a local service.
 *
 * You'll use it like:
 *
 * ```
 * enum FooEvent {
 *     CHANGED = "FooService:changed"
 * }
 *
 * class FooService {
 *
 *     private static _data : any;
 *     private static _observer : Observer<FooEvent> = new Observer<FooEvent>("FooService");
 *
 *     public static getData () : any {
 *         return this._data;
 *     }
 *
 *     public static on (name : FooEvent, callback: ObserverCallback<FooEvent>) : ObserverDestructor {
 *         return this._observer.listenEvent(name, callback);
 *     }
 *
 *     public static refreshData () {
 *
 *         HttpService.doSomething().then((response) => {
 *
 *             this._data = response.data;
 *
 *             this._observer.triggerEvent(FooEvent.CHANGED);
 *
 *         }).catch(err => {
 *             console.error('Error: ', err);
 *         });
 *
 *     }
 *
 * }
 *
 * FooService.on(FooEvent.CHANGED, () => {
 *
 *     const currentData = FooService.getData();
 *     // ...
 *
 * });
 *
 * FooService.refreshData();
 *
 * ```
 *
 */
class Observer {
    _name;
    _callbacks;
    getName() {
        return this._name;
    }
    /**
     *
     * @param name You can name this observer, so that you know where it is used.
     */
    constructor(name) {
        this._name = name;
        this._callbacks = {};
    }
    /**
     * Destroy the observer data. Stop using this object after you use destroy.
     */
    destroy() {
        // @ts-ignore
        this._name = undefined;
        // @ts-ignore
        this._callbacks = undefined;
    }
    /**
     * Check if eventName has listeners.
     *
     * @param eventName
     */
    hasCallbacks(eventName) {
        return has_1(this._callbacks, eventName);
    }
    /**
     * Trigger an event
     *
     * @param eventName
     * @param args
     */
    triggerEvent(eventName, ...args) {
        if (!this.hasCallbacks(eventName)) {
            console.warn(`Warning! The observer for "${this._name}" did not have anything listening "${eventName}"`);
            return;
        }
        const callbacks = this._callbacks[eventName];
        forEach_1(callbacks, callback => {
            try {
                callback(eventName, ...args);
            }
            catch (e) {
                console.error(`Observer "${this._name}" and the event handler for "${eventName}" returned an exception: `, e);
            }
        });
    }
    /**
     * Start listening events.
     *
     * Returns destructor function.
     *
     * @param eventName
     * @param callback
     */
    listenEvent(eventName, callback) {
        if (!this.hasCallbacks(eventName)) {
            this._callbacks[eventName] = [callback];
        }
        else {
            this._callbacks[eventName].push(callback);
        }
        return () => this.removeListener(eventName, callback);
    }
    /**
     * Removes the first found listener callback for eventName
     *
     * @param eventName
     * @param callback
     */
    removeListener(eventName, callback) {
        if (!this.hasCallbacks(eventName)) {
            console.warn(`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${eventName}"`);
            return;
        }
        let removedOnce = false;
        this._callbacks[eventName] = filter_1(this._callbacks[eventName], item => {
            if (!removedOnce && item === callback) {
                removedOnce = true;
                return false;
            }
            return true;
        });
        if (this._callbacks[eventName].length === 0) {
            delete this._callbacks[eventName];
        }
        if (!removedOnce) {
            console.warn(`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`);
            return;
        }
    }
}

// Copyright (c) 2020-2021 Sendanor. All rights reserved.
const LOG$5 = LogService.createLogger('RequestServer');
const DEFAULT_REQUEST_SERVER_CONFIG_STRING = 'http://localhost:3000';
var RequestServerEvent;
(function (RequestServerEvent) {
    RequestServerEvent["CONTROLLER_ATTACHED"] = "RequestServer:controllerAttached";
    RequestServerEvent["STARTED"] = "RequestServer:started";
    RequestServerEvent["STOPPED"] = "RequestServer:stopped";
})(RequestServerEvent || (RequestServerEvent = {}));
class RequestServer {
    _server;
    _router;
    _handleRequestCallback;
    static setLogLevel(level) {
        LOG$5.setLogLevel(level);
    }
    _observer;
    static Event = RequestServerEvent;
    on(name, callback) {
        return this._observer.listenEvent(name, callback);
    }
    constructor(config = DEFAULT_REQUEST_SERVER_CONFIG_STRING) {
        this._observer = new Observer("RequestServer");
        this._server = RequestServer.createServerService(config);
        this._router = new RequestRouter();
        this._handleRequestCallback = this._handleRequest.bind(this);
        this._server.setHandler(this._handleRequestCallback);
    }
    destroy() {
        this._observer.destroy();
    }
    /**
     * Attach an instance which was previously annotated with our Request annotation
     * implementation.
     *
     * @param controller Class instance which has internal Request annotations
     */
    attachController(controller) {
        if (isRequestController(controller)) {
            this._router.attachController(controller);
        }
        else {
            throw new TypeError(`The provided controller was not supported type`);
        }
        this._observer.triggerEvent(RequestServerEvent.CONTROLLER_ATTACHED);
    }
    start() {
        LOG$5.debug(`Starting server`);
        this._server.start();
        this._observer.triggerEvent(RequestServerEvent.STARTED);
    }
    stop() {
        LOG$5.debug(`Stopping server`);
        this._server.stop();
        this._observer.triggerEvent(RequestServerEvent.STOPPED);
    }
    async _handleRequest(req, res) {
        try {
            const responseData = await this._router.handleRequest(parseRequestMethod(req.method), req.url, (headers) => RequestServer._requestBodyParser(req, headers), this._parseRequestHeaders(req.headers));
            LOG$5.debug(`"${req.method} ${req.url}": Processing responseEntity`);
            this._handleResponse(responseData, res);
        }
        catch (err) {
            LOG$5.debug('Error at _handleRequest, passing it on: ', err);
            this._handleErrorResponse(err, res);
        }
    }
    static async _requestBodyParser(req, headers) {
        const contentType = headers.getFirst('content-type')?.toLowerCase() ?? 'application/json';
        switch (contentType) {
            case 'application/x-www-form-urlencoded':
                return NodeHttpUtils.getRequestDataAsFormUrlEncoded(req);
            default:
                return NodeHttpUtils.getRequestDataAsJson(req);
        }
    }
    _handleResponse(responseEntity, res) {
        const statusCode = responseEntity.getStatusCode();
        res.statusCode = statusCode;
        res.statusMessage = stringifyRequestStatus(statusCode);
        const headers = responseEntity.getHeaders();
        if (!headers.isEmpty()) {
            headers.keySet().forEach((headerKey) => {
                const headerValue = headers.getValue(headerKey) ?? '';
                LOG$5.debug(`_handleResponse: Setting response header as "${headerKey}": "${headerValue}"`);
                if (isArray(headerValue)) {
                    res.setHeader(headerKey, [...headerValue]);
                }
                else {
                    res.setHeader(headerKey, headerValue);
                }
            });
        }
        if (responseEntity.hasBody()) {
            const body = responseEntity.getBody();
            if (isString(body)) {
                LOG$5.debug('_handleResponse: Ending as text ', statusCode, body);
                res.end(body);
            }
            else {
                LOG$5.debug('_handleResponse: Ending as json ', statusCode, body);
                res.end(JSON.stringify(body, null, 2));
            }
        }
        else {
            LOG$5.debug('_handleResponse: Ending without body ', statusCode);
            res.end();
        }
    }
    _handleErrorResponse(error, res) {
        let responseEntity;
        if (isRequestStatus(error)) {
            responseEntity = new ResponseEntity(error);
        }
        else if (isRequestError(error)) {
            responseEntity = new ResponseEntity(error, error.getStatusCode());
        }
        else {
            LOG$5.error('Exception: ', error);
            // FIXME: We should have an public API for testing production mode
            if (process?.env?.NODE_ENV === 'production') {
                responseEntity = ResponseEntity.internalServerError();
            }
            else {
                responseEntity = new ResponseEntity(createRequestError(RequestStatus$1.InternalServerError, `Internal Server Error: ${error}`), RequestStatus$1.InternalServerError);
            }
        }
        this._handleResponse(responseEntity, res);
    }
    /**
     *
     * @param value
     * @private
     */
    _parseRequestHeaders(value) {
        return new Headers(value);
    }
    static createServerService(config) {
        const url = new URL__default["default"].URL(config);
        if (url.protocol === 'http:') {
            const port = url.port ? parseInt(url.port, 10) : 80;
            return new HttpServerService(port, url.hostname);
        }
        else {
            throw new TypeError(`RequestServer: Protocol "${url.protocol}" not yet supported`);
        }
    }
}

// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
const LOG$4 = LogService.createLogger('FileSystemService');
class FileSystemService {
    static async readTextFile(fileName) {
        LOG$4.debug(`Reading file: `, fileName);
        return await new Promise((resolve, reject) => {
            FS__default["default"].readFile(fileName, { encoding: 'utf8' }, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            });
        });
    }
}

const LOG$3 = LogService.createLogger('StaticReactAppService');
class StaticReactAppService {
    static renderString(url, App) {
        LOG$3.debug(`renderString: typeof url: `, typeof url);
        LOG$3.debug(`renderString: typeof App: `, typeof App);
        return ReactDOMServer__default["default"].renderToString(jsxRuntime.jsx(reactI18next.I18nextProvider, { i18n: i18n__default["default"], children: jsxRuntime.jsx(server.StaticRouter, { location: url, children: jsxRuntime.jsx(App, {}, void 0) }, void 0) }, void 0));
    }
}

// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
const LOG$2 = LogService.createLogger('ReactServerController');
class ReactServerController {
    static async handleReactRequest(url, appDir, App, indexFileName = './index.html') {
        const indexFile = PATH__default["default"].resolve(appDir, indexFileName);
        let htmlString = '';
        try {
            htmlString = await FileSystemService.readTextFile(indexFile);
        }
        catch (err) {
            LOG$2.error(`Could not read "${indexFile}" for "${url}":`, err);
            return ResponseEntity.internalServerError().body('Internal Server Error');
        }
        let bodyString = '';
        try {
            bodyString = ReactServerController._renderHtmlString(url, htmlString, App);
        }
        catch (err) {
            LOG$2.error(`Could not render "${url}":`, err);
            return ResponseEntity.internalServerError().body('Internal Server Error');
        }
        return ResponseEntity.ok().body(bodyString);
    }
    static _renderHtmlString(url, htmlString, App) {
        LOG$2.debug(`_renderHtmlString: typeof url: `, typeof url);
        LOG$2.debug(`_renderHtmlString: typeof htmlString: `, typeof htmlString);
        LOG$2.debug(`_renderHtmlString: typeof App: `, typeof App);
        const appString = StaticReactAppService.renderString(url, App);
        LOG$2.debug(`_renderHtmlString: appString: `, appString);
        const rootDivId = 'root';
        return htmlString.replace(ReactServerController._createDivTag(rootDivId), ReactServerController._createDivTag(rootDivId, appString));
    }
    static _createDivTag(idName, content) {
        return `<div id="${idName}">${content ? content : ''}</div>`;
    }
}

var nodeStatic = {};

var require$$2 = {
	"application/andrew-inset": [
	"ez"
],
	"application/applixware": [
	"aw"
],
	"application/atom+xml": [
	"atom"
],
	"application/atomcat+xml": [
	"atomcat"
],
	"application/atomsvc+xml": [
	"atomsvc"
],
	"application/bdoc": [
	"bdoc"
],
	"application/ccxml+xml": [
	"ccxml"
],
	"application/cdmi-capability": [
	"cdmia"
],
	"application/cdmi-container": [
	"cdmic"
],
	"application/cdmi-domain": [
	"cdmid"
],
	"application/cdmi-object": [
	"cdmio"
],
	"application/cdmi-queue": [
	"cdmiq"
],
	"application/cu-seeme": [
	"cu"
],
	"application/dash+xml": [
	"mpd"
],
	"application/davmount+xml": [
	"davmount"
],
	"application/docbook+xml": [
	"dbk"
],
	"application/dssc+der": [
	"dssc"
],
	"application/dssc+xml": [
	"xdssc"
],
	"application/ecmascript": [
	"ecma"
],
	"application/emma+xml": [
	"emma"
],
	"application/epub+zip": [
	"epub"
],
	"application/exi": [
	"exi"
],
	"application/font-tdpfr": [
	"pfr"
],
	"application/font-woff": [
	"woff"
],
	"application/font-woff2": [
	"woff2"
],
	"application/geo+json": [
	"geojson"
],
	"application/gml+xml": [
	"gml"
],
	"application/gpx+xml": [
	"gpx"
],
	"application/gxf": [
	"gxf"
],
	"application/gzip": [
	"gz"
],
	"application/hyperstudio": [
	"stk"
],
	"application/inkml+xml": [
	"ink",
	"inkml"
],
	"application/ipfix": [
	"ipfix"
],
	"application/java-archive": [
	"jar",
	"war",
	"ear"
],
	"application/java-serialized-object": [
	"ser"
],
	"application/java-vm": [
	"class"
],
	"application/javascript": [
	"js",
	"mjs"
],
	"application/json": [
	"json",
	"map"
],
	"application/json5": [
	"json5"
],
	"application/jsonml+json": [
	"jsonml"
],
	"application/ld+json": [
	"jsonld"
],
	"application/lost+xml": [
	"lostxml"
],
	"application/mac-binhex40": [
	"hqx"
],
	"application/mac-compactpro": [
	"cpt"
],
	"application/mads+xml": [
	"mads"
],
	"application/manifest+json": [
	"webmanifest"
],
	"application/marc": [
	"mrc"
],
	"application/marcxml+xml": [
	"mrcx"
],
	"application/mathematica": [
	"ma",
	"nb",
	"mb"
],
	"application/mathml+xml": [
	"mathml"
],
	"application/mbox": [
	"mbox"
],
	"application/mediaservercontrol+xml": [
	"mscml"
],
	"application/metalink+xml": [
	"metalink"
],
	"application/metalink4+xml": [
	"meta4"
],
	"application/mets+xml": [
	"mets"
],
	"application/mods+xml": [
	"mods"
],
	"application/mp21": [
	"m21",
	"mp21"
],
	"application/mp4": [
	"mp4s",
	"m4p"
],
	"application/msword": [
	"doc",
	"dot"
],
	"application/mxf": [
	"mxf"
],
	"application/octet-stream": [
	"bin",
	"dms",
	"lrf",
	"mar",
	"so",
	"dist",
	"distz",
	"pkg",
	"bpk",
	"dump",
	"elc",
	"deploy",
	"exe",
	"dll",
	"deb",
	"dmg",
	"iso",
	"img",
	"msi",
	"msp",
	"msm",
	"buffer"
],
	"application/oda": [
	"oda"
],
	"application/oebps-package+xml": [
	"opf"
],
	"application/ogg": [
	"ogx"
],
	"application/omdoc+xml": [
	"omdoc"
],
	"application/onenote": [
	"onetoc",
	"onetoc2",
	"onetmp",
	"onepkg"
],
	"application/oxps": [
	"oxps"
],
	"application/patch-ops-error+xml": [
	"xer"
],
	"application/pdf": [
	"pdf"
],
	"application/pgp-encrypted": [
	"pgp"
],
	"application/pgp-signature": [
	"asc",
	"sig"
],
	"application/pics-rules": [
	"prf"
],
	"application/pkcs10": [
	"p10"
],
	"application/pkcs7-mime": [
	"p7m",
	"p7c"
],
	"application/pkcs7-signature": [
	"p7s"
],
	"application/pkcs8": [
	"p8"
],
	"application/pkix-attr-cert": [
	"ac"
],
	"application/pkix-cert": [
	"cer"
],
	"application/pkix-crl": [
	"crl"
],
	"application/pkix-pkipath": [
	"pkipath"
],
	"application/pkixcmp": [
	"pki"
],
	"application/pls+xml": [
	"pls"
],
	"application/postscript": [
	"ai",
	"eps",
	"ps"
],
	"application/prs.cww": [
	"cww"
],
	"application/pskc+xml": [
	"pskcxml"
],
	"application/rdf+xml": [
	"rdf"
],
	"application/reginfo+xml": [
	"rif"
],
	"application/relax-ng-compact-syntax": [
	"rnc"
],
	"application/resource-lists+xml": [
	"rl"
],
	"application/resource-lists-diff+xml": [
	"rld"
],
	"application/rls-services+xml": [
	"rs"
],
	"application/rpki-ghostbusters": [
	"gbr"
],
	"application/rpki-manifest": [
	"mft"
],
	"application/rpki-roa": [
	"roa"
],
	"application/rsd+xml": [
	"rsd"
],
	"application/rss+xml": [
	"rss"
],
	"application/rtf": [
	"rtf"
],
	"application/sbml+xml": [
	"sbml"
],
	"application/scvp-cv-request": [
	"scq"
],
	"application/scvp-cv-response": [
	"scs"
],
	"application/scvp-vp-request": [
	"spq"
],
	"application/scvp-vp-response": [
	"spp"
],
	"application/sdp": [
	"sdp"
],
	"application/set-payment-initiation": [
	"setpay"
],
	"application/set-registration-initiation": [
	"setreg"
],
	"application/shf+xml": [
	"shf"
],
	"application/smil+xml": [
	"smi",
	"smil"
],
	"application/sparql-query": [
	"rq"
],
	"application/sparql-results+xml": [
	"srx"
],
	"application/srgs": [
	"gram"
],
	"application/srgs+xml": [
	"grxml"
],
	"application/sru+xml": [
	"sru"
],
	"application/ssdl+xml": [
	"ssdl"
],
	"application/ssml+xml": [
	"ssml"
],
	"application/tei+xml": [
	"tei",
	"teicorpus"
],
	"application/thraud+xml": [
	"tfi"
],
	"application/timestamped-data": [
	"tsd"
],
	"application/vnd.3gpp.pic-bw-large": [
	"plb"
],
	"application/vnd.3gpp.pic-bw-small": [
	"psb"
],
	"application/vnd.3gpp.pic-bw-var": [
	"pvb"
],
	"application/vnd.3gpp2.tcap": [
	"tcap"
],
	"application/vnd.3m.post-it-notes": [
	"pwn"
],
	"application/vnd.accpac.simply.aso": [
	"aso"
],
	"application/vnd.accpac.simply.imp": [
	"imp"
],
	"application/vnd.acucobol": [
	"acu"
],
	"application/vnd.acucorp": [
	"atc",
	"acutc"
],
	"application/vnd.adobe.air-application-installer-package+zip": [
	"air"
],
	"application/vnd.adobe.formscentral.fcdt": [
	"fcdt"
],
	"application/vnd.adobe.fxp": [
	"fxp",
	"fxpl"
],
	"application/vnd.adobe.xdp+xml": [
	"xdp"
],
	"application/vnd.adobe.xfdf": [
	"xfdf"
],
	"application/vnd.ahead.space": [
	"ahead"
],
	"application/vnd.airzip.filesecure.azf": [
	"azf"
],
	"application/vnd.airzip.filesecure.azs": [
	"azs"
],
	"application/vnd.amazon.ebook": [
	"azw"
],
	"application/vnd.americandynamics.acc": [
	"acc"
],
	"application/vnd.amiga.ami": [
	"ami"
],
	"application/vnd.android.package-archive": [
	"apk"
],
	"application/vnd.anser-web-certificate-issue-initiation": [
	"cii"
],
	"application/vnd.anser-web-funds-transfer-initiation": [
	"fti"
],
	"application/vnd.antix.game-component": [
	"atx"
],
	"application/vnd.apple.installer+xml": [
	"mpkg"
],
	"application/vnd.apple.mpegurl": [
	"m3u8"
],
	"application/vnd.apple.pkpass": [
	"pkpass"
],
	"application/vnd.aristanetworks.swi": [
	"swi"
],
	"application/vnd.astraea-software.iota": [
	"iota"
],
	"application/vnd.audiograph": [
	"aep"
],
	"application/vnd.blueice.multipass": [
	"mpm"
],
	"application/vnd.bmi": [
	"bmi"
],
	"application/vnd.businessobjects": [
	"rep"
],
	"application/vnd.chemdraw+xml": [
	"cdxml"
],
	"application/vnd.chipnuts.karaoke-mmd": [
	"mmd"
],
	"application/vnd.cinderella": [
	"cdy"
],
	"application/vnd.claymore": [
	"cla"
],
	"application/vnd.cloanto.rp9": [
	"rp9"
],
	"application/vnd.clonk.c4group": [
	"c4g",
	"c4d",
	"c4f",
	"c4p",
	"c4u"
],
	"application/vnd.cluetrust.cartomobile-config": [
	"c11amc"
],
	"application/vnd.cluetrust.cartomobile-config-pkg": [
	"c11amz"
],
	"application/vnd.commonspace": [
	"csp"
],
	"application/vnd.contact.cmsg": [
	"cdbcmsg"
],
	"application/vnd.cosmocaller": [
	"cmc"
],
	"application/vnd.crick.clicker": [
	"clkx"
],
	"application/vnd.crick.clicker.keyboard": [
	"clkk"
],
	"application/vnd.crick.clicker.palette": [
	"clkp"
],
	"application/vnd.crick.clicker.template": [
	"clkt"
],
	"application/vnd.crick.clicker.wordbank": [
	"clkw"
],
	"application/vnd.criticaltools.wbs+xml": [
	"wbs"
],
	"application/vnd.ctc-posml": [
	"pml"
],
	"application/vnd.cups-ppd": [
	"ppd"
],
	"application/vnd.curl.car": [
	"car"
],
	"application/vnd.curl.pcurl": [
	"pcurl"
],
	"application/vnd.dart": [
	"dart"
],
	"application/vnd.data-vision.rdz": [
	"rdz"
],
	"application/vnd.dece.data": [
	"uvf",
	"uvvf",
	"uvd",
	"uvvd"
],
	"application/vnd.dece.ttml+xml": [
	"uvt",
	"uvvt"
],
	"application/vnd.dece.unspecified": [
	"uvx",
	"uvvx"
],
	"application/vnd.dece.zip": [
	"uvz",
	"uvvz"
],
	"application/vnd.denovo.fcselayout-link": [
	"fe_launch"
],
	"application/vnd.dna": [
	"dna"
],
	"application/vnd.dolby.mlp": [
	"mlp"
],
	"application/vnd.dpgraph": [
	"dpg"
],
	"application/vnd.dreamfactory": [
	"dfac"
],
	"application/vnd.ds-keypoint": [
	"kpxx"
],
	"application/vnd.dvb.ait": [
	"ait"
],
	"application/vnd.dvb.service": [
	"svc"
],
	"application/vnd.dynageo": [
	"geo"
],
	"application/vnd.ecowin.chart": [
	"mag"
],
	"application/vnd.enliven": [
	"nml"
],
	"application/vnd.epson.esf": [
	"esf"
],
	"application/vnd.epson.msf": [
	"msf"
],
	"application/vnd.epson.quickanime": [
	"qam"
],
	"application/vnd.epson.salt": [
	"slt"
],
	"application/vnd.epson.ssf": [
	"ssf"
],
	"application/vnd.eszigno3+xml": [
	"es3",
	"et3"
],
	"application/vnd.ezpix-album": [
	"ez2"
],
	"application/vnd.ezpix-package": [
	"ez3"
],
	"application/vnd.fdf": [
	"fdf"
],
	"application/vnd.fdsn.mseed": [
	"mseed"
],
	"application/vnd.fdsn.seed": [
	"seed",
	"dataless"
],
	"application/vnd.flographit": [
	"gph"
],
	"application/vnd.fluxtime.clip": [
	"ftc"
],
	"application/vnd.framemaker": [
	"fm",
	"frame",
	"maker",
	"book"
],
	"application/vnd.frogans.fnc": [
	"fnc"
],
	"application/vnd.frogans.ltf": [
	"ltf"
],
	"application/vnd.fsc.weblaunch": [
	"fsc"
],
	"application/vnd.fujitsu.oasys": [
	"oas"
],
	"application/vnd.fujitsu.oasys2": [
	"oa2"
],
	"application/vnd.fujitsu.oasys3": [
	"oa3"
],
	"application/vnd.fujitsu.oasysgp": [
	"fg5"
],
	"application/vnd.fujitsu.oasysprs": [
	"bh2"
],
	"application/vnd.fujixerox.ddd": [
	"ddd"
],
	"application/vnd.fujixerox.docuworks": [
	"xdw"
],
	"application/vnd.fujixerox.docuworks.binder": [
	"xbd"
],
	"application/vnd.fuzzysheet": [
	"fzs"
],
	"application/vnd.genomatix.tuxedo": [
	"txd"
],
	"application/vnd.geogebra.file": [
	"ggb"
],
	"application/vnd.geogebra.tool": [
	"ggt"
],
	"application/vnd.geometry-explorer": [
	"gex",
	"gre"
],
	"application/vnd.geonext": [
	"gxt"
],
	"application/vnd.geoplan": [
	"g2w"
],
	"application/vnd.geospace": [
	"g3w"
],
	"application/vnd.gmx": [
	"gmx"
],
	"application/vnd.google-apps.document": [
	"gdoc"
],
	"application/vnd.google-apps.presentation": [
	"gslides"
],
	"application/vnd.google-apps.spreadsheet": [
	"gsheet"
],
	"application/vnd.google-earth.kml+xml": [
	"kml"
],
	"application/vnd.google-earth.kmz": [
	"kmz"
],
	"application/vnd.grafeq": [
	"gqf",
	"gqs"
],
	"application/vnd.groove-account": [
	"gac"
],
	"application/vnd.groove-help": [
	"ghf"
],
	"application/vnd.groove-identity-message": [
	"gim"
],
	"application/vnd.groove-injector": [
	"grv"
],
	"application/vnd.groove-tool-message": [
	"gtm"
],
	"application/vnd.groove-tool-template": [
	"tpl"
],
	"application/vnd.groove-vcard": [
	"vcg"
],
	"application/vnd.hal+xml": [
	"hal"
],
	"application/vnd.handheld-entertainment+xml": [
	"zmm"
],
	"application/vnd.hbci": [
	"hbci"
],
	"application/vnd.hhe.lesson-player": [
	"les"
],
	"application/vnd.hp-hpgl": [
	"hpgl"
],
	"application/vnd.hp-hpid": [
	"hpid"
],
	"application/vnd.hp-hps": [
	"hps"
],
	"application/vnd.hp-jlyt": [
	"jlt"
],
	"application/vnd.hp-pcl": [
	"pcl"
],
	"application/vnd.hp-pclxl": [
	"pclxl"
],
	"application/vnd.hydrostatix.sof-data": [
	"sfd-hdstx"
],
	"application/vnd.ibm.minipay": [
	"mpy"
],
	"application/vnd.ibm.modcap": [
	"afp",
	"listafp",
	"list3820"
],
	"application/vnd.ibm.rights-management": [
	"irm"
],
	"application/vnd.ibm.secure-container": [
	"sc"
],
	"application/vnd.iccprofile": [
	"icc",
	"icm"
],
	"application/vnd.igloader": [
	"igl"
],
	"application/vnd.immervision-ivp": [
	"ivp"
],
	"application/vnd.immervision-ivu": [
	"ivu"
],
	"application/vnd.insors.igm": [
	"igm"
],
	"application/vnd.intercon.formnet": [
	"xpw",
	"xpx"
],
	"application/vnd.intergeo": [
	"i2g"
],
	"application/vnd.intu.qbo": [
	"qbo"
],
	"application/vnd.intu.qfx": [
	"qfx"
],
	"application/vnd.ipunplugged.rcprofile": [
	"rcprofile"
],
	"application/vnd.irepository.package+xml": [
	"irp"
],
	"application/vnd.is-xpr": [
	"xpr"
],
	"application/vnd.isac.fcs": [
	"fcs"
],
	"application/vnd.jam": [
	"jam"
],
	"application/vnd.jcp.javame.midlet-rms": [
	"rms"
],
	"application/vnd.jisp": [
	"jisp"
],
	"application/vnd.joost.joda-archive": [
	"joda"
],
	"application/vnd.kahootz": [
	"ktz",
	"ktr"
],
	"application/vnd.kde.karbon": [
	"karbon"
],
	"application/vnd.kde.kchart": [
	"chrt"
],
	"application/vnd.kde.kformula": [
	"kfo"
],
	"application/vnd.kde.kivio": [
	"flw"
],
	"application/vnd.kde.kontour": [
	"kon"
],
	"application/vnd.kde.kpresenter": [
	"kpr",
	"kpt"
],
	"application/vnd.kde.kspread": [
	"ksp"
],
	"application/vnd.kde.kword": [
	"kwd",
	"kwt"
],
	"application/vnd.kenameaapp": [
	"htke"
],
	"application/vnd.kidspiration": [
	"kia"
],
	"application/vnd.kinar": [
	"kne",
	"knp"
],
	"application/vnd.koan": [
	"skp",
	"skd",
	"skt",
	"skm"
],
	"application/vnd.kodak-descriptor": [
	"sse"
],
	"application/vnd.las.las+xml": [
	"lasxml"
],
	"application/vnd.llamagraphics.life-balance.desktop": [
	"lbd"
],
	"application/vnd.llamagraphics.life-balance.exchange+xml": [
	"lbe"
],
	"application/vnd.lotus-1-2-3": [
	"123"
],
	"application/vnd.lotus-approach": [
	"apr"
],
	"application/vnd.lotus-freelance": [
	"pre"
],
	"application/vnd.lotus-notes": [
	"nsf"
],
	"application/vnd.lotus-organizer": [
	"org"
],
	"application/vnd.lotus-screencam": [
	"scm"
],
	"application/vnd.lotus-wordpro": [
	"lwp"
],
	"application/vnd.macports.portpkg": [
	"portpkg"
],
	"application/vnd.mcd": [
	"mcd"
],
	"application/vnd.medcalcdata": [
	"mc1"
],
	"application/vnd.mediastation.cdkey": [
	"cdkey"
],
	"application/vnd.mfer": [
	"mwf"
],
	"application/vnd.mfmp": [
	"mfm"
],
	"application/vnd.micrografx.flo": [
	"flo"
],
	"application/vnd.micrografx.igx": [
	"igx"
],
	"application/vnd.mif": [
	"mif"
],
	"application/vnd.mobius.daf": [
	"daf"
],
	"application/vnd.mobius.dis": [
	"dis"
],
	"application/vnd.mobius.mbk": [
	"mbk"
],
	"application/vnd.mobius.mqy": [
	"mqy"
],
	"application/vnd.mobius.msl": [
	"msl"
],
	"application/vnd.mobius.plc": [
	"plc"
],
	"application/vnd.mobius.txf": [
	"txf"
],
	"application/vnd.mophun.application": [
	"mpn"
],
	"application/vnd.mophun.certificate": [
	"mpc"
],
	"application/vnd.mozilla.xul+xml": [
	"xul"
],
	"application/vnd.ms-artgalry": [
	"cil"
],
	"application/vnd.ms-cab-compressed": [
	"cab"
],
	"application/vnd.ms-excel": [
	"xls",
	"xlm",
	"xla",
	"xlc",
	"xlt",
	"xlw"
],
	"application/vnd.ms-excel.addin.macroenabled.12": [
	"xlam"
],
	"application/vnd.ms-excel.sheet.binary.macroenabled.12": [
	"xlsb"
],
	"application/vnd.ms-excel.sheet.macroenabled.12": [
	"xlsm"
],
	"application/vnd.ms-excel.template.macroenabled.12": [
	"xltm"
],
	"application/vnd.ms-fontobject": [
	"eot"
],
	"application/vnd.ms-htmlhelp": [
	"chm"
],
	"application/vnd.ms-ims": [
	"ims"
],
	"application/vnd.ms-lrm": [
	"lrm"
],
	"application/vnd.ms-officetheme": [
	"thmx"
],
	"application/vnd.ms-outlook": [
	"msg"
],
	"application/vnd.ms-pki.seccat": [
	"cat"
],
	"application/vnd.ms-pki.stl": [
	"stl"
],
	"application/vnd.ms-powerpoint": [
	"ppt",
	"pps",
	"pot"
],
	"application/vnd.ms-powerpoint.addin.macroenabled.12": [
	"ppam"
],
	"application/vnd.ms-powerpoint.presentation.macroenabled.12": [
	"pptm"
],
	"application/vnd.ms-powerpoint.slide.macroenabled.12": [
	"sldm"
],
	"application/vnd.ms-powerpoint.slideshow.macroenabled.12": [
	"ppsm"
],
	"application/vnd.ms-powerpoint.template.macroenabled.12": [
	"potm"
],
	"application/vnd.ms-project": [
	"mpp",
	"mpt"
],
	"application/vnd.ms-word.document.macroenabled.12": [
	"docm"
],
	"application/vnd.ms-word.template.macroenabled.12": [
	"dotm"
],
	"application/vnd.ms-works": [
	"wps",
	"wks",
	"wcm",
	"wdb"
],
	"application/vnd.ms-wpl": [
	"wpl"
],
	"application/vnd.ms-xpsdocument": [
	"xps"
],
	"application/vnd.mseq": [
	"mseq"
],
	"application/vnd.musician": [
	"mus"
],
	"application/vnd.muvee.style": [
	"msty"
],
	"application/vnd.mynfc": [
	"taglet"
],
	"application/vnd.neurolanguage.nlu": [
	"nlu"
],
	"application/vnd.nitf": [
	"ntf",
	"nitf"
],
	"application/vnd.noblenet-directory": [
	"nnd"
],
	"application/vnd.noblenet-sealer": [
	"nns"
],
	"application/vnd.noblenet-web": [
	"nnw"
],
	"application/vnd.nokia.n-gage.data": [
	"ngdat"
],
	"application/vnd.nokia.n-gage.symbian.install": [
	"n-gage"
],
	"application/vnd.nokia.radio-preset": [
	"rpst"
],
	"application/vnd.nokia.radio-presets": [
	"rpss"
],
	"application/vnd.novadigm.edm": [
	"edm"
],
	"application/vnd.novadigm.edx": [
	"edx"
],
	"application/vnd.novadigm.ext": [
	"ext"
],
	"application/vnd.oasis.opendocument.chart": [
	"odc"
],
	"application/vnd.oasis.opendocument.chart-template": [
	"otc"
],
	"application/vnd.oasis.opendocument.database": [
	"odb"
],
	"application/vnd.oasis.opendocument.formula": [
	"odf"
],
	"application/vnd.oasis.opendocument.formula-template": [
	"odft"
],
	"application/vnd.oasis.opendocument.graphics": [
	"odg"
],
	"application/vnd.oasis.opendocument.graphics-template": [
	"otg"
],
	"application/vnd.oasis.opendocument.image": [
	"odi"
],
	"application/vnd.oasis.opendocument.image-template": [
	"oti"
],
	"application/vnd.oasis.opendocument.presentation": [
	"odp"
],
	"application/vnd.oasis.opendocument.presentation-template": [
	"otp"
],
	"application/vnd.oasis.opendocument.spreadsheet": [
	"ods"
],
	"application/vnd.oasis.opendocument.spreadsheet-template": [
	"ots"
],
	"application/vnd.oasis.opendocument.text": [
	"odt"
],
	"application/vnd.oasis.opendocument.text-master": [
	"odm"
],
	"application/vnd.oasis.opendocument.text-template": [
	"ott"
],
	"application/vnd.oasis.opendocument.text-web": [
	"oth"
],
	"application/vnd.olpc-sugar": [
	"xo"
],
	"application/vnd.oma.dd2+xml": [
	"dd2"
],
	"application/vnd.openofficeorg.extension": [
	"oxt"
],
	"application/vnd.openxmlformats-officedocument.presentationml.presentation": [
	"pptx"
],
	"application/vnd.openxmlformats-officedocument.presentationml.slide": [
	"sldx"
],
	"application/vnd.openxmlformats-officedocument.presentationml.slideshow": [
	"ppsx"
],
	"application/vnd.openxmlformats-officedocument.presentationml.template": [
	"potx"
],
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
	"xlsx"
],
	"application/vnd.openxmlformats-officedocument.spreadsheetml.template": [
	"xltx"
],
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
	"docx"
],
	"application/vnd.openxmlformats-officedocument.wordprocessingml.template": [
	"dotx"
],
	"application/vnd.osgeo.mapguide.package": [
	"mgp"
],
	"application/vnd.osgi.dp": [
	"dp"
],
	"application/vnd.osgi.subsystem": [
	"esa"
],
	"application/vnd.palm": [
	"pdb",
	"pqa",
	"oprc"
],
	"application/vnd.pawaafile": [
	"paw"
],
	"application/vnd.pg.format": [
	"str"
],
	"application/vnd.pg.osasli": [
	"ei6"
],
	"application/vnd.picsel": [
	"efif"
],
	"application/vnd.pmi.widget": [
	"wg"
],
	"application/vnd.pocketlearn": [
	"plf"
],
	"application/vnd.powerbuilder6": [
	"pbd"
],
	"application/vnd.previewsystems.box": [
	"box"
],
	"application/vnd.proteus.magazine": [
	"mgz"
],
	"application/vnd.publishare-delta-tree": [
	"qps"
],
	"application/vnd.pvi.ptid1": [
	"ptid"
],
	"application/vnd.quark.quarkxpress": [
	"qxd",
	"qxt",
	"qwd",
	"qwt",
	"qxl",
	"qxb"
],
	"application/vnd.realvnc.bed": [
	"bed"
],
	"application/vnd.recordare.musicxml": [
	"mxl"
],
	"application/vnd.recordare.musicxml+xml": [
	"musicxml"
],
	"application/vnd.rig.cryptonote": [
	"cryptonote"
],
	"application/vnd.rim.cod": [
	"cod"
],
	"application/vnd.rn-realmedia": [
	"rm"
],
	"application/vnd.rn-realmedia-vbr": [
	"rmvb"
],
	"application/vnd.route66.link66+xml": [
	"link66"
],
	"application/vnd.sailingtracker.track": [
	"st"
],
	"application/vnd.seemail": [
	"see"
],
	"application/vnd.sema": [
	"sema"
],
	"application/vnd.semd": [
	"semd"
],
	"application/vnd.semf": [
	"semf"
],
	"application/vnd.shana.informed.formdata": [
	"ifm"
],
	"application/vnd.shana.informed.formtemplate": [
	"itp"
],
	"application/vnd.shana.informed.interchange": [
	"iif"
],
	"application/vnd.shana.informed.package": [
	"ipk"
],
	"application/vnd.simtech-mindmapper": [
	"twd",
	"twds"
],
	"application/vnd.smaf": [
	"mmf"
],
	"application/vnd.smart.teacher": [
	"teacher"
],
	"application/vnd.solent.sdkm+xml": [
	"sdkm",
	"sdkd"
],
	"application/vnd.spotfire.dxp": [
	"dxp"
],
	"application/vnd.spotfire.sfs": [
	"sfs"
],
	"application/vnd.stardivision.calc": [
	"sdc"
],
	"application/vnd.stardivision.draw": [
	"sda"
],
	"application/vnd.stardivision.impress": [
	"sdd"
],
	"application/vnd.stardivision.math": [
	"smf"
],
	"application/vnd.stardivision.writer": [
	"sdw",
	"vor"
],
	"application/vnd.stardivision.writer-global": [
	"sgl"
],
	"application/vnd.stepmania.package": [
	"smzip"
],
	"application/vnd.stepmania.stepchart": [
	"sm"
],
	"application/vnd.sun.wadl+xml": [
	"wadl"
],
	"application/vnd.sun.xml.calc": [
	"sxc"
],
	"application/vnd.sun.xml.calc.template": [
	"stc"
],
	"application/vnd.sun.xml.draw": [
	"sxd"
],
	"application/vnd.sun.xml.draw.template": [
	"std"
],
	"application/vnd.sun.xml.impress": [
	"sxi"
],
	"application/vnd.sun.xml.impress.template": [
	"sti"
],
	"application/vnd.sun.xml.math": [
	"sxm"
],
	"application/vnd.sun.xml.writer": [
	"sxw"
],
	"application/vnd.sun.xml.writer.global": [
	"sxg"
],
	"application/vnd.sun.xml.writer.template": [
	"stw"
],
	"application/vnd.sus-calendar": [
	"sus",
	"susp"
],
	"application/vnd.svd": [
	"svd"
],
	"application/vnd.symbian.install": [
	"sis",
	"sisx"
],
	"application/vnd.syncml+xml": [
	"xsm"
],
	"application/vnd.syncml.dm+wbxml": [
	"bdm"
],
	"application/vnd.syncml.dm+xml": [
	"xdm"
],
	"application/vnd.tao.intent-module-archive": [
	"tao"
],
	"application/vnd.tcpdump.pcap": [
	"pcap",
	"cap",
	"dmp"
],
	"application/vnd.tmobile-livetv": [
	"tmo"
],
	"application/vnd.trid.tpt": [
	"tpt"
],
	"application/vnd.triscape.mxs": [
	"mxs"
],
	"application/vnd.trueapp": [
	"tra"
],
	"application/vnd.ufdl": [
	"ufd",
	"ufdl"
],
	"application/vnd.uiq.theme": [
	"utz"
],
	"application/vnd.umajin": [
	"umj"
],
	"application/vnd.unity": [
	"unityweb"
],
	"application/vnd.uoml+xml": [
	"uoml"
],
	"application/vnd.vcx": [
	"vcx"
],
	"application/vnd.visio": [
	"vsd",
	"vst",
	"vss",
	"vsw"
],
	"application/vnd.visionary": [
	"vis"
],
	"application/vnd.vsf": [
	"vsf"
],
	"application/vnd.wap.wbxml": [
	"wbxml"
],
	"application/vnd.wap.wmlc": [
	"wmlc"
],
	"application/vnd.wap.wmlscriptc": [
	"wmlsc"
],
	"application/vnd.webturbo": [
	"wtb"
],
	"application/vnd.wolfram.player": [
	"nbp"
],
	"application/vnd.wordperfect": [
	"wpd"
],
	"application/vnd.wqd": [
	"wqd"
],
	"application/vnd.wt.stf": [
	"stf"
],
	"application/vnd.xara": [
	"xar"
],
	"application/vnd.xfdl": [
	"xfdl"
],
	"application/vnd.yamaha.hv-dic": [
	"hvd"
],
	"application/vnd.yamaha.hv-script": [
	"hvs"
],
	"application/vnd.yamaha.hv-voice": [
	"hvp"
],
	"application/vnd.yamaha.openscoreformat": [
	"osf"
],
	"application/vnd.yamaha.openscoreformat.osfpvg+xml": [
	"osfpvg"
],
	"application/vnd.yamaha.smaf-audio": [
	"saf"
],
	"application/vnd.yamaha.smaf-phrase": [
	"spf"
],
	"application/vnd.yellowriver-custom-menu": [
	"cmp"
],
	"application/vnd.zul": [
	"zir",
	"zirz"
],
	"application/vnd.zzazz.deck+xml": [
	"zaz"
],
	"application/voicexml+xml": [
	"vxml"
],
	"application/widget": [
	"wgt"
],
	"application/winhlp": [
	"hlp"
],
	"application/wsdl+xml": [
	"wsdl"
],
	"application/wspolicy+xml": [
	"wspolicy"
],
	"application/x-7z-compressed": [
	"7z"
],
	"application/x-abiword": [
	"abw"
],
	"application/x-ace-compressed": [
	"ace"
],
	"application/x-apple-diskimage": [
	"dmg"
],
	"application/x-arj": [
	"arj"
],
	"application/x-authorware-bin": [
	"aab",
	"x32",
	"u32",
	"vox"
],
	"application/x-authorware-map": [
	"aam"
],
	"application/x-authorware-seg": [
	"aas"
],
	"application/x-bcpio": [
	"bcpio"
],
	"application/x-bdoc": [
	"bdoc"
],
	"application/x-bittorrent": [
	"torrent"
],
	"application/x-blorb": [
	"blb",
	"blorb"
],
	"application/x-bzip": [
	"bz"
],
	"application/x-bzip2": [
	"bz2",
	"boz"
],
	"application/x-cbr": [
	"cbr",
	"cba",
	"cbt",
	"cbz",
	"cb7"
],
	"application/x-cdlink": [
	"vcd"
],
	"application/x-cfs-compressed": [
	"cfs"
],
	"application/x-chat": [
	"chat"
],
	"application/x-chess-pgn": [
	"pgn"
],
	"application/x-chrome-extension": [
	"crx"
],
	"application/x-cocoa": [
	"cco"
],
	"application/x-conference": [
	"nsc"
],
	"application/x-cpio": [
	"cpio"
],
	"application/x-csh": [
	"csh"
],
	"application/x-debian-package": [
	"deb",
	"udeb"
],
	"application/x-dgc-compressed": [
	"dgc"
],
	"application/x-director": [
	"dir",
	"dcr",
	"dxr",
	"cst",
	"cct",
	"cxt",
	"w3d",
	"fgd",
	"swa"
],
	"application/x-doom": [
	"wad"
],
	"application/x-dtbncx+xml": [
	"ncx"
],
	"application/x-dtbook+xml": [
	"dtb"
],
	"application/x-dtbresource+xml": [
	"res"
],
	"application/x-dvi": [
	"dvi"
],
	"application/x-envoy": [
	"evy"
],
	"application/x-eva": [
	"eva"
],
	"application/x-font-bdf": [
	"bdf"
],
	"application/x-font-ghostscript": [
	"gsf"
],
	"application/x-font-linux-psf": [
	"psf"
],
	"application/x-font-otf": [
	"otf"
],
	"application/x-font-pcf": [
	"pcf"
],
	"application/x-font-snf": [
	"snf"
],
	"application/x-font-ttf": [
	"ttf",
	"ttc"
],
	"application/x-font-type1": [
	"pfa",
	"pfb",
	"pfm",
	"afm"
],
	"application/x-freearc": [
	"arc"
],
	"application/x-futuresplash": [
	"spl"
],
	"application/x-gca-compressed": [
	"gca"
],
	"application/x-glulx": [
	"ulx"
],
	"application/x-gnumeric": [
	"gnumeric"
],
	"application/x-gramps-xml": [
	"gramps"
],
	"application/x-gtar": [
	"gtar"
],
	"application/x-hdf": [
	"hdf"
],
	"application/x-httpd-php": [
	"php"
],
	"application/x-install-instructions": [
	"install"
],
	"application/x-iso9660-image": [
	"iso"
],
	"application/x-java-archive-diff": [
	"jardiff"
],
	"application/x-java-jnlp-file": [
	"jnlp"
],
	"application/x-latex": [
	"latex"
],
	"application/x-lua-bytecode": [
	"luac"
],
	"application/x-lzh-compressed": [
	"lzh",
	"lha"
],
	"application/x-makeself": [
	"run"
],
	"application/x-mie": [
	"mie"
],
	"application/x-mobipocket-ebook": [
	"prc",
	"mobi"
],
	"application/x-ms-application": [
	"application"
],
	"application/x-ms-shortcut": [
	"lnk"
],
	"application/x-ms-wmd": [
	"wmd"
],
	"application/x-ms-wmz": [
	"wmz"
],
	"application/x-ms-xbap": [
	"xbap"
],
	"application/x-msaccess": [
	"mdb"
],
	"application/x-msbinder": [
	"obd"
],
	"application/x-mscardfile": [
	"crd"
],
	"application/x-msclip": [
	"clp"
],
	"application/x-msdos-program": [
	"exe"
],
	"application/x-msdownload": [
	"exe",
	"dll",
	"com",
	"bat",
	"msi"
],
	"application/x-msmediaview": [
	"mvb",
	"m13",
	"m14"
],
	"application/x-msmetafile": [
	"wmf",
	"wmz",
	"emf",
	"emz"
],
	"application/x-msmoney": [
	"mny"
],
	"application/x-mspublisher": [
	"pub"
],
	"application/x-msschedule": [
	"scd"
],
	"application/x-msterminal": [
	"trm"
],
	"application/x-mswrite": [
	"wri"
],
	"application/x-netcdf": [
	"nc",
	"cdf"
],
	"application/x-ns-proxy-autoconfig": [
	"pac"
],
	"application/x-nzb": [
	"nzb"
],
	"application/x-perl": [
	"pl",
	"pm"
],
	"application/x-pilot": [
	"prc",
	"pdb"
],
	"application/x-pkcs12": [
	"p12",
	"pfx"
],
	"application/x-pkcs7-certificates": [
	"p7b",
	"spc"
],
	"application/x-pkcs7-certreqresp": [
	"p7r"
],
	"application/x-rar-compressed": [
	"rar"
],
	"application/x-redhat-package-manager": [
	"rpm"
],
	"application/x-research-info-systems": [
	"ris"
],
	"application/x-sea": [
	"sea"
],
	"application/x-sh": [
	"sh"
],
	"application/x-shar": [
	"shar"
],
	"application/x-shockwave-flash": [
	"swf"
],
	"application/x-silverlight-app": [
	"xap"
],
	"application/x-sql": [
	"sql"
],
	"application/x-stuffit": [
	"sit"
],
	"application/x-stuffitx": [
	"sitx"
],
	"application/x-subrip": [
	"srt"
],
	"application/x-sv4cpio": [
	"sv4cpio"
],
	"application/x-sv4crc": [
	"sv4crc"
],
	"application/x-t3vm-image": [
	"t3"
],
	"application/x-tads": [
	"gam"
],
	"application/x-tar": [
	"tar"
],
	"application/x-tcl": [
	"tcl",
	"tk"
],
	"application/x-tex": [
	"tex"
],
	"application/x-tex-tfm": [
	"tfm"
],
	"application/x-texinfo": [
	"texinfo",
	"texi"
],
	"application/x-tgif": [
	"obj"
],
	"application/x-ustar": [
	"ustar"
],
	"application/x-virtualbox-hdd": [
	"hdd"
],
	"application/x-virtualbox-ova": [
	"ova"
],
	"application/x-virtualbox-ovf": [
	"ovf"
],
	"application/x-virtualbox-vbox": [
	"vbox"
],
	"application/x-virtualbox-vbox-extpack": [
	"vbox-extpack"
],
	"application/x-virtualbox-vdi": [
	"vdi"
],
	"application/x-virtualbox-vhd": [
	"vhd"
],
	"application/x-virtualbox-vmdk": [
	"vmdk"
],
	"application/x-wais-source": [
	"src"
],
	"application/x-web-app-manifest+json": [
	"webapp"
],
	"application/x-x509-ca-cert": [
	"der",
	"crt",
	"pem"
],
	"application/x-xfig": [
	"fig"
],
	"application/x-xliff+xml": [
	"xlf"
],
	"application/x-xpinstall": [
	"xpi"
],
	"application/x-xz": [
	"xz"
],
	"application/x-zmachine": [
	"z1",
	"z2",
	"z3",
	"z4",
	"z5",
	"z6",
	"z7",
	"z8"
],
	"application/xaml+xml": [
	"xaml"
],
	"application/xcap-diff+xml": [
	"xdf"
],
	"application/xenc+xml": [
	"xenc"
],
	"application/xhtml+xml": [
	"xhtml",
	"xht"
],
	"application/xml": [
	"xml",
	"xsl",
	"xsd",
	"rng"
],
	"application/xml-dtd": [
	"dtd"
],
	"application/xop+xml": [
	"xop"
],
	"application/xproc+xml": [
	"xpl"
],
	"application/xslt+xml": [
	"xslt"
],
	"application/xspf+xml": [
	"xspf"
],
	"application/xv+xml": [
	"mxml",
	"xhvml",
	"xvml",
	"xvm"
],
	"application/yang": [
	"yang"
],
	"application/yin+xml": [
	"yin"
],
	"application/zip": [
	"zip"
],
	"audio/3gpp": [
	"3gpp"
],
	"audio/adpcm": [
	"adp"
],
	"audio/basic": [
	"au",
	"snd"
],
	"audio/midi": [
	"mid",
	"midi",
	"kar",
	"rmi"
],
	"audio/mp3": [
	"mp3"
],
	"audio/mp4": [
	"m4a",
	"mp4a"
],
	"audio/mpeg": [
	"mpga",
	"mp2",
	"mp2a",
	"mp3",
	"m2a",
	"m3a"
],
	"audio/ogg": [
	"oga",
	"ogg",
	"spx"
],
	"audio/s3m": [
	"s3m"
],
	"audio/silk": [
	"sil"
],
	"audio/vnd.dece.audio": [
	"uva",
	"uvva"
],
	"audio/vnd.digital-winds": [
	"eol"
],
	"audio/vnd.dra": [
	"dra"
],
	"audio/vnd.dts": [
	"dts"
],
	"audio/vnd.dts.hd": [
	"dtshd"
],
	"audio/vnd.lucent.voice": [
	"lvp"
],
	"audio/vnd.ms-playready.media.pya": [
	"pya"
],
	"audio/vnd.nuera.ecelp4800": [
	"ecelp4800"
],
	"audio/vnd.nuera.ecelp7470": [
	"ecelp7470"
],
	"audio/vnd.nuera.ecelp9600": [
	"ecelp9600"
],
	"audio/vnd.rip": [
	"rip"
],
	"audio/wav": [
	"wav"
],
	"audio/wave": [
	"wav"
],
	"audio/webm": [
	"weba"
],
	"audio/x-aac": [
	"aac"
],
	"audio/x-aiff": [
	"aif",
	"aiff",
	"aifc"
],
	"audio/x-caf": [
	"caf"
],
	"audio/x-flac": [
	"flac"
],
	"audio/x-m4a": [
	"m4a"
],
	"audio/x-matroska": [
	"mka"
],
	"audio/x-mpegurl": [
	"m3u"
],
	"audio/x-ms-wax": [
	"wax"
],
	"audio/x-ms-wma": [
	"wma"
],
	"audio/x-pn-realaudio": [
	"ram",
	"ra"
],
	"audio/x-pn-realaudio-plugin": [
	"rmp"
],
	"audio/x-realaudio": [
	"ra"
],
	"audio/x-wav": [
	"wav"
],
	"audio/xm": [
	"xm"
],
	"chemical/x-cdx": [
	"cdx"
],
	"chemical/x-cif": [
	"cif"
],
	"chemical/x-cmdf": [
	"cmdf"
],
	"chemical/x-cml": [
	"cml"
],
	"chemical/x-csml": [
	"csml"
],
	"chemical/x-xyz": [
	"xyz"
],
	"font/otf": [
	"otf"
],
	"image/apng": [
	"apng"
],
	"image/bmp": [
	"bmp"
],
	"image/cgm": [
	"cgm"
],
	"image/g3fax": [
	"g3"
],
	"image/gif": [
	"gif"
],
	"image/ief": [
	"ief"
],
	"image/jpeg": [
	"jpeg",
	"jpg",
	"jpe"
],
	"image/ktx": [
	"ktx"
],
	"image/png": [
	"png"
],
	"image/prs.btif": [
	"btif"
],
	"image/sgi": [
	"sgi"
],
	"image/svg+xml": [
	"svg",
	"svgz"
],
	"image/tiff": [
	"tiff",
	"tif"
],
	"image/vnd.adobe.photoshop": [
	"psd"
],
	"image/vnd.dece.graphic": [
	"uvi",
	"uvvi",
	"uvg",
	"uvvg"
],
	"image/vnd.djvu": [
	"djvu",
	"djv"
],
	"image/vnd.dvb.subtitle": [
	"sub"
],
	"image/vnd.dwg": [
	"dwg"
],
	"image/vnd.dxf": [
	"dxf"
],
	"image/vnd.fastbidsheet": [
	"fbs"
],
	"image/vnd.fpx": [
	"fpx"
],
	"image/vnd.fst": [
	"fst"
],
	"image/vnd.fujixerox.edmics-mmr": [
	"mmr"
],
	"image/vnd.fujixerox.edmics-rlc": [
	"rlc"
],
	"image/vnd.ms-modi": [
	"mdi"
],
	"image/vnd.ms-photo": [
	"wdp"
],
	"image/vnd.net-fpx": [
	"npx"
],
	"image/vnd.wap.wbmp": [
	"wbmp"
],
	"image/vnd.xiff": [
	"xif"
],
	"image/webp": [
	"webp"
],
	"image/x-3ds": [
	"3ds"
],
	"image/x-cmu-raster": [
	"ras"
],
	"image/x-cmx": [
	"cmx"
],
	"image/x-freehand": [
	"fh",
	"fhc",
	"fh4",
	"fh5",
	"fh7"
],
	"image/x-icon": [
	"ico"
],
	"image/x-jng": [
	"jng"
],
	"image/x-mrsid-image": [
	"sid"
],
	"image/x-ms-bmp": [
	"bmp"
],
	"image/x-pcx": [
	"pcx"
],
	"image/x-pict": [
	"pic",
	"pct"
],
	"image/x-portable-anymap": [
	"pnm"
],
	"image/x-portable-bitmap": [
	"pbm"
],
	"image/x-portable-graymap": [
	"pgm"
],
	"image/x-portable-pixmap": [
	"ppm"
],
	"image/x-rgb": [
	"rgb"
],
	"image/x-tga": [
	"tga"
],
	"image/x-xbitmap": [
	"xbm"
],
	"image/x-xpixmap": [
	"xpm"
],
	"image/x-xwindowdump": [
	"xwd"
],
	"message/rfc822": [
	"eml",
	"mime"
],
	"model/gltf+json": [
	"gltf"
],
	"model/gltf-binary": [
	"glb"
],
	"model/iges": [
	"igs",
	"iges"
],
	"model/mesh": [
	"msh",
	"mesh",
	"silo"
],
	"model/vnd.collada+xml": [
	"dae"
],
	"model/vnd.dwf": [
	"dwf"
],
	"model/vnd.gdl": [
	"gdl"
],
	"model/vnd.gtw": [
	"gtw"
],
	"model/vnd.mts": [
	"mts"
],
	"model/vnd.vtu": [
	"vtu"
],
	"model/vrml": [
	"wrl",
	"vrml"
],
	"model/x3d+binary": [
	"x3db",
	"x3dbz"
],
	"model/x3d+vrml": [
	"x3dv",
	"x3dvz"
],
	"model/x3d+xml": [
	"x3d",
	"x3dz"
],
	"text/cache-manifest": [
	"appcache",
	"manifest"
],
	"text/calendar": [
	"ics",
	"ifb"
],
	"text/coffeescript": [
	"coffee",
	"litcoffee"
],
	"text/css": [
	"css"
],
	"text/csv": [
	"csv"
],
	"text/hjson": [
	"hjson"
],
	"text/html": [
	"html",
	"htm",
	"shtml"
],
	"text/jade": [
	"jade"
],
	"text/jsx": [
	"jsx"
],
	"text/less": [
	"less"
],
	"text/markdown": [
	"markdown",
	"md"
],
	"text/mathml": [
	"mml"
],
	"text/n3": [
	"n3"
],
	"text/plain": [
	"txt",
	"text",
	"conf",
	"def",
	"list",
	"log",
	"in",
	"ini"
],
	"text/prs.lines.tag": [
	"dsc"
],
	"text/richtext": [
	"rtx"
],
	"text/rtf": [
	"rtf"
],
	"text/sgml": [
	"sgml",
	"sgm"
],
	"text/slim": [
	"slim",
	"slm"
],
	"text/stylus": [
	"stylus",
	"styl"
],
	"text/tab-separated-values": [
	"tsv"
],
	"text/troff": [
	"t",
	"tr",
	"roff",
	"man",
	"me",
	"ms"
],
	"text/turtle": [
	"ttl"
],
	"text/uri-list": [
	"uri",
	"uris",
	"urls"
],
	"text/vcard": [
	"vcard"
],
	"text/vnd.curl": [
	"curl"
],
	"text/vnd.curl.dcurl": [
	"dcurl"
],
	"text/vnd.curl.mcurl": [
	"mcurl"
],
	"text/vnd.curl.scurl": [
	"scurl"
],
	"text/vnd.dvb.subtitle": [
	"sub"
],
	"text/vnd.fly": [
	"fly"
],
	"text/vnd.fmi.flexstor": [
	"flx"
],
	"text/vnd.graphviz": [
	"gv"
],
	"text/vnd.in3d.3dml": [
	"3dml"
],
	"text/vnd.in3d.spot": [
	"spot"
],
	"text/vnd.sun.j2me.app-descriptor": [
	"jad"
],
	"text/vnd.wap.wml": [
	"wml"
],
	"text/vnd.wap.wmlscript": [
	"wmls"
],
	"text/vtt": [
	"vtt"
],
	"text/x-asm": [
	"s",
	"asm"
],
	"text/x-c": [
	"c",
	"cc",
	"cxx",
	"cpp",
	"h",
	"hh",
	"dic"
],
	"text/x-component": [
	"htc"
],
	"text/x-fortran": [
	"f",
	"for",
	"f77",
	"f90"
],
	"text/x-handlebars-template": [
	"hbs"
],
	"text/x-java-source": [
	"java"
],
	"text/x-lua": [
	"lua"
],
	"text/x-markdown": [
	"mkd"
],
	"text/x-nfo": [
	"nfo"
],
	"text/x-opml": [
	"opml"
],
	"text/x-org": [
	"org"
],
	"text/x-pascal": [
	"p",
	"pas"
],
	"text/x-processing": [
	"pde"
],
	"text/x-sass": [
	"sass"
],
	"text/x-scss": [
	"scss"
],
	"text/x-setext": [
	"etx"
],
	"text/x-sfv": [
	"sfv"
],
	"text/x-suse-ymp": [
	"ymp"
],
	"text/x-uuencode": [
	"uu"
],
	"text/x-vcalendar": [
	"vcs"
],
	"text/x-vcard": [
	"vcf"
],
	"text/xml": [
	"xml"
],
	"text/yaml": [
	"yaml",
	"yml"
],
	"video/3gpp": [
	"3gp",
	"3gpp"
],
	"video/3gpp2": [
	"3g2"
],
	"video/h261": [
	"h261"
],
	"video/h263": [
	"h263"
],
	"video/h264": [
	"h264"
],
	"video/jpeg": [
	"jpgv"
],
	"video/jpm": [
	"jpm",
	"jpgm"
],
	"video/mj2": [
	"mj2",
	"mjp2"
],
	"video/mp2t": [
	"ts"
],
	"video/mp4": [
	"mp4",
	"mp4v",
	"mpg4"
],
	"video/mpeg": [
	"mpeg",
	"mpg",
	"mpe",
	"m1v",
	"m2v"
],
	"video/ogg": [
	"ogv"
],
	"video/quicktime": [
	"qt",
	"mov"
],
	"video/vnd.dece.hd": [
	"uvh",
	"uvvh"
],
	"video/vnd.dece.mobile": [
	"uvm",
	"uvvm"
],
	"video/vnd.dece.pd": [
	"uvp",
	"uvvp"
],
	"video/vnd.dece.sd": [
	"uvs",
	"uvvs"
],
	"video/vnd.dece.video": [
	"uvv",
	"uvvv"
],
	"video/vnd.dvb.file": [
	"dvb"
],
	"video/vnd.fvt": [
	"fvt"
],
	"video/vnd.mpegurl": [
	"mxu",
	"m4u"
],
	"video/vnd.ms-playready.media.pyv": [
	"pyv"
],
	"video/vnd.uvvu.mp4": [
	"uvu",
	"uvvu"
],
	"video/vnd.vivo": [
	"viv"
],
	"video/webm": [
	"webm"
],
	"video/x-f4v": [
	"f4v"
],
	"video/x-fli": [
	"fli"
],
	"video/x-flv": [
	"flv"
],
	"video/x-m4v": [
	"m4v"
],
	"video/x-matroska": [
	"mkv",
	"mk3d",
	"mks"
],
	"video/x-mng": [
	"mng"
],
	"video/x-ms-asf": [
	"asf",
	"asx"
],
	"video/x-ms-vob": [
	"vob"
],
	"video/x-ms-wm": [
	"wm"
],
	"video/x-ms-wmv": [
	"wmv"
],
	"video/x-ms-wmx": [
	"wmx"
],
	"video/x-ms-wvx": [
	"wvx"
],
	"video/x-msvideo": [
	"avi"
],
	"video/x-sgi-movie": [
	"movie"
],
	"video/x-smv": [
	"smv"
],
	"x-conference/x-cooltalk": [
	"ice"
]
};

var fs$2 = FS__default["default"];

function Mime() {
  // Map of extension -> mime type
  this.types = Object.create(null);

  // Map of mime type -> extension
  this.extensions = Object.create(null);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * @param map (Object) type definitions
 */
Mime.prototype.define = function (map) {
  for (var type in map) {
    var exts = map[type];
    for (var i = 0; i < exts.length; i++) {
      if (process.env.DEBUG_MIME && this.types[exts[i]]) {
        console.warn((this._loading || "define()").replace(/.*\//, ''), 'changes "' + exts[i] + '" extension type from ' +
          this.types[exts[i]] + ' to ' + type);
      }

      this.types[exts[i]] = type;
    }

    // Default extension is the first one we encounter
    if (!this.extensions[type]) {
      this.extensions[type] = exts[0];
    }
  }
};

/**
 * Load an Apache2-style ".types" file
 *
 * This may be called multiple times (it's expected).  Where files declare
 * overlapping types/extensions, the last file wins.
 *
 * @param file (String) path of file to load.
 */
Mime.prototype.load = function(file) {
  this._loading = file;
  // Read file and split into lines
  var map = {},
      content = fs$2.readFileSync(file, 'ascii'),
      lines = content.split(/[\r\n]+/);

  lines.forEach(function(line) {
    // Clean up whitespace/comments, and split into fields
    var fields = line.replace(/\s*#.*|^\s*|\s*$/g, '').split(/\s+/);
    map[fields.shift()] = fields;
  });

  this.define(map);

  this._loading = null;
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.lookup = function(path, fallback) {
  var ext = path.replace(/^.*[\.\/\\]/, '').toLowerCase();

  return this.types[ext] || fallback || this.default_type;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.extension = function(mimeType) {
  var type = mimeType.match(/^\s*([^;\s]*)(?:;|\s|$)/)[1].toLowerCase();
  return this.extensions[type];
};

// Default instance
var mime$1 = new Mime();

// Define built-in types
mime$1.define(require$$2);

// Default type
mime$1.default_type = mime$1.lookup('bin');

//
// Additional API specific to the default instance
//

mime$1.Mime = Mime;

/**
 * Lookup a charset based on mime type.
 */
mime$1.charsets = {
  lookup: function(mimeType, fallback) {
    // Assume text types are utf8
    return (/^text\/|^application\/(javascript|json)/).test(mimeType) ? 'UTF-8' : fallback;
  }
};

var mime_1 = mime$1;

var util$1 = {};

var fs$1   = FS__default["default"]
  , path$1 = PATH__default["default"];

util$1.mstat = function (dir, files, callback) {
    (function mstat(files, stats) {
        var file = files.shift();

        if (file) {
            fs$1.stat(path$1.join(dir, file), function (e, stat) {
                if (e) {
                    callback(e);
                } else {
                    mstat(files, stats.concat([stat]));
                }
            });
        } else {
            callback(null, {
                size: stats.reduce(function (total, stat) {
                    return total + stat.size;
                }, 0),
                mtime: stats.reduce(function (latest, stat) {
                    return latest > stat.mtime ? latest : stat.mtime;
                }, 0),
                ino: stats.reduce(function (total, stat) {
                    return total + stat.ino;
                }, 0)
            });
        }
    })(files.slice(0), []);
};

var fs     = FS__default["default"]
  , events = require$$1__default["default"]
  , http   = HTTP__default["default"]
  , url    = URL__default["default"]
  , path   = PATH__default["default"]
  , mime   = mime_1
  , util   = util$1;

// Current version
var version = [0, 7, 9];

var Server = function (root, options) {
    if (root && (typeof(root) === 'object')) { options = root; root = null; }

    // resolve() doesn't normalize (to lowercase) drive letters on Windows
    this.root    = path.normalize(path.resolve(root || '.'));
    this.options = options || {};
    this.cache   = 3600;

    this.defaultHeaders  = {};
    this.options.headers = this.options.headers || {};

    this.options.indexFile = this.options.indexFile || "index.html";

    if ('cache' in this.options) {
        if (typeof(this.options.cache) === 'number') {
            this.cache = this.options.cache;
        } else if (! this.options.cache) {
            this.cache = false;
        }
    }

    if ('serverInfo' in this.options) {
        this.serverInfo = this.options.serverInfo.toString();
    } else {
        this.serverInfo = 'node-static/' + version.join('.');
    }

    this.defaultHeaders['server'] = this.serverInfo;

    if (this.cache !== false) {
        this.defaultHeaders['cache-control'] = 'max-age=' + this.cache;
    }

    for (var k in this.defaultHeaders) {
        this.options.headers[k] = this.options.headers[k] ||
                                  this.defaultHeaders[k];
    }
};

Server.prototype.serveDir = function (pathname, req, res, finish) {
    var htmlIndex = path.join(pathname, this.options.indexFile),
        that = this;

    fs.stat(htmlIndex, function (e, stat) {
        if (!e) {
            var status = 200;
            var headers = {};
            var originalPathname = decodeURI(url.parse(req.url).pathname);
            if (originalPathname.length && originalPathname.charAt(originalPathname.length - 1) !== '/') {
                return finish(301, { 'Location': originalPathname + '/' });
            } else {
                that.respond(null, status, headers, [htmlIndex], stat, req, res, finish);
            }
        } else {
            // Stream a directory of files as a single file.
            fs.readFile(path.join(pathname, 'index.json'), function (e, contents) {
                if (e) { return finish(404, {}) }
                var index = JSON.parse(contents);
                streamFiles(index.files);
            });
        }
    });
    function streamFiles(files) {
        util.mstat(pathname, files, function (e, stat) {
            if (e) { return finish(404, {}) }
            that.respond(pathname, 200, {}, files, stat, req, res, finish);
        });
    }
};

Server.prototype.serveFile = function (pathname, status, headers, req, res) {
    var that = this;
    var promise = new(events.EventEmitter);

    pathname = this.resolve(pathname);

    fs.stat(pathname, function (e, stat) {
        if (e) {
            return promise.emit('error', e);
        }
        that.respond(null, status, headers, [pathname], stat, req, res, function (status, headers) {
            that.finish(status, headers, req, res, promise);
        });
    });
    return promise;
};

Server.prototype.finish = function (status, headers, req, res, promise, callback) {
    var result = {
        status:  status,
        headers: headers,
        message: http.STATUS_CODES[status]
    };

    headers['server'] = this.serverInfo;

    if (!status || status >= 400) {
        if (callback) {
            callback(result);
        } else {
            if (promise.listeners('error').length > 0) {
                promise.emit('error', result);
            }
            else {
              res.writeHead(status, headers);
              res.end();
            }
        }
    } else {
        // Don't end the request here, if we're streaming;
        // it's taken care of in `prototype.stream`.
        if (status !== 200 || req.method !== 'GET') {
            res.writeHead(status, headers);
            res.end();
        }
        callback && callback(null, result);
        promise.emit('success', result);
    }
};

Server.prototype.servePath = function (pathname, status, headers, req, res, finish) {
    var that = this,
        promise = new(events.EventEmitter);

    pathname = this.resolve(pathname);

    // Make sure we're not trying to access a
    // file outside of the root.
    if (pathname.indexOf(that.root) === 0) {
        fs.stat(pathname, function (e, stat) {
            if (e) {
                finish(404, {});
            } else if (stat.isFile()) {      // Stream a single file.
                that.respond(null, status, headers, [pathname], stat, req, res, finish);
            } else if (stat.isDirectory()) { // Stream a directory of files.
                that.serveDir(pathname, req, res, finish);
            } else {
                finish(400, {});
            }
        });
    } else {
        // Forbidden
        finish(403, {});
    }
    return promise;
};

Server.prototype.resolve = function (pathname) {
    return path.resolve(path.join(this.root, pathname));
};

Server.prototype.serve = function (req, res, callback) {
    var that    = this,
        promise = new(events.EventEmitter),
        pathname;

    var finish = function (status, headers) {
        that.finish(status, headers, req, res, promise, callback);
    };

    try {
        pathname = decodeURI(url.parse(req.url).pathname);
    }
    catch(e) {
        return process.nextTick(function() {
            return finish(400, {});
        });
    }

    process.nextTick(function () {
        that.servePath(pathname, 200, {}, req, res, finish).on('success', function (result) {
            promise.emit('success', result);
        }).on('error', function (err) {
            promise.emit('error');
        });
    });
    if (! callback) { return promise }
};

/* Check if we should consider sending a gzip version of the file based on the
 * file content type and client's Accept-Encoding header value.
 */
Server.prototype.gzipOk = function (req, contentType) {
    var enable = this.options.gzip;
    if(enable &&
        (typeof enable === 'boolean' ||
            (contentType && (enable instanceof RegExp) && enable.test(contentType)))) {
        var acceptEncoding = req.headers['accept-encoding'];
        return acceptEncoding && acceptEncoding.indexOf("gzip") >= 0;
    }
    return false;
};

/* Send a gzipped version of the file if the options and the client indicate gzip is enabled and
 * we find a .gz file mathing the static resource requested.
 */
Server.prototype.respondGzip = function (pathname, status, contentType, _headers, files, stat, req, res, finish) {
    var that = this;
    if (files.length == 1 && this.gzipOk(req, contentType)) {
        var gzFile = files[0] + ".gz";
        fs.stat(gzFile, function (e, gzStat) {
            if (!e && gzStat.isFile()) {
                var vary = _headers['Vary'];
                _headers['Vary'] = (vary && vary != 'Accept-Encoding' ? vary + ', ' : '') + 'Accept-Encoding';
                _headers['Content-Encoding'] = 'gzip';
                stat.size = gzStat.size;
                files = [gzFile];
            }
            that.respondNoGzip(pathname, status, contentType, _headers, files, stat, req, res, finish);
        });
    } else {
        // Client doesn't want gzip or we're sending multiple files
        that.respondNoGzip(pathname, status, contentType, _headers, files, stat, req, res, finish);
    }
};

Server.prototype.parseByteRange = function (req, stat) {
    var byteRange = {
      from: 0,
      to: 0,
      valid: false
    };

    var rangeHeader = req.headers['range'];
    var flavor = 'bytes=';

    if (rangeHeader) {
        if (rangeHeader.indexOf(flavor) == 0 && rangeHeader.indexOf(',') == -1) {
            /* Parse */
            rangeHeader = rangeHeader.substr(flavor.length).split('-');
            byteRange.from = parseInt(rangeHeader[0]);
            byteRange.to = parseInt(rangeHeader[1]);

            /* Replace empty fields of differential requests by absolute values */
            if (isNaN(byteRange.from) && !isNaN(byteRange.to)) {
                byteRange.from = stat.size - byteRange.to;
                byteRange.to = stat.size ? stat.size - 1 : 0;
            } else if (!isNaN(byteRange.from) && isNaN(byteRange.to)) {
                byteRange.to = stat.size ? stat.size - 1 : 0;
            }

            /* General byte range validation */
            if (!isNaN(byteRange.from) && !!byteRange.to && 0 <= byteRange.from && byteRange.from < byteRange.to) {
                byteRange.valid = true;
            } else {
                console.warn("Request contains invalid range header: ", rangeHeader);
            }
        } else {
            console.warn("Request contains unsupported range header: ", rangeHeader);
        }
    }
    return byteRange;
};

Server.prototype.respondNoGzip = function (pathname, status, contentType, _headers, files, stat, req, res, finish) {
    var mtime           = Date.parse(stat.mtime),
        key             = pathname || files[0],
        headers         = {},
        clientETag      = req.headers['if-none-match'],
        clientMTime     = Date.parse(req.headers['if-modified-since']),
        startByte       = 0,
        length          = stat.size,
        byteRange       = this.parseByteRange(req, stat);

    /* Handle byte ranges */
    if (files.length == 1 && byteRange.valid) {
        if (byteRange.to < length) {

            // Note: HTTP Range param is inclusive
            startByte = byteRange.from;
            length = byteRange.to - byteRange.from + 1;
            status = 206;

            // Set Content-Range response header (we advertise initial resource size on server here (stat.size))
            headers['Content-Range'] = 'bytes ' + byteRange.from + '-' + byteRange.to + '/' + stat.size;

        } else {
            byteRange.valid = false;
            console.warn("Range request exceeds file boundaries, goes until byte no", byteRange.to, "against file size of", length, "bytes");
        }
    }

    /* In any case, check for unhandled byte range headers */
    if (!byteRange.valid && req.headers['range']) {
        console.error(new Error("Range request present but invalid, might serve whole file instead"));
    }

    // Copy default headers
    for (var k in this.options.headers) {  headers[k] = this.options.headers[k]; }
    // Copy custom headers
    for (var k in _headers) { headers[k] = _headers[k]; }

    headers['Etag']          = JSON.stringify([stat.ino, stat.size, mtime].join('-'));
    headers['Date']          = new(Date)().toUTCString();
    headers['Last-Modified'] = new(Date)(stat.mtime).toUTCString();
    headers['Content-Type']   = contentType;
    headers['Content-Length'] = length;

    for (var k in _headers) { headers[k] = _headers[k]; }

    // Conditional GET
    // If the "If-Modified-Since" or "If-None-Match" headers
    // match the conditions, send a 304 Not Modified.
    if ((clientMTime  || clientETag) &&
        (!clientETag  || clientETag === headers['Etag']) &&
        (!clientMTime || clientMTime >= mtime)) {
        // 304 response should not contain entity headers
        ['Content-Encoding',
         'Content-Language',
         'Content-Length',
         'Content-Location',
         'Content-MD5',
         'Content-Range',
         'Content-Type',
         'Expires',
         'Last-Modified'].forEach(function (entityHeader) {
            delete headers[entityHeader];
        });
        finish(304, headers);
    } else {
        res.writeHead(status, headers);

        this.stream(key, files, length, startByte, res, function (e) {
            if (e) { return finish(500, {}) }
            finish(status, headers);
        });
    }
};

Server.prototype.respond = function (pathname, status, _headers, files, stat, req, res, finish) {
    var contentType = _headers['Content-Type'] ||
                      mime.lookup(files[0]) ||
                      'application/octet-stream';

    if(this.options.gzip) {
        this.respondGzip(pathname, status, contentType, _headers, files, stat, req, res, finish);
    } else {
        this.respondNoGzip(pathname, status, contentType, _headers, files, stat, req, res, finish);
    }
};

Server.prototype.stream = function (pathname, files, length, startByte, res, callback) {

    (function streamFile(files, offset) {
        var file = files.shift();

        if (file) {
            file = path.resolve(file) === path.normalize(file)  ? file : path.join(pathname || '.', file);

            // Stream the file to the client
            fs.createReadStream(file, {
                flags: 'r',
                mode: 0o666,
                start: startByte,
                end: startByte + (length ? length - 1 : 0)
            }).on('data', function (chunk) {
                // Bounds check the incoming chunk and offset, as copying
                // a buffer from an invalid offset will throw an error and crash
                if (chunk.length && offset < length && offset >= 0) {
                    offset += chunk.length;
                }
            }).on('close', function () {
                streamFile(files, offset);
            }).on('error', function (err) {
                callback(err);
                console.error(err);
            }).pipe(res, { end: false });
        } else {
            res.end();
            callback(null, offset);
        }
    })(files.slice(0), 0);
};

// Exports
nodeStatic.Server       = Server;
nodeStatic.version      = version;
nodeStatic.mime         = mime;

// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
const LOG$1 = LogService.createLogger('HttpServerController');
class HttpServerController {
    _appDir;
    _fileServer;
    _App;
    constructor(appDir, App) {
        this._appDir = appDir;
        this._App = App;
        this._fileServer = new nodeStatic.Server(appDir);
    }
    async handleRequest(req, res) {
        const url = req.url;
        try {
            await this._waitUntilRequestEnd(req);
            await this._serveUsingStaticServer(req, res);
        }
        catch (err) {
            const statusCode = err?.status ?? -1;
            if (statusCode === 404) {
                try {
                    await this._serveUsingReactController(res, url);
                }
                catch (err2) {
                    HttpServerController._writeError(res, url, err2, 500, 'Internal Server Error');
                }
            }
            else {
                LOG$1.error(`Error ${statusCode}: `, err);
                HttpServerController._writeError(res, url, err, statusCode, `Error ${statusCode}`);
            }
        }
        finally {
            if (!res.writableEnded) {
                LOG$1.warn(`"${req.method} ${req.url}": Warning! Request handler did not close the response.`);
                res.end();
            }
        }
    }
    async _waitUntilRequestEnd(req) {
        await new Promise((resolve, reject) => {
            try {
                req.addListener('end', () => {
                    resolve(undefined);
                }).resume();
            }
            catch (err) {
                reject(err);
            }
        });
    }
    async _serveUsingStaticServer(req, res) {
        await new Promise((resolve, reject) => {
            try {
                this._fileServer.serve(req, res, (err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(undefined);
                    }
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
    async _serveUsingReactController(res, url) {
        const response = await ReactServerController.handleReactRequest(url, this._appDir, this._App);
        HttpServerController._writeResponseEntity(res, url, response);
    }
    static _writeResponseEntity(res, url, response) {
        const statusCode = response.getStatusCode();
        LOG$1.info(`"${url}": ${statusCode}`);
        res.writeHead(statusCode);
        res.end(response.getBody());
    }
    static _writeError(res, url, err, statusCode, body) {
        LOG$1.error(`ERROR: `, err);
        LOG$1.info(`"${url}": ${statusCode}`);
        res.writeHead(statusCode);
        res.end(body);
    }
}

// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
// Must be first import to define environment variables before anything else
ProcessUtils.initEnvFromDefaultFiles();
LogService.setLogLevel(BACKEND_LOG_LEVEL);
const LOG = LogService.createLogger('main');
async function main(args = []) {
    let server;
    try {
        args.shift();
        args.shift();
        const appDir = args.shift();
        const appComponent = args.shift();
        const initFile = args.shift();
        if (!appDir || !appComponent) {
            LOG.error(`USAGE: ${BACKEND_SCRIPT_NAME} APP_DIR APP_COMPONENT_FILE`);
            return;
        }
        Headers.setLogLevel(LogLevel$1.INFO);
        RequestRouter.setLogLevel(LogLevel$1.INFO);
        RequestClient.setLogLevel(LogLevel$1.INFO);
        RequestServer.setLogLevel(LogLevel$1.INFO);
        // SimpleMatrixClient.setLogLevel(LogLevel.INFO);
        // MatrixCrudRepository.setLogLevel(LogLevel.INFO);
        LOG.debug(`Loglevel as ${LogService.getLogLevelString()}`);
        // Hijack require for TypeScript ES2020 interop
        const ModuleM = require('module');
        const Module = ModuleM?.default ?? ModuleM;
        const { require: oldRequire } = Module.prototype;
        Module.prototype.require = function hijacked(file) {
            LOG.debug(`Loading 1: "${file}"`);
            // noinspection JSVoidFunctionReturnValueUsed
            const result = oldRequire.apply(this, [file]);
            return result?.default ?? result;
        };
        if (initFile) {
            require(initFile);
        }
        const App = require(appComponent);
        const httpController = new HttpServerController(appDir, App);
        server = HTTP__default["default"].createServer((req, res) => {
            httpController.handleRequest(req, res);
        });
        server.listen(BACKEND_PORT);
        server.on('error', onError);
        server.on('listening', onListening);
        const stopPromise = new Promise((resolve, reject) => {
            try {
                server.once('close', () => {
                    LOG.debug('Stopping server from RequestServer stop event');
                    resolve();
                });
            }
            catch (err) {
                reject(err);
            }
        });
        ProcessUtils.setupDestroyHandler(() => {
            server.removeListener('error', onError);
            server.removeListener('listening', onListening);
            LOG.debug('Stopping server from process utils event');
            if (server?.close) {
                server.close();
            }
        }, (err) => {
            LOG.error('Error while shutting down the service: ', err);
        });
        await stopPromise;
        return ExitStatus$1.OK;
    }
    catch (err) {
        LOG.error(`Fatal error: `, err);
        return ExitStatus$1.FATAL_ERROR;
    }
    /**
     * Event listener for HTTP server "error" event.
     */
    function onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind = typeof BACKEND_PORT === 'string'
            ? 'Pipe ' + BACKEND_PORT
            : 'Port ' + BACKEND_PORT;
        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
    /**
     * Event listener for HTTP server "listening" event.
     */
    function onListening() {
        const addr = server.address();
        const bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
        LOG.info('Listening on ' + bind);
    }
}

// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.
main(process.argv).then((status) => {
    process.exit(status);
}).catch((err) => {
    console.error(`Error: `, err);
    process.exit(1);
});
