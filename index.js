const {
  Client
} = require('discord.js-selfbot-v13');
const {
  joinVoiceChannel
} = require('@discordjs/voice');

const client = new Client({
  checkUpdate: false
});

client.login(process.env.token)
console.log(`logined!`);

client.on("ready", () => {
  joinVoiceChannel({
      channelId: "934474406552539197",//Seste Duracağı Kanal İd
      guildId: "904188905736253500",//Guild İd
      adapterCreator: client.guilds.cache.get("904188905736253500").voiceAdapterCreator,//Guild İd
  });
})