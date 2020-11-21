const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Mizzy İnvite Manager Menüsü',`
**-davet-kanal** : Davet Kanalı Belirlersiniz
**-davet-ekle** : Belirtilen Üyeye Davet Eklersiniz
**-davet-sil** : Seçilen Kullanıcının Davetlerini Silersiniz
**-davet-sıfırla** : Herkezin Davetini Sıfırlarsınız
**-davet-kanal-sıfırla** : Davet Kanalını Sıfırlarsınız
**-davetler** : Davetlerinizi Görürsünüz`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["geçicikapalı"], 
  permLevel: 0
};
exports.help = {
  name: 'kapalı'
};