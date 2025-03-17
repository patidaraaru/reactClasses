import React, { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>{user ? <h2>Welcome, {user.name}!</h2> : <h2>Please log in.</h2>}</div>
  );
};

export default UserProfile;
