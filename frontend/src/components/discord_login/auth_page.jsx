import React from 'react';

const setDiscordAuthToken = () => {
  const accessToken = window.location.href.slice(35);

  async function asyncCall() {
    const response = await fetch(
      `https://discordapp.com/api/users/@me`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );

    const discordUserData = await response.json();
    localStorage.setItem("discordUserData", JSON.stringify(discordUserData));
    window.location.replace("http://localhost:3000/#/splash");
  }

  asyncCall();
}

const AuthPage = () => {
  setDiscordAuthToken();
  return (
    <div>
      <span>Currently logging you in</span>
    </div>
  );
}
export default AuthPage;