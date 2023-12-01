function pianist(arr) {

    let count = Number(arr.shift());
    let pianoPieces = {};

    for (let i = 0; i < count; i++) {
        let command = arr.shift();
        let [piece, composer, key] = command.split('|');
        pianoPieces[piece] = { composer, key };
    }

    let command = arr.shift();

    while (command != 'Stop') {

        let tokens = command.split('|');
        let action = tokens.shift();

        if (action == 'Add') {
            let [piece, composer, key] = tokens;
            if (piece in pianoPieces) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pianoPieces[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (action == 'Remove') {
            let piece = tokens.shift();
            if (piece in pianoPieces) {
                delete pianoPieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (action == 'ChangeKey') {
            let [piece, newKey] = tokens;
            if (piece in pianoPieces) {
                pianoPieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        command = arr.shift();
    }

    let entries = Object.entries(pianoPieces);

    for (let [piece, specs] of entries) {
        console.log(`${piece} -> Composer: ${specs.composer}, Key: ${specs.key}`);
    }
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);