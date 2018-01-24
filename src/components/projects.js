import React, { Component } from 'react';
import '../styles/css/projects.css';

class Projects extends Component {
    render(){
        return(
            <div className="projects-container">
                <div className="top-row-projects">
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                </div>
                <div className="bottom-row-projects">
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                </div>
            </div>
        );
    }
}

export default Projects;
