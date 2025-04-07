import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Crud = () => {
  const [input, setInput] = useState([]);
  const [content, setContent] = useState();
  const [edit, setEdit] = useState();

  const HandleInput = (event) => {
    setContent(event.target.value);
  };
  const HandleClick = () => {
    if (content.trim() === "") return;
    if (edit !== null) {
      const updatedInput = [...input];
      updatedInput[edit] = content;
      setInput(updatedInput);
      setEdit(null);
    } else {
      setInput([...input, content]);
    }

    setContent(""); 
  };

  const HandleDlt = (item) => {
    const updateData = input.filter((list) => list !== item);
    setInput(updateData);
  };
  const HandleClearBtn = () => {
    setInput([]);
  };
  const HandleEdit = (index) => {
    setContent(input[index]);
    setEdit(index);
  };
  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(input));
  }, [input]);

  return (
    <Box>
      <div>
        <input
          type="text"
          placeholder="Enter the value"
          value={content}
          onChange={(event) => HandleInput(event)}
        />
        <Button type="submit" onClick={HandleClick}>
          Add
        </Button>
      </div>
      <ul>
        {input.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <Button type="button" onClick={() => HandleDlt(item)}>
              Dlt
            </Button>
            <Button type="button" onClick={() => HandleEdit(index)}>
              Edit
            </Button>
          </li>
        ))}
        {input.length === 0 ? (
          ""
        ) : (
          <Button type="button" onClick={() => HandleClearBtn()}>
            Clear All
          </Button>
        )}
      </ul>
    </Box>
  );
};

export default Crud;
