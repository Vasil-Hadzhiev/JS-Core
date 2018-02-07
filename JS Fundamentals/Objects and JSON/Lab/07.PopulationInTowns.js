function getTownsDataWithObj(input) {
    let towns = {}

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" <-> ")
            .filter(x => x !== "")

        let town = tokens[0]
        let population = Number(tokens[1])

        if (towns.hasOwnProperty(town)){
            towns[town] += population
        } else {
            towns[town] = population
        }
    }

    for (let town of Object.keys(towns)) {
        console.log(`${town} : ${towns[town]}`)
    }
}

function  getTownsDataWithMap(input) {
    let towns = new Map()

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split(" <-> ")
            .filter(x => x !== "")

        let town = tokens[0]
        let population = Number(tokens[1])

        if (towns.has(town)){
            towns.set(town, towns.get(town) + population)
        } else {
            towns.set(town, population)
        }
    }

    for (let [town, population] of towns) {
        console.log(`${town} : ${population}`)
    }
}