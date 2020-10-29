const Discord = require('discord.js');

module.exports = {
  name: 'start',
  execute(client) {
    console.log("I'm online, YAY");

    client.user.setActivity("play.quantumlands.xyz | ql-help");
  }
}
