function order(product, quantity) {
    let price = {
        'coffee': quantity => quantity * 1.50,
        'water': quantity => quantity * 1.00,
        'coke': quantity => quantity * 1.40,
        'snack': quantity => quantity * 2.00
    };
    let index;

    let finalPrice = price[product];
    console.log((finalPrice(quantity)).toFixed(2));
}

order('coffee', 4)