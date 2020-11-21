const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
    if (!args[0]) {
        return message.channel.send(` __Hey Bu Komutu Kullanmak İçin Bir Kullanıcının ID'sini Belirtmen Gerek!__`)
   }
   var sebeb = args.slice(1).join(" ");
   var seyfooo = args[0]
   var now = new Date()
   if (!sebeb) {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(seyfooo)) {
                   return message.channel.send(` **__Bu Kullanıcı Zaten Yasaklanmış.__**`)
               }
               message.guild.ban(seyfooo, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.users.fetch(member);
                       }
                       message.channel.send(`<@!${user.id}> **__Adlı Kullanıcı Banlandı__**`);
                   })
                   .catch(error => {
                       message.channel.send(` __Bir Hata Oluştu__`);
                       console.error(':x: Hata:', error);
                   });
           });
   } else {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(seyfooo)) {
                   return message.channel.send(`**__Bu Kullanıcı Zaten Yasaklanmış.__**`)
               }
               message.guild.ban(seyfooo, sebeb)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.users.fetch(member);
                       }
                       message.channel.send(`<@!${user.id}> **__Sunucudan Yasaklandı__**`);
                   })
                   .catch(error => {
                       message.channel.send(` Bir Hata Oluştu`);
                       console.error(' Hata:', error);
                   });
           });
   }
 
}
exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['force-ban'],
   permLevel: 0
 
};
 
exports.help = {
   name: 'idban',
   description: 'Oylama yapmanızı sağlar.',
   usage: 'idban <id>'
};
