import React from 'react';
import Header from "./header";
import MainNav from "./main-nav";
import Features from "./features";
import Faq from "./faq";

require("./styles/splash.css");

const Splash = () => (
  <div className="splash">
    <Header />
    <MainNav />
    <Features />
    <Faq />
  </div>
);

export default Splash;