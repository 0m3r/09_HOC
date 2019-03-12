import React from "react";
import User from "./User";

const UsersList = ({ users }) => (
  <div className="user-list">
    {users && users.map(user => <User key={user.name} {...user} />)}
  </div>
);

export default UsersList;
