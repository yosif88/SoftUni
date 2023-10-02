function solution() {
    let stored = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,

    };
    let commands = {
        restock,
        prepare,
        report,
    }
    let recipeObj= {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            

        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs:{
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    }
    
    return function manager(command) {
        let tokens = command.split(' ');
        let cmd = tokens[0];
        return commands[cmd](tokens[1], Number(tokens[2]));
    }

    function report(){
        return `protein=${stored['protein']} carbohydrate=${stored['carbohydrate']} fat=${stored['fat']} flavour=${stored['flavour']}`
    }

    function restock(microelement, quantity) {
        stored[microelement] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
       
       for (const [el, value] of Object.entries(recipeObj[recipe])) {
        let neededQuantity = value * quantity;
        if (stored[el] < neededQuantity) {
            return `Error: not enough ${el} in stock`
        }
        stored[el] -= neededQuantity;
            
        }
       return 'Success'
    }
}



let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10")); // Error: not enough carbohydrate in stock 
console.log(manager("restock flavour 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare apple 1")); // Error: not enough carbohydrate in stock 
console.log(manager("restock fat 10")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare burger 1")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); // Error: not enough carbohydrate in stock 
/*
restock flavour 50 
prepare lemonade 4 
restock carbohydrate 10
restock flavour 10
prepare apple 1
restock fat 10
prepare burger 1
report

*/