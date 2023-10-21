function blackFlag(arr){

    arr = arr.map(Number);
    let daysPirateLast = arr.shift();
    let dailyPlunder = arr.shift();
    let expectedPlunder = arr.shift();
    let plunder = 0;

    for(let i = 1; i <= daysPirateLast; i++){
        plunder += dailyPlunder;
        if(i % 3 == 0){
            plunder += (dailyPlunder / 2);
        }

        if(i % 5 == 0){
            plunder = plunder * 0.7;
        }
    }
    if(plunder >= expectedPlunder){
        console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
    }else{
        let left = plunder / expectedPlunder * 100
        console.log(`Collected only ${left.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["5",
"40",
"100"]);
blackFlag(["10",
"20",
"380"]);