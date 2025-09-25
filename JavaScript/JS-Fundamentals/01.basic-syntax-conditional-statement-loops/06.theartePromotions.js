function teatrePromotions(days,age){
    let validAge = true;
    let price = 0;

    switch(days) {
        case 'Weekday':
            if(0 <= age && age <= 18){
                price = 12;
            }else if(18 < age && age <= 64){
                price = 18;
            }else if(64 < age && age <= 122){
                price = 12;
            }else{
                validAge = false;
            }
            break;
        case 'Weekend':
            if(0 <= age && age <= 18){
                price = 15;
            }else if(18 < age && age <= 64){
                price = 20;
            }else if(64 < age && age <= 122){
                price = 15;
            }else{
                validAge = false;
            }
            break;
        case 'Holiday':
            if(0 <= age && age <= 18){
                price = 5;
            }else if(18 < age && age <= 64){
                price = 12;
            }else if(64 < age && age <= 122){
                price = 10;
            }else{
                validAge = false;
            }
            break;
        default:
            console.log('Error!');
            
    }
    if(validAge){
        console.log(`${price}$`);
        
    }else{
        console.log('Error!')
    }

}

teatrePromotions('Weekday',0)
teatrePromotions('Holiday', -12)
teatrePromotions('Holiday', 15)