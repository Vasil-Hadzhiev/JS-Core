function getUsernames(input) {
    let usernames = []

    for (let i = 0; i < input.length; i++) {
        let tokens = input[i].split("@")
        let username = tokens[0] + "."
        let domains = tokens[1].split(".")
        domains.forEach(d => username += d[0])
        usernames.push(username)
    }

    console.log(usernames.join(", "))
}