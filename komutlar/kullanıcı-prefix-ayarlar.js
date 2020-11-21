const db = require("quick.db");

const {prefix} = require('../ayarlar.json')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) {

      return message.channel.send(

        "Prefix'i Değiştirmeniz İçin \`YÖNETİCİ\` Yetkisine Sahip Olmanız Lazım."

      );

    }



    if (!args[0]) {

      return message.channel.send("Lütfen Bir Prefix Giriniz.");

    }



    if (args[1]) {

      return message.channel.send("İkinci Bir Prefix Yapamazsın.");

    }



    if (args[0].length > 3) {

      return message.channel.send("3 Karakterden Uzun Bir Prefix Yapamazsın.");

    }



    if (args.join("") === prefix) {

      db.delete(`prefix_${message.guild.id}`);

      return await message.channel.send("Prefix Sıfırlandı.");

    }



    db.set(`prefix_${message.guild.id}`, args[0]);

    await message.channel.send(

      `Prefixi Değiştirildi, Yeni Prefix: \`${args[0]}\``

    );

  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "prefix",
  description: "Mizzy",
  usage: "prefix"
};