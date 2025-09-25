function tseamAccount(arr) {
    let gameName = arr.shift().split(' ');

    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split(' ');
        let command = token[0];
        let game = token[1];

        if (command === 'Play') {
            break;
        }

        switch (command) {
            case 'Install':
                if (!gameName.includes(game)) {
                    gameName.push(game);
                }
                break;
            case 'Uninstall':
                if (gameName.includes(game)) {
                    let index = gameName.indexOf(game);
                    gameName.splice(index, 1);
                }
                break;
            case 'Update':
                if (gameName.includes(game)) {
                    let index = gameName.indexOf(game);
                    let currentGame = gameName.splice(index, 1);
                    gameName.push(currentGame[0]);
                }
                break;
            case 'Expansion':
                let formatGame = game.replace('-', ':')
                let name = game.split('-');
                if (gameName.includes(name[0])){
                    let index = gameName.indexOf(name[0]);
                    gameName.splice(index + 1,0,formatGame);
                }
                
            break;
         }
    }
    console.log(gameName.join(' '));
}


tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!'])