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
      <a href="#/splash"></a>
      <a href="#/splash"></a>
    </div>
  </footer>
);

export default Footer;