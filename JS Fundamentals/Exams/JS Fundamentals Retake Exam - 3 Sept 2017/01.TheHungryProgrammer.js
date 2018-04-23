function solve(food, commands) {
    let mealsEaten = 0;

    for (let args of commands) {
        let tokens = args.split(' ');
        let command = tokens[0];

        if (command === 'End'){
            break;
        }

        if (food.length === 0 && command !== 'Add'){
            continue;
        }

        if (command === 'Serve'){
            let mealToServe = food.pop();
            console.log(`${mealToServe} served!`);
        } else if (command === 'Add'){
            let mealToAdd = tokens[1];

            if (mealToAdd !== undefined){
                food.unshift(mealToAdd);
            }
        } else if (command === 'Shift'){
            let firstIndex = Number(tokens[1]);
            let secondIndex = Number(tokens[2]);

            if (firstIndex < 0 || firstIndex >= food.length || secondIndex < 0 || secondIndex >= food.length){
                continue;
            }

            let temp = food[firstIndex];
            food[firstIndex] = food[secondIndex];
            food[secondIndex] = temp;
        } else if (command === 'Eat'){
            let mealToEat = food.shift();
            mealsEaten++;
            console.log(`${mealToEat} eaten`);
        } else if (command === 'Consume'){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);

            if (startIndex < 0 || startIndex >= food.length || endIndex < 0 ||
                endIndex >= food.length || startIndex >= endIndex){
                continue;
            }

            food.splice(startIndex, endIndex - startIndex + 1);
            mealsEaten += (endIndex - startIndex) + 1;
            console.log('Burp!');
        }
    }

    if (food.length > 0){
        console.log(`Meals left: ${food.join(', ')}`);
    } else {
        console.log('The food is gone');
    }

    console.log(`Meals eaten: ${mealsEaten}`);
}

solve(['carrots', 'apple', 'beet'],
    ['Consume 0 2',
        'End',])