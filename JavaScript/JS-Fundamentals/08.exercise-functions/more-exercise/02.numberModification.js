function numberModification(number){

    numsToStr(number);

    function numsToStr(num){
        return num.toString().split('');
    }
    
    function sum(number) {
        let res = 0;
        for (const el of number) {
            res += Number(el);
            
        }
        return res;
    }
    function averageSum(num){
        return sum(numsToStr(num)) / numsToStr(num).length;
    }
    while(averageSum(number) < 5){
        number += '9';
    }
   
    console.log(number);
  

}




numberModification(101)