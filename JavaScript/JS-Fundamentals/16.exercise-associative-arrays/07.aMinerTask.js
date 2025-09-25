function aMinerTask(input) {
    let miner = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!miner.hasOwnProperty(resource)) {
            miner[resource] = 0;
        
        } 
        miner[resource] += quantity;
        
    }
    Object.keys(miner).forEach(key => {
        console.log(`${key} -> ${miner[key]}`);
    })
    
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])
console.log('================');
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])