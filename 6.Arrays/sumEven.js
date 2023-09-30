function Sumeven(input){
    let sum = 0;
    let num = 0;
    for(let i = 0; i < input.length; i++){
        let even = Number(input[i]);
        if(even % 2 == 0){
            sum += even;
        }
    }
    console.log(sum);
}

Sumeven(['1','2','3','4','5','6'])