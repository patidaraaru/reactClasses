import React from 'react'

const BioData = [
    {id:1, name:"Aarti" , age :24},
    {id:2, name:"Pooja" , age :28},
]


const test1 = () => {
  return (
    <ul>
        {BioData.map((Data, index) =>(
          <li key={BioData.id}>
            {BioData.name} - {BioData.age}
          </li>
        ))}
        
    </ul>
  )
}

export default test1
