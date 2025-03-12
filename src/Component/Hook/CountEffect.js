import React, { useEffect, useState } from "react";
const CountEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState();

  useEffect(() => {
    document.title = `Count : ${count}`;
    console.log(count);
  }, [count]);
  return (
    <div>
      <h2>Count Effect</h2>
      <p>Count :{count}</p>
      <p>Name : {name}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br></br>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter the value"
      />
    </div>
  );
};
export default CountEffect;
