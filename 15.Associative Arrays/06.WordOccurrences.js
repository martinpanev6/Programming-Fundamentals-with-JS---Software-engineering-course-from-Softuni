function wordOccurences(arr){
    let map = new Map();
    for(let el of arr){
        if(!map.has(el)){
            let quantity = 1;
            map.set(el, quantity);
        }else{
            let curQuantity = map.get(el);
            curQuantity++;
            map.set(el, curQuantity);
        }
    }
    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);
    for(let item of sorted){
        console.log(`${item[0]} -> ${item[1]} times`);
    }
}

wordOccurences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"]);