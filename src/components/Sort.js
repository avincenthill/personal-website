import React, { Component } from "react";
import "../styles/main.css";
import _ from "lodash";

//TBD add info about the sorts
//TBD implement all sorts
//TBD fix window height resize problem
//TBD figure out why www.avh.party is harder than avh.party
//TBD tweak font sizes by window height

class Sort extends Component {
  state = {
    array: [],
    numBars: 25
  };

  initArrayState = () => {
    const array = this.state.array.slice();
    for (let i = 0; i < this.state.numBars; i++) {
      array.push(i);
    }
    //TBD other init states here
    this.setState({ array: _.shuffle(array) });
  };

  clearCanvas = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
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
        (array[i] / this.state.numBars) * canvas.height + canvas.height * 0.01,
        "white"
      );
    }
  };

  //need to break out sort and sort interval
  sort = () => {
    const array = this.state.array.slice();
    let sortFunction = this.props.sortFunction;
    this.setState({ array: sortFunction(array) });
  };

  sortInterval = () => {
    let sort = this.sort;
    let interval = setInterval(() => {
      sort();
      if (this.checkIfSorted(this.state.array)) {
        clearInterval(interval);
        return;
      }
    }, 50);
  };

  shuffle = () => {
    const array = this.state.array.slice();
    const shuffledArray = _.shuffle(array.slice());
    this.setState({ array: shuffledArray });
  };

  handleCanvasClicks = () => {
    const canvas = this.refs.canvas;
    const sortInterval = this.sortInterval;
    const shuffle = this.shuffle;
    canvas.addEventListener(
      "click",
      () => {
        if (this.checkIfSorted(this.state.array)) {
          shuffle();
        } else {
          sortInterval();
        }
      },
      false
    );
  };

  checkIfSorted = array => {
    let arr = this.state.array.slice();
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  componentDidMount() {
    this.initArrayState();
    this.drawBarsFromArray(this.state.array);
    this.handleCanvasClicks();
  }

  componentDidUpdate() {
    this.clearCanvas();
    this.drawBarsFromArray(this.state.array);
  }

  render() {
    let height = window.height * 2; //TBD fix this

    return (
      <div className="sortWrapper">
        <canvas ref="canvas" width={window.innerWidth * 0.8} height={300} />
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
