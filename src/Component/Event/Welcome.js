import React from 'react'

const HandleClick = () => {
    alert("Ohh! You Click Me");
 };
 const HandeMouseHover = () => {
    alert("Ohh! You hover Me");
 };
 const EventTopic = () => {
     return (
        <Welcome onClick ={HandleClick} onKeyUp={HandeMouseHover} />
     );
 };


const Welcome = ({ onClick, onKeyUp }) => {
    const HandleChange = () => {
        alert("This is my button")
        onClick(onKeyUp);
    };
  return (<>
    
    <div>
      <button onClick={onClick}>Click Me</button>
      <button onKeyUp={onKeyUp}>Key Up</button>
      <button onMouseEnter={HandleChange}>Hover Me</button>
    </div>
    </>
  )
}

export default EventTopic;



