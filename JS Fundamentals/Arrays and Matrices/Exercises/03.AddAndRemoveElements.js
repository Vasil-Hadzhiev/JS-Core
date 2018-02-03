function addRemove(input) {
    let currentNumber = 1
    let array = []

    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i]

        if(currentCommand === "add"){
            array.push(currentNumber)
        } else if(currentCommand === "remove"){
            array.pop()
        }

        currentNumber++
    }

    if(array.length === 0){
        console.log("Empty")
    } else {
        console.log(array.join("\n"))
    }
}