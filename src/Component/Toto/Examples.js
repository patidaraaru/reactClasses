import React, { useState } from "react";

const Examples = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [submittedText, setSubmittedText] = useState(""); // Stores submitted values
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error,setError] =useState();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = () => {
    if(!text.trim()){
      setError("Text field cannot be empty!");
      return;
    }
    if(!email.trim()){
      setError("Text field cannot be empty!");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address!");
      return;
    }
    setSubmittedText(text);
    setSubmittedEmail(email);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {/* Display submitted values only on button click */}
      <h2>{`Text: ${submittedText}, Email: ${submittedEmail}`}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the value"
          autoComplete="off"
          value={text}
          onChange={handleTextChange}
        /><br></br>
        <input
          type="email"
          placeholder="Enter the Email"
          autoComplete="off"
          value={email}
          onChange={handleEmailChange}
        /><br></br>
        <button type="button" onClick={handleClick}>
          Click
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Examples;
