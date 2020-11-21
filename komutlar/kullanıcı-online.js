const Discord = require('discord.js');
exports.run = (client, message, args) => {

let devtr = args[0]
if(!devtr) return message.channel.send(`Sunucu ID Belirtmen Gerek`)
const xfalcon = new Discord.MessageEmbed()
    .setAuthor("Sunucu Online")
    .setImage(`https://discordapp.com/api/guilds/${devtr}/embed.png`)
message.channel.send(xfalcon)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [], 
    permLevel: 0,
};

exports.help = {
    name: 'online',
    usage: 'DevTR',
    description: 'DevTR',
};