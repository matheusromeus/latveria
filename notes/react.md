
every re-render in react is a state change.

but when a component re renders, it re renders all its children too

The point of a re-render is to **figure out what needs to change.**

Each render is a snapshot, like a photo taken by a camera, that shows what the UI _should_ look like, based on the current application state.

React plays a “find the differences” game to figure out what's changed between these two snapshots. In this case, it sees that our paragraph has a text node that changed from `0` to `1`, and so it edits the text node to match the snapshot. Satisfied that its work is done, React settles back and waits for the next state change.