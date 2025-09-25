function sortNumbers(a, b, c) {
    let res = '';
    // a > b && b > c  && a > c    a b c
    // a > b && b < c && a >= c    a c b
    // a > c && b > c && b >= a    b a c
    // a <= c && b >= c && b >= a  b c a
    // a <= c && a >= b && c >= b   c a b
    // a <= c && a <= b && c >= b   c b a
    if (a >= b && b >= c && a >= c) {            
        res = `${a}\n${b}\n${c}`     
    } else if (a >= b && b < c && a > c){
        res = `${a}\n${c}\n${b}`
    }else if(a >= c && b >= c && b >= a){
        res = `${b}\n${a}\n${c}`
    }else if(a <= c && b >= c && b >= a){
        res = `${b}\n${c}\n${a}`
    }else if(a <= c && a >= b && c >= b){
        res = `${c}\n${a}\n${b}`
    }else if (a <= c && a <= b && c >= b ){
        res = `${c}\n${b}\n${a}`
    }
    console.log(res);
}


sortNumbers(0, 0, 2)