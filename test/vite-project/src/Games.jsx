/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Games(props) {
  return (
    <div>
      <h1>{props.gamesObjectwithArray.name}</h1>
      <ol>
        {props.gamesObjectwithArray.Players.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ol>
    </div>
  );
}
