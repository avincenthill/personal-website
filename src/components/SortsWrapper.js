//a SortsWrapper react component
import React, { Component } from "react";
import "../styles/main.css";
import Sort from "./Sort";

class SortsWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sortsWrapper">
          <Sort />
          <Sort />
          <Sort />
          <Sort />
          <Sort />
          <Sort />
        </div>
      </React.Fragment>
    );
  }
}

export default SortsWrapper;
//import SortsWrapper from "./SortsWrapper";
