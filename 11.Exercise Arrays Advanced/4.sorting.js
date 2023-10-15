function sorting(arr) {
    let sortedArray = arr.sort((a, b) => a - b);
    let finalArray = [];

    while(sortedArray.length > 0){
        let maxEl = sortedArray.pop();
        let minNum = sortedArray.shift();

        finalArray.push(maxEl);
        finalArray.push(minNum);
    }

    console.log(finalArray.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);