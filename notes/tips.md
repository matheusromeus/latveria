
- every network call should have proper timeout and error handling
- retries should be bounded & controlled, from the UI elements.


create a query client. we will always have one?

combine useQueries - reduce network round trips

useQuery are batched by default. if not dependent on each other.

but useSuspenseQuery runs separate. for that use useSuspenseQueries

- **Adding a query to a child, not realizing a parent already has a query**

useInfiniteQuery

prefetchQuery, prefetchInfiniteQuery