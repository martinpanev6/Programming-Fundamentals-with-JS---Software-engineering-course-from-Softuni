function palindromIntegers(arr) {
    for(let nums of arr){
        let isPalindrome = checkIfPalindrome(nums);
        console.log(isPalindrome);
    }

    function checkIfPalindrome(num) {
        let numAsStrring = String(num);
        let reverseNum = '';

        for(let i = numAsStrring.length - 1; i >= 0; i--){
            let curChar = numAsStrring[i];
            reverseNum += curChar;
        }
        let isPalindrome = numAsStrring == reverseNum;
        return isPalindrome;
    }
}

palindromIntegers([123, 323, 421, 121])