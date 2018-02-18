import React, { Component } from 'react';
import '../styles/scss/projects.scss';

class Projects extends Component {
    render(){
        return(
            <div className="projects-container">
                <h1 className="projects-text">Latest Projects</h1>
                <div id="menu">
                    <div className="projects-top-row">
                        <a href="https://kevinlo123.github.io/Pomodoro-clock/pomodoro.html" target="_blank">
                            <div class="pomodoro zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/jquery-weather-app/weather.html" target="_blank">
                            <div class="weatherApp zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/Quote-app/quoteApp.html" target="_blank">
                            <div class="quoteApp zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/Rock-Papers-Scissors/rps.html" target="_blank">
                            <div class="rps zoomimg"></div>
                        </a>
                    </div>
                    <div className="projects-bottom-row">
                        <a href="https://kevinlo123.github.io/Calculator-new-/calculator.html" target="_blank">
                            <div class="calculator zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/energyDrink-site/index.html" target="_blank">
                            <div class="energy zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/code-challenge-/challenge2.html" target="_blank">
                            <div class="form zoomimg"></div>
                        </a>
                        <a href="https://kevinlo123.github.io/yelp/yelp.html" target="_blank">
                            <div class="yelp zoomimg"></div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
