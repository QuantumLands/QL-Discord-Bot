const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displayes help embed',
    execute(message, args) {
        if (!args.length) {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#e66767')
                .setTitle('Hey there! This is the official QuantumLands bot.')
                .setDescription('Do `ql-help (command)` for more info on the respective command')
                .setThumbnail(`https://cdn.discordapp.com/avatars/760020809090990090/0f77af3ddecada155d99eaabbedcd9f1.png?size=256`)
                .addFields({
                    name: '\u200B',
                    value: '\u200B'
                },{   name: 'Leveling',
                    value: 'Find below the commands for the Leveling System `(ql-help leveling)`'
                }, {
                    name: '`ql-daily`                 ',
                    value: 'Claim your daily xp!',
                    inline: true
                }, {
                    name: '`ql-level`',
                    value: 'An info card containg your level and how much xp for the next level',
                    inline: true
                }, {
                    name: '\u200B',
                    value: '\u200B'
                }, {  
                    name: 'Stats API',
                    value: 'Find below the commands for using our stats API.',
                }, {
                    name: '`ql-stats (player ign)`',
                    value: "Get your's or other's in- game player stats",
                    inline: true
                }, {     
                    name: '`ql-guild (guild name)`',
                    value: "Get a guild's stats",
                    inline: true
                }, { 
                    name: '\u200B',
                    value: '\u200B'  
                })
                .setTimestamp()
                .setFooter('This bot was made by HippoBaguette#0665 on discord.', `https://cdn.discordapp.com/avatars/760020809090990090/0f77af3ddecada155d99eaabbedcd9f1.png?size=256`);

            message.channel.send(exampleEmbed);
        } else if (args[0] === 'leveling') {
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#e66767')
                .setTitle('Hey there! This is the official QuantumLands bot.')
                .setDescription('Find below the commands on leveling')
                .setThumbnail(`https://cdn.discordapp.com/avatars/760020809090990090/0f77af3ddecada155d99eaabbedcd9f1.png?size=256`)
                .addFields({
                    name: '\u200B',
                    value: '\u200B'
                }, {
                    name: '`ql-daily`                 ',
                    value: 'Claim your daily xp!',
                    inline: true
                }, {
                    name: '`ql-level`',
                    value: 'An info card containg your level and how much xp for the next level',
                    inline: true
                }, {
                    name: '\u200B',
                    value: '\u200B'
                })
                .setTimestamp()
                .setFooter('This bot was made by HippoBaguette#0665 on discord.', `https://cdn.discordapp.com/avatars/760020809090990090/0f77af3ddecada155d99eaabbedcd9f1.png?size=256`);

            message.channel.send(exampleEmbed);
        }
    }
}