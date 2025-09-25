function gladiatorInventory(data) {
    let inventory = data.shift().split(' ');

    for (let input of data) {
        let params = input.split(' ');
        let command = params[0];
        let equipment = params[1];

        if (command === 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }

        } else if (command === 'Trash') {
            let index = inventory.indexOf(equipment);

            if (index !== -1) {
                inventory.splice(index, 1);
            }

        } else if (command === 'Repair') {
            let index = inventory.indexOf(equipment);

            if (index !== -1) {
                let currentEquipment = inventory.splice(index, 1);
                inventory.push(currentEquipment[0]);
            }

        } else if (command === 'Upgrade') {
            let splitWords = equipment.split('-')
            let nameEquipment = splitWords[0];

            let index = inventory.indexOf(nameEquipment);

            if (index !== -1) {
                inventory.splice(index + 1, 0, equipment.replace('-', ':'));
            }
        }
    }
    console.log(inventory.join(' '));

}


gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])