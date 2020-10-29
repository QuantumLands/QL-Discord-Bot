module.exports = {
  name: 'daily',
  description: 'Daily xp bonus',
  execute(message, talkedRecently, db){
    if (talkedRecently.has(message.author.id)) {
      message.channel.send("Please wait 24 hours after the last time you executed this command");
      console.log(talkedRecently);
    } else {

      db[message.author.id].xp += (db[message.author.id].xp * 0.5 - 1);
      message.channel.send('You have succesfully claimed your daily XP. come back tommorow for more!');

      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 86400000);
    }
  }
}
