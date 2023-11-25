function race(arr){
    let names = arr.shift().split(", ");
    let command = arr.shift();

    let results = {};

    names.forEach(name => results[name] = 0);

    let letterPatern = /[A-Za-z]/gi;
    let digitPattern = /[1-9]/g;

    while (command != "end of race") {
        let letterMatches = command.match(letterPatern);
        let name = letterMatches.join('');
        let digitMatches = command.match(digitPattern);
        let distance = digitMatches.map(Number).reduce((acc, value) => acc + value);

        if(name in results){
            results[name] += distance;
        }

        command = arr.shift();
    }

    let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortedResults[0][0]}`);
    console.log(`2nd place: ${sortedResults[1][0]}`);
    console.log(`3rd place: ${sortedResults[2][0]}`);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);