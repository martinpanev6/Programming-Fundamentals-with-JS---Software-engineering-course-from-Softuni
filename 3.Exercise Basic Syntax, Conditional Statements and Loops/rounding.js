function rounding(num, n){
    if(n > 15){
        n = 15
    }
    let fixedNum = num.toFixed(n);
    console.log(parseFloat(fixedNum));
}

rounding();