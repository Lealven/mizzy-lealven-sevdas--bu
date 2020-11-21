const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setAuthor("Mizzy Kullanıcı Menüsüne Hoşgeldiniz ")
  .setDescription(`
  
Hey ! <@${message.author.id}> Beni Kullandığın İçin Teşekkür Ederim !

-destek Yazarak Destek Alabilirsiniz

• __Komutlar__

**-say** 
Sunucunun İstatistiklerine Göz Atabilirsin

**-afk**
Afk Moduna Girebilirsin

**-avatar**
Kendi Avatarına Veya Başkalarının Avatarına Göz Atabilirsin

**-saat**
Türkiyenin Saatini Gösterir

**-prefix**
Kendinize Özel Prefix Ayarlayabilirsiniz

**-online**
İstediğiniz Sunucunun Kaç Online I Olduğuna Bakarsınız

**-osmanlı**
Osmanlı İmparatorluğu Bilgi


`)
    .setImage("")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["user"],
  permLevel: 0
};
exports.help = {
  name: "kullanıcı",
  description: "",
  usage: ""
};