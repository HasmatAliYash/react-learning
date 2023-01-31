import React, { Component } from "react";

export default class Animals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: "This is Animals Component",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.detail}</h1>
      </div>
    );
  }
}

