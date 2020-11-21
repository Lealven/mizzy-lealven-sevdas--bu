const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Mizzy Başarılı Bir Şekilde UpTime Edildi.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------KOMUTLAR---------------------------------\\


//----------------7/24------------//
const kontrol = require("node-fetch");
setInterval(() => {
  kontrol("https://knigh-of-deard.glitch.me");
  kontrol("https://knigh-of-deard.glitch.me");
  kontrol("https://mizzybot.glitch.me");
  console.log(`Mizzy Başarılı Bir Şekilde Uptime Edildi`);
}, 10000); //1 Dakika

//-----------------------------------------------//




//-------------------------OTO-ROL------------------------//

client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`otoRK_${member.guild.id}`);
  let rol = await db.fetch(`otoRL_${member.guild.id}`);
  let mesaj = db.fetch(`otoRM_${member.guild.id}`);
  if (!rol) return;

  if (!mesaj) {
    client.channels.cache
      .get(kanal)
      .send(
        "`" +
          member.user.username +
          "` HoşGeldin Otomatik Rolün Verildi Seninle Beraber `" +
          member.guild.memberCount +
          "` Kişiyiz. "
      );
    return member.roles.add(rol);
  }

  if (mesaj) {
    var mesajs = mesaj
      .replace("-uye-", `${member.user}`)
      .replace("-uyetag-", `${member.user.tag}`)
      .replace("-rol-", `${member.guild.roles.cache.get(rol).name}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.cache.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.cache.size}`);
    member.roles.add(rol);
    return client.channels.cache.get(kanal).send(mesajs);
  }
});

//---------------------------------------OTO-ROL----------------------------//

//-------------------------------SA-AS-----------------------//

client.on("message", async msg => {
   if(!msg.guild) return
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapalii') return;
  if (saas == 'aciki') {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send(`Aleyküm Selam Hoşgeldin. ${msg.author} `);
    await msg.react('🇦');
    await msg.react('🇸');
  }
  }
});


//-------------------------------SA-AS-----------------------//


//---------------------------------MOD-LOG-------------------------//

client.on('messageDelete', async message   => { // mod-log
      let modlogs = db.get(`log_${message.guild.id}`)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .setTitle("MESAJ SİLİNDİ")
.setDescription(` <@!${message.author.id}> adlı kullanıcı tarafından <#${message.channel.id}> kanalına gönderilen mesaj silindi!\n\nSilinen Mesaj: **${message.content}**`)
  .setFooter("Mizzy Bot | Log Sistemi")
  modlogkanal.send(embed);
  })

client.on('guildBanAdd', async message  => {
      let modlogs = db.get(`log_${message.guild.id}`)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")

    .setDescription(` Üye Sunucudan Yasaklandı! \n<@!${message.user.id}>, ${message.user.tag}`)
        .setThumbnail(message.user.avatarURL())
  .setFooter("Mizzy Bot | Log Sistemi")
  modlogkanal.send(embed);
  })
client.on('channelCreate', async channel  => {
      let modlogs = db.get(`log_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.MessageEmbed()
                    .setColor('#ffd100')
                .setDescription(` ${channel.name} adlı metin kanalı oluşturuldu.`)
                .setFooter(`Mizzy Bot | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            };
            if (channel.type === "voice") {
                let embed = new Discord.MessageEmbed()
                .setColor('#ffd100')
.setTitle("SES KANALI OLUŞTURULDU")
                .setDescription(` ${channel.name} adlı ses kanalı oluşturuldu!`)
                .setFooter(`Mizzy Bot | Log Sistemi Kanal ID: ${channel.id}`)

                modlogkanal.send({embed});
            }
        
    })
