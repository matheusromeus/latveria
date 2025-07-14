WS, gRPC are asynchronous api protocols 
REST APIs are synchronous

Synchronous APIs often use HTTP or HTTPS for transport, and HTTP is a unidirectional protocol. Asynchronous APIs tend to use bidirectional protocols like HTTP/2.

You can think of it like this: when you make a synchronous request, you pull data from a server, but you can use an asynchronous request to ask the server to push the latest data to you.

When you send a request to an asynchronous API, **your application can continue to process other instructions for your user while it waits for a response** from the API server. This is different from a synchronous API, where the application won’t continue until it receives the response.

unset LD_PRELOAD; SteamDeck=1 force_vk_vendor=-1 gamemoderun %command% -dx12 -ngxdisableota -console