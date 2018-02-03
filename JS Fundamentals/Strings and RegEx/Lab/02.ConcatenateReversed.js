function concatAndReverse(input) {

    let result = input.join("")
        .split("")
        .reverse()
        .join('')

    console.log(result)
}

concatAndReverse(['I', 'am', 'student'])