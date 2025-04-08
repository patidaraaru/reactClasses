import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SumAdded = () => {
  const [input, setInput] = useState("");
  const [content, setContent] = useState([]);

  const HandleChange = (event) => {
    setInput(event.target.value);
  };

  const HandleClick = () => {
    if (input.trim() !== "" && !content.includes(input)) {
      setContent([...content, input]);
      setInput("");
    }
  };
  const handleClear = () => {
    setContent([]);
  };
  const handleDlt = (current) => {
    const UpdateData = content.filter((_, item) => item !== current);
    setContent(UpdateData);
  };
  const HandleEdit = (edit, data) => {
    const EditData = content.filter((item) => item === data);
    setInput(EditData);
  };
  return (
    <>
      <div>
        <input type="text" onChange={HandleChange} value={input} />
        <Button type="button" onClick={HandleClick}>
          Add
        </Button>
      </div>
      <div>
        <ul>
          {content.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <Button type="button" onClick={() => handleDlt(index)}>
                Dlt
              </Button>
              <Button type="button" onClick={() => HandleEdit(index, item)}>
                Edit
              </Button>
            </li>
          ))}
        </ul>
        {content.length === 0 ? (
          ""
        ) : (
          <Button type="button" onClick={handleClear}>
            Clear all
          </Button>
        )}
      </div>
    </>
  );
};

export default SumAdded;
