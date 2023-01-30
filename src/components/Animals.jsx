import React, { Component } from "react";

export default class Animals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animalList: props.animals,
    };
  }

  render() {
    return (
      <>
        <h3>List of Bird</h3>
        <ul>
          {this.state.animalList.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </>
    );
  }
}
