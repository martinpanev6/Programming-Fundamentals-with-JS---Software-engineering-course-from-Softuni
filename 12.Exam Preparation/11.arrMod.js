function arrModifier(arr) {
    let array = arr.shift().split(' ').map(Number);
    let end = arr.pop();
    for(let el of arr){
        let tokens = el.split(' ');
        let action = tokens.shift();
        if(action == 'swap'){
            let idx1 = Number(tokens.shift());
            let idx2 = Number(tokens.shift());
            let first = array[idx1];
            let second = array[idx2];
            array[idx1] = second;
            array[idx2] = first;
        }else if(action == 'multiply'){
            let idx1 = Number(tokens.shift());
            let idx2 = Number(tokens.shift());
            let first = array[idx1];
            let second = array[idx2];
            let multiplied = first * second;
            array[idx1] = multiplied;
        }else if(action == 'decrease'){
            for(let i = 0; i < array.length; i++){
                array[i] -= 1
            }
        }
    }
    console.log(array.join(', '));
}

arrModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);
arrModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end']);