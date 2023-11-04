function inventory(arr){
    let heroDataObj = {};
 
    for (let heroData of arr) {
        let [heroName, level, items] = heroData.split(" / ");
 
        let heroObj = {
            hero: heroName,
            level: Number(level)
        };
        if(items.length > 1){
            heroObj.items = items; 
        }
 
        heroDataObj[heroName] = heroObj;
    }
 
    let heroNames = Object.keys(heroDataObj);
 
    heroNames.sort((a, b) => heroDataObj[a].level - heroDataObj[b].level);
 
    for (let heroName of heroNames) {
        console.log(`Hero: ${heroDataObj[heroName].hero}`);
        console.log(`level => ${heroDataObj[heroName].level}`);
        console.log(`items => ${heroDataObj[heroName].items}`);
 
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
inventory([

    'Batman / 2 / Banana, Gun',
    
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);