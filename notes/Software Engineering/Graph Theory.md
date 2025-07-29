
It's represented by G = (V, E)

V = a set of vertices
E = a set of edges. e.g: {(0,1), (0,2)}

Neighbors - if an edge connects them, then the vertices are neighbors.

![[Pasted image 20240703054229.png]]

Degree - The number of edges connected to a Vertex.

Path - Sequence of vertices connected by edges
Path length - number of edges in a path

Cycle - A path that starts and ends at the same vertex

Undirected Graphs - bidirectional
Weighted Graphs - the edges have values (weights) associated to them.

Directed Acyclic Graphs have no cycles. 


``` 
Trees are a type of Graph
```

- trees are connected and acyclic.
- removing an edge disconnects the graph
- adding an edge to a tree creates a cycle

How to represent a graph?
- Adjacency Matrix - x and y values are the vertices. if an edge exists between them, then 1 else 0
- Adjacency List - Each vertices have a list of their neighbors.

