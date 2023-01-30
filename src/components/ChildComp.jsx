import React from "react";
import Button from "react-bootstrap/Button";

export default function ChildComp(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Button onClick={props.incrementHandler}>Click here</Button>
      <h3>Counter is {props.counter}</h3>
      <Button onClick={props.resetHandler}>Reset</Button>
    </div>
  );
}
