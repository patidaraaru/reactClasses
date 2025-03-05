import React, { useState } from 'react'



const State = () => {
 
    const [data,setData] = useState([
        {name : "Aarti" ,  age : 24},
        {name : "Anurag" ,  age : 28},
        {name : "Pinku" ,  age : 24},
        {name : "Shivi" ,  age : 24},
        {name : "vebhav" ,  age : 24},
    ])
    
  return (
    <div>
      <ul>
     {data.map((current,index) => {
       return<>
       <li key={index}>
        {current.name } - {current.age}
       </li>
       </>
      })}
      </ul>
    </div>
  )
}

export default State
