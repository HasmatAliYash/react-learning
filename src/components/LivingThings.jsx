import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Birds from "./Birds";
import Users from "./Users";
import Animals from "./Animals";
import Employees from "./Employees";

export default function LivingThings() {
  const [item, setItem] = useState(<Birds></Birds>);
  return (
    <div>
      {item}
      <Stack gap={4} className="col-md-2 mx-auto" direction="horizontal">
        <div id="contentArea"></div>
        <Button onClick={() => setItem(<Animals></Animals>)}>Animals</Button>
        <Button onClick={() => setItem(<Users></Users>)}>Users</Button>
        <Button onClick={() => setItem(<Employees></Employees>)}>
          Employees
        </Button>
        <Button onClick={() => setItem(<Birds></Birds>)}>Birds</Button>
      </Stack>
    </div>
  );
}
