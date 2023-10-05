function magicNums(arr, sum) {
    for(let i = 0; i < arr.length; i++){
        let num1 = arr[i];
        let num2 = 0;
        for(let j = i + 1; j < arr.length; j++){
            num2 = arr[j];
            if(num1 + num2 == sum){
                console.log(num1 + " " + num2);
            }
        }
    }
}

//magicNums([1, 7, 6, 2, 19, 23], 8);
magicNums([14, 20, 60, 13, 7, 19, 8], 27);