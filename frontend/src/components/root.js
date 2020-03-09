import React from "react";
import { HashRouter } from "react-router-dom";
import App from "./app";

require("./reset.css");
require("./font.css");

const Root = () => (
  <HashRouter>
    <App />
  </HashRouter>
);

export default Root;