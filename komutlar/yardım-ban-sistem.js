const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setAuthor("Mizzy Ban Menüsüne Hoşgeldiniz")
  .setDescription(`
  
Hey ! <@${message.author.id}> Beni Kullandığın İçin Teşekkür Ederim !

• __Komutlar__

**-ban-yetkili-rol** 
Ban Yetkilisi Ayarlarsınız

**-ban-log**
Ban Log Ayarlarsınız

**-ban**
Ban Atmanızı Sağlar

`)
    .setImage("")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bansistemi","bansystem","ban-system"],
  permLevel: 0
};
exports.help = {
  name: "ban-sistemi",
  description: "",
  usage: ""
};