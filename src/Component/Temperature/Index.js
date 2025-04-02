import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import showData from "./Data";

const Index = () => {
  const [input, setInput] = useState("");
  const [get, setGet] = useState("");
  const [city, setCity] = useState([]);
  const [updateData, setUpdateData] = useState([]);

  const HandleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    const fiterData = showData.filter(
      (item) => item.city?.toLowerCase() === value?.toLowerCase()
    );
    setUpdateData(fiterData);
  };

  const HandleClick = () => {
    if (
      showData.some((item) => item.city?.toLowerCase() === input?.toLowerCase())
    ) {
      setGet("This City is available");
      setCity([...city, input]);
    } else {
      setGet("This City is not availabel");
    }
    setInput("");
  };

  const HandleDataShow = (value) => {
    const fiterData = showData.filter(
      (item) => item.city?.toLowerCase() === value?.toLowerCase()
    );
    setUpdateData(fiterData);
  };

  return (
    <Box>
      <input
        type="text"
        placeholder="Enter the City"
        value={input}
        onChange={(event) => HandleChange(event)}
      />
      <p>{get}</p>

      {city.length === 0
        ? ""
        : city.map((name, index) => (
            <Button type="button" onClick={() => HandleDataShow(name)}>
              {name}
            </Button>
          ))}

      <Button type="button" onClick={HandleClick}>
        Click
      </Button>
      {updateData.map((item) => (
        <Box>
          <span key="item.id">{item.id}</span>
          <p>City : {item.city}</p>
          <p>Temperature : {item.temperature}</p>
          <p>Humidity : {item.humidity}</p>
          <p>Wind : {item.wind}</p>
        </Box>
      ))}
    </Box>
  );
};

export default Index;
