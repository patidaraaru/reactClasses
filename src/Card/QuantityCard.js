import React, { useState } from "react";

const QuantityCard = () => {
  const [num, setNum] = useState(0);
  const [price, setPrice] = useState(0);

  const HandleIncrement = () => {
    if (num < 100) {
      setNum(num + 1);
      setPrice(parseInt(price) + 120);
    }
  };

  const HandleDecrement = () => {
    if (num > 0) {
      setNum(num - 1);
      setPrice(parseInt(price) - 120);
    }
    localStorage.setItem("price", JSON.stringify(price));
  };
  
  console.log(price);
  return (
    <>
      <div>
        <p>Rs.{price}</p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button type="button" onClick={HandleDecrement}>
          -
        </button>
        <p>{num}</p>
        <button type="button" onClick={HandleIncrement}>
          +
        </button>
      </div>
    </>
  );
};

export default QuantityCard;
