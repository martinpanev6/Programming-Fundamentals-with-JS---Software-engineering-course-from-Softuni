function triangleOfNums(maxRow){
    for(let num = 1; num <= maxRow; num++){
        console.log(`${num} `.repeat(num));
    }
}
triangleOfNums(3);