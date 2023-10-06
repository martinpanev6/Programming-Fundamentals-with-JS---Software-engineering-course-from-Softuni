function isMagical(matrix) {
    let referenceSum = matrix[0].reduce((acc, num) => acc + num, 0);
    let result = true;
    for (let i = 1; i < matrix.length; i++) {
        let rowSum = matrix[i].reduce((acc, num) => acc + num, 0);
        if (rowSum !== referenceSum) {
            result =  false;
        }
    }
    
    for (let i = 0; i < matrix[0].length; i++) {
        let colSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            colSum += matrix[j][i];
        }
        if (colSum !== referenceSum) {
            result = false;
        }
    }
    result = true;
    console.log(result);
}

isMagical([[4, 5, 6],[6, 5, 4],[5, 5, 5]])