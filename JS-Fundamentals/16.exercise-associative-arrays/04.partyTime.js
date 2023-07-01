function partyTime(input) {
    let vip = [];
    let regular = [];

    let command = input.shift();

    while (command !== "PARTY") {
        let firstChar = command[0];

        if (isNaN(firstChar)) {
            regular.push(command);
        } else {
           vip.push(command);
        }

        command = input.shift();
    }
    let allGuests = vip.concat(regular);
    
    for (const guest of input) {
        if (allGuests.includes(guest)) {
            let index = allGuests.indexOf(guest);
            allGuests.splice(index, 1);
        }
        
    }
    console.log(allGuests.length);
    allGuests.forEach(guest =>{
        console.log(guest);
    } );
    
       
}


partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])