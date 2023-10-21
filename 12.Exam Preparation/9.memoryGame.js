function memoryGame(arr) {
    
    let sequence = arr.shift().split(' ');
    let movesCount = 0;
    let curCommand = arr.shift();

    while (curCommand != 'end') {
        
        let tokens = curCommand.split(' ').map(Number);
        let idx1 = tokens.shift();
        let idx2 = tokens.shift();
        movesCount++;

        if (idx1 == idx2 || ((idx1 < 0 || idx1 >= sequence.length) || (idx2 < 0 || idx2 >= sequence.length))) {
            let addEl = '-' + movesCount + 'a';
            let index = sequence.length / 2;
            sequence.splice(index, 0, addEl, addEl);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (sequence[idx1] == sequence[idx2]) {
            console.log(`Congrats! You have found matching elements - ${sequence[idx1]}!`);
            let element = sequence[idx1];
            sequence.splice(idx1, 1);
            let index = sequence.indexOf(element);
            sequence.splice(index, 1);
        } else if (sequence[idx1] != sequence[idx2]) {
            console.log("Try again!");
        }

        if (sequence.length == 0) {
            console.log(`You have won in ${movesCount} turns!`);
            return;
        }

        curCommand = arr.shift();
    }

    console.log('Sorry you lose :(');
    console.log(sequence.join(' '));
}

memoryGame([
"1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]);
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"]);
memoryGame([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"]);