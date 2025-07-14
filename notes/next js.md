implement streaming RSC with PPR and ISR for dynamic segments,
falling back to SSR only when necessary,
obviously using SSG for the static shell
proper caching and prefetching on visible elements.

- streaming ssr
	- enabled by default. sends parts of the HTML as it's ready
	- <Suspense /> helps you control which parts to stream, if you don't use this then only after everything is ready, it's gets sent back as one big chunk
	- 
- progressive page rendering
	- Show your stable layout first, load dynamic bits progressively.
	- suspense boundaries
- ISR
	- revalidating after a fixed time
- SSR as fallback
	- expensive -> only if data is real time or personalized
- SSG
	- for your app shell and truly static content
- Caching + Prefetching -> mostly for assets or resources
	- use Link prefetch and priority on next/image
	- Preload routes in viewport or on hover.
	- Set proper cache headers for API and static resources.


anything that takes time can be wrapped in suspense
works for server side delays and client side hydration

if your server is a pure static server components, then no need of this.
for fast rendering client components,
