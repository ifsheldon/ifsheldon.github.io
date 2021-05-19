import React, { Component } from "react";
import "./ProjectCard.css";
import Button from "../../components/button/Button";

class ProjectCard extends Component {
  render() {
    // TODO: add collaborators and link
    const project = this.props.project;
    const theme = this.props.theme;
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
              {/* <p
                className="project-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={project["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project["company"]}
                </a>
              </p> */}
            </div>
            <div className="project-card-heading-right">
              <p
                className="project-card-status"
                style={{ color: theme.secondaryText }}
              >
                {project["status"]}
              </p>
              {/* <p
                className="project-card-location"
                style={{ color: theme.secondaryText }}
              >
                {project["location"]}
              </p> */}
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
