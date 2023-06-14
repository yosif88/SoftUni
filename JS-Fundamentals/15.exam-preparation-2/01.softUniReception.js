function softUniReception(input) {
   let firstEmployee = Number(input[0]);
   let secondEmployee = Number(input[1]);
   let thirdEmployee = Number(input[2]);
   let studentsCount = Number(input[3]);

   let answerQuestions = firstEmployee + secondEmployee + thirdEmployee;
    let hours = 0;

    while (studentsCount > 0){
        studentsCount -= answerQuestions;
        hours ++;
        if (hours % 4 === 0){
            hours++;
        }
    }
   
    console.log(`Time needed: ${hours}h.`);
}

softUniReception(['5','6','4','20'])
console.log('---------------------');

softUniReception(['1','2','3','45'])