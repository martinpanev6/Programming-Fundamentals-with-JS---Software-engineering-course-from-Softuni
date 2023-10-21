function inventory(arr){

    let journal = arr.shift().split(', ');
    let command = arr.shift();

    while(command != 'Craft!'){
        let tokens = command.split(' - ');
        let action = tokens[0];
        let item = tokens[1];
        if(action == 'Collect'){
            if(!journal.includes(item)){
                journal.push(item)
            }
        }else if(action == 'Drop'){
            if(journal.includes(item)){
                let index = journal.indexOf(item);
                journal.splice(index, 1);
            }
        }else if(action == 'Combine Items'){
            let combo = item.split(':');
            let [oldItem, newItem] = combo;
            if(journal.includes(oldItem)){
                let index = journal.indexOf(oldItem);
                journal.splice(index + 1, 0, newItem);
            }
        }else if(action == 'Renew'){
            if(journal.includes(item)){
                let index = journal.indexOf(item);
                journal.splice(index , 1);
                journal.push(item);
            }
        }
        command = arr.shift();
    }
    console.log(journal.join(', '));
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!']);
    inventory([
        'Iron, Wood, Sword', 
        'Collect - Gold', 
        'Drop - Wood', 
        'Craft!']);