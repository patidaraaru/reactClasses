import React, { useState } from 'react'

const Timer = () => {
    const [Time,setTime] = useState(new Date ().toLocaleTimeString());
    const MyFunction = () =>{
          setTime(new Date ().toLocaleTimeString());
    }
    setInterval(MyFunction)
  return (
    <>
    <div>{Time}z </div>
    {/* <button onClick={MyFunction}>Click</button> */}
    </>
  )
}

export default Timer