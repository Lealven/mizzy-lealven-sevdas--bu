const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Pingim Aşşada Yazmakta.",
              icon_url: ""
            },
			    "thumbnail": {
				 "url": ""
			},
            title: "",
            description: `Buyur Pingim ${client.ws.ping}ms`,
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "Mizzy Bot"
            }
          }
        });
	    message.react("🔔")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ms'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingini Gösterir !',
  usage: 'kontrol'
};