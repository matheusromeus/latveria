
parallelism is something you achieve through multiprocessing.

so then what is concurrency? 

race condition happens if concurrency is not taken care of.

fast context switching is what concurrency is like.


the amount of cores = the amount of stuff that can happen at the same time.

if there are multiple stuff happening at the same time, then it's called parallelism.

clock speed - the amount of operations per second. each cores can do that. so clock speed* no of cores


threads share same resources of the process. hence, that may cause race conditions.
that's why people say multithreading is bad. it's hard to write a thread-safe application. by giving mutex to your resources. 

every process has atleast one thread.

so in synchronous programming, once the thread sents a req for doing anything, like reading from db or a network req, it's doing nothing. and the application knows about this. so, to make it async, we pass a callback that gets executed whenever the req is done? so we don't have to wait till the exact moment to get a reply. and we can do our own thing after we have sent a request.

so instead of splitting up threads in the same process, people started splitting up unique processes. then use inter process communication to do whatever you want.

so how do multi processing code look like? can node js do multi processing?