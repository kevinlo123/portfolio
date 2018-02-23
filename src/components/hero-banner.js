import React, { Component } from 'react';
import '../styles/scss/hero-banner.scss';
import smoothScroll from 'smoothscroll';

class HeroBanner extends Component {
    
    handleClick(event) {
        var exampleDestination = document.querySelector('.row-container');        
        event.preventDefault();
    
        smoothScroll(exampleDestination);
    }

    render(){
        return (
            <section className="hero-banner">
                <h1 className="my-name">Kevin Lopez</h1>
                <h2 className="dev-text">Front-End Web Developer</h2>
                <div onClick={this.handleClick} className="arrow bounce">
                    <a className="fa fa-arrow-down" href="#"></a>
                </div>
            </section>
        );
    }
}

export default HeroBanner;