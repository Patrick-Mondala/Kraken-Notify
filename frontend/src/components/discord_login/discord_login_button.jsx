import React from "react";

require("./discord_login.css");

const CLIENT_ID = require("./client").CLIENT_ID;
const redirect = encodeURIComponent(
  `http://localhost:${process.env.PORT || 5000}/api/discord/callback`
);

const discordAuthLink = `https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}`;

const DiscordLoginButton = () => {
  return (
    <div className="container">
      <a href={discordAuthLink}>
        Login through discord
      </a>
    </div>
  );
}
export default DiscordLoginButton;