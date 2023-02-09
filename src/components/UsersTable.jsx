import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { FaMapMarkerAlt } from "react-icons/fa";
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
      currentPage: 1, //Holds the value for the current page
      loading: null, //Holds the value for the loading state.. can either be true or false
      dataPerPage: 4, //Holds the value for the number of posts per page. You can adjust to suit your needs
    };
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
    //Get currentPosts
    const indexOfLastPost = this.state.currentPage * this.state.dataPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.dataPerPage;
    const currentData = this.state.usersList.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    //Implement page numbers
    const pageNumbers = [];

    for (
      let i = 1;
      i <= Math.ceil(this.state.usersList.length / this.state.dataPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    //Set current page
    const setPage = (pageNum) => {
      this.setState({ currentPage: pageNum });
    };

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
              {currentData.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>
                    <NavLink to="../adduser">{user.name}</NavLink>{" "}
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

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <GoogleMap lat={this.state.lat} lng={this.state.lng} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>
        <div className="w-full flex justify-around justify-centerr">
          {pageNumbers.map((pageNum, index) => (
            <span
              key={index}
              className={
                pageNum === this.state.currentPage
                  ? "active cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full bg-blue-500 pagination"
                  : "cursor-pointer flex items-center justify-center w-12 h-12 border-2 rounded-full pagination"
              }
              onClick={() => {
                setPage(pageNum);
              }}
            >
              {pageNum}
            </span>
          ))}
        </div>
      </>
    );
  }
}
