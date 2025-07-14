system design exists because of **large scale distributed systems**. they mainly use **design patterns** for this. design patterns is mainly how you organize code.

an example of a design pattern is MVC.

Architecture is different from design patterns; **it focuses on how different systems interact to form a larger system**. Eg: what DB are we gonna use? will there be a caching system involved? 

a common example of an architecture pattern is the 3 tier architecture. Layer 1 is the **DB**. Layer 2 is the **Models and Controllers** and Layer 3 is the **View.**

system design is basically soving problems. like a specific situation.

architecture and system design deals with large systems.

---

monolith applications - the db server, web server, everything in one application. in here, everything is just different files.

to scale it out, we turn these into individual services. hence **microservices**.

**For example:**
You can host your frontend on S3. As you build it and generate static files. Or using nginx which lives in an EC2 instance. Backend could live inside the EC2 and the database could be hosted on RDS.

---

99.99% availability means - downtime is less than 1hr/year.

**Availability** - uptime, can i access the service?
**Reliability** - does the app do what it's supposed to do?
**Consistency** - does everyone see the same data?

**strong consistency** - change is reflected until all the nodes reflect it, it takes time tho.
**eventual consistency** - the nodes will eventually be updated, can cause a teeny tiny bit of inconsistency.

NOTHING IS RIGHT OR WRONG. IT'S A TRADEOFF. 
in some situations like banking, military, consistency is vv imp. but in social media, not that imp.

---

what does it mean for your app to be **Scalable**?
- Your app is able to support an increase in workload, maybe caused by sudden increase in traffic

2 types of Scalability - vertical and horizontal.

**Elasticity** - ability of your app to automatically adjust based on usage.

**ACID COMPLIANCE**
- Atomicity - everything is atomic. like, a transaction. it should either succeed or fail.
- Consistency - this is about state changes in the db. so whenever a change is made in the database, it moves from one state to another. but it should only move to another state if the rules of the db is followed. this makes sure that the current db state is trustworthy.
- Isolation - independent execution
- Durability - data permanence or persistency

**Sharding** - database partitioning. can happen in an indivdual database or a cluster of databases. in a single db, you split up the tables. maybe horizontally or vertically split up.

serverless - means **fully managed**


- start with defining requirements from the users' perspective. so this is mainly written as a product requirement document.
- we extract **features** we want to implement from the document.
- we turn these features into **data definitions**.
- these definitions can be mapped into **objects**.
- which are then mapped into the database.

once you have set the data in the db, you have to make endpoints for how it'll be queried or manipulated.

none of the services should fail in an outage. how easy is it to change that solution and go with another one? (how extensible the code is)

load test, edge case test, capacity test


- identifying major distinguishable components of the system
- proceeding to end to end api design
- optimization

frontend/client side architecture, such as the appropriate rendering pattern to choose - client side rendering, or server side rendering or static generation or something in between?

What kind of data fetching mechanism to use - REST vs. GRAPHQL vs. gRPC and what should the APIs look like?

- Specifics about UI components

    - a newsfeed which has an infinite scroll behaviour with all the images lazily loaded while ensuring the client side has the aspect ratio of the images upfront to prevent layout shift.
    - an autocomplete UI component which fetches search result data incrementally in batches while receiving images from server pushes in parallel.
    - a gallery page which pulls images and displays them in the correct order despite the asynchrony that comes with the network requests that might cause them to arrive out of order.

How do you leverage different layers of cache to decrease latency or support offline mode.


auto scaling is slow in nature
stress tests need to happen in a distributed manner. eg: geo distribution

tsunami testing - why it can kill your app?
chaos engineering
traffic pattern using ML

shard load balancing for a single app because the machines are two powerful and elbs have a limit. the shard load balancing is controlled by weighted routing


load generators?

prewarm infra before match
automated scaling according to no of servers at a concurrency level, number of requests


