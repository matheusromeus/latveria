
## the naive way

we have a base url, 
we have different state variables for error, loading, pagination and the data.

in the useEffect, we have an **async** function that fetches the data. in this function we handle the loading state, try catch block to handle fetching and setting the data in the state vars and setting success or error states accordingly. It also has the AbortController which handles race conditions.

how do you add caching here?
background refetching according to some conditions?


## sc

in server components, even though your code is in the frontend, only the html is returned back. 


so react query helps in the client state when we fetch data, but in server components this is not needed so we can simply have a fetch call.

in server components, caching and stuff has to be done for us by next js. 