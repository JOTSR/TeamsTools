const fs = require('fs')

module.exports = function help(args = null, flags = null) {
    return new Promise((success, reject) => {
        let text = ''
        
        const directory = `./data/${process.env.DISCORD_SERVEUR}`
        if (!fs.existsSync(directory))    fs.mkdirSync(directory)
        const file = `${directory}/objectives.json`
        
        const objectives = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : []

        switch (args[0]) {
            case 'add':
                const exist = objectives.filter(objective => objective.title === args[1].replace(/`/g, ''))
                if(exist.lenght) reject('Cet objectif exist déjà, vous pouvez soit le modifier avec **!objectives set** soit le supprimer avec **!objectives remove**')
                else {
                    objectives.push({
                        title: args[1].replace(/`/g, ''),
                        tag: args[2].replace(/`/g, '') ?? null,
                        state: 'not started yet'
                    })
                    if(args[2]) text = `Objectif ${args[1]} #${args[2]} ajouté avec succès`
                    else text = `Objectif ${args[1]} ajouté avec succès`
                }
                break

            case 'list':
                if(objectives[0]) {
                    text += '[0] : |         **Titre**          |       **Tag**       |   **État**   |\n'
                    objectives.forEach((objective, index) => {
                        text +=  `\`\`\`[${index + 1}] : | ${objective.title} | ${objective.tag} | ${objective.state} |\`\`\`\n`
                    })
                } else reject('Aucun objectif n\'a été défini')
                break

            case 'set':
                //objectives.filter(objective => objective.title === args[1].replace(/`/g, ''))
                text = `Objectif ${args[1]} défini à ${args[2]}`
                break

            case 'remove':
                text = `Objectif ${args[1]} supprimé`
                break
        }

        fs.writeFileSync(`${directory}/objectives.json`, JSON.stringify(objectives), 'utf-8')

        if(text) success(text)
        else reject('Arguments ou Flags invalides')
    })
}