
export const isArray = element => Array.isArray(element);
export const isBoolean = element => element === true || element === false;
export const isNumber = element => !isBoolean(element) && element !== null && !isNaN(element);
export const isFunction = element => typeof element === "function";
export const isString = element => typeof element === "string";
export const isObject = element => !!(
	element &&
	isNaN(element) &&
	element !== NaN &&
	!Array.isArray(element) &&
	typeof element === "object"
);

export const getType = element => {
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
			return "undefined"
	}
}

export default {
	isArray,
	isObject,
	isString,
	isBoolean,
	isNumber,
	isFunction,
	getType
}
