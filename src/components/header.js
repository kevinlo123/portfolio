import React, { Component } from 'react';
import '../styles/css/header.css';

class Header extends Component {
    render() {
        return (
        <header className="portfolio-header">
            <nav className="portfolio-nav">
            <a href="#" className="fa-anchor"><i className="fa fa-home" aria-hidden="true"></i></a>
                <ul className="nav-unordered-list">
                    <li className="nav-list-item"><a href="#" className="list-item-anchor">About</a></li>
                    <li className="nav-list-item"><a href="#" className="list-item-anchor">Projects</a></li>
                    <li className="nav-list-item"><a href="#" className="list-item-anchor">Contact</a></li>
                </ul>
            </nav>
        </header>
        );
    }
}

export default Header;
