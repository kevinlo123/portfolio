import React, { Component } from 'react';
import '../styles/scss/contact.scss';

class Contact extends Component {

    render(){
        return(
            <div className="contact-container">
                <h1 className="contact-text">Contact</h1>
                <h2 className="get-in-touch-text">Get in touch with me</h2>
                <i className="far fa-envelope"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-github-alt"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-codepen"></i>
            </div>
        );
    }
}

export default Contact;