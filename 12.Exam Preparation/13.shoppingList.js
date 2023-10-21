function shoppingList(arr){

    let groceries = arr.shift().split('!');
    let command = arr.shift();

    while(command != "Go Shopping!"){
        let tokens = command.split(' ');
        let action = tokens[0];

        if(action == 'Urgent'){
            if(!groceries.includes(tokens[1])){
                groceries.unshift(tokens[1]);
            }
        }else if(action == 'Unnecessary'){
            if(groceries.includes(tokens[1])){
                let idx = groceries.indexOf(tokens[1]);
                groceries.splice(idx, 1);
            }
        }else if(action == 'Correct'){
            if(groceries.includes(tokens[1])){
                let idx = groceries.indexOf(tokens[1]);
                groceries[idx] = tokens[2];
            }
        }else if(action == 'Rearrange'){
            if(groceries.includes(tokens[1])){
                let idx = groceries.indexOf(tokens[1]);
                groceries.splice(idx, 1).push(tokens[1]);
            }
        }

        command = arr.shift();
    }
    console.log(groceries.join(', '));
}

shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]);
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);