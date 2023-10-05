function maxSequenceOfEqualSum(arr) {
    let longestSeq = [];
    for(let i = 0; i < arr.length; i++){
        let currNum = arr[i];
        let currSequence = [currNum];
        for(let j = i + 1; j < arr.length; j++){
            let nextNum = arr[j];
            if(currNum == nextNum){
                currSequence.push(nextNum);
            }else{
                break;
            }
        }
        if(currSequence.length > longestSeq.length){
            longestSeq = currSequence;
        }
    }
    console.log(longestSeq.join(" "));
}

//maxSequenceOfEqualSum([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualSum([1, 1, 1, 2, 3, 1, 3, 3]);