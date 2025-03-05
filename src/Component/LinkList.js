import React from 'react'


const LinkList = ({linkdata}) => {
  return (
   <>
   {linkdata?.map((item) => (
      <div key={item.id}>
          <img src={item.src} alt="hfhfh"  width={100} height={100}/>
          <h2>{item.title}</h2>
          <p>{item.describtion}</p>
      </div>
   ))}
   </>
  )
}

export default LinkList
