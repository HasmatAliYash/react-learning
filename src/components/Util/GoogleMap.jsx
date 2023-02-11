import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: props.lat, lng: props.lng },
      zoom: 11,
    };
  }
  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={{ height: "300px" }}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={"Google Map"}
        />
      </GoogleMapReact>
    );
  }
}
GoogleMap.defaultProps = {
  center: { lat: 59.95, lng: 30.33 },
  zoom: 11,
};

export default GoogleMap;
