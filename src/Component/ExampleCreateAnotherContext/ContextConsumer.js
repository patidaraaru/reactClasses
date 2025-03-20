import React, { useContext } from "react";
import CreateContextData from "./CreateContextData";

const ContextConsumer = () => {
  // ✅ Correct destructuring (use object, not array)
  const { count, increase, decrease, reset } = useContext(CreateContextData);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ContextConsumer;
