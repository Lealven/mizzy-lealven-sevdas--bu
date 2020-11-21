const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setAuthor("Mizzy Mute Menüsü")
  .setDescription(`
  
Hey ! <@${message.author.id}> Beni Kullandığın İçin Teşekkür Ederim !

• __Komutlar__

**-mute-yetkili-rol** 
Mute Atabilecek Yetkiyi Ayarlarsınız

**-muteli-rol**
Mute Yiyecek Rolü Ayarlarsınız (Muteli Olacak Rol İzinlerden Chate Mesaj Yazmasını Engelleyeniz)

**-mute**
Mute Atmanızı Sağlar

`)
    .setImage("")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cmute-sistemi"],
  permLevel: 0
};
exports.help = {
  name: "mute-sistemi",
  description: "",
  usage: ""
};