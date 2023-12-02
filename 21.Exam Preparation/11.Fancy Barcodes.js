function fancyBarcodes(arr) {

    let loop = +arr.shift();
    let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/gm;

    while(loop--){
        let code = arr.shift().match(pattern);
        if(code){
            let digits = code[0].match(/\d+/gm)
            console.log(`Product group: ${!digits ? '00' : digits.join('')}`);
            continue;
        }
        console.log('Invalid barcode');
    }

}

fancyBarcodes((["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
);