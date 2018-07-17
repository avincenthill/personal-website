import React, { Component } from "react";
import "../styles/main.css";
import _ from "lodash";

class Sort extends Component {
  state = {
    array: [],
    numBars: 50,
    isSorted: false
  };

  clearCanvasNow = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  };

  initArrayState = () => {
    const array = this.state.array.slice();
    for (let i = 0; i < this.state.numBars; i++) {
      array.push(i);
    }
    //this.setState({ array: _.shuffle(array) });
    this.setState({ array: array });
  };

  clearCanvas = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  };

  drawBar = (position, height, color) => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    let spacingFactor = this.state.numBars / 2;
    let barWidth = canvas.width / (this.state.numBars + spacingFactor);
    let spacingWidth = canvas.width - barWidth * this.state.numBars;
    ctx.beginPath();
    ctx.rect(
      (canvas.width / this.state.numBars) * position +
        spacingWidth / this.state.numBars / 2,
      canvas.height - height,
      barWidth,
      height
    );
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  };

  drawBarsFromArray = array => {
    const canvas = this.refs.canvas;
    this.clearCanvas();
    for (let i = 0; i < array.length; i++) {
      this.drawBar(
        i,
        (array[i] / this.state.numBars) * canvas.height * 0.9 +
          canvas.height * 0.1,
        "black"
      );
    }
  };

  sort = () => {
    //copy and edit state
    const array = this.state.array.slice();
    let sortFunction = this.props.sortFunction;
    this.setState({ array: sortFunction(array) });
    this.checkIfSorted();

    //TBD be careful with below
    // while (!this.state.isSorted) {
    //   this.sort();
    //   this.checkIfSorted();
    // }
  };

  handleCanvasClicks = () => {
    const canvas = this.refs.canvas;
    const sort = this.sort;
    canvas.addEventListener(
      "click",
      function() {
        sort();
      },
      false
    );
  };

  checkIfSorted = () => {
    let arr = this.state.array.slice();
    this.setState({ isSorted: true });
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        this.setState({ isSorted: false });
        break;
      }
    }
  };

  componentDidMount() {
    this.initArrayState();
    this.drawBarsFromArray(this.state.array);
    this.handleCanvasClicks();
    this.checkIfSorted();
  }

  componentDidUpdate() {
    this.clearCanvasNow();
    this.drawBarsFromArray(this.state.array);
  }

  render() {
    return (
      <div className="sortWrapper">
        <canvas
          ref="canvas"
          width={window.innerWidth * 0.8}
          height={window.innerHeight * 0.5}
        />
        <br />
        <div className="sortTitle">{this.props.sortName}</div>
        <div className="sortInfo">Info about {this.props.sortName}</div>
        <br />
      </div>
    );
  }
}

export default Sort;
//import Sort from "./Sort";
