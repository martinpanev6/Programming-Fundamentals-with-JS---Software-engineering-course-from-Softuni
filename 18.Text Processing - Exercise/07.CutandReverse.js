function cutAndReverse(str){
    let middleIndex = str.length / 2;
    let firstHalf = str.substring(0, middleIndex).split('').reverse().join('');
    let secondHalf = str.substring(middleIndex, str.length).split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');