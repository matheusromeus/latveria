
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


---

cookies - very small pieces of data stored on the client side to identify users

http is **stateless**, cookies are used to implement **sessions**. 

- keep track of the current authenticated user
- storing contents of a shopping cart
- tracking users

you can do stuff without being logged in, like in the second example, and that is a usage of a cookie, can also use to store user preferences

cookie is set as a header. key-value pair
it also has other properties like expires, max-age


i can edit the cookie and give another one in my cookies console and act as another person. so never store cookie values in plain text. like sensitive data, not other things. refer signing a cookie.

sessions
- they put a layer between you and your identity.
- tying a unique identifier for the current session you are in.
- if users will be able to read the cookie data, then everyone will have to change their password
- If a cookie doesn't have the `HttpOnly` flag, JavaScript can access it directly through `document.cookie`. it keeps your cookie away from js
- there are many ways attackers can get access to your instance of document.cookie or localStorage
- but man in the middle attacks can happen because its not https, for that set secure:true

we can also sign the cookie, for that signing part, you have to have a secret variable, store it in .env . set signed = true for that certain cookie value.

signing != encryption

encryption is hiding the value, but signing is just making sure that the value has not been tampered (modified) with. thats why replay attacks are possible. 

like with same signature, for different input the output is different, not just the known part the gibberish part will also change.

**you can theoretically create a session before the user logs in, so you can tie the activities they did before to after they have logged in.**

we can now terminate sessions. like clear of other sessions from other logged in devices etc. you have to store sessions somewhere. 

same origin policy - restricts how documents or scripts from one origin interact with that of other origins. this is the basis of CORS issues

the origin = protocol + domain + port

**same-site and same origin is different**


cookies have some vulnerabilites
- session hijacking
- XSS
- CSRF