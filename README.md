[![npm version](https://badge.fury.io/js/mini-type.svg)](https://badge.fury.io/js/mini-type)

## mini-type

A mini utility for type validation

## Usage

```js
import miniType from "mini-type";

miniType.isFunction(() => "Hi!") // true

miniType.isObject({ message: "Hi!" }) // true

miniType.isArray(["Hi!"]) // true

miniType.isString("Hi!") // true

miniType.isNumber(1) // true

miniType.isBoolean(false) // true

miniType.getType("I AM A STRING") // "string"
```
