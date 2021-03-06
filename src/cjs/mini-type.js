"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getType = exports.isObject = exports.isString = exports.isFunction = exports.isNumber = exports.isBoolean = exports.isArray = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isArray = function isArray(element) {
  return Array.isArray(element);
};

exports.isArray = isArray;

var isBoolean = function isBoolean(element) {
  return element === true || element === false;
};

exports.isBoolean = isBoolean;

var isNumber = function isNumber(element) {
  return !isBoolean(element) && element !== null && !isNaN(element);
};

exports.isNumber = isNumber;

var isFunction = function isFunction(element) {
  return typeof element === "function";
};

exports.isFunction = isFunction;

var isString = function isString(element) {
  return typeof element === "string";
};

exports.isString = isString;

var isObject = function isObject(element) {
  return !!(element && isNaN(element) && element !== NaN && !Array.isArray(element) && _typeof(element) === "object");
};

exports.isObject = isObject;

var getType = function getType(element) {
  switch (true) {
    case isString(element):
      return "string";

    case isObject(element):
      return "object";

    case isArray(element):
      return "array";

    case isNumber(element):
      return "number";

    case isFunction(element):
      return "function";

    case isBoolean(element):
      return "boolean";

    default:
      return "undefined";
  }
};

exports.getType = getType;
var _default = {
  isArray: isArray,
  isObject: isObject,
  isString: isString,
  isBoolean: isBoolean,
  isNumber: isNumber,
  isFunction: isFunction,
  getType: getType
};
exports.default = _default;