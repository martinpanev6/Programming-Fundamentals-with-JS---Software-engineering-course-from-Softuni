function reverseInPlace(input) {
    for(let i = 0; i < input.length / 2; i++){
        let j = input.length - 1 - i;
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
    }
    console.log(input.join(' '));
}

reverseInPlace(['a', 'b', 'c', 'd']);