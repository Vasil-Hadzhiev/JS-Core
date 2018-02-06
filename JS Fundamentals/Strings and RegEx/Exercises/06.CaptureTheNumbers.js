function getNumbers(input) {
    let numbers = []
    let pattern = /\d+/g
    for (let i = 0; i < input.length; i++) {
        let match = pattern.exec(input[i])
        while (match) {
            numbers.push(match[0])
            match = pattern.exec(input[i])
        }
    }

    console.log(numbers.join(" "))
}