import React, { Component } from "react";
import Table from "react-bootstrap/Table";
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
    };
  }

  render() {
    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
