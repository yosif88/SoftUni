function movies(input) {
    let result = [];

    for (let line of input) {
        if (line.includes('addMovie')) {
            let name = line.split('addMovie ')[1];
            result.push({ name })

        } else if (line.includes('directedBy')) {
            let [movieName, director] = line.split(' directedBy ');
            let movie = result.find(el => el.name === movieName);

            if (movie) {
                movie.director = director
            }
        } else if (line.includes('onDate')) {
            let [movieName, date] = line.split(' onDate ');
            let movie = result.find(el => el.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    }

    result.forEach(movie => {
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    })
    // for (const object of result) {
    //     if (object.name && object.date && object.director) {
    //         console.log(JSON.stringify(object));
    //     }

    // }
}


movies(['addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo'])