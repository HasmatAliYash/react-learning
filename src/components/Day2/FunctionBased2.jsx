import React, { useState } from "react";
import Table from "react-bootstrap/Table";

export default function FunctionBased2() {
  const userData = [
    {
      name: "Hasmat",
      age: 30,
      gender: "Male",
    },
    {
      name: "Nikisha",
      age: 29,
      gender: "Female",
    },
    {
      name: "Ranjeet",
      age: 24,
      gender: "Male",
    },
  ];
  const [users, setUser] = useState(userData);
  const userList = users.map((user) => (
    <tr key={user.name}>
      <td>{user.name}</td> <td>{user.age}</td> <td>{user.gender}</td>
    </tr>
  ));
  return (
    <div className="container">
      <h2 className="text-center">Records</h2>
      <label>Displaying Records using <strong>useState</strong></label>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>{userList}</tbody>
      </Table>
    </div>
  );
}
