function prepareBreakfast(input) {
    let totalMacros = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let meals = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat:1,  flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    function restock(macroElement, quantity) {
        totalMacros[macroElement] += quantity;
        return 'Success';
    }

    function prepare(meal, quantity) {
        if (meal === 'apple' || meal === 'coke'){
            if (!areCarbohydratesEnough(meal, quantity)){
                return 'Error: not enough carbohydrate in stock';
            }

            if (!isFlavourEnough(meal, quantity)){
                return 'Error: not enough flavor in stock';
            }

            totalMacros.carbohydrate -= meals[meal].carbohydrate * quantity;
            totalMacros.flavour -= meals[meal].flavour * quantity;
        } else if (meal === 'burger'){
            if (!areCarbohydratesEnough(meal, quantity)){
                return 'Error: not enough carbohydrate in stock';
            }

            if (!isFatEnough(meal, quantity)){
                return 'Error: not enough fat in stock';
            }

            if (!isFlavourEnough(meal, quantity)){
                return 'Error: not enough flavor in stock';
            }

            totalMacros.carbohydrate -= meals[meal].carbohydrate * quantity;
            totalMacros.fat -= meals[meal].fat * quantity;
            totalMacros.flavour -= meals[meal].flavour * quantity;
        } else if (meal === 'omelet'){
            if (!isProteinEnough(meal, quantity)){
                return 'Error: not enough protein in stock';
            }

            if (!isFatEnough(meal, quantity)){
                return 'Error: not enough fat in stock';
            }

            if (!isFlavourEnough(meal, quantity)){
                return 'Error: not enough flavor in stock';
            }

            totalMacros.protein -= meals[meal].protein * quantity;
            totalMacros.fat -= meals[meal].fat * quantity;
            totalMacros.flavour -= meals[meal].flavour * quantity;
        } else if (meal === 'cheverme'){
            if (!isProteinEnough(meal, quantity)){
                return 'Error: not enough protein in stock';
            }

            if (!areCarbohydratesEnough(meal, quantity)){
                return 'Error: not enough carbohydrate in stock';
            }

            if (!isFatEnough(meal, quantity)){
                return 'Error: not enough fat in stock';
            }

            if (!isFlavourEnough(meal, quantity)){
                return 'Error: not enough flavor in stock';
            }

            totalMacros.protein -= meals[meal].protein * quantity;
            totalMacros.carbohydrate -= meals[meal].carbohydrate * quantity;
            totalMacros.fat -= meals[meal].fat * quantity;
            totalMacros.flavour -= meals[meal].flavour * quantity;
        }

        return 'Success';
    }

    function report() {
        let proteinLeft = totalMacros.protein;
        let carbsLeft = totalMacros.carbohydrate;
        let fatLeft = totalMacros.fat;
        let flavourLeft = totalMacros.flavour;

        return `protein=${proteinLeft} carbohydrate=${carbsLeft} fat=${fatLeft} flavour=${flavourLeft}`;
    }

    function areCarbohydratesEnough(meal, quantity) {
        return meals[meal].carbohydrate <= totalMacros.carbohydrate * quantity;
    }

    function isProteinEnough(meal, quantity) {
        return meals[meal].protein <= totalMacros.protein * quantity;
    }

    function isFatEnough(meal, quantity) {
        return meals[meal].fat <= totalMacros.fat * quantity;
    }

    function isFlavourEnough(meal, quantity) {
        return meals[meal].flavour <= totalMacros.flavour * quantity;
    }

    return function commandParser(input) {
        let commandTokens = input.split(' ');
        let command = commandTokens[0];

        switch(command){
            case 'restock':
                return restock(commandTokens[1], Number(commandTokens[2]));
            case 'prepare':
                return prepare(commandTokens[1], Number(commandTokens[2]));
            case 'report':
                return report();
        }
    };
}