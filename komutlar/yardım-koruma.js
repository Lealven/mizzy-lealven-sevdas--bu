const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setAuthor("Mizzy Koruma Menüsüne Hoşgeldiniz")
  .setDescription(`
  
Hey ! <@${message.author.id}> Beni Kullandığın İçin Teşekkür Ederim !

-destek Yazarak Destek Alabilirsiniz

• __Komutlar__

**-küfür aç** 
Küfür Filtresini Aktif Edersiniz

**-reklam aç**
Reklam Filtresini Aktif Edersiniz

**-kanal-koruma**
Kanal Koruma Sistemini Aktif Edersiniz

**-bot-koruma**
Sunucunuza Eklenen Botları Güvenlik İçin Atar

**-banlimit**
Sunucunun Güvenliği Açısından Banlimiti Ayarlarsınız

**-kicklimit**
Sunucunun Güvenliği Açısından Kicklimiti Ayarlarsınız

`)
    .setImage("")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["protection"],
  permLevel: 0
};
exports.help = {
  name: "koruma",
  description: "",
  usage: ""
};