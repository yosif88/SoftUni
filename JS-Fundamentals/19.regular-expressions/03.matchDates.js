function matchDates(input){
    let date = input.shift();
    let pattern = /\b(?<day>\d{2})([/.-])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})/gm
    let res = date.matchAll(pattern)

    for (const args of res) {
        console.log(`Day: ${args.groups.day}, Month: ${args.groups.month}, Year: ${args.groups.year}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])