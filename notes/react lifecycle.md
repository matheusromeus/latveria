
we have function components

react adds extra functionality to it and adds it to its lifecycle.
(extra functionality like JSX, hooks)


render - initial mount
re-render - update step
exit - unmount step

only the components visible (or currently being used) are put in the lifecycle


1. all the code is executed,  initialize state values, run the jsx and pass it to the virtual DOM, DOM... useEffect is run after the browser paint. 
2. and then when state is updated, it re renders
3. the second step is the same, again all the code is re-run, the values are updated, state, 
4. then once the component is unmounted, all the values from memory are released


then is browser paint (last, what user sees)


in react, we describe UI declaratively, i dont care how it gets inserted to the page, i just know how it looks