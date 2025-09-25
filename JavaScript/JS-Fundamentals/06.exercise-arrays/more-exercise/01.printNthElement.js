function printElement(arr) {
    let step = arr.pop();
    step = Number(step)
    let element = [];
    for (let i = 0; i < arr.length; i += step) {
        element.push(arr[i]);
    }
    console.log(element.join(' '));
}

printElement(['5', '20', '31', '4', '20', '2'])
printElement(['dsa', 'asd', 'test', 'test', '2'])
printElement(['1', '2', '3', '4', '5', '6'])