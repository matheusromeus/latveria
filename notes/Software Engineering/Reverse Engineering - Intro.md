
**host-based signature** - identify files created or edited by the infected code which can make hidden changes to a computers registry

**network signatures**

Static analysis uses software tools to examine the executable without running the actual decompiled instructions in Assembly

Dynamic analysis uses disassemblers and debuggers to analyse malware binaries while actually running them. A disassembler will convert an executable binary written in Assembly, C, C++, etc into Assembly Language instructions that you can debug and manipulate.


Adding and subtracting hexadecimal numbers.

Computers are made of transistor switches. Modern computers have field-effect transistors.

Diodes and capacitors are added to make it a memory cell.

2 bytes - word
2 words - double word (32 bits)
2 double words - quad word (64 bits)

in 8 bits - 2^8 = 256. so 0 - 255 is the limit.

A 32-bit CPU fetches a double word from a memory address



CPU + Memory + I/O Devices (All connected by a system bus) = A computer of x86 architecture

CPU has 4 parts
- Control Unit - Retrieving, decoding, storing into memory
- Execution Unit - where execution happens
- Registers - temp data storage
- Flags - indicators




- General Purpose Registers - 32 bits
	- EAX, EBX, ESI, ESP
- Segment Registers - 16 bits
- Instruction Point Register - keeps track of next address to execute
- Control Registers

Flags help control, check and verify program execution and are a mechanism to determine whether each operation that is performed by the processor is successful or not.
There are three kinds of flags which are **status flags**, **control flags** and **system flags**.

There's a single 32 bit register called EFLAGS that are mapped to represent specific flags of information.

- When the parity flag is checked, an application can determine whether the register has been corrupted since the operation.
- If the carry flag is set, the remaining data in the register is not the correct answer to the math operation.
- The zero flag is set if the result of an operation is zero.
- The overflow flag is used in signed integer arithmetic when a positive value is too big or a negative value is too small to be represented in the register.
These were control flags

Stack
- The stack pointer is a register that contains the top of the stack.
- Stack grows DOWNWARD.
- Goes from higher to lower memory addresses. stack bottom is higher in memory
- Memory in stack is automatically managed for us.
- Local in scope

FP is the frame pointer and points to the location where the stack pointer was just before. The idea is to keep the frame pointer fixed for the duration. 

HEAP
- Grows upwards
- memory is not managed
- Heap memory is slightly slower to be read from and written to, because you have to to use pointers to access memory on the heap.
- Heap variables are essentially global in scope.

To allocate memory on the heap, you must use malloc() or calloc(). Once you have allocated memory on the heap, you are responsible for freeing it by using free() to de-allocate that memory once you don't need it any more. Otherwise memory leaks can happen. 

If you need to allocate a large block of memory for something like a struct or a large array and you need to keep that variable around for a good duration of the program to which must be accessed globally, then you should choose the heap for this purpose. If you need variables like arrays and structs that can change size dynamically such as arrays that can grow or shrink as needed, then you will likely need to allocate them on the heap, and use dynamic memory allocation functions like malloc(), calloc(), realloc() and free() to manage that memory manually



Most malware is written in higher-level languages, but we get only a compiled binary.


memory that contain instruction codes are no different than the bytes that contain the data used by the CPU and special pointers are used to help the CPU keep track of where in memory data is and where instruction codes are stored. There's a data pointer. Instruction pointer. 

gcc -S -m32 -O0 hello.c {creates an assembly language source code file}

gcc -m32 -c hello.s -o exit.o

Finally we need to use a linker to create the actual binary executable code from the binary object file which will create an executable called exit.

gcc -m32 exit.o -o exit



AT&T Syntax : movl %esp, %ebp [This means move esp into ebp.] 
Intel Syntax : mov esp, ebp [This means move ebp into esp.]


push ebp - saves value of base pointer
mov ebp, esp -  sets base pointer to stack pointer
sub esp, 10 - allocates 10 (in hex) bytes for the stack

- ESP is used to point to the next item on the stack. (stack pointer)
- ebp - frame pointer. (where stack was initially)


Every assembly language is divided into three sections
- data section - declaring initialized data (consts), this never changes
- BSS section - declaring uninitialized variables 
- Text section - code


linux memory has 2 spaces - user space and kernel space

Protected mode OS


Events generated by hardware - interrupts
events generated by software - system calls