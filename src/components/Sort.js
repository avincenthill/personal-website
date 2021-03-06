import React, { Component } from "react";
import "../styles/main.css";
import _ from "lodash";
import Code from "react-code-prettify";

//TBD add info about the sorts
//TBD implement all sorts
//TBD figure out why www.avh.party is harder than avh.party
//TBD tweak font sizes by window height

class Sort extends Component {
  state = {
    array: [],
    numBars: 50,
    i: 0
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

  //use state i to determine where algo should return to sorting after array is passed and animated
  sort = () => {
    const array = this.state.array.slice();
    let sortFunction = this.props.sortFunction;
    let i = this.state.i;
    this.setState({ array: sortFunction(array, i) });
  };

  sortInterval = () => {
    let sort = this.sort;

    let interval = setInterval(() => {
      let i = this.state.i;
      sort();
      this.setState({ i: i + 1 });
      if (this.checkIfSorted(this.state.array)) {
        this.setState({ i: 0 });
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
          this.setState({ i: 0 });
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
    return (
      <div className="sortWrapper">
        <canvas ref="canvas" width={window.innerWidth * 0.8} height={300} />{" "}
        {/*TBD fix hardcoded height*/}
        <div className="sortTitle">{this.props.sortName}</div>
        <div className="sortInfoDescription">{this.props.description}</div>
        <div className="sortInfo">
          <br />
          Worst Case Time: <b>{this.props.WCTC}</b>
          <br />
          Average Case Time: <b>{this.props.ACTC}</b>
          <br />
          Worst Case Space: <b>{this.props.WCSC}</b>
          <br />
          <Code
            className="code"
            codeString={this.props.sortFunctionText}
            language="javascript"
          />
        </div>
        <br />
      </div>
    );
  }
}

export default Sort;
//import Sort from "./Sort";
