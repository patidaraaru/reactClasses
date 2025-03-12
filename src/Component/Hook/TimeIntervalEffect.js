import React, { useEffect, useState } from "react";

const TimeIntervalEffect = () => {
    const [count,setCount] = useState(0)
        
   useEffect (()=>{
    const time = setInterval(()=>{
        setCount(prev => prev + 1)
        document.title = count;
    },1000)
    return ()=>
        clearInterval(time);
   },[count]);
   
  return (
    <>
      <div>
        <h2>Seconds Start</h2>
        <p>count : {count}</p>
      </div>
    </>
  );
};

export default TimeIntervalEffect;
