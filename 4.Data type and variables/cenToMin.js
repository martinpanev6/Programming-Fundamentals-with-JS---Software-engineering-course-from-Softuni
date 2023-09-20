function cenToMin(cen){
let y = cen * 100;
let days = Math.trunc(365.2422 * y);
let hours = 24 * days;
let min = 60 * hours;
console.log(`${cen} centuries = ${y} years = ${days} days = ${hours} hours = ${min} minutes`)
}

cenToMin(1);