function getElements(input) {
    let k = input[0]

    let array = []

    for (let i = 1; i < input.length; i++) {
        let currentElement = input[i]
        array.push(currentElement)
    }

    let firstElements = array.slice(0, k)
    let lastElements = array.slice(array.length - k, array.length)

    console.log(firstElements.join(" "))
    console.log(lastElements.join(" "))
}