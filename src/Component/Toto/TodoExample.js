import React, { useState } from "react";

const TodoExample = () => {
  const [value, setValue] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const HandleChange = (event) => {
    setInputValue(event.target.value);
  };
  const HandleSubmit = () => {
    setInputValue("");
  };

  const HandleClick = () => {
    if (!inputValue.trim()) return; 
    setValue((prev) => [...prev, inputValue]);
    console.log(setValue);
    // setInputValue("");
    if (value.includes(inputValue)) return;
  };
  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Enter the value"
          autoComplete="off"
          value={inputValue}
          onChange={HandleChange}
        />
        <button onClick={HandleClick}>Add</button>
      </form>
      <ul>
        {value.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoExample;
