function passwordReset(arr){

    let password = arr.shift();

    let command = arr.shift();

    while(command != 'Done'){

        let tokens = command.split(' ');
        let action = tokens.shift();

        if(action == 'TakeOdd'){
            let letters = password.split('');
            let newPass = '';
            for(let i = 0; i < letters.length; i++){
                if(i % 2 != 0){
                    newPass += letters[i];
                }
                password = newPass;
            }
            console.log(password);
        }else if(action == 'Cut'){
            let [idx, length] = tokens;
            idx = Number(idx);
            length = Number(length);
            substring = password.slice(idx, idx + length);
            password = password.replace(substring, '');
            console.log(password);
        }else if(action == 'Substitute'){
            let [substring, substitute] = tokens;
            if(password.includes(substring)){
                password = password.split(substring).join(substitute);
                console.log(password);
            }else{
                console.log('Nothing to replace!');
            }
        }

        command = arr.shift();
    }
    console.log(`Your password is: ${password}`);

}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);