function difference(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        if(num % 2 == 0){
            sumEven += num;
        }else{
            sumOdd += num;
        }
    }
    console.log(sumEven - sumOdd);
}

difference([1,2,3,4,5,6]);