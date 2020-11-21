const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`
  
1-) Din, Dil, Irk Veya Cinsiyet Ayrımı İçeren Söylemler
2-) Siyasi ya da Dini Sohbetler Başlatmak ve İçinde Bulunmak
3-) Herhangi Bir Kimseyi Hedef Alan Hakaretlerde Bulunmak
4-) Her Türlü Satış ve Reklam İçerikli Paylaşımlar
5-) Flood, Spam, vb. Yapmak
6-) Kişisel Kavgaları Discord Sohbet Kanallarına Taşımak
7-) +18 İçerikli Paylaşımlar Yapmak
8-) Yazışma Kanallarını Amacı Dışında Kullanmak
9-) Kendi Odası Dışında Spoiler İçerikLi Paylaşımlar Yapmak
10-) Özel Karakter İçeren İsimler Kullanmak
11-) Oyun, Para, Vb. Dilenmek
12-) Olası Dolandırıcı Unsur Barındıran Ve Satış içerikli Discord Durum Mesajlarını Kullanmak
13-) Herhangi Bir Sebepten Dolayı Herhangi Bir Kişiyi Ya Da Topluluğu Hedefleyen Linç Girişimi
14-) Kural İhlali Yapan Kişi Ya Da Kişiler İle Tartışmaya Girmek

+-) Kurallara Uyun Aksi Takdirde Cezalındırılırsınız @everyone & @here

`)
    .setImage("")

 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rules"],
  permLevel: 0
};
exports.help = {
  name: "kurallar",
  description: "",
  usage: ""
};