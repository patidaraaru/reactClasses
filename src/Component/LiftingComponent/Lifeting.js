import React, { useState } from 'react'
import InputValueLift from './InputValueLift';
import DesplayValue from './DesplayValue';

const Lifeting = () => {
    const [inputValue,setInputValue] = useState();
  return (
    <div>
      <InputValueLift inputValue ={inputValue} setInputValue ={setInputValue}/>
      <DesplayValue inputValue ={inputValue}/>
    </div>
  )
}
export default Lifeting

