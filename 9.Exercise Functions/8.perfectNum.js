function perfectNum(n){
    let sumPropDev = 0;

    for(let div = 1; div < n; div++){
        if(n % div == 0){
            sumPropDev += div;
        }
    }
    if(sumPropDev == n){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }
}

perfectNum(6);
perfectNum(1236498);