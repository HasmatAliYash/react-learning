import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { FaMapMarkerAlt } from "react-icons/fa";
import Pagination from "react-bootstrap/Pagination";
import Modal from "react-bootstrap/Modal";
import GoogleMap from "./GoogleMap";
import { NavLink } from "react-router-dom";

export default class UsersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      active: 2,
      items: [],
      number: 1,
      show: false,
      lat: 0,
      lng: 0,
    };

    for (this.state.number = 1; this.state.number <= 5; this.state.number++) {
      this.state.items.push(
        <Pagination.Item
          key={this.state.number}
          active={this.state.number === this.state.active}
        >
          {this.state.number}
        </Pagination.Item>
      );
    }
  }

  handleClose = () => this.setState({ show: false });
  handleShow = (geo) => {
    this.setState({ lat: geo.lat, lng: geo.lng });
    this.setState({ show: true });
  };

  getUsersData() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ usersList: response });
      });
  }

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    return (
      <>
        <h4>User Manager</h4>
        <hr />

        {this.state.usersList.length === 0 && (
          <img height="100" width="100" src="./../loader.gif" alt="loader" />
        )}
        {this.state.usersList.length > 0 && (
          <Table borderless>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>City</th>
                <th>Zipcode</th>
                <th>Locate on Map</th>
              </tr>
            </thead>
            <tbody>
              {this.state.usersList.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>
                    <NavLink to="../adduser" >{user.name}</NavLink>{" "}
                  </td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.zipcode}</td>
                  <td>
                    <FaMapMarkerAlt
                      style={{ cursor: "pointer" }}
                      color="red"
                      size="25"
                      onClick={() => {
                        this.handleShow(user.address.geo);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        <div className="d-flex justify-content-center">
          <Pagination>{this.state.items}</Pagination>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <GoogleMap lat={this.state.lat} lng={this.state.lng} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
      </>
    );
  }
}
