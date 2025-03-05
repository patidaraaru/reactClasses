import React from 'react'

const InputValueLift = ({inputValue,setInputValue}) => {
  return (
    <div>
     <input type="text"  placeholder='Enter Your value' onChange={(e)=> setInputValue(e.target.value)} />
    
    </div>
  )
}

export default InputValueLift
