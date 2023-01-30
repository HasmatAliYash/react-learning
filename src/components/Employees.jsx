import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeesList: props.users,
    };
  }

  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {this.state.employeesList.map((user, index) => (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
