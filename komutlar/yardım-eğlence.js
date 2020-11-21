const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setAuthor("Mizzy Eğlence Menüsü")
  .setDescription(`
  
Hey ! <@${message.author.id}> Eğlence Komutlarına Hoşgeldin. 

-destek Yazarak Destek Alabilirsiniz

• __Komutlar__

**-espri** 
Mizzy Sizi Güldürmek İçin Espri Yapar

**-fbi**
Fbi Basar

**-balıktut**
Balık Tutarsınız

**-fal**
Falınızı Gösterir (Tamamen Kurgudur)

**-ara155**
Polis Çağırırsınız 

**-kaçcm**
Malafatınızın Boyunu Ölçer

**-kralol**
Kral Olursunuz

**-aduket**
İstediğiniz Kişiye Aduket Çekersiniz

**-tokat**
İstediğiniz Kişiye Tokat Atarsınız

`)
    .setImage("")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fun"],
  permLevel: 0
};
exports.help = {
  name: "eğlence",
  description: "",
  usage: ""
};