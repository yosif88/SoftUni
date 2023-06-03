function validatorPassword(password) {
    let checkLen = validatorLength(password);
    let checkDigitAndLetter = validateDigitsAndLetters(password)
    let checkDigit = validDigitCount(password);
    let validatorError = [];
    for (let validator of [checkLen, checkDigitAndLetter, checkDigit]) {
        if (validator !== undefined){
            validatorError.push(validator)
        }
    }
    if (validatorError.length === 0){
        return "Password is valid"
    }
    return validatorError.join('\n')
    function validatorLength(input) {
        if (input.length < 6 || input.length > 10) {
            return "Password must be between 6 and 10 characters"
        }
    
    }
    function validateDigitsAndLetters(input) {
        for (let i = 0; i < input.length; i++) {
            let char = input[i].charCodeAt();
            if ((char < 48 || char > 57) && (char < 65 || char > 95) && (char < 97 || char > 122)) {
                return "Password must consist only of letters and digits";
            }
    
    
        }
    }
    function validDigitCount(input) {
        let counter = 0;
        for (let i = 0; i < input.length; i++) {
            let char = input[i].charCodeAt();
            if (char >= 48 && char <= 57) {
                counter++;
            }
        }
        if (counter < 2) {
                return "Password must have at least 2 digits"
            }
    
        
    }

}









console.log(validatorPassword('logIn'))