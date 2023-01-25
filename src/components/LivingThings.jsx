import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Birds from "./Birds";
import Users from "./Users";
import Animals from "./Animals";
import Employees from "./Employees";

const animals = [
  "Tiger",
  "Lion",
  "Elephant",
  "Leopard",
  "Panther",
  "Cheetah",
  "Wolf",
  "Jaguar",
  "Hyena",
  "Giraffe",
  "Deer",
  "Zebra",
  "Gorilla",
  "Monkey",
  "Chimpanzee",
  "Bear",
  "Hippopotamus",
  "Kangaroo",
  "Rhinoceros",
];

export default function LivingThings() {
  // Getting user data via GET API call
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  const [item, setItem] = useState(<Birds></Birds>);
  return (
    <div>
      {item}
      <Stack gap={4} className="col-md-2 mx-auto" direction="horizontal">
        <Button
          onClick={() => setItem(<Animals animalList={animals}></Animals>)}
        >
          Animals
        </Button>
        <Button onClick={() => setItem(<Users users={users}></Users>)}>
          Users
        </Button>
        <Button
          onClick={() => setItem(<Employees employees={users}></Employees>)}
        >
          {" "}
          Employees{" "}
        </Button>
        <Button
          onClick={() =>
            setItem(
              <Birds
                name="Dove"
                about="Columbidae is a bird family consisting of doves and pigeons. "
              ></Birds>
            )
          }
        >
          Birds
        </Button>
      </Stack>
    </div>
  );
}
