function triplesOfLatinLetters(n) {
    let num = Number(n);
    let range = 97 + num;
    for (let a = 97; a < range; a++) {
        for (let b = 97; b < range; b++) {
            for (let c = 97; c < range; c++){

                console.log(`${String.fromCharCode(a)}${String.fromCharCode(b)}${String.fromCharCode(c)}`);
                
            }
        }
    }
}

triplesOfLatinLetters(2)