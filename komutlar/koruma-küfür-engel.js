const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`Bu Komutu Kullanabilmek İçin "Sunucuyu Yönet" Yetkisine Sahip Olman Gerek.`)
  if (!args[0]) return message.channel.send(`Küfür Filtresini Ayarlamak İçin \`m!küfür aç\` Yazabilirsiniz.                                                                Küfür Filtresini Kapatmak İçin \`m!küfür kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`Küfür Filtresini Ayarlamak İçin \`m!küfür-engel aç\` | Kapatmak İstiyorsanız \`m!küfür kapat\` Yazabilirsiniz`)

    if (args[0] == 'aç') {
    db.set(`küfürFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`küfürFiltre_${message.guild.id}`)
  message.channel.send(`Küfür Filtresi Başarıyla Ayarlandı.`)    
     
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`küfürFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`Küfür Filtresini Açtığına Emin Misin ?`)
    
    
    db.delete(`küfürFiltre_${message.guild.id}`)
    
    message.channel.send(`Küfür Filtresi Başarıyla Kapatıldı.`)
  }
 
};


exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['küfür', 'küfür-filtresi', 'küfürfiltresi', 'küfür-filtre', 'küfürfiltre', 'küfürengel', 'küfür-engel'],
 permLevel: 3
};

exports.help = {
 name: 'küfür-engel',
 description: 'küfür',
 usage: 'gkanal'
};