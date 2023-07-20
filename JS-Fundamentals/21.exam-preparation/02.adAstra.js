function adAstra(input) {
    let text = input.shift();

    let pattern = /([|#])(?<name>[a-zA-Z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let matches = text.matchAll(pattern);

    let totalCalories = 0;
    let items = [];



    for (const match of matches) {
        let calories = Number(match.groups.calories);
        totalCalories += calories;
        items.push({ item: match.groups.name, day: match.groups.date, cal: calories })

    }

   let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    items.forEach(el => {
        console.log(`Item: ${el.item}, Best before: ${el.day}, Nutrition: ${el.cal}`);

    })


}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])