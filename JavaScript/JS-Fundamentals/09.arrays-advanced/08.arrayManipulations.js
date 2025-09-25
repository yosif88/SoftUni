function arrayManipulations(data) {
    let arr = data.shift(',').split(' ').map(Number)

    for (let i = 0; i < data.length; i++) {
        let token = data[i].split(' ');
        let commamd = token[0];

        if (commamd === 'Add') {
            let number = Number(token[1]);
            arr.push(number);

        } else if (commamd === 'Remove') {
            let number = Number(token[1]);
            arr = arr.filter(el => el != number);

        } else if (commamd === 'RemoveAt') {
            let index = Number(token[1]);
            arr.splice(index, 1);

        } else if (commamd === 'Insert') {
            let number = Number(token[1]);
            let index = Number(token[2]);

            arr.splice(index,0, number);
        }
    }
    console.log(arr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])