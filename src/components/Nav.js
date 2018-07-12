import React, { Component } from "react";
import "../styles/main.css";
import Logo from "./Logo";
import Ionicon from "react-ionicons";

/* TBD put nav under thumb for mobile */
class Nav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          {/* TBD make sticky nav */}
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
            <li className="btn">
              <a href="https://github.com/avincenthill">
                <Ionicon icon="logo-github" fontSize="8vmin" color="white" />
              </a>
            </li>
          </ul>
        </nav>
        <br />
      </React.Fragment>
    );
  }
}

export default Nav;
