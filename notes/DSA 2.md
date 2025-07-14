
![[Pasted image 20250107035403.png]]

![[Pasted image 20250107035424.png]]


Big O - how does the time or space taken grow as the input size grows. a.k.a how efficient an algorithm is.

with Big O, we take notice of what affects the algo the most. like in an equation, the x^2 takes the most of the value than the other counterparts.

Time complexity - Describes the amount of time necessary to execute an algorithm.
Space complexity - Describes the amount of space taken by the algorithm.
AS THE INPUT SIZE GROWS.

**Best to worst :**
1. Constant - O(1) constant time. the number of inputs does not affect the runtime. it's always a single operation.
2. Logarithmic - O(log N) Every step, you reduce the input by half. kinda. the operations are halved at each step.
3. Linear - O(N) As the number of the inputs increase, the runtime also increases linearly (to the size of the input). time taken increases proportionaly to the size of the input.
4. Linearithmic - O(N log N) First iteration, you iterate through all the elements. Then from next step onwards, you do ’log n’.
5. Polynomial - O(n^2), O(n^3) etc For one element, you have to process every single element. Like a double inner loop.
6. Exponential - O(2^n), O(3^n) At every single location, we have the chance to process 2 values. The selection might affect the complexity of the subsequent operations. like with each addition to N, the time doubles.
7. Factorial - O(N !) - In factorial time complexity, the number of operations grows as the factorial of the input size NNN. This occurs in scenarios where every possible permutation or combination of elements needs to be considered.

