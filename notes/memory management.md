
stack - grows and shrinks automatically
heap - requires explicit management

if you see memory as a long empty array, then stack comes in the beginning, building towards the center and the heap is at the end, still building towards the center.

so in the array analogy, you can divide the array into two parts. stack in the beginning and going down. and heap from down going up to the center. if the stack goes over the center, then its a stack overflow. but there is still space in the heap. but if the heap goes over, then its called heap exhaustion


**the stack** grows towards **lower memory addresses** as new function calls or local variables are added. So, the **stack grows in the negative direction**, from higher to lower memory addresses.

- **Stack** grows downward (towards lower memory addresses).
- **Heap** grows upward (towards higher memory addresses).

A **memory leak** occurs when a program allocates memory (typically on the heap) but fails to release it when it's no longer needed. Over time, this can lead to the program consuming more and more memory, eventually causing it to run out of available memory, which can lead to performance degradation or crashes.


so for every function, js creates a stack frame. (is this the execution context?) 

The stack stores **static data**, meaning things that are fixed and known at compile time.
The heap stores **dynamic data**. 

The stack will store **references** (pointers) to objects or arrays stored in the heap.

eg: in an array, the array itself is in the stack but the array data are in the heap. so that is a reference.  for primitive data, it's passed by value. but non primitive data types are passed by reference.

non primitive data are compared by reference


const a = [10];
const b = a;

'b' now has the same data as 'a' has. that means, 'b 'stores tje reference of the data that 'a' has.


how do you compare 2 objects? Object.is()

this is why the concept of immutability came up. you never mutate objects, you create a new updated one.