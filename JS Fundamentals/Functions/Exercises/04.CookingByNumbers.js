function cookingByNumbers(input) {

    let initialValue = Number(input[0])

    for (let i = 1; i < input.length; i++) {
        let currentValue = getResult(initialValue, input[i])
        initialValue = currentValue
        console.log(currentValue)
    }

    function getResult(value, operation) {
        switch (operation){
            case "chop": return value / 2
            case "dice": return Math.sqrt(value)
            case "spice": return value + 1
            case "bake": return value * 3
            case "fillet": return value - (value * 0.2)
        }
    }
}