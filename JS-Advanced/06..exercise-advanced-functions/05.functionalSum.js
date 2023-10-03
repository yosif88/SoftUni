function add(number){
    let sum = 0;
    function inner(a){
        sum += a;
        return inner;
    }
    inner.toString =()=>sum;
    return inner(number);
}
console.log(add(1)(6)(-3).toString())