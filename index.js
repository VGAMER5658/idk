//You can remove the credit here since its open-source & has no license. But it would be nice if you kept it!
//  __  __           _        ____          _______         _   _                             _  _  ____   ___   ___    __  
// |  \/  |         | |      |  _ \        |__   __|       | | | |                          _| || ||___ \ / _ \ / _ \  / /  
// | \  / | __ _  __| | ___  | |_) |_   _     | |_   _ _ __| |_| | ___ _ __   __ ___      _|_  __  _|__) | (_) | | | |/ /_  
// | |\/| |/ _` |/ _` |/ _ \ |  _ <| | | |    | | | | | '__| __| |/ _ \ '_ \ / _` \ \ /\ / /_| || |_|__ < > _ <| | | | '_ \ 
// | |  | | (_| | (_| |  __/ | |_) | |_| |    | | |_| | |  | |_| |  __/ |_) | (_| |\ V  V /|_  __  _|__) | (_) | |_| | (_) |
// |_|  |_|\__,_|\__,_|\___| |____/ \__, |    |_|\__,_|_|   \__|_|\___| .__/ \__,_| \_/\_/   |_||_||____/ \___/ \___/ \___/ 
//                                   __/ |                            | |                                                   
//                                  |___/                             |_|                                                   
// ⚠️ NOTICES:
// ⚠️ The Discord.jsh docs can be found here: ~https://jsh.trtle.xyz/#/~ or https://jsh.slashr.xyz/#/
// ⚠️ The Discord.js docs can be found here: https://discord.js.org/#/docs

//Import all modules
const Discord = require("discord.js"); //Not really used in this code but handy.
const jsh = require("discordjsh"); //Discord JS (bot) handler
const config = require("./config.json"); //Your config options. You need to edit that.
const botConfig = require("./config"); //Your config options (e.g. Color). You can edit that.

//Set up client
const ClientBuilder = new jsh.Client({
    token: config.token, //Bot Token. You can get this @ https://discord.com/developers/applications
    clientID: config.clientID, //Bot Client ID. You can get this @ https://discord.com/developers/applications
    testGuildID: config.testGuildID //Your test guild ID. https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-
})
//This sets all the dirs for the bot.
.setCommandsDir() //Default is`./commands`
.setContextDir() //Default is `./context_menus`
.setEventsDir(); //Default is `./events`
//Creates the Discord.Client and returns it. This is where you can set your ClientOptions.
const client = ClientBuilder.create({
    intents: ["GUILDS"], //You can change the intents here or remove them. https://discordjs.guide/popular-topics/intents.html#gateway-intents
    partials: ["CHANNEL"], //You can optionally add partials. https://discordjs.guide/popular-topics/partials.html
    presence: {
        //⚠️ If your bot does not change status wait a few seconds and then start the program. 
        status: "online", //You can make your bot idle, dnd, online, or invisible/offline.
        activities: [{
            name: "Code Change",
            type: "WATCHING"
        }],
    },
    ws: {
        properties: {
            $browser: "Discord Android" //This adds the "Phone Status". (You can remove this)
        }
    }
});

//You can define client values here.
client.Color = botConfig.Color;
client.Config = botConfig;
//This is when the bot is ready. The bot is *fully* ready after 4s after this
client.on("ready", async () => {
    //You can remove this but use the invite to invite your bot to your test guild.
    console.log(`Invite me with: ${client.generateInvite({ scopes: ["applications.commands", "bot"], permissions: "ADMINISTRATOR", guild: config.testGuildID })}`)
});
