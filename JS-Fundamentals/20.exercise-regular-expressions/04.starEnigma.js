function starEnigma(input) {
    let n = Number(input.shift());
    // let searchWord = /[star]/gi;
    let searchWord = ['s','t','a','r'];
    let pattern = /@(?<planet>[A-Za-z]+)[^@\-!:>]*:(?<population>\d+)[^@\-!:>]*!(?<command>[A|D])![^@\-!:>]*\->(?<solders>\d+)/

    let attacked = [];
    let destroyed = [];
    
    for (let i = 0; i < n; i++) {
        let encryptedMessage = input[i];
        
        let count = encryptedMessage.toLowerCase().split('')
            .filter(el=> searchWord.includes(el)).length;
        
        let decryptedMessage = encryptedMessage.split('')
            .map(el => String.fromCharCode(el.charCodeAt(0) - count)).join('');

        let matches = decryptedMessage.match(pattern);
       
        if (matches) {
           
            if (matches.groups.command == 'A') {
                attacked.push(matches.groups.planet);
           
            } else if(matches.groups.command == 'D') {
                destroyed.push(matches.groups.planet);
            }
        }

    }

    console.log(`Attacked planets: ${attacked.length}`);
    attacked.sort((a, b) => a.localeCompare(b)).forEach(el => console.log(`-> ${el}`))
    
    console.log(`Destroyed planets: ${destroyed.length}`);
    destroyed.sort((a, b) => a.localeCompare(b)).forEach(el => console.log(`-> ${el}`))


}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'])
console.log('---------------');
starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR'])