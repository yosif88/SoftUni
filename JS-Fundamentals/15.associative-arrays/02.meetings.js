function meetings(data){

    let meeting = {};

    for (const line of data) {

        let [day, name] = line.split(' ');

        if (meeting.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        
        }else {
            meeting[day] = name;
            console.log(`Scheduled for ${day}`);
        }
        
    }

    for (const key in meeting) {
        console.log(`${key} -> ${meeting[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])