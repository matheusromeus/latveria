caching and performance in react
what is the new things that came in react? - the compiler, concurrent rendering?

debounce, throttle, virtualization, (react-window)

Graph performance optimizations
GPU metrics, streaming data

Wallet integrations
Gas Fees UI, token balance rendering
state polling vs push events
address validation, ENS Support
Performance implications of server-side rendering vs client-side




One refactor for performance you led - next js architecture, removing blocking and heavy calls in the server, exdera designs, marketing site lighthouse scores

One problem you debugged deeply - live transcription and its performance

meta create architecture - monorepo and modules and websockets

how you built the ai powered video editor in the browser, how did you integrate ffpmeg wasm? -> for live captioning and subtitles, splitting clips

Designed and implemented a Web3-native conversational AI platform with live voice interaction via WebRTC,
custom state orchestration, and full database schema architecture.

built internal tools for meltwater and m0
rss feed generation, leanier


---
512mb of ffmpeg, small edits on browser, then 

file read as blob, encoded and decoded using ffmpeg.wasm

video.currentTime was the single source of truth
request animation frames
AI-generated title suggestions, labels, or scene summaries
**prompt-engineered** it using our SDK structure


did what shadcn did, props are button attributes of the html button, then custom props like cva, clsx and tw-merge

media generation website for web3 creators, generate images, audio and video. 
backend modules in nest
fal ai apis, how can this app be a web3 app?

how was the video editor performant?