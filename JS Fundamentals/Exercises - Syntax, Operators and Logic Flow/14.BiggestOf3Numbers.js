function getBiggestNumber(input) {
    let numb1 = Number(input[0])
    let numb2 = Number(input[1])
    let numb3 = Number(input[2])

    let biggestNumber = Math.max(numb1, numb2, numb3)
    console.log(biggestNumber)
}