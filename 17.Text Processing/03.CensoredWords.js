function censoredWords(str, censored){
    let printchar = '*'.repeat(censored.length);
    console.log(str.split(censored).join(printchar));
}

censoredWords('A small sentence with some words', 'small')