client.on('channelDelete', async channel  => {
      let modlogs = db.get(`log_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.MessageEmbed()
                    .setColor('#ffd100')
                .setDescription(` ${channel.name} adlı metin kanalı silini!`)
                .setFooter(`Mizzy Bot | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            };
            if (channel.type === "voice") {
                let embed = new Discord.MessageEmbed()
                .setColor('#ffd100')
.setTitle("SES KANALI SİLİNDİ")
                .setDescription(` ${channel.name} adlı ses kanalı silindi`)
            .setFooter(`Mizzy Bot | Log Sistemi  Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            }
    })
client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;
  var user = oldMsg.author;
  if (db.has(`log_${oldMsg.guild.id}`) === false) return;
  var kanal = oldMsg.guild.channels.get(db.fetch(`log_${oldMsg.guild.id}`).replace("<#", "").replace(">", ""))
  if (!kanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .addField("Kullanıcı", oldMsg.author.tag, true)
  .addField("Eski Mesaj",`  ${oldMsg.content}  `)
  .addField("Yeni Mesaj", `${newMsg.content}`)
  .setThumbnail(oldMsg.author.avatarURL())
  kanal.send(embed);  
        
    })

//-------------------------------MOD-LOG----------------------------//



//------------------SAYAÇ-SİSTEMİ-------------------------//


client.on("guildMemberAdd", async member => {
  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!kanal) return;
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacHG_${member.guild.id}`);
  ///....

  ///....
  if (!mesaj) {
    return client.channels.cache
      .get(kanal)
      .send(
        "" +
          member.user.username +
          " Adlı Kullanıcı Aramıza Katıldı `" +
          sayaç + 
          "` Kişi Olmamıza `" +
          sonuç +
          "` Kişi Kaldı `" +
          member.guild.memberCount +
          "` Kişiyiz. "
      );
  }

  if (member.guild.memberCount == sayaç) {
    return client.channels
      .get(kanal)
      .send(
        `**Sayaç Sıfırlandı !** \`${member.guild.memberCount}\` **Kişiyiz!**`
      );
    await db.delete(`sayacK_${member.guild.id}`);
    await db.delete(`sayacS_${member.guild.id}`);
    await db.delete(`sayacHG_${member.guild.id}`);
    await db.delete(`sayacBB_${member.guild.id}`);
  }
  if (mesaj) {
    const mesaj31 = mesaj
      .replace("-uyetag-", `${member.user.tag}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.size}`)
      .replace("-kalanuye-", `${sonuç}`)
      .replace("-hedefuye-", `${sayaç}`);
    return client.channels.cache.get(kanal).send(mesaj31);
  }
});

client.on("guildMemberRemove", async member => {
  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacBB_${member.guild.id}`);
  if (!kanal) return;
  if (!sayaç) return;
  ///....

  if (!mesaj) {
    return client.channels.cache
      .get(kanal)
      .send(
        "" +
          member.user.username +
          " Adlı Kullanıcı Aramızdan Ayrıldı`" +
          sayaç +
          "` Kişi Olmamıza `" +
          sonuç +
          "` Kişi Kaldı `" +
          member.guild.memberCount +
          "` Kişiyiz. "
      );
  }

  if (mesaj) {
    const mesaj31 = mesaj
      .replace("-uye-", `${member.user.tag}`)
      .replace("-server-", `${member.guild.name}`)
      .replace("-uyesayisi-", `${member.guild.memberCount}`)
      .replace(
        "-botsayisi-",
        `${member.guild.members.filter(m => m.user.bot).size}`
      )
      .replace("-bolge-", `${member.guild.region}`)
      .replace("-kanalsayisi-", `${member.guild.channels.cache.size}`)
      .replace("-kalanuye-", `${sonuç}`)
      .replace("-hedefuye-", `${sayaç}`);
    return client.channels.cache.get(kanal).send(mesaj31);
  }
});


//------------------SAYAÇ-SİSTEMİ-------------------------//






//----------------------DAVET-SİSTEMİ----------------//


