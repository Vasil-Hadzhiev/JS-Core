function getCount(input) {
    let wordsCount = new Map()
    let arr = input.join("\n")
    let words = arr.split(/[^A-Za-z0-9_]/)
        .filter(w => w !== "")
        .map(w => w.toLowerCase())

    for (let word of words) {
        if (wordsCount.has(word)) {
            wordsCount.set(word, wordsCount.get(word) + 1)
        } else {
            wordsCount.set(word, 1)
        }
    }

    let sorted = Array.from(wordsCount.keys()).sort()

    for (let key of sorted) {
        console.log(`'${key}' -> ${wordsCount.get(key)} times`)
    }
}