const Discord = require(`discord.js`)

exports.run = async(client, message)=> {
  
  let user = message.mentions.users.first() || message.author
  if(user){
    
const embed = new Discord.MessageEmbed()
.setAuthor(``)
.setImage(user.displayAvatarURL({dynamic:true})) 
.setFooter(``)
message.channel.send(embed)
 } else {
  const embed = new Discord.MessageEmbed()
.setAuthor(`` , message.author.avatarURL )
.setImage(message.author.avatarURL({dynamic:true}))
.setFooter(``)
message.channel.send(embed)
 }
};

exports.conf = {
    enabled:false,
    guildOnly: false,
    aliases: ["av","avatarım"],
    permLevel: 0
}

exports.help = {
    name: 'avatar',

}