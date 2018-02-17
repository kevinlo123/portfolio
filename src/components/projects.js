import React, { Component } from 'react';
import '../styles/scss/projects.scss';

class Projects extends Component {
    render(){
        return(
            <div className="projects-container">
                <h1 className="projects-text">Latest Projects</h1>
                <div id="menu">
                    <a href="https://kevinlo123.github.io/Pomodoro-clock/pomodoro.html">
                        <div class="pomodoro zoomimg"></div>
                    </a>
                    <a href="https://kevinlo123.github.io/jquery-weather-app/weather.html">
                        <div class="weatherApp zoomimg"></div>
                    </a>
                    <a href="https://kevinlo123.github.io/Quote-app/quoteApp.html">
                        <div class="quoteApp zoomimg"></div>
                    </a>
                    <a href="https://kevinlo123.github.io/Rock-Papers-Scissors/rps.html">
                        <div class="rps zoomimg"></div>
                    </a>
                    <a href="https://kevinlo123.github.io/Calculator-new-/calculator.html">
                        <div class="calculator zoomimg"></div>
                    </a>
                    <a href="https://kevinlo123.github.io/energyDrink-site/index.html">
                        <div class="energy zoomimg"></div>
                    </a>
                    <div class="projects zoomimg"></div>
                    <div class="bio zoomimg"></div>
                </div>
            </div>
        );
    }
}

export default Projects;
