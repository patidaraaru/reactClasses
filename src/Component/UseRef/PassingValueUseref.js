import React, { useRef } from "react";

const PassingValueUseref = () => {
  const valueRef = useRef("HELLO! User's");

  return (
    <div>
      <UseRef valueRef={valueRef} />
    </div>
  );
};

export default PassingValueUseref;

export const UseRef = ({ valueRef }) => {
  return <h2>{valueRef.current}</h2>;
};
