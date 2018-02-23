import React, { Component } from 'react';
import '../styles/scss/resume.scss';

class Resume extends Component {

    makeRed(){
        document.getElementsByClassName("resume-button")[0].style.color = "#ff003b";
    }

    makeWhite(){
        document.getElementsByClassName("resume-button")[0].style.color = "#fff";
    }

    render(){
        return(
            <div className="resume-container">
                <a onMouseEnter={this.makeRed} onMouseLeave={this.makeWhite} className="resume-button" href={this.props.resumePDF} target="_blank">Resume</a>
            </div>
        );
    }
}

export default Resume;
