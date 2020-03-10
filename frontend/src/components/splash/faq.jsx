import React from 'react';

require("./styles/faq.css");
require("./styles/faq_list.css");

const tripleDots = require("./images/3dots.png");
const botImg = require("./images/bot.png");
const faq2Img = require("./images/faq2.png");
const worldImg = require("./images/world.png");
const supportImg = require("./images/support.png");

const Faq = () => (
  <div className="faq">
    <FaqHeader />
    <FaqList />
  </div>
);

const FaqHeader = () => (
  <h2>
    <div className="faq-white-bar"></div>
    <div className="header">
      <img src={tripleDots} alt=""></img>
      <div className="header-text">
        <span>FAQ</span>
        <span>FAQ</span>
      </div>
      <img src={tripleDots} alt=""></img>
    </div>
  </h2>
);

const FaqList = () => (
  <div className="faq-container">
    <ul className="faq-list">
      <li>
        <div className="question">
          <img src={botImg} alt=""></img>
          <span>Do I need a bot to be able to cook with you?</span>
          <span>-</span>
        </div>
        <div className="answer">
          <span>
            No! We have plenty of resources and tools to help you cook without
            the use of bots. We also provide FREE slots and FREE bots to use on
            the hottest drops.
          </span>
        </div>
      </li>
      <li>
        <div className="question">
          <img src={faq2Img} alt=""></img>
          <span>Do you guys sell lifetime memberships?</span>
          <span>-</span>
        </div>
        <div className="answer">
          <span>
            Unfortunately we don't sell lifetime memberships. The only way to
            acquire a copy is by winning a giveaway in the discord or twitter.
          </span>
        </div>
      </li>
      <li>
        <div className="question">
          <img src={worldImg} alt=""></img>
          <span>What countries are supported by Kraken?</span>
          <span>-</span>
        </div>
        <div className="answer">
          <span>
            We mainly focus on providing information for Canada and the US, but
            we do support ALL regions around the world to better adhere to our
            customers needs!
          </span>
        </div>
      </li>
      <li>
        <div className="question">
          <img src={supportImg} alt=""></img>
          <span>What if I'm new to reselling?</span>
          <span>-</span>
        </div>
        <div className="answer">
          <span>
            No problem! We have an excellent support team that will be patient
            and help you every step of the way. We also have countless videos
            and guides to ensure you are prepared to cook every release.
          </span>
        </div>
      </li>
    </ul>
  </div>
);

export default Faq;