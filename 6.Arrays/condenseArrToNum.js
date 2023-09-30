function condenseArrToNum(arr) {
    let conArr = [];
    let sum = 0;
    
    for(let i = 0; i < arr.length - 1; i++){
        conArr[i] = arr[i] + arr[i + 1];
        conArr.push(conArr[i]);
        conArr.length = arr.length - 1;
    }
    console.log(conArr);
}

//condenseArrToNum([2,10,3]);
condenseArrToNum([5,0,4,1,2]);
//condenseArrToNum([1]);