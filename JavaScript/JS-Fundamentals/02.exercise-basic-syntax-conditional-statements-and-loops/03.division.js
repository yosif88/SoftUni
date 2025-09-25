function division(number){
    let isBigger = 0;
    if (number % 10 === 0){
        isBigger = 10;
    }else if(number % 7 === 0){
        isBigger = 7;
    }else if(number % 6 === 0){
        isBigger = 6;
    }else if(number % 3 === 0){
        isBigger = 3;
    }else if(number % 2 === 0){
        isBigger = 2;
    }
    
    if (isBigger !== 0){
        console.log(`The number is divisible by ${isBigger}`);
    }else{
        console.log('Not divisible');
    }
}

division(15)