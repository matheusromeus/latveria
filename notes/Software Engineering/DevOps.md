- **Deployment** is the general process of making a piece of software available to its users.

Infrastructure
- can include hardware like servers, routers, cables etc or software like OS, VCS and applications

VCS

Testing
- Unit testing, Integration Testing, Acceptance Testing, End-to-end testing

Deployment Environments
systems level thinking helps identify bottlenecks (system’s slowest point)

**Scalability** is a system’s ability to add resources to keep up with growing demand.

- Vertical scaling
- Horizontal scaling - no downtime, just re routing traffic

Elasticity is the ability to automatically add _or subtract_ resources to accommodate fluctuating demand.

Virtualization - is simulating hardware or software in a virtual environment. can be storage/networking/servers/apps

Containerization

Orchestration

Infrastructure as Code (IaC) is the act of defining infrastructure properties in configuration files. Used with virtual servers. Virtual machines, however, can be destroyed and created in minutes with little cost. With containers, it might only take seconds.

Monitoring

- Page load time
- User logins: successes, failures, time taken, daily active users, weekly active users
- Searches: number performed, latency
- Databases: query latency, transactions per second
- Standard OS metrics: CPU, memory, network, and disk usage

horizontal scaling 🤝🏼 microservices

VM resource allocation is fixed. That’s where docker comes in.

There’s a docker engine. (like a hypervisor?) has the same kernel as the host os and dynamically allocates resources.

runs a daemon (dockerd) and gives us os level virtualization.