your computers are just a big electric circuit. trying to understand the complex architecture of a modern computer is like trying to understand a person you just met today. you can understand your friends or siblings better because you have seen their evolution and every step they've taken. even the computer we know as of today was the product of decisions we took over an extended period of time. so we go back to the basics.


**transistors** control the flow of electricity. like a better switch. instead of mechanical movements to control the flow of electricity, we can use small electric charges. they're insanely fast. 

using multiple of these, we can create **logic gates**.

the **NAND** gate is the most fundamental logic gate. cus we can create any gate using this.

### Binary Addition

**XOR** to add 2 bits. 1 + 0, 0 + 1

**AND** is used to calculate CARRY.

XOR (for sum bit) + AND (for carry bit) = half adder -> used for 2 bit addition. 
for a **half adder**, input is x & y. output is sum and carry.

1 0 1
0 0 1 +
1 1 0 = 

for each row (each 2 bits) you use a half adder. but since a row can have a carry and that can't be carried to the next row, we use a full adder. a **full adder** is used to add 3 bits together. the carry in, and the 2 inputs.

the full adder will have 3 inputs. x,y and a carry in. and 2 ouputs, sum and carry out. for mutiple numbers, you stack adders, according to the number of rows. for 4-bit addition, use 4-bit adders. which is just 4 adders together. the 4-bit adder also outputs sum and carry out. the carry out can be used to supply the next 4-bit adder if we want to create an 8-bit adder. this is binary addition.

so 8 full adders can be packaged together to create the 8-bit adder. to add two 8-bit numbers. 

### Binary Subtraction

now towards binary subtraction. it's just adding a negative number.

to turn a positive number into negative, find the 1's complement and add 1.

so there's a subtract signal if turned on, we subtract the bits.

this evolves into the ALU. It can perform addition and subtraction.

a computer should be able to **process**, **store** and **retrieve** data.

### What next?

Binary Decoders

n - inputs
2^n - Outputs
Only one is true

can be used to create a basic ALU. where you can specify according to the bits, what instrcution need to be run. 


## How do computers remember information?

SR (set - reset) latch.
D (data) latch.

These latches evolve to a Register. To store a single bit, a latch is enough, but for multiple bits, you stack latches together to create a Register.





8 bit registers?
using many registers, we can store programs. 

assembler - assembly code -> machine code

instruction memory and data memory. keeping code and data different is a ancient good practice.


Von Neumann Architecture

input -> CPU (Control Unit and ALU) + Memory Unit -> Output

control unit - fetch, decode and execute instructions




assembly 

opcode + operand



ram - temporary data handling