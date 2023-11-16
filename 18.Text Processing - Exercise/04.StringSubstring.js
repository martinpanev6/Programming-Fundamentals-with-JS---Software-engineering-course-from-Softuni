function stringSubstring(word, str){
    let sentence = str.toLowerCase().split(' ');
    let isIncluded = false;
    for(let el of sentence){
    if(el == word){
        isIncluded = true;
        break;
    }
    }
    if(isIncluded){
        console.log(word);
    }else{
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript',
'JavaScript is the best programming language');