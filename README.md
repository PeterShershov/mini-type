## mini-type

A mini utility for soft type validation

## Usage

```js
import isType from "@ananas/mini-type";

isType.isFunction(() => "Hi!") // true

isType.isObject({ message: "Hi!" }) // true

isType.isArray(["Hi!"]) // true

isType.isString("Hi!") // true

isType.isNumber(1) // true

isType.isBoolean(false) // true

isType.isUndefined(undefined) // true
```
