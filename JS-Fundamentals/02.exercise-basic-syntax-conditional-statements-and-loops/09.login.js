function login(input) {

    let password = input[0];
    let counter = 0;
    let isLog = false;

    for (let i = 1; i < input.length; i++) {
        let username = input[i];
        let reverseUsername = '';

        for (let j = username.length - 1; j >= 0; j--) {
            reverseUsername += username[j];

        }
        if (password === reverseUsername) {
            isLog = true;

        } else {
            if (counter === 3) {
                break;
            }
            console.log('Incorrect password. Try again.');
        }

        counter++;
    }
    
    if (isLog) {
        console.log(`User ${password} logged in.`);
    } else {
        console.log(`User ${password} blocked!`);
    }
}

login(['Acer', 'login', 'go', 'letme in', 'recA']);
console.log('------------------');
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
console.log('-------------------')
login(['momo', 'omom']);
