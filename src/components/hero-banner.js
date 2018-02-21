import React, { Component } from 'react';
import '../styles/scss/hero-banner.scss';

class HeroBanner extends Component {

    scrollAbout() {
        var elem = document.getElementsByClassName("row-container")[0]; 
        elem.scrollTop = elem.scrollHeight;
        alert("yo");
        console.log("yp");
    }

    render(){
        return (
            <section className="hero-banner">
                <h1 className="my-name">Kevin Lopez</h1>
                <h2 className="dev-text">Front-End Web Developer</h2>
                <div onClick={this.scrollAbout} className="arrow bounce">
                    <a className="fa fa-arrow-down" href="#"></a>
                </div>
            </section>
        );
    }
}

export default HeroBanner;