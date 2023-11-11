function minorTask(arr){
    let resources = {};
    for(let i = 0; i < arr.length; i += 2){
        let resorce = arr[i];
        let quantity = Number(arr[i + 1]);
        if(resorce in resources){
            resources[resorce] += quantity;
        }else{
            resources[resorce] = quantity;
        }
    }

    let entries = Object.entries(resources);
    for(let [resorce, quantity] of entries){
        console.log(`${resorce} -> ${quantity}`);
    }
}

minorTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]);