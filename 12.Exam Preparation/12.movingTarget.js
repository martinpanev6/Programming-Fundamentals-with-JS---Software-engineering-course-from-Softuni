function movingTarget(arr) {

    let sequence = arr.shift().split(' ').map(Number);
    let command = arr.shift();

    while (command != 'End') {
        
        let tokens = command.split(' ');
        let action = tokens.shift();
        let [index, num] = tokens.map(Number);

        if (action == 'Shoot') {
            
            if (index >= 0 && index < sequence.length) {
                sequence[index] -= num;
                
                if (sequence[index] <= 0) {
                    sequence.splice(index, 1);
                }

            }

        } else if (action == 'Add') {
            
            if (index >= 0 && index < sequence.length) {
                sequence.splice(index, 0, num);
            } else {
                console.log("Invalid placement!");
            }

        } else if (action == 'Strike') {
            
            if (index - num >= 0 && index + num < sequence.length) {
                sequence.splice(index - num, num * 2 + 1);
            } else {
                console.log('Strike missed!');
                command = arr.shift();
                continue;
            }

        }

        command = arr.shift();
    }
    
    console.log(sequence.join('|'));
}

//movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    //"End"]);
    movingTarget(["1 2 3 4 5",
        "Strike 0 1",
        "End"]);