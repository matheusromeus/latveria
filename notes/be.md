
framework agnostic

common patterns, philosophies, implementations

high level understanding
- request from browser hops to our backend in some server and how response is
http protocols
- role
- how comm is established
- raw messages
- headers. role, types. req or representatinal, sec headers
- methods & principles
- CORS
- simple req and pre flight req
- http responses, status codes, when to return what
- http caching, diff techniques
- http 1., 2, 3
- content negotiation
- persistent connection
- compression, zip, deflate, br
- security, ssl, tls
routing
- how routing maps urls to server side logic
- conn between routing and http methods
- different components, path, query, 
- types of routes static, dynamic, nested,. hierarchical, regex, catch all, wildcard
- api versioniing, deprecation reoutes
- route grouping, permission, shared middleware
- secure routes
- optimizing route matching performance

serialization & deserialization
- iteroperability
- formats
- text based json, xml
- binary formats protobuf
- when to use which
- how nested json handle ser & des
- handling missing fields, handling null, date
- custom serialization
- error handling due to conversation, invalid values
- performance, serialization with compression
- text vs binary peroforamce
- readbility vs performance

auth & auth
- stateful & stateless
- basic auth, token, session, jwt, cookies
- oauth and openid connect,
- api keys, MFA,
- salting hashing
- wayback rback reback
- securing cookies
- avoiding csrf, xss, mitm
- audit logging
- monitor failed login attempts
- privilege escalation
- access to sensitive resource
- obfuscating authentication related error messages
- preventing info leakage through detailed error messages
- consistency in responses across different failure modes like rate limiting and account lockout
- how to avoid timing attacks (an error for a worng password ight take more time than username incorrect)

validation and transformation
- syntactic validation eg. checking whether a string is an email or not etc
- semantic validation (dob cant be in the future)
- type validation
- client side validation vs server side validation
- server side validation is the true security measure, but client side validation is for better user experince with instant feedback
- failing fast, consistency between frontend & backend validation
- transformation - type casting path or query from string to ID
- different date formats from frontend
- nomralization - trimming whitespace and lowercasing emails
- sanitization for security issues - sanitize a input string
- complex validation - checking whether user password and confirm password field is the same
- chain validation
- error handling and sending meaningful error messages to the frontend
- aggergating all the errors in one respone for the client to display
- dont say invalid password, say invalid credentials
- how to gracefully handle failed transformations 
- performance tradeoffs in validation and transformations

middlewares
- when to use them
- common use cases
- role of them in a request cycle
- pre-request middleware, post-response middleware
- flow of middlewares
- middleware chaining
- how to order middlewares (keep in mind with auth, validation and everything in place)
- next() function
- exiting middleware early
- short circuting the request pipeline by handling 404 errors
- security middlewares that adds security headers like X-content type and strict transport security or csp
- appropriate cors headers, middlewares that help avoid csrf, mlw to rate limit
- auth middleware
- logging and monitoring middleware with request logging or structure logging for observability or easier debigging in prod
- error handling middleware which catches and formats application level errors for consistent api responses
- compression and performance related mlws - compresses response bodies to reduce size of data sent over the network 
- data parsing middlewares that parses incoming request bodies like json, URL encoded forms, file uploads, multi part form data
- performance and scalability aspect of middleware
- what are the best practices to keep middlewares lightweight and efficient

request context
- metadata that is often passed through application middlewares, controllers and services
- state that is available only during that request
- lifecycle of a request, maintaining state throughout the duration of the request
- sharing data along various layers of the app without coupling
- different components of a request context
- session and user info
- tracking and logging information, unique request IDs, trace IDs, caching data, permission checks etc
- request timeouts, custom timeouts
- keeping ctx lightweight to avoid memory over head
- making sure ctx data is cleaned after the request lifecycle to prevent memory leaks
- avoiding tightly coupling components through ctx

handlers & controllers
- MVC pattern
- what are handlers and controllers and services?
- their responsibilites
- reducing code with middleware
- centralized error handling in handlers
- consistent error messages in controllers

CRUD deep dive
- diff types of crud operations
- how crud operations map http methods
- common apis associated with each method post - create etc, 201
- implementing pagination
- how to implement a search api, how to do sorting, how to do filtering
- limiting payload

RESTful architecture
- best practices for implementing REST Apis
- principles of designing apis around resources and sticking to http semantics
- what are the different types of versioning (URI versioning, header versioning)
-  query string, media types
- designing apis according to open api spec
- supporting client side caching

DB
- relational and non-relational
- when to use which
- acid and cap theorem
- basic querying and JOINs
- database design best practices, schema designing and indexing
- query optimization, caching, connection pooling
- data integrity, constraints and validations
- transactions and concurrency
- how ORMs work 
- whether to use ORMs, tradeoffs, 
- what are database migrations

Business logic layer
- what is the role of this?
- what are the different layers of a request cycle (validation, routing, middleware, handlers and controllers) presentation layer cus they deal with user data after that comes the BLL
- after that comes data access layer - deals with dbs, performs querying or insertions or deletions
- the BLL uses the DAL behind the scenes
- separation of concerns, single responsibility, open close dependency inversion
- components of a BLL - services, domain models
- business tools, business validation logic 
- service layer design best practices
- how to propagate errors properly from service level to presentation layer

