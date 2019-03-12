import React from "react";

const User = ({ name, status, showStatus, canDeleteUsers }) => (
  <div className="user">
    {name}
    {showStatus && "—" + status}
    {canDeleteUsers && <button>X</button>}
  </div>
);

export default User;
