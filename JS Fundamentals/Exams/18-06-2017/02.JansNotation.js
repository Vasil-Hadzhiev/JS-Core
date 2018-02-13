function solve(input) {
    let operands = []
    let operators = []
    let arr = input.join(" ")
    let elements = arr.split(" ")

    for (let element of elements) {
        if(isFinite(String(element))){
            operands.push(element)
        } else {
            operators.push(element)
        }

        if(operands.length >= 2 && operators.length > 0){
            let secondOperand = Number(operands.pop())
            let firstOperand = Number(operands.pop())
            let operator = operators.shift()
            switch (operator){
                case "+": operands.push(firstOperand + secondOperand)
                    break
                case "-": operands.push(firstOperand - secondOperand)
                    break
                case "*": operands.push(firstOperand * secondOperand)
                    break
                case "/": operands.push(firstOperand / secondOperand)
                    break
            }
        }
    }

    if(operands.length > 1 && operators.length === 0){
        console.log(`Error: too many operands!`)
    } else if(operands.length < 2 && operators.length > 0){
        console.log(`Error: not enough operands!`)
    } else {
        console.log(operands[0])
    }
}