function theLift(arr) {

    let maxCap = 4;
    let waitingPeople = Number(arr.shift());
    let currStLift = arr.shift().split(' ').map(Number);

    for (let i = 0; i < currStLift.length; i++) {

        let curEl = currStLift[i];
        let add = maxCap - curEl;

        if (waitingPeople - add < 0) {
            currStLift[i] += waitingPeople;
            waitingPeople = 0;
            break;
        } else {
            currStLift[i] += add;
            waitingPeople -= add;
        }
    }

    let check = currStLift.filter(item => item < 4);

    if (waitingPeople <= 0 && check.length > 0) {
        console.log("The lift has empty spots!");
        console.log(currStLift.join(' '));
    } else if (waitingPeople > 0 && check.length == 0) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(currStLift.join(' '));
    } else if (waitingPeople == 0 && check.length == 0) {
        console.log(currStLift.join(' '));
    }
}

theLift(["15", "0 0 0 0 0"]);
theLift(["10", "0 2 0"]);
