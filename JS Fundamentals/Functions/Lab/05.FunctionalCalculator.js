function calculate(num1, num2, operator) {

    let add = function(num1, num2, operator) { return num1 + num2}
    let subtract = function(num1, num2, operator) { return num1 - num2}
    let multiply = function(num1, num2, operator) { return num1 * num2}
    let divide = function(num1, num2, operator) { return num1 / num2}

    switch(operator) {
        case '+': return add(num1, num2, add)
        case '-': return subtract(num1, num2, subtract)
        case '*': return multiply(num1, num2, multiply)
        case '/': return divide(num1, num2, divide)
    }
}

console.log(calculate(4, 2, "-"))