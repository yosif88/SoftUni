function biggestNumbers(numberOne, numberTwo, numberThree) {
    //console.log(Math.max(numberOne, numberTwo, numberThree));
    let biggerNumbers = 0;
    if (numberOne < numberTwo && numberOne > numberThree) {
        biggerNumbers = numberOne;
    }else if(numberOne < numberTwo && numberTwo > numberThree) {
        biggerNumbers = numberTwo;
    }else{
        biggerNumbers = numberThree;
    }
    console.log(biggerNumbers);
    
}

biggestNumbers(-2, 7, 3)