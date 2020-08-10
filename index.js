const Discord = require("discord.js")
const client = new Discord.Client()
const config = require('./config.json')
const prefix = config.prefix


client.on("ready", () => {
    console.log("bot is up and running")

})

client.on("message", async message => {
    if (message.author.bot)  return;
    if(message.content.indexOf(prefix) !== 0) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === "$dmall") {
        

        if(message.author.id !== "PUT YOUR USERID HERE")
        return message.channel.send("**No perms nigga, contact yudo#1337**")

        let text = message.content.slice(`${prefix}$dmall`.length);
        message.guild.members.cache.forEach(member => {
            if(member.id != bot.user.id && !member.user.bot) member.send(text) 
        })
    }
})


client.login(config.token)
