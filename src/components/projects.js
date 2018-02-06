import React, { Component } from 'react';
import pomodoro from '../images/pomodoro.png';
import '../styles/scss/projects.scss';

class Projects extends Component {
    render(){
        return(
            <div className="projects-container">
                <div className="top-row-projects">
                    <div className="project">
                        <img src={pomodoro} alt="pomodoro" className="pomodoro"/>
                    </div>
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
