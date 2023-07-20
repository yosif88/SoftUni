function theImitationGame(input){
    let message = input.shift();

    for (const line of input) {
            let token = line.split('|');
            let command = token[0];

            switch(command){
                case 'Move':
                     let move= Number(token[1]);
                    message = message.slice(move)+ message.slice(0,move);
                    break;
                
                case 'Insert':
                    let index = Number(token[1]);
                    let value = token[2];

                    message = message.substring(0,index) + value + message.substring(index);
                    break;

                case 'ChangeAll':
                    let substr = token[1];
                    let replacement = token[2];
                    while(message.includes(substr)){
                        message = message.replace(substr,replacement);
                    }
                    
                    break;
            }
    }
    
    console.log(`The decrypted message is: ${message}`);

}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])