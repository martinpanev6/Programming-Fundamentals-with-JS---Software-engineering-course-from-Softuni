function sumOfOdd(n){
    let oddCount = 0;
    let Oddsum = 0;
    for(let i = 1; i < 300; i += 2){
        if(oddCount >= n){
            break;
        }
        oddCount++;
        Oddsum += i;
        console.log(i);
    }
    console.log(`Sum: ${Oddsum}`);
}

sumOfOdd(3);