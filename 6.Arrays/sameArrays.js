function equalArrays(arr1, arr2) {
    let sum = 0; 
    let identical = true;

    for(let i = 0; i < arr1.length; i ++){
        sum += Number(arr1[i]);

        let num1 = Number(arr1[i]);
        let num2 = Number(arr2[i]);

        if(num1 !== num2){
            identical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }

    if(identical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

//equalArrays(['10','20','30'], ['10','20','30']);
//equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);