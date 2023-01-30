import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Animals from "./Animals";
import Birds from "./Birds";
import Employees from "./Employees";
import Users from "./Users";

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

  const [isUsersVisible, setUsersVisible] = useState(false);
  const [isBirdsVisible, setBirdsVisible] = useState(true);
  const [isAnimalsVisible, setAnimalsVisible] = useState(false);
  const [isEmployeesVisible, setEmployeesVisible] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  });

  return (
    <div>
      <Stack gap={4} className="col-md-2 mx-auto" direction="horizontal">
        <Button onClick={() => setUsersVisible(!isUsersVisible)}>Users</Button>
        <Button onClick={() => setBirdsVisible(!isBirdsVisible)}>Birds</Button>
        <Button onClick={() => setAnimalsVisible(!isAnimalsVisible)}>
          Animals
        </Button>
        <Button onClick={() => setEmployeesVisible(!isEmployeesVisible)}>
          Employees
        </Button>
      </Stack>
      {isUsersVisible && <Users users={users} />}
      {isBirdsVisible && <Birds />}
      {isAnimalsVisible && <Animals animals={animals} />}
      {isEmployeesVisible && <Employees users={users} />}
    </div>
  );
}
