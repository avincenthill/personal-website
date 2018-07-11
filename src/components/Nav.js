import React, { Component } from "react";
import "../styles/main.css";
import Logo from "./Logo";

class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          {/* TBD sticky nav */}
          <ul id="nav">
            <li className="logo">
              <Logo />
            </li>
            <li>
              <a href="./about">About</a>
            </li>
            <li>
              <a href="./projects">Projects</a>
            </li>
            <li>
              <a href="./resume">Resume</a>
            </li>
            <li>
              <a href="./contact">Contact</a>
            </li>
          </ul>
        </nav>
        <br />
      </React.Fragment>
    );
  }
}

export default Nav;
