function triangleArea(a, b, c) {
    // calculate semiperimeter
    let s = (a + b + c) / 2;

    // calculate area 
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(area);
    
}

triangleArea(2,
    3.5,
    4)