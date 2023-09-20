function specialNums(num){
for(let i = 1; i <= num; i++){
    let strI = String(i);
    let sum = 0;
    for(let n = 0; n < strI.length; n++){
        let dig = Number(strI[n]);
        sum += dig;
    }
    if(sum == 5 || sum == 7 || sum == 11){
        console.log(`${i} -> True`);
    }else{
        console.log(`${i} -> False`);
    }
}
}

specialNums(15);