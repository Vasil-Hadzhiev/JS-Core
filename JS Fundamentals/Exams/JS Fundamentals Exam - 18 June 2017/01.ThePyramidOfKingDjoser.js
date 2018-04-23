function solve(base, increment) {
    let stoneRequired = 0
    let marbleRequired = 0
    let lapisRequired = 0
    let goldRequired = base % 2 === 0 ? 4 : 1
    let count = 1

    while (true){
        if (base === 1 || base === 2){
            break
        }
        if(count % 5 === 0){
            stoneRequired += (base - 2) * (base - 2)
            lapisRequired += (base * base - ((base - 2) * (base - 2)))
            base -= 2
            count++
            continue
        }
        stoneRequired += (base - 2) * (base - 2)
        marbleRequired += (base * 4 - 4)
        base -= 2
        count++
    }

    console.log(`Stone required: ${Math.ceil(stoneRequired * increment)}`)
    console.log(`Marble required: ${Math.ceil(marbleRequired * increment)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisRequired * increment)}`)
    console.log(`Gold required: ${Math.ceil(goldRequired * increment)}`)
    console.log(`Final pyramid height: ${Math.floor(count * increment)}`)
}