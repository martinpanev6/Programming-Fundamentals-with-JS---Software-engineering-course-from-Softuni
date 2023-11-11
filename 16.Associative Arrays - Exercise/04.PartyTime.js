function solve(input) {
 
    let partyIndex = input.indexOf("PARTY")
    let guestList = input.slice(0, partyIndex)
    let arrivals = input.slice(partyIndex + 1)
 
    for (let guest of arrivals) {
        if (guestList.includes(guest)) {
            let index = guestList.indexOf(guest);
            guestList.splice(index, 1);
        }
    }
 
    let counter = guestList.length;
    console.log(counter)
 
 
    let count = 0;
    for (let i = 0; i < guestList.length; i++) {
        if (count == guestList.length) {
            break;
        }
        count++;
        let char = guestList[i][0];
        if (char != '0' && char != '1' && char != '2' && char != '3' && char != '4' && char != '5' && char != '6' && char != '7' && char != '8' && char != '9') {
            let movedWord = guestList.splice(i, 1)
            i--;
            guestList.push(movedWord[0])
        }
    }
 
    for (let guest of guestList) {
        console.log(guest)
    }
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ]);