function solved(yieldd){
    let spice = 0;
    let days = 0;
    
    while(yieldd >= 100){
        days++;
        spice += yieldd - 26;
        yieldd -= 10;
    }
    
    if(spice >= 26){
        spice -= 26;
    }
    console.log(days);
    console.log(spice);
}

solved(111);