import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  // POST call for adding user
  adduser() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify({ body: this.state }),
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
    console.log('clicked')
  };

  render() {
    return (
      <>
        <h4>Products List</h4>
        <hr />
        <div className="row">
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
        </div>
      </>
    );
  }
}
