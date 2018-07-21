//a SortsWrapper react component, with html canvas
//see http://bigocheatsheet.com/
import React, { Component } from "react";
import "../styles/main.css";
import Sort from "./Sort";
import _ from "lodash";

//TBD fix project pic
//TBD fix desktop height hardcoded

class SortsWrapper extends Component {
  bogoSort = array => {
    return _.shuffle(array);
  };

  bubbleSort = array => {
    function swap(array, i, j) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        if (array[j - 1] > array[j]) {
          swap(array, j - 1, j);
          return array;
        }
      }
    }
    return array;
  };

  insertionSort = (array, i) => {
    let j;
    for (i + 1; i < array.length; i++) {
      var temp = array[i];
      for (j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j + 1] = array[j];
      }
      array[j + 1] = temp;
      return array;
    }
    return array;
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <Sort
          sortName="Insertion Sort"
          sortFunction={this.insertionSort}
          sortFunctionName="insertionSort"
          description="insert each item into a growing sorted list"
          WCTC={"O(n^2)"}
          ACTC={"Θ(n^2)"}
          WCSC={"O(1)"}
          sortFunctionText={`
          insertionSort = (array, i) => {
            let j;
            for (i + 1; i < array.length; i++) {
              var temp = array[i];
              for (j = i - 1; j >= 0 && array[j] > temp; j--) {
                array[j + 1] = array[j];
              }
              array[j + 1] = temp;
            }
            return array;
          };
          `}
        />
        <Sort
          sortName="Bubble Sort"
          sortFunction={this.bubbleSort}
          sortFunctionName="bubbleSort"
          description="compare each pair of items and swap if needed"
          WCTC={"O(n^2)"}
          ACTC={"Θ(n^2)"}
          WCSC={"O(1)"}
          sortFunctionText={`
          bubbleSort = array => {
            function swap(array, i, j) {
              let temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
            for (let i = 0; i < array.length; i++) {
              for (let j = 1; j < array.length; j++) {
                if (array[j - 1] > array[j]) {
                  swap(array, j - 1, j);
                }
              }
            }
            return array;
          };
          `}
        />
        <Sort
          sortName="Bogosort"
          sortFunction={this.bogoSort}
          sortFunctionName="bogoSort"
          description="shuffle items and check if sorted"
          WCTC={"O(∞)"}
          ACTC={"Θ((n+1)!)"}
          WCSC={"O(1)"}
          sortFunctionText={`
          bogoSort = array => {
            return _.shuffle(array);
          };
          `}
        />
      </React.Fragment>
    );
  }
}

export default SortsWrapper;
//import SortsWrapper from "./SortsWrapper";
