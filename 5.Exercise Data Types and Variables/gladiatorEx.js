function gladiatorEx(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){
let brokenHelmet = 0;
let brokenSword = 0;
let brokenShield = 0;
let brokenArmor = 0;
for(let i = 2; i <= lostFights; i += 2){
    brokenHelmet++;
}
for(let n = 3; n <= lostFights; n += 3){
    brokenSword++;
}
for(let m = 6; m <= lostFights; m += 6){
    brokenShield++;
}
for(let k = 12; k <= lostFights; k += 12){
    brokenArmor++;
}
console.log(`Gladiator expenses: ${((brokenHelmet * helmetPrice) + (brokenSword * swordPrice) + (brokenShield * shieldPrice) + (brokenArmor * armorPrice)).toFixed(2)} aureus`)
}

gladiatorEx(23,

    12.50,
    
    21.50,
    
    40,
    
    200);