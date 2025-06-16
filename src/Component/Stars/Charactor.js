import React, { useEffect, useState } from "react";

const Charactor = () => {
  const [charactor, setCharactor] = useState([]);
  const char = ["aarti", "patidar", "ratanpura"];

  useEffect(() => {
    const words = char.filter((c) => c === "aarti");
    console.log(words);
    setCharactor(words);
  }, []);

  return (
    <ul>
      {charactor.map((item, index) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Charactor;
