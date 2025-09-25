function operator(
    param: string | number | string[],
    operation: 'Index' | 'Length' | 'Add',
    operand: number
): number | string | undefined {

    switch (operation) {
        case 'Index':
            if (typeof param === 'string' || Array.isArray(param)) {
                return param[operand];
            }
            break;

        case 'Length':
            if (typeof param === 'string' || Array.isArray(param)){
                return param.length % operand;
            }
            break;
        case 'Add':
            if(!Array.isArray(param)){
                return Number(param) + operand;
            }
            break;
    }

}

console.log(operator(['First', 'Second', 'Third'], 'Index', 1));
console.log(operator('string', 'Index', 1));
console.log(operator(['Just', 'Two'], 'Length', 5));
console.log(operator('short string1', 'Length', 5));
console.log(operator('7', 'Add', 3));