//-----------DAVET-İNVİTE-------------------//
const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberRemove", async member => {
  let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
  if (!kanal) return;
  let veri = await db.fetch(`rol1_${member.guild.id}`);
  let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
  let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
  let veri2 = await db.fetch(`rol2_${member.guild.id}`);
  let d = await db.fetch(`bunudavet_${member.id}`);
  const sa = client.users.cache.get(d);
  const sasad = member.guild.members.get(d);
  let sayı2 = await db.fetch(`davet_${d}_${member.guild.id}`);
  db.add(`davet_${d}_${member.guild.id}`, -1);

  if (!d) {
    const aa = new Discord.MessageEmbed()
      .setColor("#d20b0d")
      .setDescription(
        `\`\`${member.user.tag}\`\` **Adlı Kullanıcı Aramızdan Ayrıldı\n Davet Eden** \`\`Bulunamadı.\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL());
    client.channels.get(kanal).send(aa);
    return;
  } else {
    const aa = new Discord.MessageEmbed()
      .setColor("#d20b0d")
      .setDescription(
        `\`\`${member.user.tag}\`\` **Adlı Kullanıcı Aramızdan Ayrıldı\n Davet Eden** \`\`${sa.tag}\`\``
      )
      .setFooter(client.user.username, client.user.avatarURL());
    client.channels.get(kanal).send(aa);

    if (!veri) return;

    if (sasad.roles.has(veri)) {
      if (sayı2 <= veri12) {
        sasad.roles.remove(veri);
        return;
      }
    }
    if (sasad.roles.has(veri2)) {
      if (!veri2) return;
      if (sayı2 <= veri21) {
        sasad.roles.remove(veri2);
        return;
      }
    }
  }
});

client.on("guildMemberAdd", async member => {
  member.guild.fetchInvites().then(async guildInvites => {
    let veri = await db.fetch(`rol1_${member.guild.id}`);
    let veri12 = await db.fetch(`roldavet1_${member.guild.id}`);
    let veri21 = await db.fetch(`roldavet2_${member.guild.id}`);
    let veri2 = await db.fetch(`rol2_${member.guild.id}`);
    let kanal = await db.fetch(`davetkanal_${member.guild.id}`);
    if (!kanal) return;
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const sasad = member.guild.members.get(invite.inviter.id);
    const davetçi = client.users.cache.get(invite.inviter.id);

    db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
    db.set(`bunudavet_${member.id}`, invite.inviter.id);
    let sayı = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);

    let sayı2;
    if (!sayı) {
      sayı2 = 0;
    } else {
      sayı2 = await db.fetch(`davet_${invite.inviter.id}_${member.guild.id}`);
    }

    const aa = new Discord.MessageEmbed()
      .setColor("#ffd100")
      .setDescription(
        `\`\`${member.user.tag}\`\` **Adlı Kullanıcı Sunucuya Katıldı\n Davet Eden** \`\`${davetçi.tag}\`\`\n**Toplam \`\`${sayı2}\`\` Daveti Oldu.**`
      )
      .setFooter(client.user.username, client.user.avatarURL());
    client.channels.get(kanal).send(aa);
    if (!veri) return;

    if (!sasad.roles.has(veri)) {
      if (sayı2 => veri12) {
        sasad.roles.add(veri);
        return;
      }
    } else {
      if (!veri2) return;
      if (sayı2 => veri21) {
        sasad.roles.add(veri2);
        return;
      }
    }
  });
});
 

//--------------DAVET-İNVİTE-------------------//


//----------------------DAVET-SİSTEMİ----------------//




//----------------SESTE-TUTMALAR-------------------//


//--------------------MİZZY-SUPPORT----------------------//

client.on("ready", () => {
client.channels.cache.get("777997681368891432").join()
})

//--------------------MİZZY-SUPPORT----------------------//

//---------------WANLEA-SHARE------------------//


client.on("ready", () => {
client.channels.cache.get("777279534079934475").join()
})

//---------------WANLEA-SHARE------------------//

//----------------SESTE-TUTMALAR-------------------//





//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//

client.on("message", async message => {

  if (message.author.bot) return;

  if (!message.guild) return;

  let prefix = db.get(`prefix_${message.guild.id}`);

  if (prefix === null) prefix = prefix;



  if (!message.content.startsWith(prefix)) return;



  if (!message.member)

    message.member = await message.guild.fetchMember(message);



  const args = message.content

    .slice(prefix.length)

    .trim()

    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  
  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);

});

//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//


