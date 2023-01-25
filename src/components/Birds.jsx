import React, { useState } from "react";

export default function Birds() {
  const aboutLion =
    "The Indian peafowl, also known as the common peafowl, and blue peafowl, is a peafowl species native to the Indian subcontinent. It has been introduced to many other countries.";
  const [name] = useState("Pikok");
  const [description] = useState(aboutLion);
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
