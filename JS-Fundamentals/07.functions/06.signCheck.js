function printResult(numberOne, numberTwo, numberThree) {
    // let sum = (a,b,c) => a * b * c;
    // let result =sum(numberOne, numberTwo, numberThree);
    // if (result < 0){
    //     return 'Negative'
    // }
    // return 'Positive';
    function signCheck(a, b, c) {
        if (0 <= a && 0 <= b && 0 <= c) {
            return true;
        }
        if (0 < a && 0 > b && 0 > c){
            return true;
        }
        if (0 > a && 0 > b && 0 < c){
            return true;
        } 
        if (0 > a && 0 < b && 0 > c){
            return true;
        }
       
       
    }

    let check= signCheck(numberOne, numberTwo, numberThree);
    if (check) {
        return'Positive';
    }
    return 'Negative';
}



console.log(printResult(-5,
    1,
    1))