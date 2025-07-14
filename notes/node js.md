node js is just you running your js code outside a browser environment.
express js is a very minimal web framework built on top of node js.


node js is not good for cpu-intensive tasks. heavy computation etc.

setTimeout and setInterval are not part of JS. they are web apis. but it's available on node js also because of the global object. 


This is the most basic web server in express.js
```
import express from 'express'

const app = express()

app.listen(8000,() => {
console.log('server running on port 8000')
})
```

***instead of nodemon, you can use node --watch index.js***


i/o is inactive time, waiting for input or output
cpu time is active time\

non blocking io just means that the thread can switch between tasks while one is going on, because each of them has their active and inactive times.

io operations -> sending an input to a device, file or a socket and it replies back with an output.

A socket is a pipe - a memory buffer on the filesystem through which one process can write data to another - except that rather than connecting two processes on your computer, the socket connects a process on your computer to a process on someone else's computer, over a network. 