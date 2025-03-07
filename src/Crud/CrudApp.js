import React, { useState } from "react";

const CrudApp = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ]);

  const [newUser, setNewUser] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Create a new user
  const addUser = () => {
    if (!newUser.trim()) return;
    const newUserData = { id: Date.now(), name: newUser };
    setUsers([...users, newUserData]);
    setNewUser("");
  };

  // Delete a user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Edit a user
  const editUser = (user) => {
    setEditing(true);
    setCurrentUser(user);
    setNewUser(user.name);
  };

  // Update a user
  const updateUser = () => {
    setUsers(
      users.map((user) =>
        user.id === currentUser.id ? { ...user, name: newUser } : user
      )
    );
    setEditing(false);
    setNewUser("");
    setCurrentUser(null);
  };

  return (
    <div>
      <h2>CRUD Operations in React</h2>
      <div>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter Name"
        />
        {editing ? (
          <button onClick={updateUser}>Update</button>
        ) : (
          <button onClick={addUser}>Add</button>
        )}
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
