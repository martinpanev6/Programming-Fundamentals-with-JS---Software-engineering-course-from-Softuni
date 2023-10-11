function negativeAndPositive(arr) {
    let result = [];
    for(let numAsString of arr){
        let curNum = Number(numAsString);
        if(curNum < 0){
            result.unshift(curNum);
        }else{
            result.push(curNum);
        }
    }
    for(let num of result){
        console.log(num);
    }
}

//negativeAndPositive(['7', '-2', '8', '9']);
negativeAndPositive(['3', '-2', '0', '-1']);