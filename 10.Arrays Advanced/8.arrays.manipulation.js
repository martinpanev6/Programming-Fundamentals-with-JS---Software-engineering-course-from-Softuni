function arraysManipulation(arr) {
    let array = (arr[0]).split(' ');
    for(let i = 1; i < arr.length; i++){
        let manipulation = (arr[i]).split(' ');
        let command = manipulation[0];
        let value = manipulation[1];
        let index = manipulation[2];
        if(command == 'Add'){
            array.push(value);
        }else if(command == 'Remove'){
            for(let j = 0; j < array.length; j++){
                if(array[j] == value){
                    array.splice(j, 1);
                }
            }
        }else if(command == 'RemoveAt'){
            array.splice(Number(value), 1);
        }else if(command == 'Insert'){
            array.splice(index, 0, value);
        }
    }
    console.log(array.join(' '));
}

arraysManipulation(['4 19 2 53 6 43',
                    'Add 3',
                    'Remove 2',
                    'RemoveAt 1',
                    'Insert 8 3']);