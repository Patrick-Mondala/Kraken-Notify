import React from 'react';
import Header from "./header";
import MainNav from "./main-nav";
import Features from "./features";
import Faq from "./faq";
import Contact from "./contact";
import Footer from "./footer";
import Waves from "./waves";

require("./styles/splash.css");

const Splash = () => (
  <div className="splash">
    <Header />
    <MainNav />
    <Features />
    <Faq />
    <Contact />
    <Footer />
    <Waves />
  </div>
);

export default Splash;