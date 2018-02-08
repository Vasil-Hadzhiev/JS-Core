function catalogueOfUsernames(input) {
    let usernames = new Set()

    for (let name of input) {
        usernames.add(name)
    }

    let sortedUsernames = Array.from(usernames).sort((a, b) => sortUsernames(a, b))

    for (let user of sortedUsernames) {
        console.log(user)
    }

    function sortUsernames(a, b) {
        if(a.length !== b.length){
            return a.length - b.length
        }

        return a.localeCompare(b)
    }
}