function loadingBar(number){
    let percentCount = number / 10;
    let dotsCount = 10 - percentCount;

    if (percentCount === 10){
        console.log('100% Complete!');
    }else{
        let percentRepeat = '%'.repeat(percentCount);
        let dotsRepeat = '.'.repeat(dotsCount);
        console.log(`${number}% [${percentRepeat}${dotsRepeat}]`);
        console.log('Still loading...');
        
    }
}

loadingBar(30)