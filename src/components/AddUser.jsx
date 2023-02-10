import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class AddUser extends React.Component {
  userID;
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", user: {} };
  }
  // Get a user data for view  user
  componentDidMount() {
    this.userID = window.location.href.split("/")[5];
    this.getUser(this.userID);
  }

  getUser(userID) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ user: response });
      });
  }

  // POST call for adding user
  adduser() {
    const value = {
      username: this.state.username,
      password: this.state.password,
    };
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ body: value }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`User added successfully, ID:- ${data.id}`);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  // change handler
  changeHandler(event, inputType) {
    if (inputType === "username") {
      this.setState({ username: event.target.value });
    } else if (inputType === "password") {
      this.setState({ password: event.target.value });
    }
  }

  // submit handler
  submitHandler(event) {
    event.preventDefault();
    this.adduser();
    console.log("form date", this.state);
  }

  handleFormReset = (e) => {
    this.setState({
      username: "",
      password: "",
    });
    console.log("clicked");
  };

  render() {
    return (
      <>
        {this.userID && <h4>View User</h4>}
        {!this.userID && <h4>Add User</h4>}

        <hr />
        <div className="row">
          {this.userID && (
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Name: {this.state.user.name} </Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email: {this.state.user.email}</Form.Label>
                </Form.Group>
              </Form>
            </div>
          )}

          {!this.userID && (
            <div className="col-4">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => {
                      this.changeHandler(e, "username");
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      this.changeHandler(e, "password");
                    }}
                  />
                </Form.Group>

                <div className="row">
                  <div className="col offset-2">
                    <Button
                      variant="primary"
                      type="button"
                      onClick={(e) => {
                        this.submitHandler(e);
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                  <div className="col">
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={(e) => {
                        this.handleFormReset(e);
                      }}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </div>
      </>
    );
  }
}
