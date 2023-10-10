function oddAndEvensum(num) {
    
    let stringNum = num.toString();
    let [evenSum, oddSum] = calcEvenOdd(stringNum);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function calcEvenOdd(str) {

        let evenSum = 0;
        let oddSum = 0;


        for (let char of stringNum) {
            let digit = Number(char);
            if (digit % 2 == 0) {
                evenSum += digit;
            } else {
                oddSum += digit;
            }
        }

        return [evenSum, oddSum]

    }
}

oddAndEvensum(1234566);