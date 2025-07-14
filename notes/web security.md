
1. input sanitation.

js is a single threaded event driven model that means in every frame there is an event loop that constantly pulling events. and if there are any handlers for the events, it fires them.

## same origin policy

goal: two websites should not be able to tamper with each other.

if a code that is coming from 'x' is rendered on 'y', how should it behave?

strategy: each resource is assigned an origin. JS can only access resources from its own origin.

what is an origin? network protocol + hostname + port

four ideas
1. each origin has client side resources (cookies, DOM storage, js namespace, DOM tree)
2. each frame gets the origin of its url
3. scripts execute with the authority of its frame's origin
4. passive content (images, css) gets zero authority from the browser

postMessage - helps different code to interact with each other. both parties have to opt-in.

Frames/window objects -> gets the origin from frame's url OR suffix of the original domain name

two frames can access each other (how they act with the same origin policy) -> both has document.domain to the same value and neither has changed document.domain (&there's a value match)

cookies have domain and path

how is an xmlhhtprequest handled by the origin policy? 
- same origin, unless cors is enabled

f.toString() -> to get code

cross-site request forgery -> someone else makes a request by emulating "you". 
adding randomness to URL is a way to mitiagate this.

but user might get use document.body.InnerHTML

run a script on the server to bring back the "random code"? 

DNS rebinding attack. 
Goal: run attacker-controlled js with authority of another site.
approach: register a new domain, user has to visit attacker.com, browser generates a dns request to attacker.com, attacker response has a small TTL, attacker binds the attacker.com to victim's ip address, website fetches new object

shellshock bug - used an http request to set a custom header which contained a custom value like setting bash variables and the server does something with those variables in that context

() {:;}; /bin/id

set nth in apache



user.name=kevin-work
user.email=kevin@m0.ventures

