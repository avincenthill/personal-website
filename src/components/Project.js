import React, { Component } from "react";
import "../styles/main.css";

class Project extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="project">
          <figure className="projectFigure">
            <a href={this.props.projectLink} className="projectDescription">
              <figcaption className="projectFigcaption">
                {this.props.projectDescription}
              </figcaption>
            </a>
            <a href={this.props.projectLink} className="projectDescription">
              <img
                className="projectImg btn"
                src={this.props.projectImg}
                alt={this.props.projectName}
              />
            </a>
          </figure>
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
