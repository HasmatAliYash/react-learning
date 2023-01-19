import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
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
      ],
    };
    this.state.userList = this.state.users.map((user) => (
      <tr key={user.name}>
        <td>{user.name}</td> <td>{user.age}</td> <td>{user.gender}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Records</h2>
        <label>
          Displaying Records using <strong>State</strong>
        </label>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>{this.state.userList}</tbody>
        </Table>
      </div>
    );
  }
}
