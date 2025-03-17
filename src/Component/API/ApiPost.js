import React, { useState } from "react";

const ApiPost = () => {
  const [product, setProduct] = useState({
    productName: "",
    priceAdd: "",
  });

  const HandleSubmit = (event) => {
    event.preventDefault();
  };
  const HandleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <>
    <h2>{product.productName}</h2>
    <form onChange={HandleSubmit}>
      <input
        type="text"
        placeholder="Enter Your value"
        value={product.productName}
        name="productName"
        onChange={HandleChange}
        required
      />
      <input
        type="number"
        placeholder="Enter Your number"
        value={product.priceAdd}
        name="priceAdd"
        onChange={HandleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default ApiPost;
