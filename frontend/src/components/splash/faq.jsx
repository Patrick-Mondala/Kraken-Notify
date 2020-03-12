import React from 'react';

require("./styles/faq.css");
require("./styles/faq_list.css");

const tripleDots = require("./images/3dots.png");
const botImg = require("./images/bot.png");
const faq2Img = require("./images/faq2.png");
const worldImg = require("./images/world.png");
const supportImg = require("./images/support.png");

const Faq = () => (
  <div className="faq" id="faq">
    <FaqHeader />
    <FaqList />
  </div>
);

const dropDownToggler = (toggler, dropItem) => {
  if (toggler.innerText === "+") {
    toggler.textContent = "−";
    dropItem.style.height = "calc(70px + 3vw)";
  } else {
    toggler.textContent = "+";
    dropItem.style.height = "0";
  }
}

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
        <div
          className="question"
          onClick={() => {
            const toggleEl = document.getElementById("toggle-one");
            const answerEl = document.getElementById("answer-one");
            dropDownToggler(toggleEl, answerEl);
          }}
        >
          <img src={botImg} alt=""></img>
          <span>Do I need a bot to be able to cook with you?</span>
          <span id="toggle-one">+</span>
        </div>
        <div className="answer" id="answer-one">
          <span>
            No! We have plenty of resources and tools to help you cook without
            the use of bots. We also provide FREE slots and FREE bots to use on
            the hottest drops.
          </span>
        </div>
      </li>
      <li>
        <div
          className="question"
          onClick={() => {
            const toggleEl = document.getElementById("toggle-two");
            const answerEl = document.getElementById("answer-two");
            dropDownToggler(toggleEl, answerEl);
          }}
        >
          <img src={faq2Img} alt=""></img>
          <span>Do you guys sell lifetime memberships?</span>
          <span id="toggle-two">+</span>
        </div>
        <div className="answer" id="answer-two">
          <span>
            Unfortunately we don't sell lifetime memberships. The only way to
            acquire a copy is by winning a giveaway in the discord or on
            twitter.
          </span>
        </div>
      </li>
      <li>
        <div
          className="question"
          onClick={() => {
            const toggleEl = document.getElementById("toggle-three");
            const answerEl = document.getElementById("answer-three");
            dropDownToggler(toggleEl, answerEl);
          }}
        >
          <img src={worldImg} alt=""></img>
          <span>What countries are supported by Kraken?</span>
          <span id="toggle-three">+</span>
        </div>
        <div className="answer" id="answer-three">
          <span>
            We mainly focus on providing information for Canada and the US, but
            we do support ALL regions around the world to better adhere to our
            customers needs!
          </span>
        </div>
      </li>
      <li>
        <div
          className="question"
          onClick={() => {
            const toggleEl = document.getElementById("toggle-four");
            const answerEl = document.getElementById("answer-four");
            dropDownToggler(toggleEl, answerEl);
          }}
        >
          <img src={supportImg} alt=""></img>
          <span>What if I'm new to reselling?</span>
          <span id="toggle-four">+</span>
        </div>
        <div className="answer" id="answer-four">
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