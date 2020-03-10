import React from 'react';

require("./styles/features.css");
require("./styles/features_list.css");

const tripleDots = require("./images/3dots.png");
const clockImg = require("./images/clock.png");
const bagImg = require("./images/bag.png");
const regularClockImg = require("./images/regularclock.png");
const backDoorImg = require("./images/backdoor.png");
const peopleImg = require("./images/people.png");
const bookImg = require("./images/book.png");
const toolsImg = require("./images/tools.png");
const truckImg = require("./images/truck.png");

const Features = () => (
  <div className="features" id="features">
    <FeaturesHeader />
    <FeaturesList />
    <div className="description">and so<span>much</span>more...</div>
  </div>
);

const FeaturesHeader = () => (
  <h2>
    <div className="white-bar"></div>
    <div className="header">
      <img src={tripleDots} alt=""></img>
      <div className="header-text">
        <span>FEATURES</span>
        <span>FEATURES</span>
      </div>
      <img src={tripleDots} alt=""></img>
    </div>
    <div className="description">some features that make us<span>great</span></div>
  </h2>
);

const FeaturesList = () => (
  <div className="features-container">
    <LeftList />
    <RightList />
  </div>
);

const LeftList = () => (
  <ul className="left-list">
    <li>
      <div className="icon">
        <img src={clockImg} alt=""></img>
      </div>
      <div className="description">
        <span>SPEEDY</span>
        <span>MONITORS</span>
      </div>
    </li>
    <li className="separator">
    </li>
    <li>
      <div className="icon">
        <img src={bagImg} alt=""></img>
      </div>
      <div className="description">
        <span>EXCLUSIVE</span>
        <span>GROUPBUYS</span>
      </div>
    </li>
    <li className="separator">
    </li>
    <li>
      <div className="icon">
        <img src={regularClockImg} alt=""></img>
      </div>
      <div className="description">
        <span>EARLY</span>
        <span>INFO</span>
      </div>
    </li>
    <li className="separator">
    </li>
    <li>
      <div className="icon">
        <img src={backDoorImg} alt=""></img>
      </div>
      <div className="description">
        <span>EXCLUSIVE</span>
        <span>BACKDOORS</span>
      </div>
    </li>
  </ul>
);

const RightList = () => (
  <ul className="right-list">
    <li>
      <div className="description">
        <span>WORLDWIDE</span>
        <span>SUPPORT</span>
      </div>
      <div className="icon">
        <img src={peopleImg} alt=""></img>
      </div>
    </li>
    <li className="separator">
    </li>
    <li>
      <div className="description">
        <span>RELEASE</span>
        <span>GUIDES</span>
      </div>
      <div className="icon">
        <img src={bookImg} alt=""></img>
      </div>
    </li>
    <li className="separator">
    </li>
    <li>
      <div className="description">
        <span>TOOLS</span>
        <span>& BOTS</span>
      </div>
      <div className="icon">
        <img src={toolsImg} alt=""></img>
      </div>
    </li>
    <li className="separator">
    </li>
    <li>
      <div className="description">
        <span>FREE</span>
        <span>SHIPPING</span>
      </div>
      <div className="icon">
        <img src={truckImg} alt=""></img>
      </div>
    </li>
  </ul>
);

export default Features;