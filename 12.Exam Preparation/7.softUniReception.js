function softUniRec(arr) {
    
    let questions = Number(arr.pop());
    let handledQuestion = 0;
    let hours = 0
    
    while (handledQuestion < questions) {
        
        hours++;
        
        for (let i = 0; i < arr.length; i++) {
            
            handledQuestion += Number(arr[i]);
            
            if (handledQuestion >= questions) {
                break;
            }
        }

        if (hours % 4 == 0) {
            hours++;
        }
    
    }
    
    console.log(`Time needed: ${hours}h.`);
}

softUniRec(['5', '6', '4', '20']);
softUniRec(['1', '2', '3', '45']);
softUniRec(['3', '2', '5', '40']);