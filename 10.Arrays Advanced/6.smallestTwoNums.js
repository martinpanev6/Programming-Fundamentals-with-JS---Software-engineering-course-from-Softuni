function smallestTwoNums(arr){
    console.log(arr.sort((a, b) => a - b).slice(0, 2).join(' '));
}
smallestTwoNums([3,5,-9,0,5,1,-12]);