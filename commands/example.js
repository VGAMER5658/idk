const jsh = require("discordjsh");
const { Color } = require("../config");
const { ContextMenuInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    devOnly: true, //This toggles if it should be in your test server
    data: new jsh.commandBuilder()
    .setName("example")
    .setDescription(`An example command!`)
    .setDefaultPermission(true), //If you set this to false nobody will be able to use this context menu. (You can remove this)
    /**
     * @param {ContextMenuInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client){
        await interaction.reply({
            embeds: [
                new MessageEmbed()
                .setTitle(`Hey there! 👋`)
                .setDescription(`You can change the text here to whatever you want! This is just an example of what a context menu command should look like.`)
                .setColor(Color)
                .setFooter({ text: "Slash Command" })
            ],
            ephemeral: true
        });
    }
}