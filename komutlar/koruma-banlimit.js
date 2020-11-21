const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async(yashinu, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu Komut Sunucu Sahibine Özeldir !')
  if(args[0] === "0" || args[0] === "sıfırla") {
    await db.delete(`banlimit_${message.guild.id}`)
    message.reply('Ban Limit Özelliği Başarıyla Devre Dışı Bırakıldı.')
    return
  }
  if(!args[0] || isNaN(args[0])) return message.channel.send(`Ban Limit Sayısını Belirtmelisin. (Özelliği Devre Dışı Bırakmak İsterseniz **0** Yazmalısınız)`);
  await db.set(`banlimit_${message.guild.id}`, args[0])
  message.reply(`Sunucunun Ban Limitini Başarıyla **${args[0]}** Olarak Ayarladım.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'banlimit',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};