function createRegister(input) {
    let cars = new Map()

    for (let str of input) {
        let tokens = str.split(" | ")

        let brand = tokens[0]
        let model = tokens[1]
        let quantity = Number(tokens[2])

        if(!cars.has(brand)){
            cars.set(brand, new Map())
        }

        if(!cars.get(brand).has(model)){
            cars.get(brand).set(model, 0)
        }

        let currentQuantity = cars.get(brand).get(model)
        cars.get(brand).set(model, currentQuantity + quantity)
    }

    for (let brand of Array.from(cars.keys())) {
        console.log(brand)
        let modelsQuantity = Array.from(cars.get(brand).keys())
        for (let model of modelsQuantity) {
            let quantity = cars.get(brand).get(model)
            console.log(`###${model} -> ${quantity}`)
        }
    }
}