const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setAuthor("Mizzy Moderasyon Menüsü")
  .setDescription(`
  
Hey ! <@${message.author.id}> Moderasyon Komutlarına Hoşgeldin !

-say Yazarak Sunucunun İstatistiklerine Bakabilirsin

• __Komutlar__

**-sa-as** 
Biri Selam Verdiğinde Selamını Alır

**-otorol**
OtoRol Ayarlarsınız

**-ban-sistemi** 
Ban Sistemini Ayarlarsınız

**-modlog** 
Log Kanalı Ayarlarsınız

**-mute-sistemi**
Mute Sistemini Ayarlarsınız

**-sayaç-ayarla**
Sayaç Ayarlarsınız

**-yavaşmod**
Bulunduğunuz Kanalda Yavaşmod Ayarlarsınız

**-otocevap**
Yakında

`)
    .setImage("")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mod"],
  permLevel: 0
};
exports.help = {
  name: "moderasyon",
  description: "",
  usage: ""
};