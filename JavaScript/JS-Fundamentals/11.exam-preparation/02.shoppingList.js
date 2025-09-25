function shoppingList(input) {
    let listArr = input.shift().split('!');
    
    for (let i = 0; i < input.length; i++) {
        let params = input[i].split(' ');
        let command = params[0];
        let item = params[1];

        if (command === 'Go') {
            break;
        }

        if (command === 'Urgent') {
            if (!listArr.includes(item)) {
                listArr.unshift(item);
            }

        } else if (command === 'Unnecessary') {
            let index = listArr.indexOf(item);
            
            if (existsItem(listArr, item)) {
                listArr.splice(index, 1);
            }

        } else if (command === 'Correct') {
            let newItem = params[2];
            let index = listArr.indexOf(item);
            
            if (existsItem(listArr, item)) {
                listArr.splice(index, 1);
                listArr.splice(index,0, newItem);
            }
        
        }else if (command === 'Rearrange'){
            let index = listArr.indexOf(item);
            
            if (existsItem(listArr, item)) {
                let currentItem = listArr.splice(index, 1);
                listArr.push(currentItem);
            }
        }
    }
    console.log(listArr.join(', '));
   
    function existsItem(list, name) {
        return list.indexOf(name) !== -1;
    }
}



shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion", "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])