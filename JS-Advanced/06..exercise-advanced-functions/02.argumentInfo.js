function argumentInfo(...args) {
    let data = {};
    args.forEach(el =>{
        let type = typeof el;
        console.log(`${type}: ${el}`);
        if (!data[type]){
            data[type] = 0;
        }
        data[type] ++;
    })
    Object.entries(data)
    .sort((a,b)=> b[1]-a[1])
    .forEach(el => console.log(`${el[0]} = ${el[1]}`))
    
}

argumentInfo({ name: 'bob'}, 3.333, 9.999)