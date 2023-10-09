function mathow(num, pow){
    let product = 1;
    for(let i = 0; i < pow; i++){
        product *= num;
    }
    console.log(product);
}

mathow(2, 4)