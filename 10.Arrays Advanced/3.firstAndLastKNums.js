function firstAndLastKNums(arr) {
    let integer = arr.shift();
    console.log((arr.slice(0, integer)).join(' '));
    console.log((arr.slice(-integer)).join(' '));
}

firstAndLastKNums([2, 7, 8, 9]);
//firstAndLastKNums([3, 6, 7, 8, 9]);