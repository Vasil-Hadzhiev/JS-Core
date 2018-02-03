function getSequence(array) {
    let biggestNumber = Number.NEGATIVE_INFINITY
    let result = []

    for (let i = 0; i < array.length; i++) {
        let currentNumber = Number(array[i])

        if(currentNumber >= biggestNumber){
            result.push(currentNumber)
            biggestNumber = currentNumber
        }
    }

    console.log(result.join("\n"))
}