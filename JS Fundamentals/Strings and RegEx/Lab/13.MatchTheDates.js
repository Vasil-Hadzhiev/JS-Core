function getDates(input) {
    let pattern = /\b(\d{1,2})-([A-Z]{1}\w{2})-(\d{4})\b/g
    let dates = []

    for (let str of input) {
        let match = pattern.exec(str)
        while (match) {
            dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`)
            match = pattern.exec(str)
        }
    }

    console.log(dates.join("\n"))
}