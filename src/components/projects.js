import React, { Component } from 'react';
import '../styles/scss/projects.scss';

class Projects extends Component {
    render(){
        return(
            <div className="projects-container">
                <h1 className="projects-text">Latest Projects</h1>
                <div id="menu">
                    <div className="projects-top-row">
                        <a href="https://kevinlo123.github.io/Pomodoro-clock/pomodoro.html" rel="noopener noreferrer" target="_blank">
                            <div className="pomodoro zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/jquery-weather-app/weather.html" rel="noopener noreferrer" target="_blank">
                            <div className="weatherApp zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/Quote-app/quoteApp.html" rel="noopener noreferrer" target="_blank">
                            <div className="quoteApp zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/Rock-Papers-Scissors/rps.html" rel="noopener noreferrer" target="_blank">
                            <div className="rps zoomimg"></div>
                        </a>
                    </div>
                    <div className="projects-bottom-row">
                        <a href="https://kevinlo123.github.io/Calculator-new-/calculator.html" rel="noopener noreferrer" target="_blank">
                            <div className="calculator zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/energyDrink-site/index.html" rel="noopener noreferrer" target="_blank">
                            <div className="energy zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/code-challenge-/challenge2.html" rel="noopener noreferrer" target="_blank">
                            <div className="form zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/yelp/yelp.html" rel="noopener noreferrer" target="_blank">
                            <div className="yelp zoomimg"></div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
