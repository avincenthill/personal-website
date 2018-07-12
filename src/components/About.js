//a About react component
import React, { Component } from "react";
import "../styles/main.css";
import Emoji from "react-emoji-render";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="aboutWrapper">
          <div className="headshot">
            <img
              className="headshot"
              src={require("../img/headshot.png")}
              alt="AVH"
            />
          </div>
          <div className="blurb">
            <br />
            <Emoji text=" :wave: Hi, I'm AVH!" />
            <br />
            <br />
            <Emoji
              text="Check out my projects to see how well I could contribute to your
            team!"
            />
            <br />
            <br />
            I'm currently looking for opportunities to learn and develop at
            exciting companies.
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
//import About from "./About";
