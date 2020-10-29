module.exports = {
  name: 'daily',
  description: 'Daily xp bonus',
  execute(message, talkedRecently, db){
    if (talkedRecently.has(message.author.id)) {
      message.channel.send("Please wait 24 hours after the last time you sent this command");
      console.log(talkedRecently);
    } else {

      db[message.author.id].xp += (db[message.author.id].xp * 0.05);


      message.channel.send('Claimed!');

      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 86400000);
    }
  }
}
