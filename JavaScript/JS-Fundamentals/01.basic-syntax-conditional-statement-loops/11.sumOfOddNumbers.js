function sumOfOddNumebers(n){
    let oddSum = 0;
    let oddNum = 1;

    for (let i = 0; i < n; i++){
      
            console.log(oddNum);
            oddSum += oddNum;
            oddNum +=2 
            
        
    }
    console.log(`Sum: ${oddSum}`);
}
sumOfOddNumebers(5)