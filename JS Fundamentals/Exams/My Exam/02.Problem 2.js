function solution(input) {
    let weapons = input[0].split(' ');

    for (let i = 1; i <= input.length; i++) {
        let tokens = input[i].split(' ');
        let command = tokens[0];

        if (command === 'Fight!'){
            break;
        }

        let equipment = tokens[1];
        let index = weapons.indexOf(equipment);

        if (command === 'Buy'){
            if (!(index > -1)){
                weapons.push(equipment);
            }
        } else if (command === 'Trash'){
            if (index > -1){
                weapons.splice(index, 1)
            }
        } else if (command === 'Repair') {
            if (index > -1){
                if (!(index === weapons.length)){
                    weapons.splice(index, 1);
                    let slicedWeapons = weapons.splice(index, weapons.length - index);
                    for (let weap of slicedWeapons) {
                        weapons.push(weap);
                    }
                    weapons.push(equipment);
                }
            }
        } else if (command === 'Upgrade'){
            let equipmentTokens = equipment.split('-');
            equipment = equipmentTokens[0];
            let upgrade = equipmentTokens[1];
            let newWeapon = equipment + ':' + upgrade;
            let index = weapons.indexOf(equipment);

            if (!(index > - 1)){
                continue;
            }

            if (index === weapons.length){
                weapons.push(newWeapon);
            } else {
                let slicedWeapons = weapons.splice(index + 1, weapons.length - 1 - index);
                weapons.push(newWeapon);
                for (let weap of slicedWeapons) {
                    weapons.push(weap);
                }
            }
        }
    }

    console.log(weapons.join(' '));
}

solution(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-steel', 'Fight!']);