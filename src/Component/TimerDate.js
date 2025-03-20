import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const TimerDate = () => {
  const [time, setTime] = useState();
  const [list, setList] = useState(true);

  useEffect(() => {
    let interval;
    if (list) {
      interval = setInterval(() => {
        const today = new Date().toLocaleTimeString();
        console.log(today);
        setTime(today);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [list]);

  const handlePause = () => {
    setList(false);
  };

  const handleStart = () => {
    setList(true);
  };

  return (
    <div>
      <h3>{time}</h3>
      {list ? (
        <Button variant="danger" onClick={handlePause}>
          Pause
        </Button>
      ) : (
        <Button variant="success" onClick={handleStart}>
          Start
        </Button>
      )}
    </div>
  );
};

export default TimerDate;
