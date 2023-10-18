function numbers(str) {

    let nums = str.split(' ').map(Number);
    let avg = nums.reduce((acc, val) => acc + val) / nums.length;
    let topNums = nums
        .filter(num => num > avg)
        .sort((a, b) => b - a)
        .slice(0, 5);
    if(topNums.length == 0){
        console.log('No');
    }else{
        console.log(topNums.join(' '));
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');