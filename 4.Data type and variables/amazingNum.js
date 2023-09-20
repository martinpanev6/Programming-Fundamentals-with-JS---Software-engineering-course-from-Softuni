function amazingNum(num){
    sumOfDig = 0
    let strnum = String(num);
    for(let i = 0; i < strnum.length; i++){
        sumOfDig += Number(strnum[i]);
    }
    let sumstr = String(sumOfDig);
    let isAmazing = 'False';
    for(let i = 0; i < sumstr.length; i++){
        if(sumstr[i] == 9){
            isAmazing = 'True';
        }
    }
    console.log(`${num} Amazing? ${isAmazing}`)
}

amazingNum(911);