## mini-type

A mini utility for soft type validation

## Usage

```js
import miniType from "mini-type";

miniType.isFunction(() => "Hi!") // true

miniType.isObject({ message: "Hi!" }) // true

miniType.isArray(["Hi!"]) // true

miniType.isString("Hi!") // true

miniType.isNumber(1) // true

miniType.isBoolean(false) // true

miniType.isUndefined(undefined) // true
```
