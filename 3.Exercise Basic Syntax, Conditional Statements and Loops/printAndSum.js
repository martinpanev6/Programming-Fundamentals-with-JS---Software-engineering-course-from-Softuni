function printAndSum(num1, num2){
    let sum = 0;
    let numbers = "";
    for(num1; num1 <= num2; num1++) {
        sum += num1;
        numbers += (num1 + " ");
    }
    console.log(numbers);
    console.log("Sum: " + sum);
}

printAndSum(5, 10);