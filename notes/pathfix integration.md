
- 2 steps. 
- the oAuth connection & pass through API
- so pathfix helps connect our app to the provider app (which we have created in the dev account) and maintains the connection. (you havent implemented this from scratch before that's why you think it's easy and there's no need for pathfix)
- the pass through api helps us to call any endpoint from the provider through pathfix.


we register our app with the service provider. and we provide the pathfix redirect URI to them.

we create a pathfix application too, all our integrations and the details of it are managed under a single roof.

we give a unique identifier to them, they store it and they check for connections.