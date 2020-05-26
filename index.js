//https://discord.com/oauth2/authorize?client_id=714522982906855475&scope=bot&permissions=2146959219

const DotEnv = require('dotenv')
const Discord = require('discord.js')
const bot = new Discord.Client()
const Command = require('./command')

DotEnv.config()

bot.on('message', (message) => {
    if(message.content.match(/(<@!(.*?)>)/g)) {
        const content = message.content.split(/(<@!.*?>)\s/g)[2]
        if(content.indexOf('!') === 0) {
            process.env.DISCORD_SERVEUR = message.guild.id
            handleCommand(message, content, message.author, true)
        } else {
            message.reply(`Je n'ai pas compris votre requête : si vous rencontrez des difficultés, tapez "!help"`)
        }
    } else {
        if(message.content.indexOf('!') === 0) {
            process.env.DISCORD_SERVEUR = message.guild.id
            handleCommand(message, message.content, message.author)
        }
    }
})

bot.on('guildMemberAdd', (member) => {
    member.createDM().then((channel) => {
        return channel.send(`Bienvenu sur le channel @${member.displayName}, je suis la pour vous aider. Pour m'appeler, entrez une commande, par exemple "!help"`)
    }).catch(console.error)
})

function handleCommand(message, commandString, user, privateResponse = false) {
    const command = new Command()
    command.parse(commandString)
    command.execute()
        .then((reply) => {
            if(privateResponse) {
                message.reply(reply)
            } else {
                message.channel.send(reply)
            }
        })
        .catch((error) => {
            if(privateResponse) {
                message.reply(error)
            } else {
                message.channel.send(error)
            }
        })

}

bot.login(process.env.BOT_TOKEN)

