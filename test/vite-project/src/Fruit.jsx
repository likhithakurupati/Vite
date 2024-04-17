/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Fruit({ name, price }) {
  return (
    // <li key={name}>
    //   The price of {name} is {price}.
    // </li>
    <li>
      {price > 10 ? (
        <h3>
          The price of {name} is {price}.
        </h3>
      ) : (
        <p>
          {" "}
          The price of {name} is {price}.
        </p>
      )}
    </li>
  );
}
