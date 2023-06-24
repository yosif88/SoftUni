function inventory(input){
    let registerOfHeroes = [];

    for (const line of input) {
        let [names,level,items] = line.split(' / ');
        level = Number(level);
        registerOfHeroes.push({names,level,items});
    }
    
  registerOfHeroes.sort((a,b)=> a.level - b.level);
  for (const obj of registerOfHeroes) {
        console.log(`Hero: ${obj.names}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items}`);
    
  }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])