zod is for runtime validation.

data access layer - just a lib file, mostly used for data fetching

like things that run only on the server. those can be called as DALs. they run on every render, so you have to write them in a stateles manner?

server actions cross network boundaries. has to be triggered from client and runs on the server.

so dal functions are dynamic or cached, choose one. if dynamic, runs on every render, wrap it in suspense or use loading.tsx if not cache it using 'use cache'


loading.tsx file is a replacement for suspense? like it automatically adds the suspense to the nearest blocking call?


**authenticate your server actions, DALs, do input validation usign zod (safeParse)**

--- 
'use cache' - file level or component level
can cache any DAL functions

you have to expire or revalidate the cache when you get new data

cacheTag - reference what you have cached
cacheTag('issues')

when you want to revalidate, use revalidateTag('issues')

revalidation has to happen on the server side?

cache function in react, you can use it to memoize functions

cache() -> for RSC only for DAL, server actions dont need to be cached

---
next swagger docs, swagger ui react

edge (even stricter, limited, but blazingly fast runtime)

export const runtime = 'edge' -> can use this in a server component, or an api route (has to be lightweight)

static export -> spa mode -> like vite+react

---

server side rendering is different from server components