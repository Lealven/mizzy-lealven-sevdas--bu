const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setAuthor("Mizzy Otorol Menüsü")
  .setDescription(`
  
Hey ! <@${message.author.id}> Beni Kullandığın İçin Teşekkür Ederim !

• __Komutlar__

**-otorol-ayarla** 
OtoRol Ayarlarsınız

**-otorol-kapat**
OtoRolü Kapatırsınız

**-otorol-mesaj**
OtoRol Mesajını Ayarlarsınız

**-otorol-mesaj-sıfırla**
OtoRol Mesajını Sıfırlarsınız

`)
    .setImage("")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oto-rol"],
  permLevel: 0
};
exports.help = {
  name: "otorol",
  description: "",
  usage: ""
};