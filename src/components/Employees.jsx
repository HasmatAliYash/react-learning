import React from "react";
import Table from "react-bootstrap/Table";

export default function Employees(props) {
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
