import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const DataTable = () => {
  const [products, setProducts] = useState({
    product: "",
    productType: "",
    productQuantity: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("products");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        if (Array.isArray(parsed)) {
          setData(parsed);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error("Invalid JSON in localStorage");
        setData([]);
      }
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("products", JSON.stringify(data));
    }
  }, [data]);

  const GetProduct = (event) => {
    const { name, value } = event.target;
    setProducts((prev) => ({ ...prev, [name]: value }));
  };

  const HandleClick = (event) => {
    if (products.product && products.productType && products.productQuantity) {
      const newData = [...data, products];
      setData(newData);
      localStorage.setItem("products", JSON.stringify(newData));
      setProducts({ product: "", productType: "", productQuantity: "" });
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the product"
        value={products.product}
        name="product"
        onChange={GetProduct}
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Enter the product type"
        value={products.productType}
        name="productType"
        onChange={GetProduct}
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        placeholder="Enter the product Quantity"
        value={products.productQuantity}
        name="productQuantity"
        onChange={GetProduct}
      ></input>
      <br></br>
      <br></br>
      <Button type="button" onClick={HandleClick}>
        Click
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ width: "500px", margin: "auto" }}>
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>product</th>
              <th>product type</th>
              <th>product Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.productType}</td>
                <td>{item.productQuantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
