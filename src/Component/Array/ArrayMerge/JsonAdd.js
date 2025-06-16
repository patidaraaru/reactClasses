import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Json1 from "./Json1";
import Json2 from "./Json2";
import Json3 from "./json3";

const JsonAdd = () => {
  const AddedMultiple = [...Json1, ...Json2, ...Json3];
  const [add, setAdd] = useState([]);

  console.log(Object.values);
  const HandleAdded = () => {
    const merged = Object.values(
      AddedMultiple.reduce((acc, obj) => {
        if (acc[obj.id]) {
          acc[obj.id] = { ...obj };
        } else {
          acc[obj.id] = { ...acc[obj.id], ...obj };
        }
        return acc;
      }, {})
    );
    setAdd(merged);
  };
  return (
    <>
      <div>
        <Button type="button" onClick={HandleAdded}>
          Added
        </Button>
      </div>
      <div>
        {add.map((item, index) => (
          <li key={index}>
            {item.name} = {item.age} = {item.addres} = {item.email}
          </li>
        ))}
      </div>
    </>
  );
};
export default JsonAdd;
