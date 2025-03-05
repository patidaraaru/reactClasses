import React, { useState } from 'react'

const AlphaCount = () => {
    const[data, setData] =useState();
   const GetData = ((event)=>{
    setData(event.target.value);
    })

   const MyClick =() =>{
    
    }
  return (
    <div>
      <h2>{data}</h2>
      <input type="text" placeholder='Enter Value' onChange={GetData} />
      <button onClick={MyClick}>Submit</button>
    </div>
  )
}

export default AlphaCount
