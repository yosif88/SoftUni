function listProcessor(arr) {
    let res = [];
    arr.forEach(el => {
        
        let [func, arg] = el.split(' ');


        
        return {
            'add': (str) => res.push(str),
            'remove': (str) => {
                while(res.includes(str)){
                    let index = res.indexOf(str);
                    res.splice(index,1)
                }
            },
            'print': () => console.log(res.join(','))
        }[func](arg);
         

        // let obj = {
        //     'add': (str) => res.push(str),
        //     'remove': (str) => {
        //         while(res.includes(str)){
        //             let index = res.indexOf(str);
        //             res.splice(index,1)
        //         }
        //     },
        //     'print': () => console.log(res.join(','))
        // }
        //  obj[func](arg);
        
         
    })
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
