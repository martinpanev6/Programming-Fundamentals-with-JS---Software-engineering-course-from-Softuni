function secretChat(arr){

    let text = arr.shift();

    while(arr[0] != 'Reveal'){
        let line = arr.shift();
        let tokens = line.split(':|:');
        let command = tokens[0];

        switch(command){
            case 'InsertSpace':
                let index = Number(tokens[1]);
                let firstHalf = text.slice(0, index);
                let secondHalf = text.slice(index);
                text = firstHalf + ' ' + secondHalf;
                break;
            case 'Reverse':
                let substring = tokens[1];
                let firstIndex = text.indexOf(substring);
                if(firstIndex == -1){
                    console.log('error');
                    continue;
                }
                let left = text.slice(0, firstIndex);
                let right = text.slice(firstIndex + substring.length);
                text = left + right + substring.split('').reverse().join('');
                break;
            case 'ChangeAll':
                let match = tokens[1];
                let replacement = tokens[2];
                let parts = text.split(match);
                text = parts.join(replacement);
                break;
        }
        console.log(text);
    }

    console.log(`You have a new text message: ${text}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
    ]);