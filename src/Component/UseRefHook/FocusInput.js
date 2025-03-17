import React, { useRef, useState } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState();

  const focusInput = () => {
    inputRef.current.focus();
  };
  const focusInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h2>{input}</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here..."
        value={input}
        onChange={focusInputChange}
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
