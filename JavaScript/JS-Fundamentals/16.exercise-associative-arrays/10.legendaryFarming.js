function legendaryFarming(input){

   let inputAsArr = input.split(' ');
   let junkMatirials = {};
   let legendary = '';

    let keyMateria = {
        "shards": 0, 
        "fragments": 0,
        "motes": 0
    }

    for (let i = 0; i < inputAsArr.length - 1; i += 2){
        let quantity = Number(inputAsArr[i]);
        let matirial = inputAsArr[i + 1].toLowerCase();

        if (matirial === 'shards' || matirial === 'fragments' || matirial === 'motes'){
            keyMateria[matirial] += quantity;
            
            if (keyMateria[matirial] >= 250 && matirial === 'shards'){
                
                legendary ='Shadowmourne';
                keyMateria[matirial] -= 250;
                break;
            
            } else if (keyMateria[matirial] >= 250 && matirial === 'fragments'){
                
                legendary = 'Valanyr';
                keyMateria[matirial] -= 250;
                break;
            
            }else if (keyMateria[matirial] >= 250 && matirial === 'motes'){

                legendary = 'Dragonwrath';
                keyMateria[matirial] -= 250;
                break;
            }
        
        }else {
            if(!junkMatirials.hasOwnProperty(matirial)){
                junkMatirials[matirial] = 0;
            }
            junkMatirials[matirial] += quantity;
        }


    }
    console.log(`${legendary} obtained!`);
    
     Object.entries(keyMateria)
    .sort((kvpA, kvpB) => kvpB[1]-kvpA[1] || kvpA[0].localeCompare(kvpB[0])).
    forEach(parmas => {
        console.log(`${parmas[0]}: ${parmas[1]}`)
    });

    Object.entries(junkMatirials).
    sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0])).
    forEach(junks =>{
        console.log(`${junks[0]}: ${junks[1]}`);
    })
    

}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
console.log('-------------------');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')