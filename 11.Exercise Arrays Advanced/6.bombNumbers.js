function bombNumbers(nums, bombInfo) {
    let [bombNum, bombPower] = bombInfo;

    while(nums.includes(bombNum)){
        let index = nums.indexOf(bombNum);
        nums.splice(Math.max(0, index - bombPower), bombPower * 2 + 1, 0);
    }

    let sum = 0;

    for(let num of nums){
        sum += num;
    }
    console.log(sum);
}

bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);