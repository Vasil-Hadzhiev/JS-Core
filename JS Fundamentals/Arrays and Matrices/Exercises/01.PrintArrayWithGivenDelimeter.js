function printElements(input) {
    let delimeter = input[input.length - 1]

    console.log(input.slice(0, input.length - 1).join(delimeter))
}

printElements()