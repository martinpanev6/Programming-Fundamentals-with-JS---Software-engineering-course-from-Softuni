function revealWords(word, sentence){
    let words = word.split(', ');
    let newSentence = "";
    while(words.length > 0){
        let curWord = words.shift();
        sentence = sentence.replace("*".repeat(curWord.length), curWord);
    }
    console.log(sentence);
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');