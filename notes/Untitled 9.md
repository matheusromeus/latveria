One of the big pain points and sources of confusion around React Server Components is that official docs and info has been scattered and unfortunately lacking.

The React team [originally announced RSCs with an explanation video in Dec 2020](https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components), and that was followed by [a lengthy and detailed RFC doc explaining RSCs](https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md). These did do a decent job of explaining the background and primary motivations.

However, the development process of RSCs, combined with the fact that it's up to frameworks to implement design choices, meant that the actual React docs have never meaningfully documented RSCs.

It took almost 2 years for [Next 13.0](https://nextjs.org/blog/next-13) to come out with the first official beta release of RSCs in the form of the new App Router, and another 6 months until [Next 13.4 officially declared the App Router as "stable" and ready for production](https://nextjs.org/blog/next-13-4) in May 2023. Vercel and Next have a small but very active devrel team, and by the time of Next 13.4's release, [they had done a sizeable rewrite of the Next docs to cover the then-new App Router, available as "beta" docs](https://web.archive.org/web/20230502235021/https://beta.nextjs.org/docs). That included some docs pages that talked about using RSCs, [under the "Data Fetching" category](https://web.archive.org/web/20230422084216/https://beta.nextjs.org/docs/data-fetching/fundamentals), as well as later detailed blog posts like [Understanding React Server Components](https://vercel.com/blog/understanding-react-server-components). These were excellent resources, with very helpful explanations of architecture and concepts.

And yet, even though the RSC functionality was part of React itself, **the React docs didn't have _any_ information on RSCs**. Not "What Are RSCs", not "How Do I Use an RSC", and _definitely_ not "How Do I Integrate My Library With RSCs". Vercel's team did a good job documenting their actual product and some of the overlap with React, but it was extremely confusing to people why there was no info or explanations about RSCs in the actual React docs themselves (which, timeline-wise, had just officially launched a couple months earlier).

There's been lots of discussion from individual React team members on social media, responding to questions, arguing in favor of RSCs as a concept, and trying to flesh out sales pitches for RSCs. But as of today, the only official core docs page on RSCs is [API Reference: Server Components](https://react.dev/reference/rsc/server-components). This page is, honestly, confusing and not particularly helpful. It's definitely not an "API reference" content-wise, and the content doesn't have any real context introducing RSCs or explaining when and how to use them - it's a grab bag of random topics.

There _have_ been a number of excellent external blog posts explaining various aspects of RSCs:

- Dan Abramov has written [numerous fantastic posts explaining the mental model of RSCs and the problems they solve](https://overreacted.io/).
- Vercel published a great ["Understanding React Server Components"](https://vercel.com/blog/understanding-react-server-components) intro blog post
- Daniel Saewitz wrote [Server Components Give You Optionality](https://saewitz.com/server-components-give-you-optionality) explaining how they're an addition to your toolbox

This is the kind of information that _should_ be in the React core docs - explanations of RSC concepts and why you might want to use them, independent of how any specific framework implemented RSCs.

Related to this: the community has taken away the idea that "RSCs are the future of React", and that "the React team _wants_ us to use RSCs all the time everywhere". In reality, I've seen React team members explicitly say on social media that "RSCs are optional, we just want people to understand them properly". Given that confusion, it seems like making that point specifically in the docs is important.

Personally, I'd like to see an entire section on RSCs added to the React core docs, with pages like:

- "Intro to RSCs"
- Mental model
- Use cases / when to choose RSCs
- Technical data flow / architecture
- Adoption / migration
- FAQ
- Framework implementor's guide

Having those docs pages would not make all the questions go away. Lots of people don't even read the docs in the first place :) But having those topics covered officially _would_ make it visible, and it would act as a resource that could be used to answer these questions whenever they come up on social media.q