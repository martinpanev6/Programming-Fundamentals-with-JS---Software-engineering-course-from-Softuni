function addAndSubtract(num1, num2, num3) {

    let sum = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let result1 = sum(num1, num2);
    let result2 = subtract(result1, num3);
    
    console.log(result2);
}

addAndSubtract(42, 58, 100);