
### core js features
- line by line execution - **thread of execution**
- saving data into memory - can even save code (like functions)
- call stack
this is what makes up an execution context

const output = multiplyBy2(num) -> output is unitialized until the result comes back, because it's a const, if it's undefined we won't be able to change it

**execution context** - created to run the code of a function, so when a function is called inside the main function (the whole program), it creates a mini execution context.

so a global execution context is the whole main program. so when the file starts runnning, it starts a GEC.

execution context has two parts and theyre available only when the function is running.
- memory
- thread of execution

call stack - to keep track of what function it is currently running. whatever is on top of the stack is the function we are currently running. *where is the thread of execution?*

---

normally we replace data in a function to make it reusable. what if we can put in code instead of data? that would be more reusable. that's what higher order functions do.

Higher Order Function - a function that takes a function as an argument or returns a function as a result.

functions can do everything that objects can do.

the outer function is the higher order function and the function we insert into them are called Callbacks.



## functions with memories

- when a function gets called, a live store of data gets created for that function's execution context. 
- but when it finishes executing, its local memory is deleted. except for the value that's returned.
- so we need a cache/persistent memory.
- but it all starts with a function returning another function. 

so we have a higher order function and a callback function. when the callback function is able to access the local memory of the higher order function, that's the concept of closures. 


in the context of createFunction, its called multiplyBy2 but in the global execution context, it is known as generatedFunc. 

so if generatedFunc had no (), like const result = generatedFunc, then result would've been just another label to generateFunc but now it is calling. 

generatedFunc has no relationship with createFunction. 


where you define your functions determines what data it has access to when you call it.


so, we are returning a function from the running of another function, and storing it in a global label and use that function by a new global label.


even if we are not calling the function, if we return the function it takes much more than just the code. it also takes the surrounding data, not in its local memory, but like another little function, backpack. that backpack is called closure.

![[Pasted image 20230920131526.png]]

the only way that you can access it is by running it and the function looking for that data and not finding it in the local memory and goes back to global.



when the function is defined, lexical scoping, when its returning a reference, closure.

WHERE IT IS RUN, dynamic scoping. 


- So , backpack or closure is the result of JS being a lexically scoped language. when the function exits all the data should be deleted but nope, because it was defined where it was defined, it has access to the data even if its run somewhere else. 

Memoization - Giving functions persistent memories of their previous input output combinations.

maintaining state inside the backpacks - module patterns




ASYNCHRONICITY - backbone of the modern web

Our JS engine has 3 main parts:
- thread of execution
- memory/variable environment
- call stack



browsers have sockets?

Browser = JS + lots of other things
even setTimeout is not in js

setTIMEOUT is just a label to start the inbuilt timer in the browser

so, setimeout runs first and its done from a JS POV, and then moves to the next line.


*so, all the web browser features, get put in the (callback queue) event loop, and then after all the regular  code is done executing, they are called back to the main thread of execution. ??*


so theres a feature which checks if there's anything in the call stack, or if there's anything in the callback queue, if these conditions are true, then it wont even go look at the callback queue. but if the global execution is complete, then it takes the function and puts it back in the global execution thread.

That Feature is called the Event Loop. 


js and its facade functions of the browsers..

And then came promises. 

It said, don't just throw the functions inside the queue, have some sort of consequence in JS memory as well.

that memory is called promise object.

a promise initiates a background web browser work and return a placeholder object (promise object) immediately in js.

and the promise object has a property called onFulfilled that gets triggered when the data is successfully received back and we access it via 'then'.


THERE IS ANOTHER QUEUE OTHER THAN THE CALLBACK QUEUE ! microtask queue?





All paradigms of code are guidelines to achieve this essentially :
- Easy to reason about
- Easy to add new features to
- Nevertheless efficient and performant (new features shouldn't make the application slower)


Single threaded means, a single call stack. 








