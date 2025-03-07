import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(25);
  useEffect(()=>{
    console.log(`${count},${name}`)
  },[count,name])
  return (
    <>
      <h2>{count}</h2>
      <h2>{name}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>&nsps;
      <button onClick={() => setName(name <= "18" ? "children" : "adult")}>check</button>
    </>
  );
};

export default UseEffectExample;
