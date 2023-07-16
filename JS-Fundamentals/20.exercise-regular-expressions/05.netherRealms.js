function netherRealms(input) {
    let namePattern = /[^0-9\/+.\-*]/g;

    let damegePattern = /[+-]?\d+\.?\d*/g;

    let operator = /\/|\*/g;

    let text = input.split(/[, ]+/g).sort((a, b) => a.localeCompare(b))
    
    for (const line of text) {
        let health = 0;
        let sumOfDamage = 0;
        
        let name = line.match(namePattern);
        let damage = line.match(damegePattern);
        let checkOperator = line.match(operator);

        if(name) {
            health = name.map(el => el.charCodeAt(0)).reduce((a,b)=> a + b, 0);
        }
        if(damage) {
            sumOfDamage = damage.map(Number).reduce((a,b)=> a + b, 0);
        }
        
        if(checkOperator){
           for (const cmd of checkOperator) {
                if(cmd === '*'){
                    sumOfDamage *= 2;
                }else{
                    sumOfDamage /= 2;
                }
           }
        }
        console.log(`${line} - ${health} health, ${sumOfDamage.toFixed(2)} damage`);
    }

}


netherRealms('M3ph-0.5s-0.5t0.0**')
console.log('-------------------');
netherRealms('M3ph1st0**,   Azazel')
console.log('-----------------------');
netherRealms('Gos/ho')