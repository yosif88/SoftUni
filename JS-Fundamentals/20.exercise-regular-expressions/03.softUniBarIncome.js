function softUniBarIncome(input) {

    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)[^|$%.]*\|[^|$%.]*?(?<price>[\d]+.?\d*)\$/

    let line = input.shift();
    let totalIncome = 0;

    while (line !== 'end of shift') {
        let mathes = line.match(pattern);
        if (mathes) {
            let name = mathes.groups.name;
            let product = mathes.groups.product;
            let quantity = Number(mathes.groups.quantity);
            let totalPrice = Number(mathes.groups.price) * quantity;

            totalIncome += totalPrice;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }
        line = input.shift();

    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])

