function requiredReading(pages, pagHour, days){
   let hours =  pages / pagHour;
   let ndays = hours / days;
   console.log(ndays)
}

requiredReading(212, 20, 2);