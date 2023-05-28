function rotateArray(arr) {
    let count = arr.pop();
    count = Number(count);

    for (let i = 0; i < count; i++) {

        for (let j = 0; j < arr.length; j++) {
           let temp = arr[j];
           arr[j] = arr[arr.length -1];
           arr[arr.length -1] = temp;
        }
    }
    console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])