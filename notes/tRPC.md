
there's a trpc server and a trpc client. these 2 connect the "backend" and "frontend" parts of a fullstack application.


tRPC is a way to build APIs like REST or GraphQL. But with end-to-end typesafety.

in next js, if you were'nt using trpc, then you probably would be using api route handlers. so that's untyped and extra types need to be maintained.

trpc is framework agnostic btw.

With typesafety, the frontend and backend is tightly coupled.
Essentially we are using TypeScript to link the backend and the frontend. So we have typesafe communication between them.

**tRPC CLIENT & SERVER**
- the client is used in the frontend to interact with the trpc server. allows you to make API requests and handle responses using type-safe methods.
- the tRPC server is where you define the API routes, procedures and logic. It processes the incoming requests and sends back responses.


tRPC is set up with routes and procedures.
routes are the folder names and procedures are the filenames.


	tRPC uses React Query under the hood.

	API Routes - do we use interfaces with API Routes?


public procedure
protected procedure - can be only used by users who are "allowed".



RPC is short for "Remote Procedure Call". It's a way of calling functions on one computer (server) from another computer (client). With traditional HTTP/REST APIs, **you call a URL and get a response**. With RPC, **you call a function and get a response.**

```ts
// HTTP/REST
const res = await fetch('/api/users/1');
const user = await res.json();

// RPC
const user = await api.users.getById({ id: 1 });
```


tRPC is an implementation of RPC, designed for TS monorepos. 

- **Procedure** - the API endpoint. Can be a query, mutation or subscription.
- **Query** - A procedure that gets some data.
- **Mutation** - A procedure that creates, updates or deletes some data.
- **Subscription** - A procedure that creates a persistent connection and listens to changes 
- **Router** - Is a collection of procedures under a shared namespace.
- **Context** - Stuff that every procedure can access. Commonly used for session state and database connections.
- **Middleware** - a function that can run code before and after a procedure. Can modify context.
- **Validation** - "Does this input data contain the right stuff?"





the query takes a resolver function and every function will have the context to itself.