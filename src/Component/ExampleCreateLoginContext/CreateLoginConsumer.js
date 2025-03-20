import React, { useContext } from "react";
import CreateLoginContext from "./CreateLoginContext";

const CreateLoginConsumer = () => {
  const { login, logout, authantication, user } =
    useContext(CreateLoginContext);
  return (
    <div>
      {authantication ? (
        <>
          <p>This is Login {user}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>This is Logout {user}</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};

export default CreateLoginConsumer;
