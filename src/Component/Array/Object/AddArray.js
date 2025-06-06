import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddArray = () => {
  const [addArray, setaddArray] = useState([]);
  const [newArray, setnewArray] = useState();
  const [EditIndex, setEditIndex] = useState();

  const handleClick = (index) => {
    if (newArray.trim()) {
      setaddArray([...addArray, newArray]);
      console.log(setaddArray);
      setnewArray("");
    }
  };
  const HandleChange = (event) => {
    setnewArray(event.target.value);
  };
  const HandleDlt = (dltData) => {
    const updateData = addArray.filter((some) => some !== dltData);
    setaddArray(updateData);
  };
  const HandleClear = () => {
    setaddArray([]);
  };
  const HandleEdit = (index) => {
    setnewArray(addArray[index]);
    setEditIndex(index);
  };

  return (
    <div>
      <h2>Add array list with the help of array method</h2>
      <input type="text" onChange={HandleChange} value={newArray} />
      <Button onClick={handleClick}>
       Added
      </Button>
      <ul>
        {addArray.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <Button type="button" onClick={() => HandleDlt(item)}>
              Dlt
            </Button>
            <Button type="button" onClick={() => HandleEdit(index)}>
              Edit
            </Button>
          </li>
        ))}
      </ul>
      {addArray.length === 0 ? (
        ""
      ) : (
        <button type="button" onClick={HandleClear}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default AddArray;
