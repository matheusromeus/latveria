
you just declare how the UI should look and what the state is.
and the framework decides the best way to update it.

before that you had to manually track the state,
write imperative code to reflect every state change in the UI.

jquery normalized DOM API across browsers and let you chain commands, a bit more of an abstraction but it was still kinda imperative.

enter angular, "what if you don't have to think about the DOM at all?"

*so these frameworks sit between us and the DOM. we say what changes need to happen and they find out the best way to update the DOM !*

angular - dirty checking - watching all variables at all times, at every single time anything changed. *not very efficient*

then came jesus, i mean, react. their idea was to re-render everything but do it in-memory first. (*is that the virtual DOM? and they check the difference between the DOM and the in-memory object to find out what changed or didnt?*)

react isn't perfect either with it diffing entire trees.

and each framework put their case forward.

svelte - does all this at compile time 
svelte analyzes code at build step and wires everything up
precise compiled DOM updates
not very flexible? - why?

vue wraps your state in proxies, when you access a property, vue tracks it. and when you update it, vue knows exactly what to re-render. (proxy based-reactivity)

solid - a signal based approach. only updates dependent DOM nodes.

qwik - serializes your app on the server, ships 0 JS and does resumable reactivity. optimized for hydration performance and cold starts which makes it a perfect choice for edge rendering.

all these try to do the same thing. keeping your UI in sync with the state. removes manual sync and lets you focus on what the UI SHOULD look like instead of you describing how to reach there. 


svelte and solid are fine grained. that means they don't re render the whole DOM.

*vue is using signals under the hood now?*
*what is vue vapor mode?*

*svelte and angular uses signals now?*
