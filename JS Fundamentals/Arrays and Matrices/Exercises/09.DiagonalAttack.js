function getMatrix(input) {
    let matrix = input.map(row => row.split(" ").map(Number))

    let mainDiagonalSum = 0
    let secondaryDiagonalSum = 0
    let mainCol = 0
    let secondaryCol = matrix.length - 1

    for (let row = 0; row < matrix.length; row++) {
        mainDiagonalSum += matrix[row][mainCol]
        secondaryDiagonalSum += matrix[row][secondaryCol]
        mainCol++
        secondaryCol--
    }

    if(mainDiagonalSum === secondaryDiagonalSum){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (row === col || row + col + 1 === matrix.length) {
                    continue;
                }
                matrix[row][col] = mainDiagonalSum;
            }
        }
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'))
}