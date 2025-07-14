

ssg - prebuilt html at build time

ssr - build html on every request

csr - browser builds the html


the difference of time between ssg and ssr -> is the server compute time.


how are cookies being used?
what is this character share?


chat/characterID
oh, because you can have only one chat instance with a certain character.

profile is a public route.

paginating chats to not overload the system.
react-virtualized?
*how to not have memory leaks in frontend*

it keeps the history. as segments. as sessions. for each character.
pinned messages.

if i click on anything that is PRO, redirect me to /upgrade


- take care of heavy client side state
- how to handle the stress of real-time in the web app
- audio calls bandwidth 


backend -> 
- maintaining large number of websocket or webrtc connections simultaneously
- horizontal scaling with sticky sessions
- how to manage database load and slow queries
	- connection pool
	- add indexes
	- paginate chats
- TURN servers?
- how can LLMs handle concurrent load? -> managed?
- rate limiting?
- can move heavy calls to background workers 