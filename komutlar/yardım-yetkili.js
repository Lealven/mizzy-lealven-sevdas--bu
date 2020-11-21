const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setAuthor("Mizzy Yetkili Menüsü")
  .setDescription(`
  
Hey ! <@${message.author.id}> Yetkili Komutlarına Hoşgeldin ! 

-destek Yazarak Destek Alabilirsiniz

• __Komutlar__

**-ban** 
Üyeleri Banlamanızı Sağlar

**-kick**
Üyeleri Atmanızı Sağlar

**-oylama**
Oylama Yapmanızı Sağlar

**-duyuru**
Duyuru Yapmanızı Sağlar

**-çekiliş**
Çekiliş Yapmanızı Sağlar

**-id**
İstediğiniz Kişinin İd"Sine Bakmanızı Sağlar

**-rol-ver**
İstediğiniz Kişiye Rol Verirsiniz

**-rol-al**
istediğiniz Kişiden İstediğiniz Rolü Alırsınız

**-yaz**
Bota İstediğiniz Şeyi Yazdırırsınız

**-bansay**
Sunucuda Kaç Kişinin Banlandığını Gösterir

**-reklam-taraması**
Sunucunuzda Durumunda Reklam Bulunduran Varsa Size Bildirir


`)
    .setImage("")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "yetkili",
  description: "",
  usage: ""
};