function roundNumber(input) {
    let number = Number(input[0])
    let precision = Number(input[1])

    precision = precision > 15 ? 15 : precision

    let multiplier = Math.pow(10, precision)

    let roundedNumber = Math.round(number * multiplier) / multiplier

    console.log(roundedNumber)
}