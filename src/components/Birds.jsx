import React, { Component } from "react";

export default class Birds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: "This is Birds Component",
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
