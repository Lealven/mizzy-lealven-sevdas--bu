const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setDescription(`
  
Hey ! <@${message.author.id}> Destek Ekibine Bildirdim Sana Dönmelerini Bekle.

`)
    .setImage("https://cdn.discordapp.com/attachments/755851188666105956/772768410949124106/giphy.gif")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dyardım"],
  permLevel: 0
};
exports.help = {
  name: "destek",
  description: "",
  usage: ""
};