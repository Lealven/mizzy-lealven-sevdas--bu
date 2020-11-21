const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setDescription(`
  
「[WebSitesine Ulaşmak İçin Tıkla](https://mizzybot.glitch.me)」

`)
    .setImage("")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["website"],
  permLevel: 0
};
exports.help = {
  name: "site",
  description: "",
  usage: ""
};