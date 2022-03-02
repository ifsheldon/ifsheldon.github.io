import React, { Component } from "react";
import "./ProjectCard.css";
import Button from "../../components/button/Button";

class ProjectCard extends Component {
  render() {
    // TODO: add collaborators
    const project = this.props.project;
    const theme = this.props.theme;
    let status_component;
    if (project["link"] === ""){
      status_component = <p
          className="project-card-status"
          style={{ color: theme.secondaryText }}
        >
          {project["status"]}
        </p>
    }else{
      status_component = <a
                className="project-card-status"
                style={{ color: theme.secondaryText }}
                href={project["link"]}
              >
                {project["status"]}
              </a>
    }
    return (
      <div
        className="project-card"
        style={{ border: `1px solid ${project["color"]}` }}
      >
        <div className="project-card-body-div">
          <div className="project-card-header-div">
            <div className="project-card-heading-left">
              <h3
                className="project-card-title"
                style={{ color: theme.text }}
              >
                {project["title"]}
              </h3>
            </div>
            <div className="project-card-heading-right">
              {status_component}
            </div>
          </div>
          <p
            className="project-card-description"
            style={{ color: theme.text }}
          >
            {project["description"]}
          </p>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
