//a SortsWrapper react component, with html canvas
//see http://bigocheatsheet.com/
import React, { Component } from "react";
import "../styles/main.css";
import Sort from "./Sort";
import _ from "lodash";

class SortsWrapper extends Component {
  bogoSort = array => {
    return _.shuffle(array);
  };

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

  insertionSort = array => {
    for (var i = 0; i < array.length; i++) {
      var temp = array[i];
      var j = i - 1;
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = temp;
      return array;
    }
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <Sort
          sortName="Insertion Sort - TBD"
          sortFunction={this.insertionSort}
          sortFunctionName="insertionSort"
          description="TBD"
          WCTC={"TBD"}
          ACTC={"TBD"}
          WCSC={"TBD"}
          sortFunctionText={this.insertionSort.toString()}
        />
        <Sort
          sortName="Bubble Sort"
          sortFunction={this.bubbleSort}
          sortFunctionName="bubbleSort"
          description="compare each pair of items and swap if needed"
          WCTC={"O(n^2)"}
          ACTC={"Θ(n^2)"}
          WCSC={"O(1)"}
          sortFunctionText={this.bubbleSort.toString()}
        />
        <Sort
          sortName="Bogosort"
          sortFunction={this.bogoSort}
          sortFunctionName="bogoSort"
          description="shuffle items and check if sorted"
          WCTC={"O(∞)"}
          ACTC={"Θ((n+1)!)"}
          WCSC={"O(1)"}
          sortFunctionText={this.bogoSort.toString()}
        />
      </React.Fragment>
    );
  }
}

export default SortsWrapper;
//import SortsWrapper from "./SortsWrapper";
