function rotateArray(arr) {
    let rotations = Number(arr[arr.length - 1]);
    for(let i = 1; i <= rotations; i++){
        //for(let j = 0; j < arr.length - 1; j++)
        arr.unshift(arr[arr.length - 2]);
        arr.pop();
    }
    arr.pop();
    console.log(arr.join(" "));
}

rotateArray(['1', '2', '3', '4', '2']);
//rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);