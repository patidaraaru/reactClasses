import React, { useContext } from 'react'
import UserContext from './UserContext';

const LoginButton = () => {
    const { user, login, logout } = useContext(UserContext);

    return (
      <button
        onClick={user ? logout : login}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: user ? "red" : "green",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        {user ? "Logout" : "Login"}
      </button>
    )
}

export default LoginButton
