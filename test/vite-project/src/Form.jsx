/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");

  //   function handleInputChange(e) {
  //     setText(e.target.value);
  //   }

  return (
    <div>
      <form>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          value={text}
        ></input>
        <h1>{text}</h1>
      </form>
    </div>
  );
}
