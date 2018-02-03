function getTownsAndIncome(input) {
    let array = input.join("")
    array = array.split("|").filter(s => s !== "")
    let towns = []
    let sum = 0

    for (let i = 0; i < array.length; i+=2) {
        towns.push(array[i].trim())
        sum += Number(array[i + 1])
    }

    console.log(towns.join(", "))
    console.log(sum)
}

getTownsAndIncome(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)