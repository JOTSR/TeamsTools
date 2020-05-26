const fs = require('fs')

module.exports = function help(args = null, flags = null) {
    return new Promise((success, reject) => {
        fs.readFile('./readme.md', 'utf-8', (err, data) => {
            if(err) reject('Fichier introuvable')
            success(data)
        })
    })
}