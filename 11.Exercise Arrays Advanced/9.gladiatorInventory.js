function gladiatorInventory(arr) {
    
    let equpment = arr[0].split(' ');
    
    for(let i = 1; i < arr.length; i++){
        let commands = arr[i].split(' ');
        let action = commands[0];
        let item = commands[1];

        if(action == 'Buy'){
            if(!equpment.includes(item)){
                equpment.push(item);
            }
        }else if(action == 'Trash'){
            if(equpment.includes(item)){
            let idx = equpment.indexOf(item);
            equpment.splice(idx, 1);
            }
        }else if(action == 'Repair'){
            if(equpment.includes(item)){
                let idx = equpment.indexOf(item);
                equpment.splice(idx, 1);
                equpment.push(item);
            }
        }else if(action == 'Upgrade'){
            let tokens = item.split('-');
            if(equpment.includes(tokens[0])){
                let idx = equpment.indexOf(tokens[0]);
                equpment.splice(idx + 1, 0, tokens[0] + ':' + tokens[1])
            }
        }
    }
    console.log(equpment.join(' '));
    //console.log(commands);
}

//gladiatorInventory(['SWORD Shield Spear',
                    //'Buy Bag',
                    //'Trash Shield',
                    //'Repair Spear',
                    //'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear',
                    'Trash Bow',
                    'Repair Shield',
                    'Upgrade Helmet-V']);