import React, { useEffect, useState } from "react";

const ApiAwait = () => {
  const [wait, setAwait] = useState([]);
  const [error, setError] = useState("");

  const GetApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setAwait(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    GetApi();
  }, []);

  return (
    <div>
      <div>
        <h2>Product List</h2>
        {error ? (
          <p style={{ color: "red" }}>Error: {error}</p>
        ) : (
          <ul>
            {wait.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ApiAwait;
