import React, { Component } from "react";
export default class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: "This is Employees Component",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.details}</h1>
      </div>
    );
  }
}
