import React, { useState } from "react";

const EventPermeter = () => {
  const handleParentClick = () => {
    alert("Parent clicked!");
  };

  const [data, setData] = useState(0)
  const handleChildClick = (event) => {
    event.stopPropagation();
    setData (() => data + 1)
  };

  return (
    <div onClick={handleParentClick} style={{ padding: 20, background: "#ddd" }}>
      Parent
      <h2>{data}</h2>
      <button onClick={handleChildClick} style={{ marginLeft: 10 }}>
        Child
      </button>
    </div>
  );
};

export default EventPermeter;
