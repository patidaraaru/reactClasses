import React from 'react'
// import Content from './Content'

const WebContent = ({content}) => {
  return (
    <div>
       {content?.map((items)=>(
        <div key={items.id}>
             <img src={items.img} alt="hello" className="card-image" />
            <h2>{items.title}</h2>
            <p>{items.describtion}</p>
        </div>
    ))}
    </div>
  )
}

export default WebContent
