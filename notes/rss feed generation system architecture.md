
input 
- source URL
- feed metadata that you give
- scraping config - specifics like css selector - tool was for non-developers
- how often it has to be scraped

the input goes to the backend, and saves the data to the DB, and Django calls for async jobs, the async job calls for the Node.js scraper. 

how is the puppeteer scraper made fault tolerant? 
- so one thing was controlled and variable timeouts. sprinkle it over the code
- then docker compose has its own healthcheck (which is just an api route, i can restart it based on the api response)
- celery has its on retry method
- ip rotation but using a provider

feedgen library


app is hosted on ec2, s3 for the feeds storage
react = s3+cloudfront

frontend performance
- caching
- memoization
- pagination
- CDN
- optimistic UI

React.memo is used on components
useMemo is used inside components