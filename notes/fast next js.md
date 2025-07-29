
pre rendering the entire page -> is that SSG? use the `edge` runtime.
the page shouldn't rely on cookies, headers, or search parameters.

static shell with components streamed in. suspense tag.

render a loading shell, while waiting for the site. loading.tsx or suspense tag.


fetch requests, cached & revalidated every 'x' seconds. or until a certain event happens that triggers a change. 
```
const cmsData = await fetch(`https://...`, { next: { tags: ['landing-page']);
```


how to know the final JS bundle size. and how to know if it's acceptable?

for simple states, instead of state variables, use URLs

lazy load heavy client components

can we inject third parties by scripts and not installing it?
[@next/third-parties](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries) can be used to reduce their impact on page render speed and if dependency is not supported, [next/script](https://nextjs.org/docs/app/api-reference/components/script) is also a great option.


useOptimistic hook
