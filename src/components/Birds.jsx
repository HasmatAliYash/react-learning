import React from "react";

export default function Birds(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.about}</p>
    </div>
  );
}
