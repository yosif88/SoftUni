function heartDelivery(input) {
    let houses = input.shift().split('@').map(Number);
    let cupid = 0;
    
    for(let i = 0; i < input.length; i++) {
        
        let params = input[i].split(' ');
        
        let command = params[0];
        let jump = Number(params[1]);

       

        if (command ==='Love!'){
            break;
        }

        cupid += jump;
        if (command === "Jump"){

            if (houses.length <= cupid){
                cupid = 0;
            }

            if (houses[cupid] === 0){
                console.log(`Place ${cupid} already had Valentine's day.`);
            
            } else {
                houses[cupid] -= 2;
                if (houses[cupid] === 0){
                    console.log(`Place ${cupid} has Valentine's day.`);
                }
            }
            
        }
    }
    console.log(`Cupid's last position was ${cupid}.`);
    missedHouses = houses.filter(x => x > 0);

    if (missedHouses.length > 0){
        console.log(`Cupid has failed ${missedHouses.length} places.`);
    
    }else{
        console.log("Mission was successful.");
        

    }


}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])