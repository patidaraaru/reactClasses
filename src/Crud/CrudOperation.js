import React, { useState } from 'react'

const CrudOperation = () => {
    const[user,setUser] = useState();
    const[show,setShow] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editDesign, seteditDesign] = useState(true)

    const HandleClick =()=>{
        if (user.trim() !== ""){
          if (editIndex !== null) {
            const updatedList = [...show];
            updatedList[editIndex] = user;
            setShow(updatedList);
            setEditIndex(null);
        } else {
            setShow((prev) => [...prev, user]);
        }
        setUser("");
        seteditDesign(true)
    }}

    const HandleDelete =(name)=>{
      setShow((prev) => prev.filter((item) => item !== name));
    }
    const HandleEdit =(item,index)=>{
      setUser(item);
      setEditIndex(index);
      seteditDesign(false)
    }
  return (
    <>
    <div>
      <h2>CRUD Operations in React</h2>
      <input
       type="text"
       placeholder='Enter Your Name'
       value={user}
       onChange={(event)=>setUser(event.target.value)}
         />
         {editDesign ?
         <button type='button' onClick={HandleClick}>Add</button>
         :
         <button type='button' onClick={HandleClick}>Update</button>
        }
    </div>
    <div>
       <ul>
          {show.map((item, index) => (
            <li key={index}>{item}
            <button onClick={() =>HandleEdit(item,index) }>Edit</button>
            <button onClick={()=>HandleDelete(item)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
    </>
  )
}

export default CrudOperation
