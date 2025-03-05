import React, { useState } from 'react'

const ValueShowHide = () => {
    const Username = "Aarti Patidar";
    const [value,setValue] = useState(false)
    const HandleBtn =() =>{
        setValue(!value)
        console.log(value)
    }
  return (
   
    <div>
      <h2 className={`AddtData ${value ? "yes" : "no"}`}>{Username}</h2>
      <button onClick={HandleBtn}>Click</button>
    </div>
  )
}

export default ValueShowHide
