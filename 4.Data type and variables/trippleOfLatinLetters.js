function trippleOf(n){
    let triplets = '';
    for(let i = 0; i < n; i++){
        let letter1 = String.fromCharCode(97 + i);
        for(let m = 0; m < n; m++){
            let letter2 = String.fromCharCode(97 + m);
            for(k = 0; k < n; k++){
                let letter3 = String.fromCharCode(97 + k);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

trippleOf(3);