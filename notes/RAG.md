
1. no source
2. out of date

so how can LLMs stay up to date and show a data source as a proof of non hallucination?
RAG is the answer.

so in addition to what the LLM knows, we are adding a data store that can be public or private. so when prompted, the LLM goes and fetches relevant content from the data store and combines that with the user's question and then generates the answer. 

This is an easier way than re-training models. We just have to update our data store.
___
#LLM 