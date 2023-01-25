import React from "react";
export default function Animals(props) {
  return (
    <div>
      <ul>
        {props.animalList.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ul>
    </div>
  );
}
