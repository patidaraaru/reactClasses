import React, { useEffect, useState } from "react";



const ApiIndex = () => {
    const [data, setData] = useState([]); 
   
    const getData = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => setData(json))
      }
    
    useEffect(() => {
        getData();
    }, []);
  
    return (
      <div>
        <h2>Posts List</h2>
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <strong>{post.title}{post.userId}</strong> - {post.body}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default ApiIndex;
