
when you have a web3 wallet in your browser, you will have a window.ethereum object. you'll also have a window.solana. Injected global objects (window.ethereum, window.solana, etc.) allow the client (browser) to directly interact with a specific blockchain via the user's wallet. 

your wallet is your gateway to web3. it's your identity. kinda like an interface between you and the blockchain.

The **wallet** (e.g., MetaMask, Phantom) injects a **JavaScript object** into the `window` scope. so with these objects, our app can interact with the wallet.

It provides standardized **APIs** for:
- Connecting to the wallet
- Requesting account access
- Sending transactions
- Signing messages
- Listening to events (e.g., account or network changes)

The wallet interacts with the blockchain by acting as a client that connects to blockchain nodes through Remote Procedure Call (RPC) endpoints.
**Wallet = local key manager + RPC client.**


**ABI** - what a smart contract does in terms of input, output and functions

A cryptocurrency token is natively valid and usable only on its **respective mainnet**.

During SSR, the server connects **directly to an RPC endpoint** to fetch blockchain data. It does not interact with the user’s wallet.

**how is cryptography used in blockchain?**

merkle tree - used to summarize all the transactions in a block

centralized - one single main hub
decentralized - multiple main hubs
distributed - everybody is interconnected

[game theory][game theory] - how do you incentivize people to not lie about in the blockhain; to reach concensus

Proof of Work
Proof of Stake
Proof of Authority

web1 - producers produce content, consumers consume content (read-only)
web2 - users also generate content (read + write)
web3 - ownership too, you own what you create, less moderation?