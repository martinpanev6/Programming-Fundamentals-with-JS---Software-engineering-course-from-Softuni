function replacing(str){
    let noRepStr = '';
    let prevChar = '';

    for(let char of str){
        if(char !== prevChar){
            noRepStr += char;
            prevChar = char;
        }
    }
    console.log(noRepStr);
}

replacing('aaaaabbbbbcdddeeeedssaa');