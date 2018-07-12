import React, { Component } from "react";
import "../styles/main.css";
import Logo from "./Logo";

/* TBD put nav under thumb for mobile */
class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          {/* TBD sticky nav */}
          <ul id="nav">
            <li className="logo btn">
              <Logo />
            </li>
            <li className="btn">
              <a href="./projects">Projects</a>
            </li>
            <li className="btn">
              <a href="./resume">Resume</a>
            </li>
            <li className="btn">
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
