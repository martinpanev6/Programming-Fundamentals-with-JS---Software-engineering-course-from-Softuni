function nonDecreasingSubset(arr) {
    let newArr = [arr[0]];
    let biggestNum = arr[0];

    for(let i = 1; i < arr.length; i++){
        let currentNum = arr[i];
        let nextNum = arr[i + 1];
        if(currentNum >= biggestNum){
            newArr.push(currentNum);
            biggestNum = currentNum;
        }
    }
    console.log(newArr.join(" "));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);