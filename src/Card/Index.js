import React, { useEffect, useState } from "react";

const Index = () => {
  const [api, setApi] = useState([]);

  const GetData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setApi(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => { GetData();}, []);

  console.log(api);

  return (
    <div>
      {api.length > 0 ? (
        api.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Index;
