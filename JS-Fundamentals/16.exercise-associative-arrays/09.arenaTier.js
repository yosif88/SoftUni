function arenaTier(input) {

    let command = input.shift();
    
    let arenaObj = {};
    let totalSkill = {};
    
    while (command !== 'Ave Cesar') {
        let gladiatorOne = '';
        let gladiatorTwo = '';
        let technique = '';
        let skill = '';
        let token;
        
        if (command.includes(' -> ')) {
            
            token = command.split(' -> ');
            gladiatorOne = token[0];
            technique = token[1];
            skill = Number(token[2]);

            if (!arenaObj.hasOwnProperty(gladiatorOne)) {
                arenaObj[gladiatorOne] = {};
                arenaObj[gladiatorOne][technique] = skill;
                totalSkill[gladiatorOne]= 0;
                totalSkill[gladiatorOne] += skill
           
            } else {
           
                if (!arenaObj[gladiatorOne][technique]) {
                    arenaObj[gladiatorOne][technique] = skill;
                    totalSkill[gladiatorOne] += skill
           
                } else {
           
                    if (arenaObj[gladiatorOne][technique] < skill) {
                        arenaObj[gladiatorOne][technique] = skill
                    }
                }
            }
           
        } else {
            token = command.split(' vs ');
            gladiatorOne = token[0];
            gladiatorTwo = token[1]
            let playerOne = arenaObj[gladiatorOne];
            let playerTwo = arenaObj[gladiatorTwo];
            let entry = Object.entries(arenaObj)

            if (arenaObj.hasOwnProperty(gladiatorOne) && arenaObj.hasOwnProperty(gladiatorTwo)) {

                for (const [name, info] of entry) {
                    for (const [tech, skill] of Object.entries(info)) {
                        
                        if (playerOne.hasOwnProperty(tech) && playerTwo.hasOwnProperty(tech)) {
                           
                            if (playerOne[tech] > playerTwo[tech]) {
                               
                                delete arenaObj[gladiatorTwo];
                                delete totalSkill[gladiatorTwo];
                                break;
                            
                            } else {
                            
                                delete arenaObj[gladiatorOne];
                                delete totalSkill[gladiatorOne];
                                break;

                            }
                        }
                    }
                    
                }
            }
        }

        command = input.shift()
    }

    let sortTotalSkill = Object.entries(totalSkill).
        sort((kvpA, kvpB) => kvpB[1] - kvpA[1] || kvpA[0].localeCompare(kvpA[0]))

    for (const [name, point] of sortTotalSkill) {
        console.log(`${name}: ${point} skill`);
       
        let tech = Object.entries(arenaObj[name])
            .sort((kvpA, kvpB) => kvpB[1] - kvpA[1] || kvpA[0].localeCompare(kvpB[0]));
       
            for (const [currentTech, currentSkill] of tech) {
            console.log(`- ${currentTech} <!> ${currentSkill}`);

        }
    }


}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
])

console.log('------------------');

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])