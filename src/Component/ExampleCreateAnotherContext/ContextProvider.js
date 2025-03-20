import React, { useState } from "react";
import CreateContextData from "./CreateContextData";

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increase = () => {
    if (count <= 99) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const decrease = () => {
    if (count >= 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  const reset = () => setCount(0);
  return (
    <CreateContextData.Provider
      value={{ count, setCount, increase, decrease, reset }}
    >
      {children}
    </CreateContextData.Provider>
  );
};

export default ContextProvider;
