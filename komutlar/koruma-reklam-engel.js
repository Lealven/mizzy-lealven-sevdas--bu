const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Bu Komutu Kullanabilmek İçin "Sunucuyu Yönet" Yetkisine Sahip Olman Gerek.`)
  if (!args[0]) return message.channel.send(`Reklam Filtresini Ayarlamak İçin \`m!reklam aç\` Yazabilirsiniz. \nReklam Filtresini Kapatmak İçin \`m!reklam kapat\` Yazabilirsiniz. `)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`Reklam Filtresini Açmak İçin \`m!reklam aç\` Yazabilirsiniz. \n Reklam Filtresini Kapatmak İçin \`m!reklam kapat\` Yazabilirsiniz. `)

    if (args[0] == 'aç') {
    db.set(`reklamFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(`Reklam Filtresi Başarıyla Ayarlandı.`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`reklamFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`Reklam Filtresini Açtığına Emin Misin ?`)
    
    
    db.delete(`reklamFiltre_${message.guild.id}`)
    
    message.channel.send(`Reklam Filtresi Başarılı Bir Şekilde Kapatıldı.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['reklam', 'reklam-filtresi', 'reklamfiltresi', 'reklam-filtre', 'reklamfiltre'],
 permLevel: 3
};

exports.help = {
 name: 'reklam-engel',
 description: 'reklamm',
 usage: 'Reklam'
};