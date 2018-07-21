//a ProjectsWrapper react component
import React, { Component } from "react";
import "../styles/main.css";
import Project from "./Project";

//project image imports
import FetchLogo from "../img/fetch_logo.png";
import ParticleSimulation from "../img/particles.png";
import HilbertShirt from "../img/Hilbert.png";
import NSAShirt from "../img/NSA.png";
import PPPLogo from "../img/Picture-Perfect-Petals-Logo_500x500.png";
import Sorting from "../img/sorting.jpg";

//TBD project icons
//TBD Google maps API countries I've been to

class ProjectsWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="projectWrapper">
          <Project
            projectName="Sorting Algorithms"
            projectLink="/sorting"
            projectImg={Sorting}
            projectDescription="Sorting algos animated"
          />
          <Project
            projectName="Fetch Automation"
            projectLink="https://www.doubleclickbygoogle.com/articles/fetch-aeg-presents-structured-data-files/"
            projectImg={FetchLogo}
            projectDescription="DoubleClick case study of 2017 automation work"
          />
          <Project
            projectName="Particle Simulation"
            projectLink="https://github.com/avincenthill/particle_simulation"
            projectImg={ParticleSimulation}
            projectDescription="Particle system simulation in Processing"
          />
          <Project
            projectName="Hilbert Woot Shirt"
            projectLink="http://shirt.woot.com/offers/hilberts-grand-infinite-hotel"
            projectImg={HilbertShirt}
            projectDescription="Mathematics and Wes Anderson inspired woot! shirt"
          />
          <Project
            projectName="NSA Woot Shirt"
            projectLink="http://shirt.woot.com/offers/educate-yourself"
            projectImg={NSAShirt}
            projectDescription="Security-state inspired woot! shirt"
          />
          <Project
            projectName="Picture Perfect Petals Logo"
            projectLink="http://www.pictureperfectpetals.com/about"
            projectImg={PPPLogo}
            projectDescription="Logo design for Picture Perfect Petals"
          />
          <br />
        </div>
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default ProjectsWrapper;
//import ProjectsWrapper from "./ProjectsWrapper";
