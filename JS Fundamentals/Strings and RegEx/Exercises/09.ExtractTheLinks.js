function extractValidLinks(input) {
    let pattern = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g
    let validLinks = []

    for (let i = 0; i < input.length; i++) {
        let match = pattern.exec(input[i])
        while (match){
            validLinks.push(match[0])
            match = pattern.exec(input[i])
        }
    }

    console.log(validLinks.join("\n"))
}