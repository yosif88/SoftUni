function bitcoinMining(numbers){
    let bitCoinPrice = 11949.16;
    let goldPricePerGrams = 67.51;
    let money = 0;
    let buyCoin = 0;
    let day = 1;
    let firstDay = 0;

    for (let i = 0; i < numbers.length ; i++) {
        let grams = numbers[i];

        if (day % 3 === 0){
            grams *= 0.70;
            money += grams * goldPricePerGrams;
        }else{
            money += grams * goldPricePerGrams;
        }
        
        while (bitCoinPrice < money){
            money -= bitCoinPrice;
            buyCoin++;
            if (buyCoin === 1){
                firstDay = day;
            }
        }
        day++;
        
    }
    console.log(`Bought bitcoins: ${buyCoin}`);
    if(firstDay != 0){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}

bitcoinMining([50,
    100])