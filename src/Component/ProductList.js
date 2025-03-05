import React, { useEffect, useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 700 },
];

const ProductList = () => {
  const [data, setData] = useState(0)


  const getData = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setData(json))
  }
  useEffect(()=>{
    getData()
  },[])      
  return (
    <ul>
      {data.length > 0 && data?.map((product) => (
        <li key={product.id}>
          {product.title} - ${product.body}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
