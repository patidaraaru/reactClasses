import React, { useState, useEffect } from "react";

const StarPrint = () => {
  const [print, setPrint] = useState("");

  useEffect(() => {
    let stars = "";
    for (let i = 5; i >= 1; i--) {
      stars = stars + "*".repeat(i) + "\n";
    }
    setPrint(stars);
  }, []);

  return (
    <div>
      <h2>Star Printing</h2>
      <pre>{print}</pre>
    </div>
  );
};

export default StarPrint;
