import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const LoaderUsers = useLoaderData();
  const [users, setUsers] = useState(LoaderUsers);

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted Suceessfully");
          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <h1>Users</h1>
      <h5>{users.length}</h5>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email} : {user._id}
          <Link to={`/update/${user._id}`}>
            <button>Update </button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
