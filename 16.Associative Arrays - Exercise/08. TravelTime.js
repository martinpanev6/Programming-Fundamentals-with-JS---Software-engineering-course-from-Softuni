function travelTime(arr){
    let destinations = {};
    for(let el of arr){
        let [country, town, price] = el.split(' > ');
        let travelCost = Number(price);
        if(!destinations.hasOwnProperty(country)){
            destinations[country] = {};
        }
        if (!destinations[country].hasOwnProperty(town) || destinations[country][town] > travelCost) {
            destinations[country][town] = travelCost;
        }
    }
    let sortedCountries = Object.keys(destinations).sort((a, b) => a.localeCompare(b));
    for (let country of sortedCountries) {
        let sortedTowns = Object.entries(destinations[country]).sort((a, b) => a[1] - b[1]);

        console.log(`${country} -> ${sortedTowns.map(([town, cost]) => `${town} -> ${cost}`).join(' ')}`);
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"]);