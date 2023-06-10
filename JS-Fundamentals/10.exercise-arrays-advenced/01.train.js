function train(input) {
    let wagons = input[0].split(' ').map(Number);
    let capacityWagon = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
            let command = input[i].split(' ');

            if (command[0] === 'Add'){
                let wagon = Number(command[1]);
                wagons.push(wagon);
            
            }else{
                let passengers = Number(command[0]);
                for (let j = 0; j < wagons.length; j++) {
                    if (capacityWagon >= passengers + wagons[j]){
                        wagons[j] += passengers;
                        break;
                    }
                }
            }
            
    }

    console.log(wagons.join(' '));

}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])