## unit 1
store minimal state, derive everything else
if you can derive it, do not store it in a state variable.

state - two types 
- values that should cause re renders - related to the UI -> use useState
- state that is not related to the UI or render like a flag or timerId, internal -> useRef

stay away from redundant state. 
examples:
- deduplicating data when it's available in props/context
- Storing full objects when only ID is needed


## unit 2
modelling your app in a minimal way.
- state diagram - state.new
- ER diagram - https://dbdiagram.io/home
- sequence diagram - captures the flow in/between different parts of the app https://swimlanes.io/

```markdown
# Entity relationship

- Destinations
  - id
- Homes
  - id
  - destinationId
- User
  - Name
  - Id

# Sequence diagram

UI -> AirBnB search service: Find search results for this query (where, check in, checkout, and # of guests)
AirBnB search service -> UI: Results
UI -> UI: Select home
UI -> AirBnB API: Booking
AirBnB API -> UI: Payment information
UI -> Payment processor:

# State diagram

Start with destination
When the destination si input, put in the check in date
Then put in the checkout date
Then add the number of guests
And then when the user presses search, it'll take us to a search results page
The search results will be loading, and eventually show up
The user can click on one of the homes and be taken to a details page
They can go back from the details page back to the search page

```


State machines - 3 main things
- state
- transitions (what cause a state to go to another state)
- events (events cause state transitions)

when you are mapping your state diagram, 2 imp things.
- what state are you in
- what can happen in each state


so when you do a state diagram, you are thinking about the application state as a whole. not how individual data objects are managed.
## unit 3

**events are the real source of truth**

how does your bank derive how much money you have? how does it make sure that it is never out of sync?
they have a ledger, which in our case is an array of events. 

events capture intent and history while state is just a snapshot derived from events

"event" & "current state" is an idea, how you implement is up to you.

the idea is your current state is reduced from the previous states and events that happened. this is how useReducer is implemented.

you are controlling the playing field. you have kept the user in a **controlled environment**. like in video games. you map out every single possibility and you constraint the user into only having these possibilities. You are building a system that is always in **exactly one state at a time**, and moves to the next state **only in response to a known event**. your app is a state machine. which has a UI.

so instead of checking the data and finding out what state we are in, we are doing the reverse.

FSM = Finite State Machine.
A formal model where:
- The system is always in **exactly one state**.
- It moves to another state **only in response to an event**.
- Transitions are **deterministic**:  
    given the current state and event, the next state is fixed.


- pure functions for app logic - self contained, able to test or extract it singlely. 
- keep core app/business logic in separate pure functions
- combine related state
- separate side effects and pure functions (app logic/ where the state is updated)
- we don't want to just go to the search results page, we want to go to the page and kick off the search process (that's the elm way?)


state machine modelling combines the pure function and the events part into one to make sure all the states are deterministic and no impossible states come. the combinations that you define will only happen.

this enables typed state, and finite states. A system in **one of a limited, predefined set of states**, and can transition only through explicit events.
type AuthState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'unauthenticated' }
  | { status: 'authenticated'; user: User };

and in this example you can see typed state, only if status is authenticated, you have access to user.


setState((prev)=> prev+1 ) -> can be a stale value, if we do not grab the previous value, due to closure timing, the value is the one that is at the time of the inner function created.