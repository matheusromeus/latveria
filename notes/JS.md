normal scripts, encounters where the js script is, download and execution happens, then the rest of the html is parsed
**async** - script download is parallel and execution happens immediately after download.
**defer** - script download is parallel and execution is only after the whole html is parsed


let - can be reassigned
const - cannot be reassigned

Object, Arrays, Function -> Non-primitive

Stack - static allocation (memory size is known beforehand)
Heap - dynamic allocation of memory block. the address to this block is put in the stack.

**This is what happens when JS compiler sees an LOC**
Tokenizing
Parsing - ASTs are here
Interpreting

everything is an object 

Call Stack in JS
- it's a todo-list of function invocations
- does only one thing at a time, because it's single threaded

each thread has its own call stack, so if we have different threads, we essentially have different call stacks, which makes the whole thing multi threaded

**comparison operators**
- if one of the operators is NaN, then it will always return false
- when objects are compared, their references are compared, not the values
- if the first value is falsy, && returns it.
- if first value is truthy, && returns the second value.

`==, ===, && `

All numbers except `0` and `NaN` are truthy, including negative numbers like `-1`.

`a && b`: evaluates `b` **only if** `a` is truthy.
`a || b`: evaluates `b` **only if** `a` is falsy.


different loops
normal for loop - you can get index, 
while - executes while it's true
do, while - executes at least once
for...in - loop through enumerable/keys of an object
for...of - iterates over iterables
Array.forEach()