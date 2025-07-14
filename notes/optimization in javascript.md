- String comparison is slow, than integers. Because vectors are passed by reference while scalars are passed by value. Passing by reference means you will have to access memory, which is a slow operation.
- Keep the JS objects the same shape. Monomorphic, Polymorphic, Megamorphic.

## how js handles garbage collection

- Primitive values are not garbage collected.
- take memory snapshots and dropdown menu Objects allocated between snapshot 1 and 2
- WeakMap and WeakSet, automatic garbage collection happens.
- if keys are objects, then it’ll be automatically garbage collected.