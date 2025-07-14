
rendering - turning code into content that users see and interact.

Imagine rendering strategies like different ways to serve a meal:
- Pre-cook everything (static rendering)
- Refire cold plates (incremental static revalidation)
- Cook dishes as orders come in (server-side rendering)
- Give customers ingredients to prepare themselves (client-side rendering)

Each approach has its place. The best restaurants use a *combination* of approaches.

### 1. Static Site Generation

You write code, build it, during build time, it fetches data from the source and the data is baked into the page and is prerendered. It results in static HTML that can be cached at the edge and served quickly.

SSG fetches dynamic data from your origin server and puts it into your application at build time. Then, users get all fast, static data on request.

![[Pasted image 20240801200334.png]]

**Ideal Use cases:**
- Any page with content that changes very infrequently
- Site layouts
- Performance-critical marketing pages
- Documentation or other sites that quickly rebuild

**Benefits:**
- Fastest possible page loads
- Excellent SEO performance
- Reduced server load
- Lowest infrastructure costs

Might cause increased build times.
Every change require a new build and deployment


Consider ISR for frequently changing content or long build times.

### 2. Incremental Static Regeneration

![[Pasted image 20240801201917.png]]

The code is built faster. And to get new data you don't have to rebuild. In the first client request, the data is cached and the subsequent requests gets data at the same speed as SSG. 

**Ideal use cases:**
- When builds with SSG are too long
- Ecommerce product pages
- New websites
- Large-scale content sites

**Benefits:**
- Maintains the fast page loads of SSG
- Allows for on-demand content updates without full rebuilds
- Scales to large numbers of pages efficiently
- Can be more cost-effective than SSR in some cases

Carefully manage cache invalidation strategies
