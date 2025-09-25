function houseParty(arr) {
    
    let result = [];

    for (let el of arr) {
        let name = el.split(' ')[0];
        let command = el.split(' is ')[1];

        if(command === 'going!'){
            if (!result.includes(name)){
                    result.push(name)
            }else{
                console.log(`${name} is already in the list!`);
            }
        }else{
            if (result.includes(name)){
                let index = result.indexOf(name)
                result.splice(index, 1);
            }else{
                console.log(`${name} is not in the list!`);
            }
        }
        
    }
    console.log(result.join('\n'));

}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])