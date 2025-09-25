function ladyBugs(input) {
    let size = input.shift();
    let field = [];
    let indexOfLadyBugs = input.shift().split(' ');


    for (let i = 0; i < size; i++) {
        field[i] = 0;
    }

    for (let i = 0; i < indexOfLadyBugs.length; i++) {
        let index = indexOfLadyBugs[i];
        if (field[index] !== undefined) {
            field[index] = 1;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let commad = input[i].split(' ')
        let ladybugIndex = Number(commad[0]);
        let direction = commad[1];
        let flyLength = Number(commad[2]);

        if (ladybugIndex >= field.length || indexOfLadyBugs < 0 || field[ladybugIndex] === 0) {
            continue;
        }
        field[ladybugIndex] = 0;
        let isFly = true;

        if (direction === 'right') {

            while (isFly) {
                if (field[ladybugIndex + flyLength] === 0) {
                    field[ladybugIndex + flyLength] = 1;
                    isFly = false;
                } else if (field[ladybugIndex] + flyLength === 1) {
                    flyLength += flyLength;

                } else {
                    isFly = false;
                }
            }
        } else {
            while (isFly) {
                if (field[ladybugIndex - flyLength] === 0) {
                    field[ladybugIndex - flyLength] = 1;
                    isFly = false;
                } else if (field[flyLength] === 1) {
                    flyLength += flyLength;

                } else {
                    isFly = false;
                }
            }
        }

    }
    console.log(field.join(' '));
}
ladyBugs(
    [5, '3',
        '3 left 2',
        '1 left -2']
)