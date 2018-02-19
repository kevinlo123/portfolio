import React, { Component } from 'react';
import '../styles/scss/skills.scss';

class Skills extends Component {

    render(){
        return(
            <div className="skills-container">
                <h1 className="skills-text">Skills and services</h1>
                <p className="skills-paragraph"> 
                    My ultimate goal is to become a full-stack web developer and my skill-set
                    constantly changes. Currently my strongest point is in the front-end department.
                </p>
                <div className="skills-icons-container">
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-js"></i>
                    <i className="fab fa-wordpress-simple"></i>
                    <i className="far fa-gem"></i>
                </div>
            </div>
        );
    }
}

export default Skills;