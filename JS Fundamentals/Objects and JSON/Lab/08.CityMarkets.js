function cityMarkets(input) {
    let cityMarkets = new Map()

    for (let line of input) {
        let tokens = line.split(" -> ")
        let town = tokens[0]
        let product = tokens[1]
        let sales = tokens[2].split(" : ")
        let amount = Number(sales[0])
        let price = Number(sales[1])

        let income = amount * price

        if (!cityMarkets.has(town)) {
            cityMarkets.set(town, new Map())
        }

        if (!cityMarkets.get(town).has(product)) {
            cityMarkets.get(town).set(product, 0)
        }

        let currentIncome = cityMarkets.get(town).get(product)
        cityMarkets.get(town).set(product, currentIncome + income)
    }

    for (let [town, products] of cityMarkets) {
        console.log(`Town - ${town}`)

        for (let [product, income] of products) {
            console.log(`$$$${product} : ${income}`)

        }
    }
}