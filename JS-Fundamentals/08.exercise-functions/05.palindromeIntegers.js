function palindromeIntegers(arr) {
    // for (let i=0; i<arr.length; i++){
    //     let numAsStr = arr[i].toString();
    //     let num = '';
    //     for (let j = numAsStr.length-1; j >= 0; j--){
    //          num += numAsStr[j];

    //     }
    //     if (numAsStr === num){
    //         console.log(true);
    //     }else{
    //         console.log(false);
    //     }
    for (let i = 0; i < arr.length; i++) {
        let numAsStr = arr[i].toString();
        let reversedNum = numAsStr.split('').reverse().join('');
        if (reversedNum === numAsStr) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}

    


palindromeIntegers([123, 323, 421, 121])