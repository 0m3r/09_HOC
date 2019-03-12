import React from "react";
import UsersList from "./components/UsersList";
import users from "./data";

const App = props => (
  <div className="container">
    <h3>Active users</h3>
    <UsersList users={users.filter(u => u.status === "active")} />

    <h3>Inactive users</h3>
    <UsersList users={users.filter(u => u.status === "inactive")} />

    <h3>Pending users</h3>
    <UsersList users={users.filter(u => u.status === "pending")} />
  </div>
);

export default App;
