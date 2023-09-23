function calculator(num1, ope, num2){
    switch(ope){
        case '+':
            console.log((num1 + num2).toFixed(2));
            break;
        case '-':
            console.log((num1 - num2).toFixed(2));
            break;
        case '/':
            console.log((num1 / num2).toFixed(2));
            break;
        case '*':
            console.log((num1 * num2).toFixed(2));
            break;
    }
}

calculator(5, '+', 10);