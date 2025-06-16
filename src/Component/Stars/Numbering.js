import React, { useEffect, useState } from "react";

const Numbering = () => {
  const [num, setNum] = useState([]);
  const numbers = [20, 24, 35, 55, 55, 59, 853, 856, 745];

  useEffect(() => {
    const data = numbers.filter((n) => n / 2);
    setNum(data);
  }, []);

  return (
    <div>
      <ul>
        {num.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}; 

export default Numbering;
