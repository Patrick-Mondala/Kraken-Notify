import React from 'react';

require("./styles/header.css");

const KrakenNotifyLogo = require("./images/kraken-notify-logo.png");

const Header = () => (
  <header className="header">
    <div className="header-nav">
      <a href="#/splash"><span>contact</span></a>
      <div className="logo">
        <img src={KrakenNotifyLogo} alt=""></img>
      </div>
      <a href="#/splash"><span>dashboard</span></a>
    </div>
  </header>
);

export default Header;