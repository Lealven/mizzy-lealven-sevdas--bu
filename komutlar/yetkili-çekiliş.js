const { MessageEmbed } = require('discord.js')
const ms = require('ms');

exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.`);

if(!args[0]) return message.channel.send(`Bir Zaman Belirtmelisin.`)
        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return message.channel.send(` Yanlış Zaman Girdiniz.`)
        if(isNaN(args[0][0])) return message.channel.send(` Bu Bir Rakam Değil.`)
        let channel = message.mentions.channels.first()
        if(!channel) return message.channel.send(` Bir Kanal Etiketlemelisin.`)
        let prize = args.slice(2).join(" ")
        if(!prize) return message.channel.send(` Bir Ödül Belirtmelisin.`)
        message.channel.send(` Çekiliş ${channel} Kanalında Başarıyla Başladı.`)
        let Embed = new MessageEmbed()
        .setTitle(`Çekiliş`)
        .setDescription(`Çekilişi ${message.author} Adlı Kullanıcı Yapıyor.\n\nÖdülü İse **${prize}** Olarak Belirledi.\n\nKatılmak İçin :tada: Tepkisine Tıklayınız.`)
        .setFooter(`Bitiş Süresi`)
        .setTimestamp(Date.now()+ms(args[0]))
        .setColor(`RANDOM`)
        let m = await channel.send(Embed)
        m.react("🎉")///ve çekilişşşş
        setTimeout(() => {
            if(m.reactions.cache.get("🎉").count<=1){
                message.channel.send(`Çekilişe Katılan Kişi Sayısı: ${m.reactions.cache.get("🎉").count}`)
                return message.channel.send(`Çekilişe Yeterli Kişi Katılmadı.`)
            }
            
            let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()
            channel.send(`**${prize}** Çekilişinin Kazananı: ${winner}`)
        }, ms(args[0]));
    
        
    }
exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: ['raffle'],
	permLevel: 0,
}

exports.help = {
	name: 'çekiliş',
	description: '',
	usage: ''
}