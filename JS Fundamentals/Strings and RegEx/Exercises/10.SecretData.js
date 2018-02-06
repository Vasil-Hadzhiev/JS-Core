function secretData(input) {
    let namePattern = /\*[A-Z]{1}[a-zA-Z]*(?= |\t|$)/g
    let phonePattern = /\+[0-9\-]{10}(?=\t| |$)/g
    let idPattern = /![a-zA-Z0-9]+(?=\t| |$)/g
    let basePattern = /_[a-zA-Z0-9]+(?=\t| |$)/g

    for(let sentence of input) {
        sentence = sentence.replace(namePattern, m => "|".repeat(m.length))
        sentence = sentence.replace(phonePattern, m => "|".repeat(m.length))
        sentence = sentence.replace(idPattern, m => "|".repeat(m.length))
        sentence = sentence.replace(basePattern, m => "|".repeat(m.length))

        console.log(sentence)
    }
}