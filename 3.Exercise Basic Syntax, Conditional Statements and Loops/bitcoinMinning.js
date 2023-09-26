function bitcoinMinning(input) {
    const gold1g = 67.5;
    const bitcoin1 = 11949.16;
    let goldAmount = 0;
    let bitcoin = 0;
    let money = 0;
    let firstBit = 0;
    let day = 0;

    for(let i = 0; i < input.length; i++){
        day = i + 1;
        if(day % 3 == 0){
            goldAmount = Number(input[i]) * 0.7;
        }else{
            goldAmount = Number(input[i]);
        }
        money += (goldAmount * gold1g);
        while(money >= bitcoin1){
            bitcoin++;
            money = money - bitcoin1;
        }
        if(bitcoin == 1){
            firstBit = day;
        }
        }
        console.log(`Bought bitcoins: ${bitcoin}`);
        if(bitcoin > 0){
        console.log(`Day of the first purchased bitcoin: ${firstBit}`);
        }
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    }


bitcoinMinning([3124.15, 504.212, 2511.124]);