
what if there is a lot of context? how will we pass it to an LLM?

enter vector database and embeddings.

you turn a lot of text into an array of numbers (embeddings).

look into docs of **Pinecone**.

you can store the vector embeddings in a vector database? but you convert it into an embedding using GPT?

the query also is transformed into a vector embedding, and use that to find the relevant (mail or journal entry) and thenusing id find the same diary entries and pass them to the LLM. (the way of finding and how many results returned are quite different in vector DBs. Refer Pinecone docs.)

