import React from 'react';

require("./styles/features.css");

const tripleDots = require("./images/3dots.png");

const Features = () => (
  <div className="features">
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
  </div>
);

export default Features;