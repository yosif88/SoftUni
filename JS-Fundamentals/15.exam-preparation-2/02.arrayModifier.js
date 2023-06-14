function arrayModifier(input){
    let arr = input.shift().split(' ').map(Number);
    
    for (let i = 0; i < input.length; i++){
        let params = input[i].split(' ');
        let command = params[0];
        
        if (command === 'end'){
            break;
        }

        if (command === 'swap'){
            let indexOne = Number(params[1]);
            let indexTwo = Number(params[2]);

            let firstNum = arr[indexOne];
            let secondNum = arr[indexTwo];
            arr[indexOne] = secondNum;
            arr[indexTwo] = firstNum;
            
       
        } else if (command === 'multiply'){
            let indexOne = Number(params[1]);
            let indexTwo = Number(params[2]);
            let multiply = arr[indexOne] * arr[indexTwo];
            arr.splice(indexOne,1, multiply)
        
        }else if (command === 'decrease'){
            arr = arr.map(x => x-1)
        }
    }

    console.log(arr.join(', '));
    
}

arrayModifier([ 
    '23 -2 321 87 42 90 -123', 
    'swap 1 3', 
    'swap 3 6', 
    'swap 1 0', 
    'multiply 1 2', 
    'multiply 2 1', 
    'decrease',
    'end'
])

console.log('--------------------');
arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
    ])
