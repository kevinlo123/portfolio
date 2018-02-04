import React, { Component } from 'react';
import Header from './header';
import HeroBanner from './hero-banner'
import About from './about';
import Resume from './resume';
import Projects from './projects';
import resume from '../resume/RESUME.pdf';


class Portfolio extends Component {
    render(){
        return (
            <div className="main-wrapper">
                <section className="header-and-hero-banner-wrapper">
                    <Header/> 
                    <HeroBanner />
                </section>
                <section className="about-wrapper">
                    <About />
                </section>
                <section className="resume-wrapper">
                    <Resume resumePDF={resume}/>
                </section>
                <section className="projects-wrapper">
                    <Projects />
                </section>
            </div>
        );
    }
}

export default Portfolio;