function vacation(groupOfPeople, typeOfGroup, dayOfWeek) {

    let price = 0;

    switch (typeOfGroup) {
        case 'Students':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 8.45 * groupOfPeople;
                    break;
                case 'Saturday':
                    price = 9.80 * groupOfPeople;
                    break;
                case 'Sunday':
                    price = 10.46 * groupOfPeople;
                    break;
            }
            if (groupOfPeople >= 30) {


                price *= 0.85;
            }
            break;
        case 'Business':
            if (groupOfPeople >= 100) {
                groupOfPeople -= 10;
            }
            switch (dayOfWeek) {

                case 'Friday':
                    price = 10.90 * groupOfPeople;
                    break;
                case 'Saturday':
                    price = 15.60 * groupOfPeople;
                    break;
                case 'Sunday':
                    price = 16 * groupOfPeople;
                    break;
            }
            break;
        case 'Regular':
            switch (dayOfWeek) {

                case 'Friday':
                    price = 15 * groupOfPeople;
                    break;
                case 'Saturday':
                    price = 20 * groupOfPeople;
                    break;
                case 'Sunday':
                    price = 22.50 * groupOfPeople;
                    break;
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20 ) {
                price *= 0.95
            }
            break;
    }

   
   
    console.log(`Total price: ${price.toFixed(2)}`);

}

vacation(30,
    "Students",
    "Sunday")

vacation(40,
    "Regular",
    "Saturday")