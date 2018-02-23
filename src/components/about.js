import React, {Component} from 'react';
import '../styles/scss/about.scss';

class About extends Component {
    render(){
        return (
            <div className="row-container">
                <div className="about-projects">
                    <i className="fa fa-desktop" aria-hidden="true"></i>
                    <h3 className="about-titles">Projects</h3>
                    <p>
                        I use various technologies to create user-friendly, 
                        accessible, and well-designed online solutions. 
                        The work presented here are just a few examples
                        of my creations
                        from my journey 
                        to becoming a web developer, as well as some that were
                        developed more recently. 
                        To see the technologies
                        I work with take a look at my projects below.
                    </p>
                </div>
                <div className="about-experience">
                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                    <h3 className="about-titles">Experience</h3>
                    <p>
                        I graduated from the Resilient Coders bootcamp. We met daily for eight weeks, 
                        to learn HTML, CSS, JavaScript, jQuery, as well as git from experienced professionals
                        from the Web Development community. I can now demonstrate proficiency in semantically
                        structured markup, inheritance and specificity, accessibility, progressive enhancement, 
                        responsive design, and effective use of OOP.
                    </p>
                </div>
                <div className="about-future">
                    <i className="far fa-hourglass"></i>
                    <h3 className="about-titles">Future</h3>
                    <p>
                        Through out my life I’ve been told "I can’t" by many, but that 
                        has never stopped me from persevering and getting to where I am today. I
                        have a unique drive and ambition, that has led me to where I am today. 
                        I am a leader, and aspiring full-stack developer. I am pursuing
                        a goal to be a part of a development team that creates amazing products that 
                        resolve real world issues.
                    </p>
                </div>
            </div>         
        );
    }
}

export default About;