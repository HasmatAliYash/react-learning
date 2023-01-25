import React, { useState } from "react";

export default function Employees() {
  const [name] = useState("Stephen");
  const [description] = useState("Project Manager");
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
