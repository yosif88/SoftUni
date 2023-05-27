function arrayRotation(arr, rotation) {
    for (let i = 0; i < rotation; i++){
        for (let j = 0; j < arr.length - 1; j++){
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
    console.log(arr.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)