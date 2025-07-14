

so imagine a problem where you want to find a window of 14 unique characters

you use a sliding window, implemented using 2 pointers. the left one at starting char and the second pointer on the right that keeps incrementing until 14 chars or a duplicate char. if the conditions fail then i guess you move the left pointer.

how do you keep track of duplicates? you can use a HashSet (Constant insertions and Constant lookups) . But a Hash Set is implemented under the hood using a dynamic array. Or you can use a boolean dynamic array where you store a-z and map their presence as true or false to the corresponding index value (11:true means k is present). or push the elements into the dynamic array of size 14 (o(1) write) and you perform a linear search over the 14 elements to find the duplicate one (o(14) worst case read which is still o(constant)) 

and dynamic arrays is built using static arrays.


O(1) is actually O ( a constant multiplied by 1). 
And that constant for hash set is significantly larger than a dynamic arrays'. why? because we have to calculate hash and look for collisions etc
so that constant does matter.

it's like hash set is the virtual machine running on top of the dynamic array native machine.


Going a bit more lower, we enter the **Bit Manipulation** zone.

each character has an ascii value tied to it. a-97, z-122.

store that in a u32? so each bit will be a t/f value.

now the range is from 97-122. how to make it 0-31? Modulo by 32.


left shift => multiply by 10