import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Weather = () => {
  const [weather, setWeather] = useState(true);
  const [check,setCheck] = useState(true)

  const CheckWeather = () => {
    setWeather(true);
    setCheck(false);
  };
  return (
    <div>
        {
            check ?  <p>Weather</p> : <p>Weather 2</p>
        }
      <Button onClick={CheckWeather}>Check</Button>
    </div>
  );
};

export default Weather;
