const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
});
server.listen(3000);

const Discord = require("discord.js");
const {
  config
} = require("dotenv");

const client = new Discord.Client();

const fs = require("fs");
let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));
const talkedRecently = new Set();

client.commands = new Discord.Collection;

const generalcommands = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const startingevents = require('./events/start.js');




// Register all the commands
for (const file of generalcommands){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}


config({
  path: __dirname + "./env"
});

client.once("ready", () => {


  startingevents.execute(client)

});

client.on("message", message => {

  if (message.author.bot) return;

  db[message.author.id].xp++;
  let userInfo = db[message.author.id];
  if (userInfo.xp > (userInfo.level * 0.9) * 10) {
    userInfo.level++
    userInfo.xp = 0
    message.reply(`GG!, You have leveled up to level ${db[message.author.id].level}`)

  fs.writeFile("./database.json", JSON.stringify(db), (x) => {
    if (x) console.error(x)
  });
  }

  if (message.channel.id === "762147921520492544") {
    message.react('✅').then(() => {
      message.react('❌')
    });
  }



  if (message.channel.id === "761980597857288203") {
    client.channels.cache.get('762218005711028264').send(`${message.content} \n ${message.author}`);

    message.reply("Thanks for the report, It has been fowarded to our staff team and we'll look into it soon.")
      .then(msg => {
        message.delete()
        msg.delete({
          timeout: 5000

        })
      });
  }

  if (!db[message.author.id]) db[message.author.id] = {
    xp: 0,
    level: 0
  };




  const args = message.content.slice(3).trim().split(' ');
  const command = args.shift().toLowerCase();



  if (message.content.startsWith("ql-")){
    if (command === "help") {
      client.commands.get('help').execute(message, args);
    }

    if (command === 'daily') {

      client.commands.get('daily').execute(message, talkedRecently, db);

    }

    if (command === "level") {
      client.commands.get('level').execute(message, db, userInfo);
    }
  }


  


});
client.login(process.env.TOKEN);
