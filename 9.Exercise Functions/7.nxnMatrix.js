function nxnMatrix(n){
    for(let row = 1; row <= n; row++){
        let curRow = `${n} `.repeat(n);
        console.log(curRow);
    }
}

nxnMatrix(5);