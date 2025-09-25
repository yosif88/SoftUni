function condenseArrayToNumber(arr){
    while (arr.length > 1){
        condense = [];
        
        for (var i = 0; i < arr.length - 1; i ++){
            condense[i] = arr[i] + arr[i + 1]; 
        }
        arr = condense;
    }
    console.log(arr[0]);
}

condenseArrayToNumber([2,10,3])
condenseArrayToNumber([5,0,4,1,2])
condenseArrayToNumber([1])