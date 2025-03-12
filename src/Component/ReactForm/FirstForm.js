import React, { useState } from "react";

const FirstForm = () => {
  const [user, setUser] = useState({
    firstName : '',
    lastName : '',
    email : '',
    password : '',
    phone : '',
  });
 

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev)=>({...prev,[name]:value}))
    
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    console.log(user)
  };

  return (
    <div>
      <p>Hey! my name is {user.firstName}.
        My Surname is {user.lastName}.
        My Email ID is {user.email}.
        My Password is {user.password}.
        My Phone Number is {user.phone}
      </p>
      <form action="" onSubmit={HandleSubmit}>
        <input
          type="text"
          name="firstName"
          required
          value={user.firstName}
          onChange={HandleChange}
        />
        <br />
        <br />
        <input
          type="text"
          required
          name="lastName"
          value={user.lastName}
          onChange={HandleChange}
        />
        <br />
        <br />
        <input
          type="email"
          required
          name="email"
          value={user.email}
          onChange={HandleChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          required
          value={user.password}
          onChange={HandleChange}
        />
        <br />
        <br />
        <input
          type="number"
          name="phone"
          required
          value={user.phone}
          onChange={HandleChange}
        />
        <br />
        <br />
        <button type="submit" className="TheamBtn">submit</button>
      </form>
    </div>
  );
};

export default FirstForm;
