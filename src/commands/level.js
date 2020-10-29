const Discord = require('discord.js');

module.exports = {
  name: "level",
  description: "level embed",
  execute(message, db, userInfo){
    const levelEmbed = new Discord.MessageEmbed()
      .setColor('#e66767')
      .setTitle(`Your level is: ${db[message.author.id].level}`)
      .setDescription(`You need ${((userInfo.level * 0.9)*10)-userInfo.xp} more xp to advance to the next level \n (${userInfo.xp} / ${(userInfo.level * 0.9)*10})`)
      .setThumbnail(`https://cdn.discordapp.com/avatars/760020809090990090/0f77af3ddecada155d99eaabbedcd9f1.png?size=256`)
      .setFooter('play.quantumlands.xyz', `https://cdn.discordapp.com/avatars/760020809090990090/0f77af3ddecada155d99eaabbedcd9f1.png?size=256`);

    message.channel.send(levelEmbed);
  }
}
