function furniture(input){
    
    let pattern = />>(?<name>\w+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/
    let totalMoney = 0;

    console.log('Bought furniture:');

    for (const line of input) {
        let matches = line.match(pattern);
       
        if (matches) {
            let name = matches.groups.name;
            let price = Number(matches.groups.price);
            let quantity = Number(matches.groups.quantity);

            totalMoney += price * quantity;
            console.log(name); 
        }
    }

    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])