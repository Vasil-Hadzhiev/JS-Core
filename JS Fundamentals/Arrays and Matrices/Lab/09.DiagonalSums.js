function getSum(matrix) {
    let mainDiagonalSum = 0
    let secondaryDiagonalSum = 0
    let counter = 0

    for (let row = 0; row < matrix.length; row++) {
        mainDiagonalSum += matrix[row][counter]
        secondaryDiagonalSum += matrix[row][matrix.length - 1 - counter]
        counter++
    }

    console.log(mainDiagonalSum + " " + secondaryDiagonalSum)
}