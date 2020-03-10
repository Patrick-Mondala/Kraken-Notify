import React from 'react';
import { HashLink as Link } from "react-router-hash-link";

require("./styles/main-nav.css");

const TopImage = require("./images/top.png");
const PhoneImage = require("./images/phone.png");

const MainNav = () => (
  <div className="main-nav-container">
    <div className="main-nav-content">
      <LeftPanel />
      <RightPanel />
    </div>
    <nav className="main-nav">
      <a href="#/splash">
        <span>socials</span>
      </a>
      <Link to="/splash#features">
        <span>features</span>
      </Link>
      <Link to="/splash#faq">
        <span>faq</span>
      </Link>
    </nav>
    <div className="red-bar"></div>
  </div>
);

const LeftPanel = () => (
  <div className="left-panel">
    <div className="left-panel-content">
      <img src={TopImage} alt=""></img>
      <a href="#/splash"><span>join now for $20 / month</span></a>
      <span>by purchasing you automatically agree to our TOS</span>
    </div>
  </div>
);

const RightPanel = () => (
  <div className="right-panel">
    <div className="top-aside">the<span>best</span>sauce to cook with</div>
    <img src={PhoneImage} alt=""></img>
  </div>
);

export default MainNav;