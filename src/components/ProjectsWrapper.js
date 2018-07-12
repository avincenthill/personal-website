//a ProjectsWrapper react component
import React, { Component } from "react";
import "../styles/main.css";
import Project from "./Project";

//project image imports
import GitHubImg from "../img/github_logo.png";

class ProjectsWrapper extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="projectWrapper">
          <Project
            projectName="GitHub Repos"
            projectLink="https://github.com/avincenthill?tab=repositories"
            projectImg={GitHubImg}
            projectDescription="GitHub project repos"
          />
          <Project
            projectClass="simpleLink"
            projectName="GitHub Repos"
            projectLink="https://github.com/avincenthill?tab=repositories"
            projectImg={GitHubImg}
            projectDescription="GitHub project repos"
            projectZoomable={false}
          />
          <Project
            projectClass="simpleLink"
            projectName="GitHub Repos"
            projectLink="https://github.com/avincenthill?tab=repositories"
            projectImg={GitHubImg}
            projectDescription="GitHub project repos"
            projectZoomable={false}
          />
          <Project
            projectClass="simpleLink"
            projectName="GitHub Repos"
            projectLink="https://github.com/avincenthill?tab=repositories"
            projectImg={GitHubImg}
            projectDescription="GitHub project repos"
            projectZoomable={false}
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

/*
        <div class="project-wrapper clearfix">

            <a class="project-link">
                <div class="project_description"> JavaScript and CSS clock </div>
                <div class="project-img img-thumbnail">
                    <div class="clock">
                        <div class="clock-face">
                            <div id="time" class="time"></div>

                            <div class="hand hour-hand"></div>
                            <div class="hand min-hand"></div>
                            <div class="hand second-hand"></div>

                        </div>
                    </div>

                </div>
            </a>

            <a class="project-link" href="https://github.com/avincenthill?tab=repositories">
                <div class="project_description"> GitHub project repos </div>
                <img src="img/logos/github_large.png" class="project-img img-thumbnail">
            </a>

            <a class="project-link" href="https://www.doubleclickbygoogle.com/articles/fetch-aeg-presents-structured-data-files/">
                <div class="project_description"> DoubleCLick case study of 2017 automation work with Fetch </div>
                <img src="img/fetch_logo.png" class="project-img img-thumbnail">
            </a>

            <a class="project-link" href="/pdf/Alexander%20J.%20Vincent-Hill%20-%20Resume.pdf">
                <div class="project_description"> Specifics of work done for HP Inc. 2014-2017 </div>
                <img src="img/hp_logo.png" class="project-img img-thumbnail">
            </a>

            <a class="project-link" href="https://christinamphotography.shootproof.com/">
                <div class="project_description"> Logo design for Christina M Photography </div>
                <div class="project-img img-thumbnail design_christina"></div>
            </a>

            <a class="project-link" href="http://www.pictureperfectpetals.com/about">
                <div class="project_description"> Logo design for Picture Perfect Petals </div>
                <div class="project-img img-thumbnail design_petals"></div>
            </a>

            <a class="project-link" href="http://shirt.woot.com/offers/educate-yourself?ref=sh_cnt_wp_1_1">
                <div class="project_description"> Security-state inspired woot! shirt </div>
                <div class="woot_logo"></div>
                <div class="project-img zoomable3_5 img-thumbnail shirt_nsa"></div>
            </a>

            <a class="project-link" href="http://shirt.woot.com/offers/hilberts-grand-infinite-hotel">
                <div class="project_description"> Mathematics and Wes Anderson inspired woot! shirt </div>
                <div class="woot_logo"></div>
                <div class="project-img zoomable1_25 img-thumbnail shirt_hilbert"></div>
            </a>

            <a class="project-link" href="https://github.com/avincenthill/particle_simulation">
                <div class="project_description"> Particle system simulation in Java Processing </div>
                <img src="img/particles.png" class="project-img img-thumbnail">
            </a>

            <a class="project-link" href="/ascii-caesar-cypher">
                <div class="project_description"> ASCII table rotation cypher in JavaScript </div>
                <img src="img/ASCII.png" class="project-img img-thumbnail">
            </a>

        </div>
*/
