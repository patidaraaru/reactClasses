import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000); // Run every second

    return () => {
      clearInterval(interval); // Cleanup function
      console.log("Timer stopped!");
    };
  }, []); // Run once on mount

  return <h2>Time: {seconds}s</h2>;
};

export default UseEffect;
