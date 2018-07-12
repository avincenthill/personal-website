import React, { Component } from "react";
import "../styles/main.css";

class Project extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="project">
          <a href={this.props.projectLink} className="projectDescription">
            <figure className="projectFigure">
              <figcaption className="projectFigcaption">
                {this.props.projectDescription}
              </figcaption>
              <img
                className="projectImg"
                src={this.props.projectImg}
                alt={this.props.projectName}
              />
            </figure>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
