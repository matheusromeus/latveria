**ISSUES**
- [ ] spacing between cards in past generations. bad.
- [ ] between creation of avatar AI, they can create other stuff without having credits. so if in queue, and total credits is less than 400 minus. allow for pay as you go.
- [ ] credits are cut but not showed in graph, for avatarAI
- [ ] dont let user write message if its loading, swithcing from another page, it's not loading sometimes
- [ ] avatarAI generation is failing - lambda TIMEOUT
- [x] add signal to show character limit in avatarAI
- [x] character limit for tag. it's going outisde the box.
- [x] sidebar not visible in some pages, payment
- [x] remove search functionality from voices
- [x] preview of voice should stop when i close the dropdown
- [ ] delete character option. **test it out**


Do you have a mobile app/need your routes exposed to services outside nextjs? Only use API routes.

Fetching data (GET)-> fetch on server components and pass the data to client components. No need to fetch from client in most cases. if you need to fetch data on the client (infinite scrolling, polling, webhooks, etc) then use what you would use to. I’d recommend react query or swr for caching, but even good ol fetch would be fine.

Updating data (POST) -> use server actions on the client. You shouldn’t ever use server actions to fetch data. You should also treat server actions as an api route and authenticate every request. The point of them is to provide a better dx and give you type safety. Other than that, they are no different from a POST api route.

Since server actions are a remote procedure call (RPC), you can technically fetch data from the server with them, and there is nothing stopping you.