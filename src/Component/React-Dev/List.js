import React, { useEffect, useState } from "react";

const List = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [pswrd, setPswrd] = useState("");
  const [confirmpswrd, setConfirmpswrd] = useState("");
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState();
  const [errorpswrd, SetErrorPswrd] = useState();

  const HandleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", pswrd);
    localStorage.setItem("ConfirmPswrd", confirmpswrd);
    console.log("Name" - name);
    console.log("Email" - email);
    console.log("Password" - pswrd);
    console.log("Confirm password" - confirmpswrd);

    if (name.length >= 3) {
      setError("");
    } else {
      setError("we need more words add");
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErrorEmail("Invalid email address");
    } else {
      setErrorEmail("");
    }

    if (pswrd === confirmpswrd) {
      SetErrorPswrd("");
    } else {
      SetErrorPswrd("Password is not match");
    }
  };
  const HandleName = (event) => {
    setName(event.target.value);
  };
  const HandleEmail = (event) => {
    setemail(event.target.value);
  };
  const HandlePassword = (event) => {
    setPswrd(event.target.value);
  };
  const HandleConfirmPassword = (event) => {
    setConfirmpswrd(event.target.value);
  };
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    const savedPswrd = localStorage.getItem("pswrd");
    const ConfirmPswrd = localStorage.getItem("confirmpswrd");
    if (savedName) setName(savedName);
    if (savedEmail) setemail(savedEmail);
    if (savedPswrd) setPswrd(savedPswrd);
    if (ConfirmPswrd) setPswrd(ConfirmPswrd);
  }, []);

  return (
    <div>
      <form action="" onSubmit={HandleSubmit}>
        <div>
          <label htmlFor="name">Name - </label>
          <input
            type="text"
            id="name"
            required
            onChange={(event) => HandleName(event)}
          />
          <p>{error}</p>
        </div>
        <div>
          <label htmlFor="email">Email - </label>
          <input
            type="text"
            id="email"
            required
            onChange={(event) => HandleEmail(event)}
          />
          <p>{errorEmail}</p>
        </div>
        <div>
          <label htmlFor="password">Password - </label>
          <input type="password" onChange={(event) => HandlePassword(event)} />
          <p></p>
        </div>
        <div>
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            onChange={(event) => HandleConfirmPassword(event)}
          />
          <p>{errorpswrd}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default List;
