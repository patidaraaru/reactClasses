import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ArrayTap = () => {
 const [value, setValue] = useState()

  const arr = ["Orange", "Mango", "Graphs", "Mango", "Graphs"];
  const HamdleDuplicate = () => {
   const Updated = arr.filter((item, index) => arr.indexOf(item) === index);
   setValue(Updated);
  };
  const HandleAdd = () =>{
   arr.push("Banana")
   setValue(arr);
  }

  return (
    <div>
      <p>{value}</p>
      <Button onClick={HamdleDuplicate} type="button">
        Remove Duplicate
      </Button>
      <Button onClick={HandleAdd} type="button">Specific</Button>
    </div>
  );
};

export default ArrayTap;
