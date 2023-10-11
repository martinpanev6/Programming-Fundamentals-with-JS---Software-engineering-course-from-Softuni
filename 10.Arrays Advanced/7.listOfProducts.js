function listOfProducts(arr) {
   let list =  arr.map((x, i) => x = i + 1);
   let products = arr.sort();
   for(let i = 0; i < arr.length; i++){
    console.log(list[i] + '.' + products[i]);
   }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);