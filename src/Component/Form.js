import React, { useState } from "react";

const Form = () => {
  const [data, SetData] = useState();
  const [addData, SetaddData] = useState(data);

  const [pswrd, SetPswrd] = useState()
  const [addPswrd, SetAddPswrd] = useState()


  const MyFunctionName = (event) => {
    console.log(event.target.value);
    SetData(event.target.value);
  };
  const MyFunctionPassword = (event) => {
    console.log(event.target.value);
    SetPswrd(event.target.value);
  };
  const MyClick = () => {
    
    SetaddData(data);
    SetAddPswrd(pswrd)
    console.log(SetaddData);
  };
  return (
    <div>
      <form >
        <h1>Hello {addData} {addPswrd}</h1>

      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={MyFunctionName}
      />
      <input
        type="password"
        placeholder="Enter Your Name"
        onChange={MyFunctionPassword}
      />
      <div>
        <button onClick={MyClick}>Click Me</button>
      </div>
      </form>
    </div>
  );
};

export default Form;
