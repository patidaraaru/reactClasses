import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import showData from "./Data";

const Index = () => {
  const [input, setInput] = useState("");
  const [get, setGet] = useState("");
  const [city, setCity] = useState([]);
  const [updateData, setUpdateData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("cities");
    if (storedData) {
      setCity(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    const dataShow = localStorage.getItem("fiterData");
    if (dataShow) {
      setFilterData(JSON.parse(dataShow));
    }
    console.log(dataShow);
  }, [updateData]);

  useEffect(() => {
    if (city.length > 0) {
      localStorage.setItem("cities", JSON.stringify(city));
    }
  }, [city]);

  const HandleChange = (event) => {
    const value = event.target.value;
    setInput(value);
    const fiterData = showData.filter(
      (item) => item.city?.toLowerCase() === value?.toLowerCase()
    );
    localStorage.setItem("fiterData", JSON.stringify(fiterData));
    setUpdateData(fiterData);
  };

  const HandleClick = () => {
    if (
      showData.some((item) => item.city?.toLowerCase() === input?.toLowerCase())
    ) {
      setGet("This City is available");
      if (!city.includes(input)) {
        const newData = [...city, input];
        setCity(newData);
        localStorage.setItem("products", JSON.stringify(newData));
        setGet("");
      }
    } else {
      setGet("This City is not availabel");
    }
    setInput("");
  };

  const HandleDataShow = (value) => {
    const fiterData = showData.filter(
      (item) => item.city?.toLowerCase() === value?.toLowerCase()
    );
    localStorage.setItem("fiterData", JSON.stringify(fiterData));
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

      <Button type="button" onClick={() => HandleClick()}>
        Click
      </Button>
      {filterData.map((item) => (
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
