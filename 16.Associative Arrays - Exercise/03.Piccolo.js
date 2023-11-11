function piccolo(input) {
 
    let parkingLot = [];
 
    for(let current of input) {
        let tokens = current.split(', ');
        let command = tokens.shift();
        let carNumber = tokens.shift();
 
        if(command == "IN") {
            if (!parkingLot.includes(carNumber)) parkingLot.push(carNumber);
 
        } else if (command == "OUT") {
            let index = parkingLot.indexOf(carNumber);
            if (parkingLot.includes(carNumber)) parkingLot.splice(index, 1);
        }
 
    }
    parkingLot.sort();
    if(parkingLot.length == 0) {
        console.log(`Parking Lot is Empty`);
    }
    console.log(parkingLot.join('\n'));
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);