

SPA influenced isomorphic (same code runs differently on server and client)

MPA indluenced split-execution (Islands/Server Components)

Full MPA 
- user goes to server, sends back **full** HTML. if they want to go to another page, they have to respond again with the full HTML for that page. this is for static pages.
- what if you want some JS? then there will be a function which spits out the HTML

Full SPA
- user goes to server, the whole JS is passed to the user, with the outer HTML shell
- we get the html, then we go get the JS, we get the whole JS for the website, browser parses it, and then it has to hit apis for data fetching too


first solution to SPA -> SSR + SPA

here, you server render the initial html and pass it to the client and in parallel, the JS needed also loads.

so now, in react, the react code runs first on the server (react server runtime) and then runs again in the client.

when you have the html, and then you run the js, it is called as **HYDRATION**. this is done so that the JS can hook on to the right places in the HTML. (because the html already exists before the js runs on the client)

catch #1 with SSR + SPA -> there is a time gap when the hydration is loading.
catch #2 -> we are sending the data twice, once as html and once as js which created the html


so, we came up with Incremental SSR. here, some parts of the html are server rendered and delivered so that the parts that needs JS doesn't block the rendering. (eg: React Suspense)

In React Suspense, only the parts that are specific to the new page will be reloaded or show a fallback.


https://dev.to/this-is-learning/javascript-frameworks-heading-into-2025-hkb


Optimistic Updates
- you show the data before the round trip of saving it in the db
- basically lying to your user that something is ready when it's not
- graceful error handling is required. reverting UI also.