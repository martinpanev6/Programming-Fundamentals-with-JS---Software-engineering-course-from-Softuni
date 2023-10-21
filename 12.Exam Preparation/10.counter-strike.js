function counterStrike(arr) {

    let energy = Number(arr.shift());
    let command = arr.shift();
    let wonBattle = 0;

    while (command != 'End of battle') {
        
        let distance = Number(command);

        if(energy >= distance){
            energy -= distance;
            wonBattle++;
        }else{
            console.log(`Not enough energy! Game ends with ${wonBattle} won battles and ${energy} energy`);
            break;
        }

        if (wonBattle % 3 == 0) {
            energy += wonBattle;
        }

        command = arr.shift();

    }
    if(command == 'End of battle'){
    console.log(`Won battles: ${wonBattle}. Energy left: ${energy}`);
    }
}

counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);