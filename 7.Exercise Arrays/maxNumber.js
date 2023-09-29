function maxNumber(arr) {
    let topNums =  [];
    for(let i = 0; i < arr.length; i ++){
        let num = arr[i];
        let isTop = true;
        for(let m = i + 1; m < arr.length; m++){
            let rightNum = arr[m]
            if(rightNum >= num){
                isTop = false;
                break;
            }
        }
        if(isTop){
            topNums.push(num);
        }
    }
    console.log(topNums.join(" "));
}

maxNumber([1, 4, 3, 2]);