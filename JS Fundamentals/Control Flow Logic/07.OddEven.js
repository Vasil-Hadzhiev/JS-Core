function oddOrEven(number) {
    let rem = number % 2

    if (rem === 0){
        console.log("even")
    } else if (Math.abs(number % 2) === 1) {
        console.log("odd")
    } else {
        console.log("invalid")
    }
}