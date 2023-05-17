function rounding(number,round){
    if (round > 15){
        round = 15;
    }
    console.log(parseFloat(number.toFixed(round)));
    
}
rounding(10.5,3)