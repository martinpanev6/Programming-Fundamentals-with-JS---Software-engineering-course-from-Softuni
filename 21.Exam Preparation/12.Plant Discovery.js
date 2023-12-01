function plantDiscovery(arr){

    let n = Number(arr.shift());
    let exhibition = {};

    for(let i = 0; i < n; i++){
        let line = arr.shift();
        let [plant, rarity] = line.split('<->');
        rarity = Number(rarity);
            exhibition[plant] = {rarity: rarity, rating: []};
    }

    let command = arr.shift();

    while(command != 'Exhibition'){

        let [action, tokens] = command.split(': ');
        tokens = tokens.split(' - ');
        if(action == 'Rate'){
            let [plant, rating] = tokens;
            if(plant in exhibition){
            rating = Number(rating);
            exhibition[plant].rating.push(rating);
            }else{
                console.log('error');
            } 
        }else if(action == 'Update'){
            let [plant, newRarity] = tokens;
            if(plant in exhibition){
            newRarity = Number(newRarity);
            exhibition[plant].rarity = newRarity;
            }else{
                console.log('error');
            }
        }else if(action == 'Reset'){
            let plant = tokens.shift();
            if(plant in exhibition){
            exhibition[plant].rating = [];
            }else{
                console.log('error');
            }
        }

        command = arr.shift();
    }
    let entries = Object.entries(exhibition);
    console.log('Plants for the exhibition:');
    for(let [plant, stats] of entries){
        let avg = 0;
        if(stats.rating.length == 0){
            avg = 0;
        }else{
            for(let n of stats.rating){
                avg += n;
            }
            avg = avg / stats.rating.length;
        }
        console.log(`- ${plant}; Rarity: ${stats.rarity}; Rating: ${avg.toFixed(2)}`);
    }
}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);