function factorialDivision(n1, n2){
    let fac1 = n1;
    let fac2 = n2;
    for(let i = n1 - 1; i >= 1; i--){
        fac1 = fac1 * i;
    }
    for(let i = n2 - 1; i >= 1; i--){
        fac2 = fac2 * i;
    }

    let result = (fac1 / fac2).toFixed(2);
    console.log(result);
}

factorialDivision(5, 2);
factorialDivision(6, 2);