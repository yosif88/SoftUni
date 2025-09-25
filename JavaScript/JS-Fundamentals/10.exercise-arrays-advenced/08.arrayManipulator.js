function arrayManipulator(numbers, data) {
   
    for (let i = 0; i < data.length; i++) {

        let params = data[i].split(' ');
        let command = params[0];
        

        if (command === 'add') {
            let index = Number(params[1]);
            let num = Number(params[2]);
            numbers.splice(index, 0, num);

        }else if (command === 'addMany'){
            let index = Number(params[1]);
            let nums = params.splice(2).map(Number);
            for (const el of nums) {
                numbers.splice(index, 0, el);
                index++;
                
            }
        
        }else if (command === 'contains'){
            let element = Number(params[1])
            if (numbers.indexOf(element)!== -1){
                let idx = numbers.indexOf(element);
                console.log(idx);
                
            }else{
                console.log(numbers.indexOf(element));
                
            }
        
        }else if (command === 'remove'){
            let index = Number(params[1]);
            numbers.splice(index, 1);
        
        }else if (command === 'shift'){
            let position = Number(params[1]);
            for (let i = 0; i < position; i++){
                let currentNum = numbers.shift();
                numbers.push(currentNum);
                
            }
        }else if(command === 'sumPairs'){
            let res = [];
            
            if ( numbers.length % 2 !== 0){
                numbers.push(0)
            }

            while (numbers.length > 0){ 
                let firtsNum = numbers.splice(0, 1)[0];
                let nextNum = numbers.splice(0,1)[0];
                res.push(firtsNum + nextNum);
                
            }
            numbers = res;
          
        }else if (command === 'print'){
            console.log(`[ ${numbers.join(', ')} ]`);
        }

    }
   
}
arrayManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])