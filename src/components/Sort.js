import React, { Component } from "react";
import "../styles/main.css";

class Sort extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    canvas.addEventListener(
      "click",
      function() {
        drawBarsFromArray(reversedBarHeights);
      },
      false
    );

    //canvas sorting vars
    let numBars = 20;
    let spacingFactor = numBars / 5;
    let barWidth = canvasWidth / (numBars + spacingFactor);
    let spacingWidth = canvasWidth - barWidth * numBars;

    function drawBar(position, height, color) {
      ctx.beginPath();
      ctx.rect(
        (canvasWidth / numBars) * position + spacingWidth / numBars / 2,
        canvasHeight - height,
        barWidth,
        height
      );
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    }

    function clearCanvas() {
      ctx.beginPath();
      ctx.rect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
    }

    function drawBarsFromArray(array) {
      clearCanvas();
      for (let i = 0; i < array.length; i++) {
        drawBar(
          i,
          (array[i] / numBars) * canvasHeight * 0.9 + canvasHeight * 0.1,
          "black"
        );
      }
    }

    let barHeights = [];
    for (let i = 0; i < numBars; i++) {
      barHeights.push(i);
    }
    let reversedBarHeights = barHeights.slice().reverse();

    drawBarsFromArray(barHeights);
  }

  componentDidUpdate() {
    //TBD resize
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
