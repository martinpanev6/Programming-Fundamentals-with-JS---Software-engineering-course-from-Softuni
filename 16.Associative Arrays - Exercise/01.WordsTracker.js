function wordsTracker(arr){
    let givenWords = arr.shift().split(" ");
    let occurrences = {};
    for(let word of givenWords){
     occurrences[word] = 0;
    }
    for(let word of arr){
        if(word in occurrences){
         occurrences[word]++;
        }
    }
    let entries = Object.entries(occurrences).sort((a, b) => b[1] - a[1])
    for(let [word, count] of entries){
        console.log(`${word} - ${count}`);
    }
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the',  'occurrences', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);
wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);