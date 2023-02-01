import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "photos",
      data: [],
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((responseData) => this.setState({ data: responseData.data }));
  }

  render() {
    return (
      <>
        <h2 className="text-center">Photo Table</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Profile Photo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((user) => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>
                  <img src={user.avatar} alt="avtar" />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
