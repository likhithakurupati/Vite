/* eslint-disable no-unused-vars */
import React from "react";

export default function Message() {
  function sayHello() {
    console.log("Hello");
  }
  return <button onClick={sayHello}>Click me to say hello</button>;
}
