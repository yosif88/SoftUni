function movingTarget(input) {
    let targets = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let params = input[i].split(' ');
        let command = params[0];

        if (command === 'End') {
            console.log(targets.join('|'));
            break;
        }

        if (command === 'Shoot') {
            let index = Number(params[1]);
            let power = Number(params[2]);

            if (0 <= index && index < targets.length) {
                targets[index] -= power;
                
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }

        } else if (command === 'Add') {
            let index = Number(params[1]);
            let value = Number(params[2]);

            if (0 <= index && index < targets.length) {
                targets.splice(index, 0, value);
            
            } else {
                console.log("Invalid placement!");
            }

        } else if (command === 'Strike') {
            let index = Number(params[1]);
            let radius = Number(params[2]);
            
            let startIndex =index - radius;
            let endIndex =  radius * 2 + 1;
            
            if ( 0 <= startIndex && endIndex < targets.length) {
               
                targets.splice(startIndex, endIndex);
            
            } else {
                console.log("Strike missed!");
            }
        }

    }
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])