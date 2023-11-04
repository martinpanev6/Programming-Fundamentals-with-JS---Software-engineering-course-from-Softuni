function meetings(arr){
    let meeting = {};
    for(let item of arr){
        let [day, client] = item.split(' ');
        if(!meeting.hasOwnProperty(day)){
            meeting[day] = client;
            console.log(`Scheduled for ${day}`);
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }

    for(let item of Object.entries(meeting)){
        console.log(item.join(' -> '));
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);

meetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']);