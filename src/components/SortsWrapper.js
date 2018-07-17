//a SortsWrapper react component, with html canvas
//see http://bigocheatsheet.com/
import React, { Component } from "react";
import "../styles/main.css";
import Sort from "./Sort";
import _ from "lodash";

class SortsWrapper extends Component {
  bubbleSort = array => {
    function swap(array, i, j) {
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    for (var i = 0; i < array.length; i++) {
      for (var j = 1; j < array.length; j++) {
        if (array[j - 1] > array[j]) {
          swap(array, j - 1, j);
          return array;
        }
      }
    }
    return array;
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
