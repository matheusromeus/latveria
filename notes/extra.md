cdn
- caching static assets
- traffic routing - how are cloudflare able to mititgate big ddos attacks?
- offloading demand
- security services
- video streaming


how to make your own cdn infra?
- need pops globally
- hardware & networking 
- BGP
- DNS with anycast routing
- OS
- software - web cache (nginx, varnish, apache server)
- before it was only static assets, but now they tweaked it to have edge compute - v8 environment
- protocols - http 1,2,3 tls1,2,3
- security - firewall