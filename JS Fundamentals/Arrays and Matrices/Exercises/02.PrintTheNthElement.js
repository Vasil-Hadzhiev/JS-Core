function printElements(input) {
    let stepSize = Number(input[input.length - 1])

    for (let i = 0; i < input.length - 1; i += stepSize) {
        console.log(input[i])
    }
}