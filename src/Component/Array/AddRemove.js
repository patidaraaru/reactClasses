import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddRemove = () => {
  const [arr, setArr] = useState(["Mango", "Banana", "Graphs", "Orange"]);

  const HandleAdded = () => {
     const Updated = [...arr,"DraganFruit"]
     setArr(Updated)
     console.log(Updated);
  };
  // const HandleRemove = () => {
  //   setArr(arr.shift());
  //   console.log(arr);
  // };
  // const HandleUpdate = (index, newVakue) => {
  //   setArr((prev) => {
  //     const Updated = prev.map((item, i) => (i === index ? newVakue : item));
  //     console.log(arr);
  //     return Updated;
  //   });
  // };

  return (
    <>
      <div>
        <Button type="button" onClick={HandleAdded}>
          Added
        </Button>
      </div>
      {/* <div>
        <Button type="button" onClick={HandleRemove}>
          Remove
        </Button>
      </div>
      <div>
        <Button type="button" onClick={() => HandleUpdate(1, "Blueberry")}>
          Update
        </Button>
      </div> */}
    </>
  );
};

export default AddRemove;
