const jsh = require("discordjsh");
const { ContextMenuBuilder } = require("discord.js-util");
const { Color } = require("../config");
const { ContextMenuInteraction, Client, MessageEmbed } = require("discord.js");
const { createLinkButton } = require("../util");

module.exports = {
    devOnly: true, //This toggles if it should be in your test server
    data: new ContextMenuBuilder()
    .setName("Example")
    .setType("MESSAGE")
    .setDefaultPermission(true), //If you set this to false nobody will be able to use this context menu. (You can remove this)
    /**
     * @param {ContextMenuInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client){
        const Message = interaction.options.getMessage("message");


        await interaction.reply({
            embeds: [
                new MessageEmbed()
                .setTitle(`Hey there! 👋`)
                .setDescription(`You can change the text here to whatever you want! This is just an example of what a context menu command should look like.`)
                .setColor(Color)
                .setFooter({ text: "Context Menu" })
            ],
            components: [
                {
                    type: 1,
                    components: [
                        createLinkButton(Message.url, { text: "Jump to message.", emoji: "🔗" })
                    ]
                }
            ],
            ephemeral: true
        });
    }
}