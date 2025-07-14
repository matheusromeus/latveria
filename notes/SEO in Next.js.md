
1. metadata
	1. page title - a nested object. can add different page title according to folder structure. default (for pages without title) & template (for pages with title). for other pages do the same thing for metadata as you do on layout.tsx. if you dont want some pages to have title like the template, you can *absolute* property in the title nested object.
	2. description
	3. favicon
	4. open graph image - 1200x630px - has to be called opengraph-image.png (paste it directly inside app folder)
	5. next/font
	6. next/image
	7. dynamic metadata - add export async function generateMetadata which returns a promise of type metadata.![[Pasted image 20240826124313.png]]

this duplication is okay since next js caches the *fetch* requests. only fetch not any other libraries like axios or anything else.

PS: only in server components

if you're not using that how will you implement cache?
```js
import  { cache } from 'react' 
const getUserMetrics = cache(calculateUserMetrics);
```


we can generate dynamic og images with code. check docs. *opengraphimage generation*

# generateStaticParams - used to specify the params which dynamic routes can take so some caching can take place.
![[Pasted image 20240826130247.png]]

for the ids returned, this will be executed from the first rendering onwards. the ones which doesn't have them will be cached after the first render. (need to look more into this. read docs)


2. not-found 
	1. add not-found.tsx to app folder
	2. can add loading.tsx also to app folder

3. fetch almost all data that you can with server components.
4. sitemap
	1. can generate this by code with *sitemap.ts* in the app folder
	![[Pasted image 20240826135920.png]]

5. robots.txt - can add or generate. (place in app folder)
6. google search console & vercel analytics


![[Pasted image 20241024105254.png]]