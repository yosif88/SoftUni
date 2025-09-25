function addAndSubtract(arr){
    
    let oldSum = 0;
    let newSum = 0;

    for (let i=0; i<arr.length; i++){
        let currentNum = arr[i];
        oldSum += currentNum;

        if(currentNum % 2 === 0){
            currentNum += i;
            arr[i] = currentNum ;
        }else{
            currentNum -= i;
            arr[i] = currentNum ;
        }
        newSum += currentNum;
    }
    console.log(arr);
    console.log(oldSum);
    console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35])