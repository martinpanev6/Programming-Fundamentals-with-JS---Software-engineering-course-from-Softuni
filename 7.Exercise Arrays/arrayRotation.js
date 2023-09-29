function arrRotation(arr, rotationCounts) {
    for(let rotation = 1; rotation <= rotationCounts; rotation ++){
        let firstEl = arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(" "));
}

arrRotation([51, 47, 32, 61, 21], 2);