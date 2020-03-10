import React from 'react';

require("./styles/contact.css");

const tripleDots = require("./images/3dots.png");

const Contact = () => (
  <div className="contact" id="contact">
    <ContactHeader />
    <div className="email-container">
      <div className="icon">
        <img src="" alt=""></img>
      </div>
      <span className="email">hello@krakennotify.com</span>
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