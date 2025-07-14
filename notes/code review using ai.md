- `Audit this code for best practices`
- `Find security vulnerabilities`
- `Are there any performance issues in this code?`
- `Can you suggest improvements or cleaner syntax?`
- state handling, memory leaks, error handling and scalability

writing tests

DAL in next js
Product requirement document
.cursorrules - bulk refactors follow your conventions

okay, but what achievements what do you have?

# what to do

local semgrep scans, snyk scans, how is dependabot used?

performance hotspots with profiling + AI
Chrome DevTools - flame graphs
Copy the hotspot’s call stack into Cursor’s chat and ask:
> “Suggest ways to reduce allocations in this loop.”


memory leaks and resource misuse
node --inspect

state handling and concurrency
ask Cursor to draft unit tests covering edge states:
> “Generate tests for invalid user input when `isLoading=true`.”

In TS/JS, use `Result`‑style return types;
“Find functions where errors are logged but execution continues.”
try catch is the solution i guess

**SOLID, DRY, KISS**: Lint for single responsibility (one class → one task), duplicate code, and overly complex modules.

> “Does this module violate single‑responsibility? Suggest a refactor.”



Feed architectural diagrams or module dependencies into AI and ask for bottlenecks.
Let Cursor produce pros/cons of microservices vs. monolith for your use case.

Fail builds on high‑severity Semgrep issues, lint errors, performance regressions.

“Where are my untyped API handlers under `/pages/api/`?”

**ESLint + `@next/next` plugin**: Catch JSX‑specific pitfalls (`no-duplicate-head`, enforced `<Link>` usage) and TypeScript crimes. Failing builds on lint errors is non‑negotiable.

ts-reset

eslint-plugin-complexity or SonarQube

**Semgrep for Next.js**: Use community rules targeting XSS in SSR/SSG, unsafe `dangerouslySetInnerHTML`, missing CSRF on API routes [Next.js by Vercel - The React Framework](https://nextjs.org/blog/security-nextjs-server-components-actions?utm_source=chatgpt.com). Automate scans on PRs; AI assistant summarizes high‑risk hits.

**CodeQL on GitHub**: Enable the Next.js/Node.js security pack to detect injection, broken auth, path traversal.

Run `npm audit` or Snyk daily. Auto‑merge Dependabot PRs for patch‑level bumps; block critical vulnerabilities in your pipeline.

**Next.js Analytics**: Hook into `useReportWebVitals` or Vercel’s managed metrics to collect TTFB, FCP, LCP data in production


Add `@next/bundle-analyzer` to visualize entry‑point sizes. Cursor can ingest the JSON report—ask “Why is `/admin` over 1 MB?” and get AI‑driven tree‑shaking suggestions.

**React Profiler & Lighthouse**: Locally, drill down into wasted renders. Feed trace into Cursor:
> “Suggest memoization or code‑splitting for these components.”


**Node.js heap snapshots**: Capture snapshots via Chrome DevTools or Clinic.js. Highlight detached DOM nodes or un‑garbage‑collected closures.

**Prisma connection pooling**: In serverless, avoid leaking DB sockets by using `drizzle-orm` or Prisma’s built‑in pool reuse strategies to prevent socket exhaustion.

**React cleanup**: In every `useEffect`, verify return functions clean timers, subscriptions, or WebSocket listeners. Query Cursor:

> “Find `useEffect` hooks without cleanup.”

**Data fetching libraries**: Standardize on SWR or React Query. Enforce `stale-while-revalidate` patterns to avoid “waterfall” loads.

**Cross‑request state**: Don’t stash user‑specific data in module scope—always use `getServerSession` or NextAuth’s session context.


- **Race detection**: Use TypeScript’s `Promise.allSettled` for parallel calls; avoid mutation of shared objects in API route handlers.

**API routes**: Wrap your logic in `try/catch`. On error, return `{ notFound: true }` or a sanitized `500` payload—never leak stack traces to clients.

**Global error boundary**: In the App Router, implement a root `error.js` that logs to Sentry or LogRocket and surfaces a user‑friendly fallback.

**Consistent patterns**: In TypeScript, return discriminated unions (`{ success: true; data } | { success: false; error }`) instead of throwing, so downstream code can’t ignore failures.

**Folder structure**: Co‑locate `*.module.css` or `*.scss` with components; under `/src`, group by feature not file type.

**Runtime configs**: Strictly separate public (`NEXT_PUBLIC_…`) vs. server‑only env vars; forbid `process.env` access in client code.

**Typed routes**: Use `nextjs-routes` or generated TypeScript types for `Link`/`router.push`—avoid hard‑coded strings.

- **ISR & On‑Demand Revalidation**: Cache pages at the edge, revalidate selectively (`revalidate` in `getStaticProps`) to reduce cold traffic cost.
    
- **Edge Functions**: Migrate low‑latency endpoints to `runtime: 'edge'`—but benchmark for cold‑start overhead.

- **CI/CD checks**: Fail on lint, type errors, Semgrep and CodeQL high‑severity alerts, performance regressions (bundle size, web vitals).
    
- **AI‑augmented PR bots**: Cursor or ChatGPT bots post a summary of “5 things I’d watch”—but require a senior engineer’s sign‑off on any critical change.