function pirates(input) {
    let obj = {};

    for (const line of input) {
        if (line === 'Sail') {
            break;
        }
        let tokens = line.split('||');
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if (!obj.hasOwnProperty(city)) {
            obj[city] = [];
            obj[city][0] = population;
            obj[city][1] = gold;
        
        } else {
            obj[city][0] += population;
            obj[city][1] += gold;
        }

    }
    
    let index = input.indexOf('Sail') + 1;

    let line = input[index];
    index++;

    while (line !== 'End') {
        let tokens = line.split('=>');
        let command = tokens[0];
        let city = tokens[1];

        if (command === 'Plunder'){
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            

            if (obj.hasOwnProperty(city)){
                obj[city][0] -= people;
                obj[city][1] -= gold;
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            }
            if (obj[city][0] <= 0 || obj[city][1] <= 0){
                delete obj[city];
                console.log(`${city} has been wiped off the map!`);
                
            }
           
        }else{
            let gold = Number(tokens[2]);
            
            if (gold < 0){
                console.log(`Gold added cannot be a negative number!`);
                
            }else{
                obj[city][1]+= gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${obj[city][1]} gold.`);
            }
        }

        line = input[index];
        index++;
    }

    if (Object.entries(obj).length > 0){
        console.log(`Ahoy, Captain! There are ${Object.entries(obj).length} wealthy settlements to go to:`);
       
        Object.entries(obj).forEach(el =>{
            console.log(`${el[0]} -> Population: ${el[1][0]} citizens, Gold: ${el[1][1]} kg`);
        })
        
    }else{
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
        
    }

}

pirates((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]))