
HttpOnly - then it cant be read by client side JS
Secure - only through HTTPS


Prone to CSRF - attack on session based auth.
Horizontal Scaling is a big challenge.


Token based auth is done on client side, that is why it's called Stateless.
So, because it's on client side, tokens need to be signed (not encrypted).
When an access token is about to expire, you can use refresh tokens.
Tokens can be opaque. But then we have to have DB calls?
Prone to XSS.
Has to maintain a blacklist of revoked tokens.


Sessions
Stateless JWT - user data is in the token
Stateful JWT - only user ID is in the token. user details is inside the DB.