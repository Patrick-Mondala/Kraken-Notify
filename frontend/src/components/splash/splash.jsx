import React from 'react';
import Header from "./header";
import MainNav from "./main-nav";
import Features from "./features";

require("./styles/splash.css");

const Splash = () => (
  <div className="splash">
    <Header />
    <MainNav />
    <Features />
  </div>
);

export default Splash;