function car(arr) {
   
    let data = {};
   
    let carOfj = {
        'create': (name, inherit, parentName) => (data[name] = inherit ? Object.create(data[parentName]) : {}),
        'set': (name, key, value) => (data[name][key] = value),
        'print':(name) => {
            let res = [];

            for (const key in data[name]) {
                res.push(`${key}:${data[name][key]}`)
            }
            console.log(res.join(','))
        }
    };

    arr.forEach(el => {
        let [create, name, key, value] = el.split(' ');
        carOfj[create](name, key, value)
    })
}

car(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])