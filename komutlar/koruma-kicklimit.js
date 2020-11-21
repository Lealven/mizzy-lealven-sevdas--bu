const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args, config) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** İznine Sahip Olmalısın !`);
  let prefix = ayarlar.prefix
  
     if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setDescription(`**Örnek Kullanım : m!kicklimit 3 **`).setColor("Black"));
    db.set(`banlimitayar_${message.guild.id}`, args[0]) 
 
  let deneme = args[0]
message.channel.send(new Discord.MessageEmbed().setDescription(`Kick Limit Başarıyla Aktifleştirildi.`).setColor("RANDOM"));
      }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel:0,
    kategori: 'moderasyon'
};

exports.help = {
    name: 'kicklimit',
    description: 'Sunucudaki BanYetkilisinin Max kaç kişiyi banlıyacağını ayarlar.',
    usage: 'kicklimit [komut].'
}