function sortArray(arr, numeric){
   return numeric==='asc'?arr.sort((a,b)=> a-b):arr.sort((a,b)=> b-a);
}

let r = sortArray([14, 7, 17, 6, 8], 'asc')
console.log(r);