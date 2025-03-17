import React, { useContext } from 'react'

import CountContext from './CountContext';

const CounterButton = () => {
    const { increase, decrease, reset } = useContext(CountContext);
  return (
    <div>
      <button onClick={increase} >Increase</button>
      <button onClick={decrease} >Decrease</button>
      <button onClick={reset} >Reset</button>
    </div>
  )
}

export default CounterButton
