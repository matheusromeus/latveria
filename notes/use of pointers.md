only stack memory (data inside) can be accessed directly by a program. any other locations are indirectly accessed.

1. accessing the heap
2. call by reference
3. accessing files
4. accessing peripherals (i/o devices)

if i need more memory than what i have specified, I take it from Heap during runtime. like malloc().

there are only 1D Arrays. Every pointer points to the starting of a 1D array. The pointers are allocated side by side, which in turn points to multiple 1D arrays, which together is a 2D array.

if it's an address, pointer will increment to the next valid address.

prefix ++ and * is same.
postfix ++ is higher

\*p++ is taken as *(p++) so takes the content of p++ but it still points to p because it's a 'use and change' operator. it'll only be incremented after the expression. once the expression is over, it points the next valid address.
