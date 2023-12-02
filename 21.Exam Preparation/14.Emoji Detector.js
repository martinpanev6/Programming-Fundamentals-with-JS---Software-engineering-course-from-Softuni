function emojiDetector([text]){

    let patternEmoji = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/gm;
    let emojies = [];
    let matches = text.matchAll(patternEmoji);
    let numbers = text.match(/\d/gm);
    let printEmojies = text.match(patternEmoji);
    let objectEmoji = {};

    for (let match of matches){
        let emoji = match.groups.emoji;
        emojies.push(emoji)
    }

    for(let i = 0; i < emojies.length; i++){
        objectEmoji[emojies[i]] = printEmojies[i];
    }

    let coolThreashold = 1;
    for(let number of numbers){
        number = Number(number);
        coolThreashold *= number;
    }
    
    for(let emoji of emojies){
        let coolnes = 0;
        for(let el of emoji){
            coolnes += el.charCodeAt();
        }
        if (coolnes < coolThreashold){
            delete objectEmoji[emoji];
        }
    }
    console.log(`Cool threshold: ${coolThreashold}`);
    console.log(`${emojies.length} emojis found in the text. The cool ones are:`);
    
    let entries = Object.entries(objectEmoji);
    for(let entry of entries){
        console.log(entry[1]);
    }


}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);