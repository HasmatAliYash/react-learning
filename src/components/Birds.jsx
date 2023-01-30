import React, { Component } from "react";

export default class Birds extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birdList: ["Peacock", "Parrot", "Sparrow", "Woodpecker"],
    };
  }

  render() {
    return (
      <div>
        <h3>List of Bird</h3>
        <ul>
          {this.state.birdList.map((bird, index) => (
            <li key={index}>{bird}</li>
          ))}
        </ul>
      </div>
    );
  }
}
