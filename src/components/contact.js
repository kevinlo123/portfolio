import React, { Component } from 'react';
import '../styles/scss/contact.scss';

class Contact extends Component {

    render(){
        return(
            <div className="contact-container">
                <h1 className="contact-text">Contact</h1>
                <div className="form-container">
                    <a className="message" href="mailto:lopezkevin175@gmail.com">Message me</a>
                </div>
                <h2 className="find-me-text">Follow me on social media!</h2>
                <a href="https://www.linkedin.com/in/kevin-lopez-965540141/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/kevinlo123"><i className="fab fa-github-alt"></i></a>
                <a href="https://twitter.com/kevinlopez617"><i className="fab fa-twitter"></i></a>
                <a href="https://codepen.io/kevinlo51/"><i className="fab fa-codepen"></i></a>
            </div>
        );
    }
}

export default Contact;