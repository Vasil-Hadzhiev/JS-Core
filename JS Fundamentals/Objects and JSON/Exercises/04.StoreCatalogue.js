function getProducts(input) {
    let catalogue = new Map()

    for (let str of input) {
        let tokens = str.split(" : ")
        let product = tokens[0]
        let price = Number(tokens[1])
        let letter = product[0]

        if (!catalogue.has(letter)) {
            catalogue.set(letter, new Map())
        }

        if (!catalogue.get(letter).has(product)) {
            catalogue.get(letter).set(product, price)
        }
    }

    let sorted = Array.from(catalogue.keys()).sort()

    for (let letter of sorted) {
        console.log(letter)
        let sortedProducts = Array.from(catalogue.get(letter).keys()).sort()

        for (let product of sortedProducts) {
            let price = catalogue.get(letter).get(product)
            console.log(`  ${product}: ${price}`)
        }
    }
}