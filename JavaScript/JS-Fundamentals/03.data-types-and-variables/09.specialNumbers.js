function specialNumbers(nums) {

   

    for (let i = 1; i <= nums; i++) {
        let sum = 0;
        let currentNum = i;
        
        sum += currentNum % 10;
        let digit = Number.parseInt(currentNum / 10);
        sum += digit;


        if (sum  === 5 || sum  === 7 || sum  === 11) {
            console.log(`${currentNum} -> True`);
        } else {
            console.log(`${currentNum} -> False`);
        }

        
    }


}

specialNumbers(15)