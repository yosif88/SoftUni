function triangleOfNumbers(number){
    for (let row = 1; row <= number; row++){
        let buff = '';
        for(let col= 0; col < row; col++){
            buff += `${row} `
        }
        console.log(buff);
    }
}

triangleOfNumbers(3)