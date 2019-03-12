import React from "react";
import withUserData from "../hoc/withUserData";

const User = withUserData(({ name, status }) =>
  !name || !status ? (
    <div className="spinner">
      <div className="loader">Loading...</div>
    </div>
  ) : (
    <div className="user">
      {name} — {status}
    </div>
  )
);

export default User;
