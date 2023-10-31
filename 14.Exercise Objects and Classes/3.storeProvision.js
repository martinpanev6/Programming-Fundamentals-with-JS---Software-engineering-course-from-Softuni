function storeProvision(currentStock, orderedStock){

    let products = {};

    for(let i = 0; i < currentStock.length; i += 2){
        let productName = currentStock[i];
        let qty = Number(currentStock[i + 1]);
        products[productName] = qty;
    }

    for(let i = 0; i < orderedStock.length; i += 2){
        let productName = orderedStock[i];
        let qty = Number(orderedStock[i + 1]);
        if(productName in products){
            products[productName] += qty;
        }else{
            products[productName] = qty;
        }
    }

    let array = Object.entries(products);

    for(let el of array){
        console.log(`${el[0]} -> ${el[1]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30']);