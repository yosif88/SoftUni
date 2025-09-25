function subSum(arr, startIndex, endIndex) {
    if(Array.isArray(arr) == false) {
        return NaN
    }
    startIndex = Math.max(0, startIndex);
    endIndex = Math.min(endIndex, arr.length - 1);

    return arr.slice(startIndex, endIndex + 1).map(Number).reduce((a,b) => a + b,0);


}

console.log(subSum([10, 'twenty', 30, 40], 0, 2))