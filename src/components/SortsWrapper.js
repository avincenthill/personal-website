//a SortsWrapper react component, with html canvas
import React, { Component } from "react";
import "../styles/main.css";
import Sort from "./Sort";

class SortsWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <Sort sortName="Bubble Sort" />
        <Sort sortName="Heap Sort" />
        <Sort sortName="Quick Sort" />
      </React.Fragment>
    );
  }
}

export default SortsWrapper;
//import SortsWrapper from "./SortsWrapper";
