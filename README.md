# React State Update Batching Bug

This repository demonstrates a common React bug related to state update batching. When multiple state updates are triggered within a single event handler, React may not apply them sequentially as expected.

## Bug Description
The `bug.js` file contains a component where clicking the button is supposed to increment the counter by two.  Due to React's state update batching, only one of the `setCount` calls is applied.

## Solution
The `bugSolution.js` file shows how to resolve this issue using the functional update pattern to ensure the updates are correctly applied.