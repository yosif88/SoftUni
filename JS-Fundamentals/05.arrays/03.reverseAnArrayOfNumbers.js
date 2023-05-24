function reverseArray(count, arr){
    let newArr = [];

    for (let i = 0; i < count; i++){
        newArr[i] = arr[i];
    }
    let res = '';
    for(let i = newArr.length - 1; i >= 0; i--){
        res += `${newArr[i]} `;
    }
    console.log(res);
}

reverseArray(3,[10, 20, 30, 40, 50])