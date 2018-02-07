function getSum(array) {
    let towns = {}

    for (let i = 0; i < array.length; i += 2) {
        let town = array[i]
        let income = Number(array[i + 1])
        if (towns.hasOwnProperty(town)) {
            towns[town] += income;
        } else {
            towns[town] = income;
        }
    }

    console.log(JSON.stringify(towns))
}