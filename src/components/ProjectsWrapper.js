//a ProjectsWrapper react component
import React, { Component } from "react";
import "../styles/main.css";
import Project from "./Project";

class ProjectsWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <a href="./sorting">SortsWrapper</a>
        <div className="projectWrapper">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </React.Fragment>
    );
  }
}

export default ProjectsWrapper;
//import ProjectsWrapper from "./ProjectsWrapper";
