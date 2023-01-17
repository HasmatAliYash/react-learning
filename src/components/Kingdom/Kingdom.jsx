import React from "react";
import Lion from "../Animals/Lion";
import Elephant from "../Animals/Elephant";
import Bear from "../Animals/Bear";
import Cheetah from "../Animals/Cheetah";
import Rabbit from "../Animals/Rabbit";

import Crow from "../Birds/Crow";
import Eagle from "../Birds/Eagle";
import Parrot from "../Birds/Parrot";
import Sparrow from "../Birds/Sparrow";
import Woodpecker from "../Birds/Woodpecker";

export default class Kingdom extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-warning">Kingdom</h1>
        <h5 className="mb-4 text-success">6 Animals :-</h5>
        <Lion />
        <Elephant />
        <Bear />
        <Cheetah />
        <Rabbit />
        <hr className="p-4 text-danger" />
        <h5 className="mb-4 text-primary">6 Birds :-</h5>
        <Crow />
        <Eagle />
        <Parrot />
        <Sparrow />
        <Woodpecker />
      </div>
    );
  }
}
