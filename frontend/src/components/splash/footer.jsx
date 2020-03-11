import React from 'react';

require("./styles/footer.css");

const logo = require("./images/kraken-notify-logo.png");

const Footer = () => (
  <footer className="splash-footer">
    <div className="copyright">
      <span>COPYRIGHT ©2020</span>
      <span>KRAKEN NOTIFY LTD</span>
      <span>ALL RIGHTS RESERVED</span>
    </div>
    <div className="middle-panel">
      <div className="logo-container">
        <img src={logo} alt=""></img>
      </div>
      <div className="links">
        <a href="#/splash">
          <span>privacy policy</span>
        </a>
        <a href="#/splash">
          <span>tos</span>
        </a>
      </div>
    </div>
    <div className="social-links">
      <a href="#/splash">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://twitter.com/KrakenNotify">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  </footer>
);

export default Footer;