function dungeonestDark(input){
    let health = 100;
    let coins = 0;

    let rooms = input[0].split("|")
   
    for (let i = 0; i < rooms.length; i++){
        let params = rooms[i].split(' ');
        let room = params[0];
        let number = Number(params[1]);
        
        if (room === 'potion'){
            let temp = health;
            health += number;
            if (health >= 100){
                health = 100;
                let diff = health - temp;
                console.log(`You healed for ${diff} hp.`);
            }else{
                console.log(`You healed for ${number} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        }else if(room === 'chest'){
            coins += number;
            console.log(`You found ${number} coins.`);
        }else{
            health -= number;
            if (health > 0){
                console.log(`You slayed ${room}.`);
            }else{
                console.log(`You died! Killed by ${room}.`);
            }
        }
        if (health <= 0){
            console.log(`Best room: ${i + 1}`);
            break;
        }
        
    }
    if (health > 0){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])