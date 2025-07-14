linter (but deeper) & compiler
checking for mistakes and converting to js

so even if in next js, we are doing only type checking, because noEmit:true. we have to set target to an ECMAScript standard because the compiler needs to know what standard is it going to compare against, and what features you have written. 

esnext - is bleeding edge

