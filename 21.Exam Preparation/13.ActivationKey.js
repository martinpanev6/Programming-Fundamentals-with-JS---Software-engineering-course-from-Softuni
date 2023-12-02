function activationKey(arr){

    let rawActKey = arr.shift();
    let command = arr.shift();

    while(command != 'Generate'){

        let tokens = command.split('>>>');
        let action = tokens.shift();

        if(action == 'Contains'){
            let substring = tokens.shift();
            if(rawActKey.includes(substring)){
                console.log(`${rawActKey} contains ${substring}`);
            }else{
                console.log('Substring not found!');
            }
        }else if(action == 'Flip'){
            let casE = tokens[0];
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);
            if(casE == 'Upper'){
                rawActKey = rawActKey.slice(0, startIdx) + rawActKey.slice(startIdx, endIdx).toUpperCase() + rawActKey.slice(endIdx);
            }else if(casE == 'Lower'){
                rawActKey = rawActKey.slice(0, startIdx) + rawActKey.slice(startIdx, endIdx).toLowerCase() + rawActKey.slice(endIdx);
            }
            console.log(rawActKey);
        }else if(action == 'Slice'){
            let [startIdx, endIdx] = tokens;
            startIdx = Number(startIdx);
            endIdx = Number(endIdx);
            let substr = rawActKey.slice(startIdx, endIdx);
            rawActKey = rawActKey.replace(substr, '');
            console.log(rawActKey);
        }

        command = arr.shift();
    }
    console.log(`Your activation key is: ${rawActKey}`);
}

activationKey((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]));