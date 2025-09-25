function nonDecreasingSubset(arr) {
    let biggestNum = arr[0];
    let newArr = []
    // let res = arr.filter(el =>{
    //     if (el >= biggestNum){
    //         biggestNum = el;
    //     }
    //     return el >= biggestNum;
    // })
    for (let i = 0; i < arr.length; i++){
        el = arr[i];
        if (el >= biggestNum){
            biggestNum = el;
            newArr.push(el)
        }
    }

    
    console.log(newArr.join(' '));

}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([ 1, 2, 3, 4])
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])