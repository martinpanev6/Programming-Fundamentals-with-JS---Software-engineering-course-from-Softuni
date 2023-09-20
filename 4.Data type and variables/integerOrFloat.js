function integerOrFloat(a, b, c){
    let sum = a + b + c;
    let strSum = String(sum);
    let isFloat = false;
    for(let i = 0; i < strSum.length; i++){
        if(strSum[i] == '.'){
            isFloat = true;
        }
    }
    console.log(`${sum} - ${isFloat ? 'Float' : 'Integer'}`);
}

integerOrFloat();