import React from "react";
import { setDisplayName, setPropTypes } from "recompose";
import Redux from "../fakeRedux";
import "./user.css";

const { connect } = Redux();

const User = ({ name, status }) => (
  <div className="user">
    {name}: {status}
  </div>
);

export default User;
