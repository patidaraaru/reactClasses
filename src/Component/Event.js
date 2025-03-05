import React from 'react'

const Event = () => {

 const HandleClick =(event)=>{
       alert("I am Button")
       console.log(event)
       console.log(event.target)
       console.log(event.value)
 }
 const HandleCheckPera =(name) =>{
    console.log(`I am pera ${name} pass button`)
    alert(`I am  ${name} using pera button`)
 }


  return (
    <div>
      <button onClick={HandleClick}>Click Me</button>
      {/* <button onClick={()=> alert("I am inline button")}>I am inline</button>
      <button onClick={(Event)=> console.log("Event")}>I am Event</button> */}
      <button onClick = {() => HandleCheckPera("Aaru")}>Use Perameter</button>
    </div>
  )
}

export default Event
