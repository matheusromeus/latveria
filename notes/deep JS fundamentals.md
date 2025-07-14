3 pillars
- Types
- Scope
- Objects

"In JS, everything is an object." - false

there are primitive types. and objects.
`Undefined, Null, Boolean, String, Symbol, Number, BigInt, and Object`

variables don't have types - values do.

undeclared, undefined, uninitiaized (TDZ)

NaN(s) are not equal to each other.
isNaN coerces a value into a number before checking if it's a NaN.
what you actually want is Number.isNaN()
NaN is the only number that is not equal to itself

when you do a numeric operation on any operand, you expect to get back a number. and how do you signal that it's not a number while still fulfilling the first rule? **NaN**

**how the fuck do you know about all this? easy. READ. THE. SPEC.**

-0 and 0 are only bitwise distinct. specified in IEEE.
for that do **Object.is(-0,0)**
1/-0 = -Infinity

== > === > Object.is()
you can also use this for checking if it's NaN

use new keyword for
- Object()
- Array()
- Function()
- Date()
- RegExp()
- Error()

dont use it with
- String()
- Number()
- Boolean()

use them only as functions?

- Called as functions: return primitives.
- Called with `new`: return wrapper objects.

why? -> because the former ones return an Object instance, but the latter ones are only an Object Wrapper

calling new is calling the constructor of the object. only call the latter as functions not as an object instance or the constructor ('new')

---

uninitialized
- Happens only with `let` and `const`.
- `var` is hoisted and initialized with `undefined`, so doesn't trigger TDZ.

when hositing happens, only the declaration happens, not initialization

---
type coercion ways. when a certain primitive is needed and that is not available, js does this.

toString() -> toString() then valueOf() , if string returns primitive, then over otherwise valueof
toNumber() -> valueOf() then toString()

empty string becomes zero

toBoolean() -> 0, -0, "", null, NaN, false, undefined are all falsy, rest are truthy

	coercion is used in many places - string interpolation, concatenation, String()


?? - if left is null or undefined, it returns the right side value, else left is returned.
|| - if left can be true, left is returned, else right is returned
&& - if left can be false, left is returned, else right is returned

