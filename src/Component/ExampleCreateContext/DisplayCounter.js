import React, { useContext } from 'react'
import CountContext from './CountContext'

const DisplayCounter = () => {
    const [count] = useContext(CountContext)
  return (
    <div>
      {count >= 0 && count <= 100 && <p>{count}</p>}
    </div>
  )
}

export default DisplayCounter
