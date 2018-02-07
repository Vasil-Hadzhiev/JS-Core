function getUniqueWords(input) {
    let uniqueWords = new Set()

    for (let str of input) {
        let words = str.split(/[^a-zA-Z0-9_]+/)
            .filter(w => w !== "")

        for (let word of words) {
            uniqueWords.add(word.toLowerCase())
        }
    }

    console.log([...uniqueWords.values()].join(", "))
}