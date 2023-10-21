function shootForTheWin(arr) {

    let sequence = arr.shift().split(' ').map(Number);
    let command = arr.shift();
    let shotCount = 0;
    let indexes = [];

    while (command != 'End') {
        
        let idx = Number(command);
        
        if (indexes.includes(idx) || (idx < 0 || idx >= sequence.length)) {
            command = arr.shift();
            continue;
        } else {
            indexes.push(idx);
        }

        for (let i = 0; i < sequence.length; i++) {
            
            if (!indexes.includes(i)) {
                
                if (sequence[i] > sequence[idx]) {
                    sequence[i] -= sequence[idx];
                } else {
                    sequence[i] += sequence[idx];
                }

            }

        }

        sequence.splice(idx, 1, -1);
        shotCount++;

        command = arr.shift();
    }
    
    console.log(`Shot targets: ${shotCount} -> ${sequence.join(' ')}`);
}


shootForTheWin(['30 30 12 60 54 66',
    '5',
    '2',
    '4',
    '0',
    'End'])
shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);