function convertToJSON( firstName, lastName, hairColor) {

    let odj = {};
    odj.name = firstName;
    odj.lastName = lastName;
    odj.hairColor = hairColor;

    let json = JSON.stringify(odj);
    console.log(json);

}

convertToJSON('George', 'Jones',
'Brown')