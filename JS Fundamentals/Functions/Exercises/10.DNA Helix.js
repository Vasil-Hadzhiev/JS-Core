function drawDNAHelix(n) {

    let index = -1;
    let dna = "ATCGTTAGGG"
    let totalLength = dna.length

    for(let i = 1; i <= n; i++) {

        index = getIndex(++index, totalLength)
        let firstSymbol = dna.charAt(index)
        index = getIndex(++index, totalLength)
        let secondSymbol = dna.charAt(index)

        if (i % 4 === 1) {
            console.log(`**${firstSymbol}${secondSymbol}**`)
        } else if (i % 4 === 2 || i % 4 === 0) {
            console.log(`*${firstSymbol}--${secondSymbol}*`)
        } else {
            console.log(`${firstSymbol}----${secondSymbol}`)
        }
    }

    function getIndex(index, totalLength) {
        if (index >= totalLength){
            index = 0
        }

        return index
    }
}