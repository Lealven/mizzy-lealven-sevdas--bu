const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix
if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komutu kullanabilmek için ancak Sunucu Sahibi Olmalısınız!')
  if (!args[0]) {
    const codeworld0 = new Discord.MessageEmbed()
      .setColor("GOLD")
      .setTitle("Rol Koruma sistemi!")
      .setDescription(
        "Komutu Hatalı Kullandınız. > Komutun  Doğru Kullanımı : \`m!rol-koruma <aç/kapat>\`"
      );

    message.channel.send(codeworld0);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const codeworld1 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Mizzy Rol Koruma")
        .setDescription("**Rol Koruma Zaten Aktif Durumda.**");

      message.channel.send(codeworld1);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const codeworld2 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Mizzy Rol Koruma")
        .setDescription("**Rol koruma sistemi aktif edildi.**");

      message.channel.send(codeworld2);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const codeworld3 = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Mizzy Rol Koruma")
      .setDescription("**Rol Koruma Sistemi Kapatıldı.**");

    message.channel.send(codeworld3);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rol-k"],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = {
  name: "rol-koruma",
  description: "Rol koruma",
  usage: "rol-koruma"
}; 