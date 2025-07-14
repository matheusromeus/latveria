distributed systems that process work in real-time (APIs), but also asynchronously (queues + workers).

asynchronous or event driven system

Message queues are really useful when working with micro services.

- Rate limit processing of events
- Communicate between micro services
- Shard the load of specific types of events to be processed at different rates
- Batch process a bunch of events

Let’s say your app needs to send out an email campaign to millions of customers. Rather than spinning up one mega server to handle and send out all the emails.

- throw those emails on a queue
- have worker pods scale and pick them up
- send out the emails asynchronously