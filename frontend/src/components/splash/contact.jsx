import React from 'react';

require("./styles/contact.css");

const copy = require('clipboard-copy');
const tripleDots = require("./images/3dots.png");

const Contact = () => (
  <div className="contact" id="contact">
    <ContactHeader />
    <div className="email-container">
      <div className="icon">
        <i className="far fa-envelope"></i>
      </div>
      <span id="email" onClick={() => {
        copy("hello@krakennotify.com");
        const emailSpan = document.getElementById("email");
        emailSpan.textContent = 'Copied to clipboard!';
        setTimeout(() => (emailSpan.textContent = "hello@krakennotify.com"), 2000);
      }} className="email">hello@krakennotify.com</span>
    </div>
  </div>
);

const ContactHeader = () => (
  <h2>
    <div className="contact-white-bar"></div>
    <div className="header">
      <img src={tripleDots} alt=""></img>
      <div className="header-text">
        <span>CONTACT</span>
        <span>CONTACT</span>
      </div>
      <img src={tripleDots} alt=""></img>
    </div>
  </h2>
);

export default Contact;