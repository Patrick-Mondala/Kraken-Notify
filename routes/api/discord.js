const express = require("express");
const fetch = require("node-fetch");
const btoa = require("btoa");
const { catchAsync } = require("../../frontend/src/util/discord_api_util");

const router = express.Router();

const CLIENT_ID = require("../../frontend/src/components/discord_login/client").CLIENT_ID;
const CLIENT_SECRET = require("../../frontend/src/components/discord_login/client").CLIENT_SECRET;
const redirect = encodeURIComponent(
  `http://localhost:${process.env.PORT || 5000}/api/discord/callback`
);

router.get(
  "/callback",
  catchAsync(async (req, res) => {
    if (!req.query.code) throw new Error("NoCodeProvided");
    const code = req.query.code;
    const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await fetch(
      `https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${creds}`
        }
      }
    );
    const json = await response.json();
    res.redirect(`http://localhost:3000/#/auth?token=${json.access_token}`);
  })
);

module.exports = router;