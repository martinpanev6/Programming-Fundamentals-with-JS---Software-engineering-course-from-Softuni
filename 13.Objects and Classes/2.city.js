function city(city){
    let keys = Object.entries(city);
    for(let key of keys){
        console.log(`${key[0]} -> ${key[1]}`);
    }
}
city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    });