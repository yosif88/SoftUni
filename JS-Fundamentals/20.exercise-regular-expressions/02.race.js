function race(input) {
    let arrOfParticipants = input.shift().split(', ');
    let objOfParticipants = {};

    for (const name of arrOfParticipants) {
        objOfParticipants[name] = 0;
    }

    let line = input.shift();

    let namePattern = /[A-Za-z]/g
    let digitPattern = /[0-9]/gm

    while (line !== 'end of race') {
        let name = line.match(namePattern).join('');
        let distance = line.match(digitPattern).map(Number).reduce((a, b) => a + b, 0);

        if (objOfParticipants.hasOwnProperty(name)) {
            objOfParticipants[name] += distance;
        }

        line = input.shift();
    }
    let sortedParticipants = Object.entries(objOfParticipants).
        sort((a, b) => b[1] - a[1])
   
    console.log(`1st place: ${sortedParticipants[0][0]}`);
    console.log(`2nd place: ${sortedParticipants[1][0]}`);
    console.log(`3rd place: ${sortedParticipants[2][0]}`);
}


race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])