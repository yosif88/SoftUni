function sortAnArrayByTwoCriteria(arr){
    // arr.sort((a,b)=> {
    //    if (a.length !== b.length){
    //     return a.length - b.length;
    //    }
    //    return a.localeCompare(b)
    // })
    // console.log(arr.join('\n'));

    arr.sort((a,b)=> {
        return  a.length - b.length || a.localeCompare(b);
    })
    console.log(arr.join('\n'));
}

sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma'])
console.log('-------------');
sortAnArrayByTwoCriteria([
    'Isacc', 
    'Theodor', 
    'Jack', 
    'Harrison', 
    'George'])