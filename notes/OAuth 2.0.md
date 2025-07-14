
authorization code grant type

**Steps**
1. Redirect the user to the provider (e.g. GitHub)
2. User is authenticated by the provider
3. User is redirected back to your server with a secret code
4. Exchange that secret code for the user’s access token
5. Use the access token access the user’s data


