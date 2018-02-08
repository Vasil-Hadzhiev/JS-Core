function getUniqueSequences(input) {
    let uniqueSequences = []

    for (let sequence of input) {
        let currentSequence = Array.from(JSON.parse(sequence))
            .map(Number)
            .sort((a, b) => b - a)

        if(isUnique(currentSequence)){
            uniqueSequences.push(currentSequence)
        }
    }

    let sortedUniqueArrays = uniqueSequences.sort((a, b) => a.length - b.length)

    for (let sequence of sortedUniqueArrays) {
        console.log(`[${sequence.join(", ")}]`)
    }
    
    function isUnique(sequence) {
        return !uniqueSequences.some(x => x.join("") === sequence.join(""))
    }
}