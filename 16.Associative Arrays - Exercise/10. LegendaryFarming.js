function legendaryFarming(arr){
    let keyMaterials = {shards: 0, fragments: 0, motes: 0};
    let junk = {};
    let legendaries = {shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath'};

    let materialsArr = arr.split(' ');
    for(let i = 0; i < materialsArr.length; i += 2){
        let qty = Number(materialsArr[i]);
        let material = materialsArr[i + 1].toLowerCase();

        if(material in keyMaterials){
            keyMaterials[material] += qty;
            if(keyMaterials[material] >= 250){
                let legendaryWon = legendaries[material];
                console.log(`${legendaryWon} obtained!`);
                keyMaterials[material] -= 250; 
                break;
            }
        }else{
            if(material in junk){
                junk[material] += qty;
            }else{
                junk[material] = qty;
            }
        }
    }

    let keyMaterialsentry = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for(let [material, qty] of keyMaterialsentry){
        console.log(`${material}: ${qty}`);
    }
    let junkEntry = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));
    for(let [material, qty] of junkEntry){
        console.log(`${material}: ${qty}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');