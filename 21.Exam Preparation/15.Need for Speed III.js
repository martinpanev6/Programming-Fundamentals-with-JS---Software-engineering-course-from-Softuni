function needForSpeed(arr){

    let countCar = Number(arr.shift());
    let game = {};

    for(let i = 0; i < countCar; i++){
        let line = arr.shift();
        let [car, mileage, fuel] = line.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        game[car] = {mileage, fuel}; 
    }

    let command = arr.shift();
    
    while(command != 'Stop'){

        let tokens = command.split(' : ');
        let action = tokens.shift();

        if(action == 'Drive'){
            let [car, distance, fuel] = tokens;
            distance = Number(distance);
            fuel = Number(fuel);
            if(game[car].fuel >= fuel){
                game[car].mileage += distance;
                game[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }else{
                console.log('Not enough fuel to make that ride');
            }
            if(game[car].mileage >= 100000){
                delete game[car];
                console.log(`Time to sell the ${car}!`);
            }
        }else if(action == 'Refuel'){
            let [car, fuel] = tokens;
            fuel = Number(fuel);
            if((game[car].fuel + fuel) > 75){
                fuel = 75 - game[car].fuel;
            }
            game[car].fuel += fuel;
            console.log(`${car} refueled with ${fuel} liters`);
        }else if(action == 'Revert'){
            let [car, kilometers] = tokens;
            kilometers = Number(kilometers);
            game[car].mileage -= kilometers;
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            if(game[car].mileage < 10000){
                game[car].mileage = 10000;
            }
        }

        command = arr.shift();
    }

    let entries = Object.entries(game);

    for(let [car, specs] of entries){
        console.log(`${car} -> Mileage: ${specs.mileage} kms, Fuel in the tank: ${specs.fuel} lt.`);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]);