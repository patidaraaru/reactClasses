import React, { useState } from "react";
import CreateLoginContext from "./CreateLoginContext";

const LoginProvider = ({ children }) => {
  const [authantication, setAuthantication] = useState(false);
  const user = 'Joy'
  const login = () => {
    setAuthantication(true);
  };
  const logout = () => {
    setAuthantication(false);
  };
  return (
    <CreateLoginContext.Provider value={{ login, logout, authantication, user }}>
      {authantication}
      {children}
    </CreateLoginContext.Provider>
  );
};

export default LoginProvider;