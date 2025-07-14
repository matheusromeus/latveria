# facts & figures

should the short URL expire?

custom URLs?
-  yes, but length is 7-16 chars

100 million created per month 

clicking on the shortURL redirects to longURL

no downtime
redirection should be fast
REST api for devs

for every 1 shortURL created, you can expect 200 shortURL redirect requests

this means 100 mil created per month, 40 created per second, 8000 clicked per sec (200:1 read to write ratio)

100 mil per month * 12 months * 100 years * number of bytes-> total number of storage needed in the lifetime of our app
#  storage

60 TB needed
700 million reads/day

20% req are cached (more popular ones)
70GB cache momory

# architecture

load balancer in front of the server
multiple replicas of servers (with cache here)
sharding the db

/post create
longurl, shorturl, apikey

/get url
redirects to url

user, links -> models

the URL should always be unique
- keygen service or encoding (check security vulnerabilities)

should be resilient to load spikes

# 

if sql efficient to check, difficult to scale, 
in nosql a read immediately following a write could be stale (??)

easier scaling for huge storage
high read and writes?

**IMP**
where the URL gets stored is part of the hash function. (like when we shard the DB)

if we have a keygen for service instead of hashing, then we would need to store all the urls which were already created

# caching

priority for popular URLS

so that particular request is cached

memcached or redis

cache redundancy would be good

round robin in load balancer with health checks

dedicated db or servers - paid premium URLs

**IMP**
how to make sure that the custom URLs are not the same? (db trip everytime???)