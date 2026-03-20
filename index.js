const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const express = require("express");

const app = express();
app.get("/", (req,res)=>res.send("Bot running"));
app.listen(3000);

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on("ready", () => {
  console.log("Bot online");
});

client.on("messageCreate", async msg => {
  if (msg.author.bot) return;

  const args = msg.content.split(" ");

  if (args[0] === "!ip") {
    const res = await axios.get(`http://ip-api.com/json/${args[1]}`);
    msg.reply(res.data.country);
  }
});

client.login(process.env.TOKEN);
