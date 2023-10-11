function processOddNums(arr) {
    console.log(arr
    .filter((x, i) => i % 2 != 0)
    .map(x => x * 2)
    .reverse()
    .join(' '));
}

processOddNums([10, 20, 30, 40, 50, 60]);