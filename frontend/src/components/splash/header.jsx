import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

require("./styles/header.css");

const KrakenNotifyLogo = require("./images/kraken-notify-logo.png");

const Header = () => (
  <header className="header">
    <div className="header-nav">
      <Link to="/splash#contact"><span>contact</span></Link>
      <div className="logo">
        <img src={KrakenNotifyLogo} alt=""></img>
      </div>
      <a href="#/dashboard"><span>dashboard</span></a>
    </div>
  </header>
);

export default Header;