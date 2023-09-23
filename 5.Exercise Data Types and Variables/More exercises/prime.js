function prime(num){
    let isPrime = true
    if(num == 1){
        isPrime == true;
    }
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? 'true' : 'false');
}

prime(11);