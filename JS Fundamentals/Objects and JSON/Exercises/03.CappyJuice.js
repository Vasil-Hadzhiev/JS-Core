function getBottlesCount(input) {
    let bottles = new Map()
    let juices = new Map()

    for (let str of input) {
        let tokens = str.split(" => ")
        let juice = tokens[0]
        let quantity = Number(tokens[1])

        if(!juices.has(juice)){
            juices.set(juice, 0)
        }

        let oldQuantity = juices.get(juice)
        juices.set(juice, oldQuantity + quantity)

        let currentJuiceQuantity = juices.get(juice)
        if(currentJuiceQuantity >= 1000){
            let bottlesToAdd = Math.floor(currentJuiceQuantity / 1000)

            if(!bottles.has(juice)){
                bottles.set(juice, 0)
            }

            let currentBottleCount = bottles.get(juice)
            bottles.set(juice, currentBottleCount + bottlesToAdd)
            juices.set(juice, currentJuiceQuantity - bottlesToAdd * 1000)
        }
    }

    for (let [juice, count] of bottles) {
        console.log(`${juice} => ${count}`)
    }
}
