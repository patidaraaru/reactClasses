import { Input } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Index = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [edit, SetEdit] = useState([]);

  const HandleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      setItems([...items, input]);
      setInput("");
    }
  };

  const HandleDelete = (itemToDelete) => {
    const updatedItems = items.filter((some) => some !== itemToDelete);
    setItems(updatedItems);
  };

  const HandleClear = () => {
    setItems([]);
  };

  return (
    <Box>
      <form onSubmit={HandleSubmit}>
        <Input
          type="text"
          placeholder="Enter Value..."
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></Input>
        <Button type="submit">Add</Button>
      </form>
      <ul>
        {items.map((name, index) => (
          <li key={index}>
            <span>{name}</span>
            <button type="button" onClick={() => HandleDelete(name)}>
              Dlt
            </button>
          </li>
        ))}
        <button type="button" onClick={HandleClear}>
          Clear All
        </button>
      </ul>
    </Box>
  );
};

export default Index;
