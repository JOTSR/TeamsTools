module.exports = function help(args = null, flags = null) {
    return new Promise((success, reject) => {
        let text = ''
        switch (args[0]) {
            case 'add':
                if(args[2]) text = `Objectif ${args[1]} #${args[2]} ajouté avec succès`
                else text = `Objectif ${args[1]} ajouté avec succès`               
                break

            case 'list':
                text = 'Listing...'
                break

            case 'set':
                text = `Objectif ${args[1]} défini à ${args[2]}`
                break

            case 'remove':
                text = `Objectif ${args[1]} supprimé`
                break
        }
        success(text)
        reject('Arguments ou Flags invalides')
    })
}