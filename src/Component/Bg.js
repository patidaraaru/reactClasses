import React, { useState } from "react";
import "./Bg.css";

const Bg = () => {
  const Color = "cyan";
  const [bg, setBg] = useState(Color);
  const [txt, setTxt] = useState("ClickMe");
  
  const ChangeBg = () => {
    setBg("yellow");
    setTxt("Opps");
  };
  const DoubleClick = () => {
    setBg("cyan");
    setTxt("ClickME");
  };

  return (
    <div style={{ backgroundColor: bg }}>
      <button onClick={ChangeBg} onDoubleClick={DoubleClick}>{" "} {txt}
      </button>
    </div>
  );
};

export default Bg;
