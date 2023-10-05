function NthEl(arr) {
    let step = Number(arr[arr.length - 1]);
    let newArr = [];
    for(let i = 0; i < arr.length - 1; i += step){
        let el = arr[i];
        newArr.push(el);
    }
    console.log(newArr.join(" "));
}

NthEl(['5', '20', '31', '4', '20', '2']);
NthEl(['dsa', 'asd', 'test', 'test', '2']);
NthEl(['1', '2', '3', '4', '5', '6']);