function concatenateNames(firstName, lastName, delimiter) {
    let printResult = `${firstName}${delimiter}${lastName}`;
    console.log(printResult);
}

concatenateNames(
    'John',
    'Smith',
    '->')