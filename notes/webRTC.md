a protocol to connect p2p with the least amount of latency with API in the browser so that people can use this easily.

it's p2p

we can take usage of webRTC apis

for connection, a server is required, after that they can communicate without it. is this how p2p works?


client 1 sends SDP (session description protocol) offer to server, server forwards it to client 2. client 2 sends answer to server and server forwards it to client 1.

to connect between each other they have to share network details. (ICE candidates?)

NAT - network address translation (what your router does to convert your private ip to public)