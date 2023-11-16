function modernTimes(str){
    let sentence = str.split(" ");
    for(let word of sentence){
        if(word.startsWith("#") && word.length > 1){
            let newWord = word.substring(1, word.length);
            let isSpecial = true;
            for(let el of newWord){
                if((el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) || (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122)){
                    isSpecial = true;
                }else{
                    isSpecial = false;
                    break;
                }
            }
            if(isSpecial){
                console.log(newWord);
            }
        }
        
    }
}

modernTimes('Nowadays everyone uses # to tag a #specia1l word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');