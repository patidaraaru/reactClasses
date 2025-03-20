import React, { useRef, useEffect, useState } from "react";

const Timer = () => {
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Component Rendered:", renderCount.current);
  });
  const handleLog = () => {
    console.log("Input Value:", inputRef.current.value);
  };

  return (
    <div>
      <h2>Render Count: {renderCount.current}</h2>
      <h2>State Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <br />
      <br />
      <input type="text" ref={inputRef} />
      <button onClick={handleLog}>Log Input Value</button>
    </div>
  );
};

export default Timer;
