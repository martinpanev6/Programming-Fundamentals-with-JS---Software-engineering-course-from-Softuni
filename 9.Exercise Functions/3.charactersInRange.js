function charRange(char1, char2) {

    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);

    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1, code2);

    printResult(minCode, maxCode);

    function printResult(code1, code2) {
        let result = '';

        for (let i = minCode + 1; i < maxCode; i++) {
            let curChar = String.fromCharCode(i);
            result += curChar + ' ';
        }
        console.log(result);
    }
}

charRange('a', 'f');