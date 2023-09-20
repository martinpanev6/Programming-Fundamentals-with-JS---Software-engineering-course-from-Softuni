function englishName(num){
    let strNum = String(num);
    let lastdig = strNum[(strNum.length) - 1];
    lastdig = Number(lastdig);
    let wDig = '';
    switch(lastdig){
        case 0:
            wDig += 'zero';
            break
        case 1:
            wDig += 'one';
            break;
        case 2:
            wDig += 'two';
            break;
        case 3:
            wDig += 'three';
            break;
        case 4:
            wDig += 'four';
            break;
        case 5:
            wDig += 'five';
            break;
        case 6: 
            wDig += 'six';
            break;
        case 7:
            wDig += 'seven';
            break;
        case 8:
            wDig += 'eight';
            break;
        case 9:
            wDig += 'nine';
            break;
    }
    console.log(wDig);
}

englishName(432);