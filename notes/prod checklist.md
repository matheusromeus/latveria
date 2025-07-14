
- [ ] ts-reset & tsconfig
- [ ] eslint config
- [ ] formatting is consistent - prettier
- [ ] ci pipeline - github actions? (runs after your code is pushed) lint, build, full test coverage, deployment. 
- [ ] pre-commit hooks - commit lint & husky (run locally before committing (check prettier, commits, eslint there itself))

- [ ] is main branch protected from merges?

- [ ] .env.production and .env.local and .env.example
- [ ] use t3 env
- [ ] how to not expose env in server environment

how can csrf be done in server actions

rate limiting on next js apis? upstash rate-limit (does trpc have this?)
all async functions have error handling
All calls to third-party APIs have retry logic and timeouts

check if routes are authenticated
cookies, httponly, secure and samesite=strict
secure session and tokens

connection pooling for serverless

how to find out the efficiency of your db queries?
how to find out whether your schema has indexes for what kind of data is needed?

Seed script for production-safe seed data
use schema migrations with versions

next build without warnings or errors
cdn for static content
the ISR/SSR paths should be checked on prod

how to check if any dev only dependencies are present in prod or if any dependencies are not being used at all

how to set up logging and monitoring?
Set up logging (e.g. `pino`, `winston`, or hosted like Logtail, Sentry)
Error monitoring (e.g. Sentry, LogRocket)
Performance monitoring (e.g. Vercel Analytics, APM)
Uptime monitoring (e.g. BetterUptime, Pingdom)
health checks - just a simple api route that returns 200 ok if the server is up

use http security headers
security audit using cursor
third party security vulnerabilities
helmet package for headers
CSP? content security policies

performance
bundle analyzer

unit - jest
e2e - playwright

remove console.log statements
<Image />
sanitization, validation and debounce for inputs?
never console.error the actually error in prod

Understand how to use sentry for prod applications (**IMP**)

caching in next js

db schema optimizations, relations etc

Read security in next js vercel blog

use either api routes or trpc - where did i read this?

start writing tests - start with E2E
and check CI pipeline whether the tests are passing

![[Pasted image 20250422174050.png]]
get help generating a notepad for writing effective tests for your application


- observability - [opentelemtery.io](https://opentelemetry.io/ "https://opentelemetry.io/")
- **Patch-package -** [https://www.npmjs.com/package/patch-package](https://www.npmjs.com/package/patch-package "https://www.npmjs.com/package/patch-package")

- renovate bot - [https://www.whitesourcesoftware.com/free-developer-tools/renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate "https://www.whitesourcesoftware.com/free-developer-tools/renovate") - advice is don't set it up now, because updating the packages might break stuff, and we don't know how to resolve, or when to update. before adding this, master your CI pipelines and add tests to your project.

- coupling-graph
- typed-query-selector - document.querySelector becomes typed


the request incoming to the next js server (rsc, server actions & api routes) have to be monitored
- check if the api is authenticated (they can run the endpoints alone)
- treat server actions as public http endpoints
- can use *unknown* data type and then validate and use it
![[Pasted image 20250430110300.png]]

are we validating emails? (disposable etc, invalid)


performance -> server actions vs api routes
how to fetch client side data in next js?
- useEffect vs SWR

