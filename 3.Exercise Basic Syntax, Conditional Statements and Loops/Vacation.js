function vacation(people, type, day){
    let pricePerPerson= 0;
    switch(day){
        case "Friday":
            switch(type){
                case "Students":
                    pricePerPerson = 8.45;
                    break;
                case "Business":
                    pricePerPerson = 10.90;
                    break;
                case "Regular":
                    pricePerPerson = 15;
            }
            break;
        case "Saturday":
            switch(type){
                case "Students":
                    pricePerPerson = 9.80;
                    break;
                case "Business":
                    pricePerPerson = 15.60;
                    break;
                case "Regular":
                    pricePerPerson = 20;
            }
            break;
        case "Sunday":
            switch(type){
                case "Students":
                    pricePerPerson = 10.46;
                    break;
                case "Business":
                    pricePerPerson = 16;
                    break;
                case "Regular":
                    pricePerPerson = 22.50;
            }
            break;
    }
    let totalPrice = people * pricePerPerson;
    if(type === "Students" && people >= 30){
        totalPrice = totalPrice * 0.85;
    }else if(type === "Business" && people >= 100){
        totalPrice = totalPrice - (pricePerPerson * 10);
    }else if(type === "Regular" && (people >= 10 && people <= 20)){
        totalPrice = totalPrice * 0.95;
    }
    console.log(`Total price: ${(totalPrice).toFixed(2)}`)
}

vacation(40, "Regular", "Saturday");