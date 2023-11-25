function netherRealsm(str) {
    let demNames = str.split(/[, ]+/);
    demNames.sort((a, b) => a.localeCompare(b));

    let healthPattern = /[^0-9\+\-\*\/\.\, ]/g;
    let damagePattern = /[\+-]*\d+[.\d+]*/g;
    let actionPattern = /[*\/]/g;

    let health = {};
    let damage = {};

    for (let dem of demNames) {

        let helathMatch = dem.match(healthPattern);
        let individualHealth = 0;

        if(helathMatch){
        for (let char of helathMatch) {
            let code = char.charCodeAt();
            individualHealth += Number(code);
        }
        }

        let damageMatch = dem.match(damagePattern);
        let individualDamage = 0;
        if (damageMatch) {
            for (let char of damageMatch) {
                individualDamage += Number(char);
            }
        }

        let actionMatch = dem.match(actionPattern);
        if (actionMatch) {
            for (let char of actionMatch) {
                if (char == '*') {
                    individualDamage *= 2;
                } else {
                    individualDamage /= 2;
                }
            }
        }
        health[dem] = individualHealth;
        damage[dem] = individualDamage;
    }
    let healthValue = Object.values(health);
    let damageValue = Object.values(damage);
    let names = Object.keys(health);

    for (let i = 0; i < names.length; i++) {
        console.log(`${names[i]} - ${healthValue[i]} health, ${damageValue[i].toFixed(2)} damage`);
    }
}

netherRealsm('M3ph-0.5s-0.5t0.0**');
netherRealsm('M3ph1st0**, Azazel');