# TeamsTools aide
## Desciption
TeamsTools est un outil qui saura vous assister pour vos travails d'équipe. La communication avec ce bot est à effectuer en ligne de commande. Cet outil se veut simple d'accès et modulaire. Pour toute question sur le projet contactez moi sur [la page GitHub du projet](https://https://github.com/JOTSR/TeamsTools/tree/develop) 
## Prise en main
Vous pouvez à tous moments accéder à l'aide en tapant "!help".
Structure type d'une commande : "!commandName arg1 arg2 \`string argument\` --flag1 --flag2"
/!\\ L'ordre des arguments est important /!\\
Les arguments sous forme de chaîne de caractères s'écrivent entre \` et \` [Alt Gr + 7].
Les flags sont optionnels et leur ordre n'est pas important.
Pour obtenir plus d'information sur une commande, tapez "!commandeQuelconque --help".
Les commandes sont décrites comme suit : !nom [type_de_l_argment : nom_de_l_argument] --nom_du_flag
Les arguments peuvent être de type string (\`arument de type string\`) ou name (argumentName).
Si l'argument ou le flag est précédé de "?", il est optionnel.
## Liste des commandes

 - **!objectives**
    - **!objectives add [string: objective_name] *?[string: tag_name]***, ajoute un objectif au tableaux des objectifs
    - **!objectives  list *?[string: tag_name]* --only-reached, --only-unreached, --only-wip** , liste les objectifs du tableau et affiche leur statut
    - **!objectives set [string: objective_name] [name: reached | unreached | wip]**, défini le statut de l’objectif
    - **!objectives remove [string: objective_name]**, supprime l'objectif du tableau des objectifs /!\\ action irréversible /!\\