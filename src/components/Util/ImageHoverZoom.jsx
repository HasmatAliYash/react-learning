import React, { Component } from "react";

export default class ImageHoverZoom extends Component {
  state = {
    path: this.props.imagePath,
    mouseOver: false,
  };

  render() {
    const { path, mouseOver } = this.state;
    return (
      <img
        className={`img-fluid`}
        src={path}
        onMouseOver={() => this.setState({ mouseOver: true })}
        onMouseOut={() => this.setState({ mouseOver: false })}
        style={
          mouseOver 
            ? { transform: "scale(3)", overflow: "hidden", background: "Transparent", transition:'0.2s', width:'200px', height:'100px'} 
            : { transform: "scale(1)", overflow: "hidden", transition:'0.2s'}
        }
        alt="ProductImage"
      />
    );
  }
}