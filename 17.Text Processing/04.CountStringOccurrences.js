function countStrOccur(str, word){
    let sentence = str.split(' ');
    let count = 0;
    for(let el of sentence){
        if(el == word){
            count++;
        }
    }
    console.log(count);
}

countStrOccur('This is a word and it also is a sentence',
'is');