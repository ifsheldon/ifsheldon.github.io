import React, { Component } from "react";
import ProjectCard from "../../components/projectCard/ProjectCard.js";
import "./ProjectAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class ProjectAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="project-accord">
        <Accordion onChange={({ expanded }) => console.log(expanded)}>
        {/* <Panel
          className="project-accord-panel"
                title={"Projects"}
                key={"Projects"}
        > */}
        {this.props.projects.map((project) => 
            <ProjectCard project={project} theme={theme} />)}
        {/* </Panel> */}
        </Accordion>
      </div>
    );
  }
}

export default ProjectAccordion;
