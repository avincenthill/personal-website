import React, { Component } from "react";
import "../styles/main.css";

class Sort extends Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var numBars = 20;
    var spacingFactor = numBars / 5;
    var barWidth = canvasWidth / (numBars + spacingFactor);
    var spacingWidth = canvasWidth - barWidth * numBars;

    function drawBar(position, height, color) {
      ctx.rect(
        (canvasWidth / numBars) * position + spacingWidth / numBars / 2,
        canvasHeight - height,
        barWidth,
        height
      );
      ctx.fillStyle = color;
      ctx.fill();
    }

    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    var barHeights = [];
    for (let i = 0; i < numBars; i++) {
      barHeights.push(i);
    }

    function drawBarsFromArray(array) {
      for (let i = 0; i < array.length; i++) {
        drawBar(
          i,
          (array[i] / numBars) * canvasHeight * 0.9 + canvasHeight * 0.1,
          "red"
        );
      }
    }
    drawBarsFromArray(shuffle(barHeights));
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
