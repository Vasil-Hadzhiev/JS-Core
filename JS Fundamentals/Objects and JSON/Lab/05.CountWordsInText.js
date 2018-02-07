function getCount(input) {
    let obj = {}
    let pattern = /[0-9_a-zA-Z]+/g
    let match = pattern.exec(input)

    while (match){
        let word = match[0]
        if(obj.hasOwnProperty(word)){
            obj[word]++
        } else {
            obj[word] = 1
        }
        match = pattern.exec(input)
    }

    console.log(JSON.stringify(obj))
}