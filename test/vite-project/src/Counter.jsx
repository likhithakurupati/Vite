/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(1);

  function IncrementCount() {
    setCount(count + factor);
  }
  function DecrementCount() {
    setCount(count - factor);
  }
  function IncrementFactor() {
    setFactor(factor + 1);
  }
  function DecrementFactor() {
    setFactor(factor - 1);
  }
  return (
    <div>
      <h3>This is my counter value: {count}</h3>
      <button onClick={IncrementCount}>Increment</button>
      <button onClick={DecrementCount}>Decrement</button>
      <h3>Set Factor {factor}</h3>
      <button onClick={IncrementFactor}>Increment</button>
      <button onClick={DecrementFactor}>Decrement</button>
    </div>
  );
}
