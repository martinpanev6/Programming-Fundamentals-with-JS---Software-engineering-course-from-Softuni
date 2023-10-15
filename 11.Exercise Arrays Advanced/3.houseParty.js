function houseParty(arr){
    let guests = [];

    for(let command of arr){
        let tokens = command.split(' ');
        let guestName = tokens[0];

        if(tokens.includes('not')){
            if(guests.includes(guestName)){
                let index = guests.indexOf(guestName);
                guests.splice(index, 1);
            }else{
                console.log(`${guestName} is not in the list!`);
            }
        }else{
            if(guests.includes(guestName)){
                console.log(`${guestName} is already in the list!`);
            }else{
                guests.push(guestName);
            }
        }
    }
    console.log(guests.join('\n'));
}

houseParty(['Allie is going!',
            'George is going!',
            'John is not going!',
            'George is not going!']);