//----------------------koruma-sistemi----------------------//

  //-----------KÜFÜR-ENGEL----------------//
  client.on("message", async msg => {
    if (msg.author.bot) return;
    if (msg.channel.type === "dm") return;
  
    let i = await db.fetch(`küfürFiltre_${msg.guild.id}`);
    if (i == "acik") {
      const küfür = [
        "amcık",
        "yarrak",
        "oç",
        "hasiktir",
        "hassiktir",
        "amcık",
        "skrm",
        "sekter",
        "sikik",
        "orospu",
        "piç",
        "sikerim",
        "sikik",
        "fahise",
        "yavş",
        "yavşak",
        "yavşaktır",
        "yavuşak",
        "yılışık",
        "yilisik",
        "yogurtlayam",
        "yoğurtlayam",
        "yrrak",
        "zibidi",
        "zigsin",
        "zikeyim",
        "zikiiim",
        "zikiim",
        "zikik",
        "zikim",
        "amına",
        "pezevenk",
        "yavşak",
        "ananı",
        "anandır",
        "orospu",
        "evladı",
        "göt",
        "amq",
        "pipi",
        "sokuk",
        "yarak",
        "bacını",
        "karını",
        "amk",
        "aq",
        "mk",
        "anaskm"
      ];
      if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
        try {
          if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) {
            msg.delete();
            let embed = new Discord.MessageEmbed()
              .setColor(0xffa300)
              .setFooter("", client.user.avatarURL())
              .setAuthor(
                msg.guild.owner.user.username,
                msg.guild.owner.user.avatarURL()
              )
              .setDescription(
                "" +
                  `**${msg.guild.name}**` +
                  " Adlı Sunucunuzda Küfür Yakaladım."
              )
              .addField(
                "Küfür Eden Kişi",
                "Kullanıcı: " + msg.author.tag + "\nID: " + msg.author.id,
                true
              )
              .addField("Engellenen mesaj", msg.content, true)
              .setTimestamp();
            msg.guild.owner.user.send(embed);
            return msg.channel
              .send(
                `${msg.author}, Bu Sunucuda Küfür Edilmesini Engelliyorum, Senin Mesajını Özelden Kurucumuza Gönderdim.`
              )
              .then(msg => msg.delete(25000));
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    if (!i) return;
  });//-----------KÜFÜR-ENGEL------------------//

//--------------REKLAM-ENGEL----------------//

client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let i = await db.fetch(`reklamFiltre_${msg.guild.id}`);
  if (i == "acik") {
    const reklam = [
      "discord.app",
      "discord.gg",
      ".ml",
      "discordapp",
      "discordgg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          msg.delete();
          let embed = new Discord.MessageEmbed()
            .setColor(0xffa300)
            .setFooter(
              "Reklam Engellendi.",
              client.user.avatarURL()
            )
            .setAuthor(
              msg.guild.owner.user.username,
              msg.guild.owner.user.avatarURL()
            )
            .setDescription(
              "" +
                `**${msg.guild.name}**` +
                " Adlı Sunucuda Reklam Yakaladım."
            )
            .addField(
              "Reklamı yapan kişi",
              "Kullanıcı: " + msg.author.tag + "\nID: " + msg.author.id,
              true
            )
            .addField("Engellenen mesaj", msg.content, true)
            .setTimestamp();
          msg.guild.owner.user.send(embed);
          return msg.channel
            .send(`${msg.author.tag}, Bu Sunucuda Reklamı Engelliyorum.`)
            .then(msg => msg.delete(25000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;

});//----------------REKLAM-ENGEL--------------//





//---------------ROL-KORUMA-------------------//
client.on("roleDelete", async(role , channel , message , guild) => {
  let rolkoruma = await db.fetch(`rolk_${role.guild.id}`);
    if (rolkoruma == "acik") {
  role.guild.roles.create({name: role.name, color: role.color,  permissions: role.permissions}) 
        role.guild.owner.send(` **${role.name}** Adlı Rol Silindi. Fakat Rol Koruma Sistemim Açık Olduğu İçin Geri Yükledim.`)

  
}
})//-----------ROL-KORUMA-------------//

//----------------------koruma-sistemi----------------------//








