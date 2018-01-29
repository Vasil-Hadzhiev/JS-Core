function modifyAverage(number) {

    let numberToString = number.toString()
    let sum = getSum(numberToString)
    let digitsCount = numberToString.length
    let average = sum / digitsCount

    while (average <= 5){
        numberToString += "9"
        sum += 9
        digitsCount++
        average = sum / digitsCount
    }

    console.log(numberToString)

    function getSum(num) {
        let sum = 0
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i])
        }

        return sum
    }
}