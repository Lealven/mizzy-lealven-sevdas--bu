const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setAuthor("Mizzy Davet Menüsü")
  .setDescription(`
  


> ★ [Rollü Davet İçin Tıkla](https://discord.com/oauth2/authorize?client_id=772574692417863721&scope=bot&permissions=8)

> ★ [Rolsüz Davet İçin Tıkla](https://discord.com/oauth2/authorize?client_id=772574692417863721&scope=bot&permissions=0)

> ★ [Destek Sunucusu İçin Tıkla](https://discord.gg/XrMFX7FrTW)

> ★ [WebSitesi İçin Tıkla](https://mizzybot.glitch.me)
`)
    .setImage("https://cdn.discordapp.com/attachments/755851188666105956/778725278116741140/boost.gif")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "davet",
  description: "",
  usage: ""
};