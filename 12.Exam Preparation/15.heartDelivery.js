function heartDelivery(arr){

    let neighbourhood = arr.shift().split('@').map(Number);
    let command = arr.shift();
    let index = 0;
    let ready = [];

    while(command != 'Love!'){
        let [action, value] = command.split(" ");
        let num = Number(value);
        index += num;
        if(index >= neighbourhood.length){
            index = 0;
        }
        neighbourhood[index] -= 2;
        if(ready.includes(index)){
            console.log(`Place ${index} already had Valentine's day.`);
            command = arr.shift();
            continue;
        }
        if(neighbourhood[index] <= 0){
            console.log(`Place ${index} has Valentine's day.`);
            ready.push(index);
        }

        command = arr.shift();
    }
    console.log(`Cupid's last position was ${index}.`);
    if(ready.length == neighbourhood.length){
        console.log('Mission was successful.');
    }else{
        console.log(`Cupid has failed ${neighbourhood.length - ready.length} places.`);
    }
}

heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]);
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);