function schoolGrades(data) {
    let students = {};

    for (const line of data) {
        let params = line.split(' ');
        let name = params.shift();
        let grades = params.map(Number);

        if (students.hasOwnProperty(name)) {
            for (const el of grades) {
                students[name].push(el);

            }

        } else {
            students[name] = grades;
        }


    }


    let sorted = Object.entries(students)
        .sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (const [name, grade] of sorted) {
        let avrgGrade = grade.reduce((a, b) => a + b, 0) / grade.length;
        console.log(`${name}: ${avrgGrade.toFixed(2)}`);


    }

  

}

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'])