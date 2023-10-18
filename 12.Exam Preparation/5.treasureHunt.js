function tresureHunt(arr) {

    let loot = arr.shift().split('|');
    let command = arr.shift();

    while (command != 'Yohoho!') {

        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action == 'Loot') {
            let items = tokens.filter(item => !loot.includes(item));
            for (let item of items) {
                loot.unshift(item);
            }
        } else if (action == 'Drop') {
            let idx = Number(tokens.shift());
            if (idx >= 0 && idx < loot.length) {
                let removedItem = loot.splice(idx, 1).shift();
                loot.push(removedItem);
            }
        } else if (action == 'Steal') {
            let count = Number(tokens.shift());
            let stolenItems = loot.splice(-count);
            console.log(stolenItems.join(', '));
        }
        command = arr.shift();
    }
    if (loot.length == 0) {
        console.log("Failed treasure hunt.");
    } else {

        let totalGain = 0;
        for (let item of loot) {
            totalGain += item.length;
        }
        let avg = totalGain / loot.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }
}

tresureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);

tresureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);