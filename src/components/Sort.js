import React, { Component } from "react";
import "../styles/main.css";

class Sort extends Component {
  state = {
    array: [],
    numBars: 50
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
    const array = this.state.array.splice();
    for (let i = 0; i < this.state.numBars; i++) {
      array.push(i);
    }
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

  handleCanvasClicks = () => {
    const canvas = this.refs.canvas;
    const name = this.props.sortName;
    let clearCanvas = this.clearCanvas;
    canvas.addEventListener(
      "click",
      function() {
        alert(name + " was clicked!");
        clearCanvas();
      },
      false
    );
  };

  componentDidMount() {
    this.initArrayState();
    this.drawBarsFromArray(this.state.array);
    this.handleCanvasClicks();
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
