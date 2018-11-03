
export const isArray = element => Array.isArray(element);
export const isBoolean = element => element === true || element === false;
export const isNumber = element => !isBoolean(element) && element !== null && !isNaN(element);
export const isFunction = element => typeof element === "function";
export const isUndefined = element => typeof element === "undefined";
export const isString = element => typeof element === "string";
export const isObject = element => !!(
	element &&
	isNaN(element) &&
	element !== NaN &&
	!Array.isArray(element) &&
	typeof element === "object"
);

export default {
	isArray,
	isObject,
	isString,
	isBoolean,
	isNumber,
	isFunction,
	isUndefined
}
