function getBill(input) {
    let purchases = []
    let sum = 0

    for (let i = 0; i < input.length; i+=2) {
        let product = input[i]
        sum += Number(input[i + 1])

        purchases.push(product)
    }

    console.log(`You purchased ${purchases.join(", ")} for a total sum of ${sum}`)
}