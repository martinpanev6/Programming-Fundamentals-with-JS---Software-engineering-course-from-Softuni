function nextDay(year, month, day){
    let date = new Date(year, month, day);
    date.setDate(date.getDate() + 1);
    console.log(date)
}

nextDay(2016, 9, 30);