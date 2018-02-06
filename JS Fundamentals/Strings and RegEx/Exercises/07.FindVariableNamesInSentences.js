function getVariables(str) {
    let pattern = /\b_([a-zA-Z0-9]+)\b/g
    let variables = []
    let match = pattern.exec(str)

    while (match){
        variables.push(match[1])
        match = pattern.exec(str)
    }

    console.log(variables.join(","))
}