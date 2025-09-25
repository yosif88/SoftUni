function smallestTwoNumbers(arr){
    
    arr.sort((a,b) => a - b);
    
    let smallestNum = arr.slice(0,2);
    
    console.log(smallestNum.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5])