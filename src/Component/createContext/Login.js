import React, { useState } from "react";
import UserContext from "./UserContext";
import UserProfile from "./UserProfile";
import LoginButton from "./LoginButton";

const Login = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "John Doe", email: "john@example.com" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Context Example</h1>
        <UserProfile />
        <LoginButton />
      </div>
    </UserContext.Provider>
  );
};

export default Login;
