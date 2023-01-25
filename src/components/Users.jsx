import React, { useState } from "react";

export default function Users() {
  const userDetails =
    "Krishna is an Full stack developer having 5 years of experience with Java and React";
  const [user] = useState("Krishna");
  const [description] = useState(userDetails);
  return (
    <div>
      <h2>{user}</h2>
      <p>{description}</p>
    </div>
  );
}
