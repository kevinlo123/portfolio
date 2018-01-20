import React, { Component } from 'react';
import '../styles/css/header.css';

class Header extends Component {

    showNav(){
        const navMobile = document.getElementsByClassName("header-compact-nav-mobile")[0];
        const blackOverLay = document.getElementsByClassName("black-overlay")[0];
        const hamburgerMenu = document.getElementById("mobile-nav-icon");
        const mobileNavItems = document.getElementsByTagName("ul")[1];

        hamburgerMenu.classList.toggle("hamburger-clicked");
        mobileNavItems.classList.toggle("show-nav-items");
        console.log("hamburger menu has been clicked");   
        
        if(hamburgerMenu.classList.contains("hamburger-clicked")){
            blackOverLay.style.display = "block";  
        }else{
            blackOverLay.style.display = "none";              
        }
    }

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
            <nav>
                <div className="header-compact-nav-mobile">
                    <a onClick={this.showNav} className="header-compact-nav-icon" id="mobile-nav-icon">
                        <span className="header-compact-nav-icon-line line-1"></span>
                        <span className="header-compact-nav-icon-line line-2"></span>
                        <span className="header-compact-nav-icon-line line-3"></span>
                    </a>
                    <ul>
                        <li className="mobile-nav-items"><a href="#" className="list-item-anchor-mobile">Home</a></li>
                        <li className="mobile-nav-items"><a href="#" className="list-item-anchor-mobile">About</a></li>
                        <li className="mobile-nav-items"><a href="#" className="list-item-anchor-mobile">Projects</a></li>
                        <li className="mobile-nav-items"><a href="#" className="list-item-anchor-mobile">Contact</a></li>
                    </ul>
                    <div className="black-overlay"></div>
                </div>
            </nav>
        </header>
        );
    }
}

export default Header;
