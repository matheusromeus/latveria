
100 million calculations per second was what was needed to run mario 64 in 1996.

100 billion calculations could run minecraft back in 2011

36 trillion calculations per second to run cyberpunk 2077

### gpu vs cpu

gpu has more cores but less powerful.
so more calculations can be done by slowly.

cpu can does less stuff but faster. and more flexible. 

### architecture

a pcb. has a large chip called GA102 built from millions of tiny transistors. has processing cores. divided into graphics processing clusters or GPCs. within each GPCs are streaming multiprocessors. inside each SMs, there are warps and ray tracing cores. in warps, there are cuda cores and tensor core.

cuda, tensor, ray tracing. these three types execute all the calculations of the GPU

cuda - simple binary calculations. for video games
tensor cores - matrix multiplications and addition. for geometric transformations in NN and AI.
ray tracing - largest but few. for executing ray tracing algos

the 30 series in nvidia, uses the GA102 chip design.

DEFECTIVE STREAMING PROCESSORS?

clock speed and memory

cuda
fused multiply and add. using 32 bit numbers
bit shifting and bit masking


graphcis memory controller
nvlink controller pcie interfaces
l2 cache
gigathread engine

GDDR6X SDRAM

6mb shared l2 cache

bus width (between what)

binary to ternary conversion across different voltages
PAM3 encoding

computational architecture
embarassingly parallel operations
SIMD - like putting corrdinates of an object from model space to world space

these calculations are not dependent on each other. so it can be distributed to the thousands of cores

each instruction is done by a thread and each thread is matched to a cuda core

threads are bundled into warps. same type of instructions for each thread in a warp. see how the computational arch and physical arch is coming together.

the gigathread manages the thread blocks to the SMs.

SIMT - mulitple threads

all the warps in an SM share an L1 cache.


