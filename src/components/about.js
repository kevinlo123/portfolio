import React, {Component} from 'react';
import '../styles/css/about.css';

class About extends Component {
    render(){
        return (
            <div className="row-container">
                <div className="about-projects">
                    <i className="fa fa-desktop" aria-hidden="true"></i>
                    <h3 className="about-titles">Projects</h3>
                    <p>
                        I'm using various technologies to create user-friendly, 
                        accessible and well-designed online solutions. The work
                        presented here was created on my journey to become a web developer and some was 
                        developed recently. To see the technologies I work with view my projects below.
                    </p>
                </div>
                <div className="about-experience">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    <h3 className="about-titles">Experience</h3>
                    <p>
                        I graduated from Resilient coders bootcamp we met daily for eight weeks, 
                        to learn HTML, CSS, JavaScript, jQuery, and git, from professionals. 
                        I can now demonstrate proficiency in semantically structured markup, 
                        inheritance and specificity, accessibility, progressive 
                        enhancement, responsive design, and effective use of OOP
                    </p>
                </div>
                <div className="about-future">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <h3 className="about-titles">Future</h3>
                    <p>
                        I’ve been told I can’t by many, but that has never stopped me from persevering 
                        and getting to where I am today I have a unique drive and ambition. I am a leader,
                        aspiring full-stack developer, and an optimist. I am pursuing an opportunity to be a part of a development team that creates amazing products 
                        that resolve real world issues.
                    </p>
                </div>
            </div>         
        );
    }
}

export default About;