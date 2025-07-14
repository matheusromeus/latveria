### **1. Frontend (Next.js App Dir)**

- Pages:
    
    - `/dashboard` – personalized user info, media history
        
    - `/explore` – model discovery, filtering, search
        
    - `/imagegen`, `/videogen`, `/audiogen` – chat-style UIs
        
- Components:
    
    - Chat interface (user input, generation response)
        
    - Media preview card (image, video, audio players)
        
    - Notification system (polling or WebSocket fallback)
        
- State:
    
    - React Query / Zustand for session and API state
        
    - Wallet login state management
        
- Wallet Integration:
    
    - Ethers.js or Wagmi + RainbowKit for Web3 login
        

---

### **2. Backend (NestJS Monorepo in Microservice Mode)**

#### **Auth Service**
- Web3 wallet signature verification
- Session/token issuing (JWT or SIWE-based)
#### **User Service**
- User profile
- Saved generations (metadata only, no media files stored directly)
#### **Generation Service**
- Queue manager (BullMQ + Redis)
- Handles API calls to fal.ai
- Stores job metadata in Postgres
- Emits job status events
#### **Notification Service**
- Listens to job status events
- WebSocket gateway (or Server-Sent Events fallback)
- Sends frontend media generation complete notifications
---
### **3. Queue & Job Management**
- Use **BullMQ** with **Redis**:
    - Job queue per media type
    - Retry logic for failed generations
    - Rate-limiting or concurrency controls
- Worker processes:
    - Calls fal.ai APIs
    - Stores result metadata (e.g., URL) in Postgres
    - Emits completion event
---
### **4. Database (PostgreSQL + Prisma)**

- Tables:
    - `users` (wallet, metadata)
    - `generations` (id, user_id, type, input_prompt, status, result_url, timestamps)
    - `models` (for explore page)
- Relations:
    - 1:N between users and generations

---
### **5. Media Handling**

- Fal.ai returns hosted URLs
- Optionally cache metadata in S3 or CDN later
- Display media via lazy-loaded previews on frontend

---
## **6. doubts**
Shared Prisma package?
how to verify shared types package?
why nestjs/bull instead of bullmq

**research: do not install shared packages locally available**
- Installing it creates a **node_modules copy**, breaking hot reload and type linking.
    
- With Turborepo + path aliases (`tsconfig.paths`), the shared package is **directly referenced** from source.
    
- Ensures **type updates propagate immediately** without rebuilds.
    

---

### **Correct Way**

- Declare `paths` in `tsconfig.base.json`
    
- Use `import { X } from '@meta-create/types'`
    
- No explicit install needed
---

does nest js not follow microservices architecture by default?
how is true microservices done in nest js?

nest js is monolithic by default, even with different modules.
convert the services to modules.
	

auth module
user module
notification module (not necessary now, can add email notifs later)


# sample flow

### **Media Generation + Toast Notification Flow**

#### **Actors**

- User (wallet-authenticated)
    
- Frontend (Next.js)
    
- Backend (NestJS monolith)
    
- fal.ai API
    
- Redis + BullMQ for queue
    

---

### **1. Frontend: User Initiates Generation**

- User sends prompt in chat UI on `/imagegen`, `/videogen`, or `/audiogen`.
    
- Request:  
    `POST /generate`  
    Body: `{ type: 'image' | 'video' | 'audio', prompt: string }`
    

---

### **2. Backend: NestJS Handles Request**

- `GenerationController` receives request.
    
- Validates session using wallet address (via guard or middleware).
    
- Creates a generation job:
    
    - Enqueues job in BullMQ (`media-generation` queue).
        
    - Stores record in Postgres:  
        `generations` table → `id`, `user_id`, `type`, `status = "queued"`
        

---

### **3. Frontend: Displays "Processing"**

- Receives job ID in response.
    
- UI shows loader + “Generation in progress…”
    

---

### **4. Backend Worker: Executes Job**

- BullMQ worker dequeues job.
    
- Calls fal.ai API with prompt.
    
- On success:
    
    - Stores result URL in `generations.result_url`
        
    - Updates status to `completed`
        
    - Emits event: `generation.completed` with `user_id`, `type`, `result_url`
        

---

### **5. Backend: WebSocket Gateway Emits Event**

- A `WebSocketGateway` is subscribed to internal events.
    
- On `generation.completed`, it emits to the client socket:
    
    ts
    
    CopyEdit
    
    `this.server.to(userId).emit('generationComplete', {   type,   resultUrl, });`
    

---

### **6. Frontend: Global WebSocket Listener**

- On app mount:
    
    - Connects to backend WebSocket (with wallet ID).
        
    - Registers:
        
        ts
        
        CopyEdit
        
        ``socket.on('generationComplete', ({ type, resultUrl }) => {   showToast(`Your ${type} is ready.`, resultUrl); });``
        
- Even if user is on a different page, toast is shown.
    
- Toast links to the result or opens a modal.
    

---

### **7. Optional (Later): Email Notification**

- Same `generation.completed` event triggers an email service.
    
- Sends result to user’s registered email (if added).
    

---

### **Data Tables Summary**

- `users`: id, wallet_address
    
- `generations`: id, user_id, type, prompt, status, result_url, created_at
    

---

### **Queue Summary**

- Queue name: `media-generation`
    
- Backed by Redis
    
- Uses BullMQ for workers
    

No polling required. Real-time feedback via WebSocket.

# schema model

User

ImageGen
AudioGen
VideoGen
should these 3 be separate or a single model?


each model will have their own params. 


---

app folder should only have the core routing pages

![[Pasted image 20250610002839.png]]
the design is done for 1080p screens. 

fix the fonts

