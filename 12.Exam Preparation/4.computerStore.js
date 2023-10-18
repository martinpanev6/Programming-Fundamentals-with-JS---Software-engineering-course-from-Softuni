function computerStore(arr) {
    
    let priceNoTax = 0;
    let command = arr.shift();

    while (command != 'special' && command != 'regular') {

        let price = Number(command);
        
        if (price <= 0) {
            console.log('Invalid price!');
            command = arr.shift();
            continue;
        }
        
        priceNoTax += price;
        command = arr.shift();
    }

    if (priceNoTax == 0) {
        console.log('Invalid order!');
    } else {
        let tax = 0.2 * priceNoTax;
        let priceWithTax = priceNoTax + tax;

        if (command == 'special') {
            priceWithTax = priceWithTax * 0.9;
        }
        
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${priceNoTax.toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${priceWithTax.toFixed(2)}$`);
    }
}

computerStore(['1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);
computerStore(['1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30',
    'regular'
]);