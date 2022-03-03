//Ping handler (Works without message intent)
const { Events } = require("discordjsh"); //Imports events
const Discord = require("discord.js");
const { Color } = require("../config");

module.exports = {
    name: Events.messageCreate,
    /**
     * @param {Discord.Message} message
     * @param {Discord.Client} client
     */
    async execute(message, client){
        if(!message?.content || message?.content == null) return;
        if(message.author.bot) return;
        if(message.mentions.has(client.user.id)){
            return message.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setColor(Color)
                    .setAuthor({ name: message.author.username, iconURL: message.author.displayAvatarURL() })
                    .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL() })
                    .setDescription(`Hey there ${message.author}! 👋\n\nYou can change the text here!`)
                    .setTitle(`Hey ${message.author.username}!`)
                ]
            });
        }
    }
}