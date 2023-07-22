function passwordReset(input) {
    let password = input.shift();

    let commandParse = {
        'TakeOdd': (password) => {
            return [...password].filter((el, i) => i % 2 !== 0).join('');
        },
        'Cut': (password, index, len) => {
            index = Number(index);
            len = Number(len);

            let sub = password.substring(index, len + index)

            return password.replace(sub, '');
        },
        'Substitute':(password, substring,substitute) => {
            if (password.includes(substring)){
                while(password.includes(substring)){
                 password = password.replace(substring, substitute);
                }
                return password;
                
            }
            console.log("Nothing to replace!");
            return password;
        }
    }

    input.forEach(line => {
        if (line !== 'Done') {
            [command, ...tokens] = line.split(' ');
            let oldPassword = password;
            password = commandParse[command](password, ...tokens);
            
           
            if (oldPassword !== password) {
                console.log(password);
            }
           
            
        }
       
    });
    console.log(`Your password is: ${password}`);

}


passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
console.log('==========================');
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
