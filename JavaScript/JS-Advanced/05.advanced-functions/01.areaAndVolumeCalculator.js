function area() {

    return Math.abs(this.x * this.y);

};

function vol() {

    return Math.abs(this.x * this.y * this.z);

};


function solve(area, vol, input) {

    return JSON.parse(input).map(point => ({
            area: area.call(point),
            volume: vol.call(point),
        })
    );

}

// function solve(area, vol, input) {
//     let points = JSON.parse(input);
//     let res = [];
    
//     points.forEach(point => {
//         res.push({
//             area: area.call(point),
//             volume: vol.call(point),
//         })
//     })
//     return res;

// }
console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`))


