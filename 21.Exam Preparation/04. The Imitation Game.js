function imitationGame(arr){

    let encryptedMessage = arr.shift();
    let command = arr.shift();

    while(command != 'Decode'){
        let tokens = command.split('|');
        let action = tokens.shift();

        if(action == 'Move'){
            let lettersCount = Number(tokens.shift());
            let firstLetters = encryptedMessage.slice(0,lettersCount);
            encryptedMessage = encryptedMessage.replace(firstLetters, '');
            encryptedMessage += firstLetters;
        }else if(action == 'Insert'){
            let idx = Number(tokens.shift());
            let val = tokens.shift();
            encryptedMessage = encryptedMessage.slice(0, idx) + val + encryptedMessage.slice(idx);
        }else if(action == 'ChangeAll'){
            let [substring, replacement] = tokens;
            encryptedMessage = encryptedMessage.split(substring).join(replacement);
        }

        command = arr.shift();
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
    ]);