caching
- why do we need caching
- caching vs db persistence
- types of caching (in mem caching, browser caching, db caching)
- what is the need of client side and server side caching
- different caching strategies (cache aside, right through, right behind, right back, read through)
- different cache eviction strategies (LRU, LFU, TTL, FIFO)
- need for cache invalidation (manual cache invalidation, time to live invalidation, event bash invalidation)
- different levels of caching
	- L1 - in memory
	- L2 - network distributed 
- hierarchical caching - combines L1 and L2 strategies
- caching in web apps
	- caching static assets
	- caching api responses using headers
	- caching with DBs ( query caching - results of heavy join operations are stored in redis)
- cache hit and cache miss ratio and how to optimize them

Transactional emails
- what are they? common use cases
- anatomy of a transactional email
- subject, the pre headers, the body
- how to presonalize with dynamic params

Task scheduling and queueing
- use cases
- mainly used for sending emails or payment processing or offloading heavy computation
- components of a queue - producer, queue, consumer, broker, backend
- flow of a task dependency - chain dependency, parent child relationship
- task groups, executing multiple tasks concurrently and waiting for all of them to complete at the same time
- how to handle errors and implement retries in task queues
- task prioritization & rate limiting

elastic search
- behind the scenes
- different techniques used; inverted index, term frequency, segments & shards
- use cases - log analytics, social media search
- how to create and manage indexes
- basic search, full text search, relevant scoring
- how to optimize search performance by tweaking text and keyword
- anlayzers, boosting, pagination
- advanced search patterns - filtering, aggregation, fuzzy search
- how kibana works
- how to use elastic search in a user friendly way
- different best practices - defining field mapping explicityly, avoiding wildcards, optimizzing number of shards

error handling
- types of errors - syntatical, runtime, logical
- fail safe, fail fast, graceful degradation
- logging errors
- using stack traces
- how global error handlers work
- how to handle user facing errors
- importance of logging and monitoring
- sentry, elk stack
- email based alerts, slack alerts

config management
- how does it help with flexibilty and decouples environment specific settings from app logic
- diff env, sensittive data mangement
- types of configs - static (db creds, api endpoints) and dynamic (feature flags, rate limits)
- sources of configs
- static files vs command line flags vs env variables

logging, monitoring and observability
- logging vs tracing vs monitoring vs observability
- types of logging - system logging, application, access, security
- diff levels of logs - debug, info, warn, error, fatal
- structured logging and unstructured logging
- best pracitces - log rotation, centralized logging, retentiion, contextual and meaningful logs 
- diff types of monitoring - infra monitoring, application performance monitoring, uptime monitoring
- prometheus, grafana
- three pillars of observability - logs, metrics and traces

graceful shutdown
- signals, sigterm, sigint, sigkill
- steps in a graceful shutdown
	- capturing a sginal
	- stops acceptign requests
	- completes infligh requests
	- closes any external requests or any open files
	- terminates the app

security
- security aspects in a backend
- types of attacks - sql injection, no sql injection, xss, csrf, broken auth, insecure deserialization
- principles of a secure software design - least privilege defense in depth, fail secure defaults, separation of duties, security by design
- input validation and sanitization
- rate limits
- CSP, CORS, same site cookie
- importance of monitoring events

scaling and performance
- metrics of performance - reponse time, resource utilization, indentifying bottlenecsks, caching, db optimization (avoiding nplus1 query problems, ensuring proper use of joints), using lazy loadign where appropriate, db indexes to increase speed of read operations indexing foreign keys or search fields, how to process data in batches to minimize db load and improve performance for large datasets how to avoid memory leaks, closing file handles, db connections, cleaning up after a long process, minimizing network overhead by reducing payload size and using compression
- how to do preformance testing and profiling
- best pracitces of writing preformant code - writing clear and maintainable code first without premature optimization first and wiritng modular code to make it easier to optimize individual pieces, 
- how to offload non critical tasks

concurreny and parallelism
- difference between concurrency and parallelism
- how concurrerny helps in IO bound taks
- how parallelism helps in CPU bound tasks

object storage and large files
- when to use these
- s3
- how to manage large files with chunking and streaming
- multi part file uplodas

realtime backed systems
- websockets
- sse
- pub-sub architecture

testing and code quality
- different types of testing - functional, regression, performance, load and stress testing, user acceptance testing, security testing
- what is TDD
- how to automate tests in ci/cd environments
- how ot manage code qulaoty with linting and formatting tools
- measures of code quality and coverage - cyclomatic complexity (all the paths through the code)
- maintainability index - how easy is it to maintain codebase

12 factor app principles

open api standard
- why use it why stick to it? pros and cons
- swagger, postman, codegen

webhooks
- use case
- api vs webhook for the same use case
- api - polling(client side initiated), webhooks is pushing (server initiated)
- key components in web hooks
- best practices

devops
- CI/CDelivery and Deployment
- IaaC, config mgmt, version control
- tools - containers and ocker, kub8, cicd pipelines
- scaling hor and ver
- red green deployment
- rolling deployment

DNS
- broadcast
- unicast
- anycast
- 