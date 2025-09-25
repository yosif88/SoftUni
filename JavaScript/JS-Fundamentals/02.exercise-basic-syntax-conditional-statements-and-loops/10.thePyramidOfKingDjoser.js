function pyramidOfKindDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let step = 1;

    while (base >= 1) {
        if (base > 2) {
            if (step % 5 === 0) {
                lapisLazuli += (4 * base - 4)  * increment;
                
            }else{
                marble += (4* base -4)  * increment;
            }
            stone +=Math.pow(base - 2, 2) * increment;
            step++;
            
        }else{
            gold += Math.pow(base, 2) * increment;
        }
       
        base -= 2;
    

    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * increment)}`)
    

}

pyramidOfKindDjoser(11, 1)
console.log('-----------------');
pyramidOfKindDjoser(23,0.5)
console.log('-----------========');
pyramidOfKindDjoser(12,1)