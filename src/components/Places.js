//a places react component
import React, { Component } from "react";
import "../styles/main.css";
import MapContainer from "./MapContainer";

class Places extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mapTitle">Places I've been to</div>
        <MapContainer />
      </React.Fragment>
    );
  }
}

export default Places;
//import Places from "./Places";
