function sumDigits(num){
    let strNum = String(num);
    let sum = 0;
    for(let i = 0; i < strNum.length; i++){
        let num2 = Number(strNum[i]);
        sum += num2
    }
    console.log(sum);
}

sumDigits(567)