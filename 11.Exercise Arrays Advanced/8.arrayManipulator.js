function arrayManipulator(nums, commands) {
    for(let command of commands){
        let tokens = command.split(' ');
        let action = tokens[0];

        if(action == 'add'){
            let index = Number(tokens[1]);
            let num = Number(tokens[2]);
            nums.splice(index, 0, num);
        }else if(action == 'addMany'){
            let index = Number(tokens[1]);
            let numsToAdd = tokens.slice(2,);
            for(let num of numsToAdd){
                num = Number(num);
                nums.splice(index, 0, num);
                index++;
            }
        }else if(action == 'contains'){
            let num = Number(tokens[1]);
            let index = nums.indexOf(num);
            console.log(index);
        }else if(action == 'remove'){
            let index = Number(tokens[1]);
            nums.splice(index, 1);
        }else if(action == 'shift'){
            let rotations = Number(tokens[1]);

            for(let rotation = 1; rotation <= rotations; rotation++){
                let firstNum = nums.shift();
                nums.push(firstNum);
            }
        }else if(action == 'sumPairs'){
            let pairedArray = [];
            for(let i = 0; i < nums.length; i += 2){
                if(i + 1 < nums.length){
                    pairedArray.push(nums[i] + nums[i + 1]);
                }else{
                    pairedArray.push(nums[i]);
                }
            }
            nums = pairedArray;
        }else if(action == 'print'){
        console.log(`[ ${nums.join(', ')} ]`);
        }
    }
}


arrayManipulator([1, 2, 4, 5, 6, 7],
                 ['add 1 8', 'contains 1', 'contains 3', 'print']);