import React, { Component } from 'react';
import '../styles/scss/resume.scss';

class Resume extends Component {
    render(){
        return(
            <div className="resume-container">
                <h1 className="checkout-text">Check out my Resume!</h1>
                <button>Resume</button>
            </div>
        );
    }
}

export default Resume;
