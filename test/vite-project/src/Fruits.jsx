/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import Fruit from "./Fruit";

export default function Fruits(props) {
  return (
    <div>
      <ol>
        {props.fruitsArrayofObjects.map((fruit) => (
          <Fruit key={fruit.name} name={fruit.name} price={fruit.price} />
        ))}
      </ol>
    </div>
  );
}
