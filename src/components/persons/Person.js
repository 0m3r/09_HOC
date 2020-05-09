import React from "react";

function Person({ item }) {
  return (
    <li className="list-group-item">
        {item.name} - {item.address.zipcode}
    </li>
  );
}

export default Person;
