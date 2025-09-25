function cone(radius, height) {
    //V = (1/3)πr2h
    let volume = (1 / 3) * Math.PI * radius ** 2 * height;

    //Total surface area of a cone:
    //A = πr(r + √(r2 + h2)) 

    let area = Math.PI * radius*(radius + Math.sqrt(radius ** 2 + height ** 2));


    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
    
}

cone(3, 5)