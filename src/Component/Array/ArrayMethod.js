import React from "react";

const ArrayMethod = () => {
  const Data = ["Orange", "Apple", "Banana", "Graps"];
  const age = [18, 24, 10, 5];

  //    Push Method : Add item to the end of array
//  Data.push("Mango");Add the mango on the end

//  Pop method : Remove item from the last of array
//Data.pop() // Remove the Graphs from the end

//Unshift Method : Add the item in the start of the array

//  Data.unshift("mango");Add the mango on the start

// shift Method : Remove the item from start of array
// Data.shift() ; Orange is remove from the start of array

// Filter Method : Create a new array in the method
const fal = Data.filter((fruit) => fruit !== "Banana");
console.log(fal)
const adult = age.filter((age) => age >= 18)
console.log(adult)

  return (
    <div>
      <ul>
        {fal.map((item, index) => (
          <li>{item}</li>
        ))}
       
      </ul>
      <ul>
      {adult.map((adult, index) => (
          <li>Adult : {adult}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayMethod;
