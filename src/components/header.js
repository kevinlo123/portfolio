import React, { Component } from 'react';
import '../styles/scss/header.scss';
import smoothScroll from 'smoothscroll';


class Header extends Component {

    showNav(){
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

    componentDidMount(){
        window.addEventListener('scroll', function() {
            let scrollposition = window.scrollY;            
            const navigation = document.getElementsByClassName("portfolio-nav")[0];
            if(scrollposition > 620){
                navigation.classList.add("nav-background");
            }
            else{
                navigation.classList.remove("nav-background");
            }
        });
    }

    handleClickHome(event) {
        var exampleDestination = document.querySelector('.hero-banner');        
        event.preventDefault();
    
        smoothScroll(exampleDestination);
    }

    handleClickAbout(event) {
        var exampleDestination = document.querySelector('.row-container');        
        event.preventDefault();
    
        smoothScroll(exampleDestination);
    }

    handleClickProjects(event) {
        var exampleDestination = document.querySelector('.resume-container');        
        event.preventDefault();
    
        smoothScroll(exampleDestination);
    }

    handleClickSkillsContact(event) {
        var exampleDestination = document.querySelector('.contact-container');        
        event.preventDefault();
    
        smoothScroll(exampleDestination);
    }

    handleClickHomeMobile(event) {
        const hamburgerMenu = document.getElementById("mobile-nav-icon");
        const mobileNavItems = document.getElementsByTagName("ul")[1];
        const blackOverLay = document.getElementsByClassName("black-overlay")[0];
        
        blackOverLay.style.display = "none";
        hamburgerMenu.classList.remove("hamburger-clicked");
        mobileNavItems.classList.remove("show-nav-items");

        var exampleDestination = document.querySelector('.hero-banner');        
        event.preventDefault();
    
        smoothScroll(exampleDestination);
    }

    handleClickAboutMobile(event) {
        const hamburgerMenu = document.getElementById("mobile-nav-icon");
        const mobileNavItems = document.getElementsByTagName("ul")[1];
        const blackOverLay = document.getElementsByClassName("black-overlay")[0];
        
        blackOverLay.style.display = "none";
        hamburgerMenu.classList.remove("hamburger-clicked");
        mobileNavItems.classList.remove("show-nav-items");

        var exampleDestination = document.querySelector('.row-container');        
        event.preventDefault();
    
        smoothScroll(exampleDestination);
    }

    handleClickProjectsMobile(event) {
        const hamburgerMenu = document.getElementById("mobile-nav-icon");
        const mobileNavItems = document.getElementsByTagName("ul")[1];
        const blackOverLay = document.getElementsByClassName("black-overlay")[0];
        
        blackOverLay.style.display = "none";
        hamburgerMenu.classList.remove("hamburger-clicked");
        mobileNavItems.classList.remove("show-nav-items");

        var exampleDestination = document.querySelector('.projects-container');        
        event.preventDefault();
    
        smoothScroll(exampleDestination);
    }

    handleClickSkillsMobile(event) {
        const hamburgerMenu = document.getElementById("mobile-nav-icon");
        const mobileNavItems = document.getElementsByTagName("ul")[1];
        const blackOverLay = document.getElementsByClassName("black-overlay")[0];
        
        blackOverLay.style.display = "none";
        hamburgerMenu.classList.remove("hamburger-clicked");
        mobileNavItems.classList.remove("show-nav-items");

        var exampleDestination = document.querySelector('.skills-container');        
        event.preventDefault();
    
        smoothScroll(exampleDestination);
    }

    handleClickContactMobile(event) {
        const hamburgerMenu = document.getElementById("mobile-nav-icon");
        const mobileNavItems = document.getElementsByTagName("ul")[1];
        const blackOverLay = document.getElementsByClassName("black-overlay")[0];
        
        blackOverLay.style.display = "none";
        hamburgerMenu.classList.remove("hamburger-clicked");
        mobileNavItems.classList.remove("show-nav-items");

        var exampleDestination = document.querySelector('.contact-container');        
        event.preventDefault();
    
        smoothScroll(exampleDestination);
    }

    render() {
        return (
        <header className="portfolio-header">
            <nav className="portfolio-nav">
                <a onClick={this.handleClickHome} href="#" className="fa-anchor"><i className="fa fa-home" aria-hidden="true"></i></a>
                <ul className="nav-unordered-list">
                    <li onClick={this.handleClickAbout} className="nav-list-item">About</li>
                    <li onClick={this.handleClickProjects} className="nav-list-item">Projects</li>
                    <li onClick={this.handleClickSkillsContact} className="nav-list-item">Skills</li>
                    <li onClick={this.handleClickSkillsContact} className="nav-list-item">Contact</li>
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
                        <li onClick={this.handleClickHomeMobile} className="mobile-nav-items"><a href="#" className="list-item-anchor-mobile">Home</a></li>
                        <li onClick={this.handleClickAboutMobile} className="mobile-nav-items"><a href="#" className="list-item-anchor-mobile">About</a></li>
                        <li onClick={this.handleClickProjectsMobile} className="mobile-nav-items"><a href="#" className="list-item-anchor-mobile">Projects</a></li>
                        <li onClick={this.handleClickSkillsMobile} className="mobile-nav-items"><a href="#" className="list-item-anchor-mobile">Skills</a></li>
                        <li onClick={this.handleClickContactMobile} className="mobile-nav-items"><a href="#" className="list-item-anchor-mobile">Contact</a></li>
                    </ul>
                    <div className="black-overlay"></div>
                </div>
            </nav>
        </header>
        );
    }
}

export default Header;
