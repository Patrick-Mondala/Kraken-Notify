import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import DiscordLoginButton from "./discord_login/discord_login_button";
import AuthPage from "./discord_login/auth_page";
import Splash from "./splash/splash";

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/login" component={DiscordLoginButton} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/splash" component={Splash} />
      <Redirect path="/" to="/splash" />
    </Switch>
  </div>
);

export default App;