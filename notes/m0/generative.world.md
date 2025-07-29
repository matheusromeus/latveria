create a 3d world, create 3d assets, animate 3d assets, create a game

rosebud
tripo3d
meshy
anything.world

That's a comprehensive 3D game development pipeline. You're essentially building a full suite of tools - from world generation to finished playable games. Here's how I'd structure this:

**Core Architecture**:

- **World Builder**: Procedural terrain generation with biomes, structures, lighting
- **Asset Generator**: AI-powered 3D model creation from text prompts
- **Animation System**: Rigging and animation tools for generated assets
- **Game Engine**: Scene composition, physics, scripting, and gameplay logic

**Technical Stack**:

- **Frontend**: React with Three.js/Babylon.js for 3D editing interface
- **Backend**: Node.js/Python hybrid - Node for real-time features, Python for AI/ML
- **3D Processing**: Blender headless for mesh operations, rigging, animation
- **Game Runtime**: Custom WebGL engine or Unity WebGL builds
- **AI Models**: Stable Diffusion variants, Point-E/Shap-E for 3D, motion synthesis models

**User Workflow**:

1. **World Creation**: "Generate a medieval castle courtyard" → terrain, buildings, props
2. **Asset Creation**: "Create a fire-breathing dragon" → 3D model with textures
3. **Animation**: Auto-rig the dragon, generate walk/fly/attack animations
4. **Game Logic**: Visual scripting for interactions, quests, combat systems
5. **Play/Share**: Export as playable web game or downloadable build

**MVP Implementation Strategy**: Start with **world generation** (easier to get working) → **simple asset creation** → **basic animations** → **simple game mechanics**. Each module should work independently before integrating.

**Key Challenges**:

- AI consistency across assets in the same world
- Performance optimization for complex generated scenes
- User-friendly interfaces for non-technical creators
- Monetization strategy (API costs will be significant)

Are you planning this as a consumer product like "Minecraft meets DALL-E" or more of a developer tool? And what's your budget for compute resources - the AI inference costs could be substantial.
---

events as source of truth

1. web3 wallet auth
2. dashboard - entirely static data, just need some animated components
3. 3d studio
4. game studio -> my games page
5. history
	- fetch history in server component and render in client
	- on click you can see detailed view page
	- tabs with all, 3d and games
	- can delete, rename or share the asset from the page itself
	- sharing the asset means the public link to the project
	- when i click on an asset, inside the detailed view i need to be able to inspect it
	- when i click on a game, we should be able to play the game.
6. without connecting wallet, app is in preview mode
7. navbar is collapsible to icons

**auth**
- **Method**: Custom nonce + signature verification
- **Chains**: Ethereum, Solana
- **Session**: JWT
- **Modes**:
    - `preview` (only dashboard visible, other routes blocked with modal)
    - `authenticated` (wallet verified, JWT issued)

STATES
type AuthState =
  | { mode: "preview" }
  | { mode: "connecting"; chain: "eth" | "sol" }
  | { mode: "signing"; chain: "eth" | "sol"; nonce: string }
  | { mode: "verifying"; chain: "eth" | "sol" }
  | { mode: "authenticated"; wallet: string; chain: "eth" | "sol"; jwt: string }
  | { mode: "error"; message: string };

EVENTS
type AuthEvent =
  | { type: "AUTH.CONNECT_START"; chain: "eth" | "sol" }
  | { type: "AUTH.NONCE_RECEIVED"; nonce: string }
  | { type: "AUTH.SIGN_SUCCESS" }
  | { type: "AUTH.SIGN_ERROR"; error: string }
  | { type: "AUTH.VERIFY_SUCCESS"; wallet: string; jwt: string }
  | { type: "AUTH.VERIFY_ERROR"; error: string }
  | { type: "AUTH.DISCONNECT" };

Reducer Pattern
function authReducer(state: AuthState, event: AuthEvent): AuthState {
  switch (event.type) {
    case "AUTH.CONNECT_START":
      return { mode: "connecting", chain: event.chain };
    case "AUTH.NONCE_RECEIVED":
      if (state.mode === "connecting")
        return { mode: "signing", chain: state.chain, nonce: event.nonce };
      return state;
    case "AUTH.SIGN_SUCCESS":
      if (state.mode === "signing")
        return { mode: "verifying", chain: state.chain };
      return state;
    case "AUTH.VERIFY_SUCCESS":
      return { mode: "authenticated", wallet: event.wallet, chain: state.chain ?? "eth", jwt: event.jwt };
    case "AUTH.SIGN_ERROR":
    case "AUTH.VERIFY_ERROR":
      return { mode: "error", message: event.error };
    case "AUTH.DISCONNECT":
      return { mode: "preview" };
    default:
      return state;
  }
}

