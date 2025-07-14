useReducer -> takes 2 args: a dispatch function and and object with state as key value pairs.

the dispatch function takes 2 args again. the state and and an action. the action is an object with type -> 'string' and payload.

it returns an array like useState but it's -> [state, dispatch]
	

how does react know that state changed? the reference to the vector data type changed. 


When to use useReducer instead of useState?
    - JavaScript objects or arrays as a state ( eg. our second use case )
    - Complicated business logic more suitable for a reducer function
    - Different properties tied together that should be managed in one state object
    - When setter function is more complicated.



useMemo takes in 2 args. the function to be memoised and an array of state variables which when changed, the memoised function is recalculated.

useMemo doesn't have the memory overhead like memoisation because it's a single level memoisation. checks the references and if references changed, then re-calculate.


if a callback is going into a nested component as a property, use useCallback.

Pro Tip: Stabilize references that you send into a component
