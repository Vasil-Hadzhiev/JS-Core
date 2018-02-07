function getLowestPrice(input) {
    let products = new Map()

    for (let str of input) {
        let tokens = str.split(" | ")
        let town = tokens[0]
        let product = tokens[1]
        let price = Number(tokens[2])

        if (!products.has(product)) {
            products.set(product, new Map())
        }

        if (!products.get(product).has(town)) {
            products.get(product).set(town, 0)
        }

        products.get(product).set(town, price)
    }

    for (let [product, prices] of products) {

        let minPrice = Math.min(...prices.values())
        let townName = [...prices.keys()].find(key => prices.get(key) === minPrice)
        console.log(`${product} -> ${minPrice} (${townName})`)
    }
}