User       UI        Backend
 |         |            |
 | click connect       |
 |--------------------->|
 |  dispatch CONNECT_START(chain)
 |         |            |
 |         | request nonce ---->
 |         |            |
 |         |<--- nonce  |
 | dispatch NONCE_RECEIVED(nonce)
 | wallet signs message
 | dispatch SIGN_SUCCESS
 |         | verify sig ------>
 |         |            |
 |         |<-- JWT ----|
 | dispatch VERIFY_SUCCESS(wallet,jwt)
 | UI state: authenticated

![[Pasted image 20250717134315.png]]

ERD
---
### User

- `user_id` UUID PK
    
- `chain` ENUM(eth, sol)
    
- `address` VARCHAR UNIQUE(chain,address)
    
- `display_name` VARCHAR
    
- `created_at` TIMESTAMP
    
- `updated_at` TIMESTAMP
    
- `status` ENUM(active, suspended, deleted)
    

---

### Project

- `project_id` UUID PK
    
- `owner_user_id` FK → User.user_id
    
- `name` VARCHAR
    
- `description` TEXT
    
- `visibility` ENUM(private, unlisted, public)
    
- `is_default` BOOLEAN DEFAULT FALSE
    
- `created_at` TIMESTAMP
    
- `updated_at` TIMESTAMP
    
- `deleted_at` TIMESTAMP NULL
    

---

### Asset

- `asset_id` UUID PK
    
- `project_id` FK → Project.project_id
    
- `name` VARCHAR
    
- `asset_kind` ENUM(Model, Texture, Rig, Anim, Bundle)
    
- `state` ENUM(Draft, Queued, Generating, Generated, Error, Deleted)
    
- `current_version_id` FK → AssetVersion.asset_version_id NULL
    
- `preview_thumb_url` TEXT
    
- `created_at` TIMESTAMP
    
- `updated_at` TIMESTAMP
    
- `deleted_at` TIMESTAMP NULL
    

---

### AssetVersion

- `asset_version_id` UUID PK
    
- `asset_id` FK → Asset.asset_id
    
- `version_index` INT
    
- `prompt_text` TEXT
    
- `params_json` JSONB
    
- `artifact_uri` TEXT
    
- `file_format` ENUM(GLTF, GLB, OBJ, FBX, USDZ, ZIP)
    
- `created_at` TIMESTAMP
    

---

### GameBuild

- `game_build_id` UUID PK
    
- `project_id` FK → Project.project_id
    
- `name` VARCHAR
    
- `build_state` ENUM(Draft, Queued, Building, Built, Playable, Error, Deleted)
    
- `build_artifact_uri` TEXT
    
- `engine` ENUM(ThreeJS, UnityWebGL, Godot, Custom)
    
- `created_at` TIMESTAMP
    
- `updated_at` TIMESTAMP
    

---

### GameBuildAsset (Join Table)

- `game_build_id` FK → GameBuild.game_build_id
    
- `asset_id` FK → Asset.asset_id
    
- `role` ENUM(Environment, Character, Prop, FX, Other)
    
- PK: (game_build_id, asset_id)
    

---

### ShareLink

- `share_link_id` UUID PK
    
- `project_id` FK → Project.project_id
    
- `token_slug` VARCHAR UNIQUE
    
- `is_public` BOOLEAN
    
- `expires_at` TIMESTAMP NULL
    
- `created_at` TIMESTAMP



manage job queueing and polling or webhooks
signed URLs for client side downloading
export 3d models in various formats
R3F or 3.js for 3d rendering
Advanced prompt understanding and coherence
fal ai has only image to 3d, so we have to do text to image interally.
max 3 concurrent generations
openmeter and credits
history tracks the prompts along with the generations
job retries

**ETA**: 1 month for final handover


live auth i am working on rn
---

when should the authState in the localStorage be cleared? the one we are using for persisting. should we use sessionStorage instead?


glb | obj | stl

mcp client -> mcp server for blender -> blender