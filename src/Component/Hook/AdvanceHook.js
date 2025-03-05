import React, { useState } from 'react'

const AdvanceHook = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] =useState(0)

    const handleChange = (event)=>{
        setInputValue(Number(event.target.value));
        console.log(setInputValue)
    }
    const HandleIncrement =()=>{
        setCount(count + inputValue)
    }
    const HandleDecrement =()=>{
        setCount(count - inputValue)
    }
    
  return (
    <div>
        <h1>UseState Challenge</h1>
        <h2>Count: {count}</h2>
        <input type="number" onChange={handleChange} value={inputValue}/><br></br><br></br>
        <button className='themeBtn' onClick={HandleIncrement} disabled={count >= 100}>Increment</button>
        <button  className='themeBtn' onClick={HandleDecrement} disabled={count <= 0}>Decrement</button>
        <button className='themeBtn' onClick={()=>setCount(0)}>Reset</button>
      
    </div>
  )
}

export default AdvanceHook
