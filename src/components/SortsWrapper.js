//a SortsWrapper react component, with html canvas
import React, { Component } from "react";
import "../styles/main.css";
import Sort from "./Sort";
import _ from "lodash";

class SortsWrapper extends Component {
  bubbleSort = array => {
    return _.shuffle(array);
  };

  heapSort = array => {
    return _.shuffle(array);
  };

  quickSort = array => {
    return _.shuffle(array);
  };

  render() {
    return (
      <React.Fragment>
        <div className="sortsWrapperHeader">
          Press the graphs to start sorting!
        </div>
        <br />
        <Sort sortName="Bubble Sort" sortFunction={this.bubbleSort} />
        <Sort sortName="Heap Sort" sortFunction={this.heapSort} />
        <Sort sortName="Quick Sort" sortFunction={this.quickSort} />
      </React.Fragment>
    );
  }
}

export default SortsWrapper;
//import SortsWrapper from "./SortsWrapper";
