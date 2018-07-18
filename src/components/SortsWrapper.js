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

  bogoSort = array => {
    return _.shuffle(array);
  };

  quickSort = array => {
    //TBD
    return _.shuffle(array);
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <Sort
          sortName="Bubble Sort"
          sortFunction={this.bubbleSort}
          description="compare each pair of items and swap them if needed"
          WCTC={"O(n^2)"}
          ACTC={"Θ(n^2)"}
          WCSC={"O(1)"}
        />
        <Sort
          sortName="Bogo Sort"
          sortFunction={this.bogoSort}
          description="shuffle items and check if they are sorted"
          WCTC={"O(∞)"}
          ACTC={"Θ((n+1)!)"}
          WCSC={"O(1)"}
        />
        <Sort
          sortName="Quick Sort - TBD"
          sortFunction={this.quickSort}
          description="TBD"
          WCTC={"TBD"}
          ACTC={"TBD"}
          WCSC={"TBD"}
        />
      </React.Fragment>
    );
  }
}

export default SortsWrapper;
//import SortsWrapper from "./SortsWrapper";
