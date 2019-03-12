import React from "react";
import User from "./components/User";

const App = props => (
  <div className="container">
    <User name="Bill" status="active" showStatus={true} canDeleteUsers={true} />
  </div>
);

export default App;
