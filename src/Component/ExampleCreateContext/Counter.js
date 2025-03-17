import React, { useState } from "react";
import CountContext from "./CountContext";
// import CounterDisplay from "./counterDisplay";
import CounterButton from "./CounterButton";
import DisplayCounter from "./DisplayCounter";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <CountContext.Provider
      value={{ count, setCount, increase, decrease, reset }}
    >
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Counter with Context API</h1>
        <DisplayCounter />
        <CounterButton />
      </div>
    </CountContext.Provider>
  );
};

export default Counter;
