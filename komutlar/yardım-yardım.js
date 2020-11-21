const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args) => {


  
  
  
  
  const pinkcode = new Discord.MessageEmbed()
  .setAuthor("Mizzy Yardım Menüsü")
  .setColor('#000001')
  .setDescription(`
  





Hey  <@${message.author.id}> Beni Kullanırken \`\`\@Mizzy\`\`\ Rolünü Yukarda Tutmayı Unutma.

\`\`\-destek\`\`\ Yazarak Destek Alabilirsiniz.

• __Komutlar__

**-moderasyon**

> Sayaç,Otorol,Otocevap \`\`\&\`\`\ Ban Sistemi
> Mute Sistemi,Yavaşmod

**-yetkili**

> Ban,Mute,Çekiliş,Duyuru \`\`\&\`\`\ Oylama 
> İd,İdban,Unban,Yaz,Kick

**-kullanıcı**

> Saat,Korona,Afk,Prefix \`\`\&\`\`\ avatar
> Say,Bot Bilgi,Destek

**-koruma**

> Reklam Engel,Küfür Engel \`\`\&\`\`\ Kanal Koruma
> Rol Koruma,Banlimit,Kicklimit

**-eğlence**

> Espri,Wasted,Fbi \`\`\&\`\`\ Ekleniyor
> Ekleniyor,Ekleniyor

Beni Sunucuna Eklemek Ve Destek Sunucuma Gitmek İçin \`\`\-davet\`\`\ Yazman Yeterli.

`)
    .setImage("https://cdn.discordapp.com/attachments/755851188666105956/779110881593393192/standard_1.gif")
    message.react("🔘")
 message.channel.send(pinkcode)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help","helping"],
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: "",
  usage: ""
};