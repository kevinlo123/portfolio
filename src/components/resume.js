import React, { Component } from 'react';
import '../styles/scss/resume.scss';

class Resume extends Component {

    makeRed(){
        document.getElementsByClassName("resume-link")[0].style.color = "#ff003b";
    }

    makeWhite(){
        document.getElementsByClassName("resume-link")[0].style.color = "#fff";
    }

    render(){
        return(
            <div className="resume-container">
                <button onMouseEnter={this.makeRed} onMouseLeave={this.makeWhite} className="resume-button">
                    <a className="resume-link" href="./RESUME.pdf">Resume</a>
                </button>
            </div>
        );
    }
}

export default Resume;
