import React from "react";
import Lion from "../../Day1/Animals/Lion";
import Elephant from "../../Day1/Animals/Elephant";
import Bear from "../../Day1/Animals/Bear";
import Cheetah from "../../Day1/Animals/Cheetah";
import Rabbit from "../../Day1/Animals/Rabbit";

import Crow from "../../Day1/Birds/Crow";
import Eagle from "../../Day1/Birds/Eagle";
import Parrot from "../../Day1/Birds/Parrot";
import Sparrow from "../../Day1/Birds/Sparrow";
import Woodpecker from "../../Day1/Birds/Woodpecker";

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
