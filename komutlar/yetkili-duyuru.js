const Discord = require('discord.js');

 exports.run = (client, message, args) => {

if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(`Bu Komutu Kullanailmek İçin \`MANAGE_GUILD\` Yetkisine Sahip Olmalısın !`);
   message.delete();
   let soru = args.join(' ');
   if (!soru) return message.channel.send("Lütfen Duyurucağın Cümleyi Gir !")

     message.channel.send(new Discord.MessageEmbed()
  .setColor("BLUE")
.setFooter(`Bu Duyuru ${message.author.tag} Tarafından Yapılıyor`)
.setDescription(soru)).then(function(message) {
message.react('🔔');
message.react('');
});
 };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: [],
      permLevel: 2
};

exports.help = {
  name: 'duyuru',
};