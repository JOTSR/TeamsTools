const _help = require('./commands/help')
const _objectives = require('./commands/objectives')

module.exports = class Command {
    constructor(command = null) {
        this.command = command?.command ?? null
        this.arguments = command?.arguments ?? []
        this.flags = command?.flags ?? []
    }

    execute() {
        return new Promise((success, reject) => {
            switch(this.command) {
                case '!help':
                    _help(this.arguments, this.flags)
                        .then(result => {
                            success(result)
                        })
                        .catch(error => {
                            reject(error)
                        })
                    break
                case '!objectives':
                    _objectives(this.arguments, this.flags)
                        .then(result => {
                            success(result)
                        })
                        .catch(error => {
                            reject(error)
                        })
                    break
                default:
                    reject(`Commande invalide`)
                    break
            }
        })
    }

    parse(string) {
        const regexWords = new RegExp('\\s', 'g')
        const regexCommand = new RegExp('!\\w+')
        const regexArgs = new RegExp('(\\`(.*?)\\`|\\w+)', 'g')
        const regexFlags = new RegExp('--\\w+', 'g')

        this.command = string.match(regexCommand)[0]
        string = string.replace(regexCommand, '')
        this.flags = string.match(regexFlags)
        string = string.replace(regexFlags, '')
        this.arguments = string.match(regexArgs)
        string = string.replace(regexArgs, '')
    }
}
