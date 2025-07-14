
you can pre train them, then fine tune it and then give in context learning (RAG).

we will need an effective data pipeline to feed the LLM. To convert the data into the proper form. Look for Routing RAG pipeline.

we need a better data parser - like firecrawl.

we need to break data into chunks, because of lost in the middle problem. where the llm pays attention to only the start and the end of a document. very small chunks is also a problem as the model might not have full context.

Re-ranking documents.

Hybrid Search.

Agentic RAG. Agents performs query translation and planning and then performs RAG. Metadata filtering, Routing.

---

#LLM

