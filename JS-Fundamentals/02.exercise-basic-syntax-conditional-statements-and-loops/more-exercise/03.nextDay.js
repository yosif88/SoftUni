function nextDay(year, month,days){
    let data = new Date(year, month - 1,days + 1);
    
    let nextMonth = data.getMonth() + 1;
    let getDay = data.getDate();
    let years = data.getFullYear()
    console.log(`${years}-${nextMonth}-${getDay}` );
    
}

nextDay(2016, 9, 30)