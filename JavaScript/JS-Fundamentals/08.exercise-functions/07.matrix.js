function matrix(number){
    let mtx = createMatrix(number);
    printMatrix(mtx);
    function printMatrix(arr){
        for (const el of arr) {
            console.log(el.join(' '));
            
        }
    }
    
    function createMatrix(n){
        let arr = [];
        for (let row = 0; row < n; row++){
            arr[row] = [];
            for(let col = 0; col < n; col++){
                arr[row][col] = n;
            }
        }
        return arr
    }
    
}

matrix(3)