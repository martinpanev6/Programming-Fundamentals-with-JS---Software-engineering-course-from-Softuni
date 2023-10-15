function distinctArray(arr) {
    let uniqeNums = [];

    for(let num of arr){
        if(!uniqeNums.includes(num))
        uniqeNums.push(num);
    }
    console.log(uniqeNums.join(' '));
}

distinctArray([7, 2, 3, 7, 4]);