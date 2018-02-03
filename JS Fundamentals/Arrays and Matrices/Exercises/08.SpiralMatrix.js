function spiralMatrix(rows, cols) {
    let matrix = []

    for (let i = 0; i < rows; i++) {
        matrix.push([])
    }

    let startRow = 0
    let startCol = 0
    let endRow = rows - 1
    let endCol = cols - 1
    let number = 1

    while (startRow <= endRow || startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = number
            number++
        }

        for (let row = startRow + 1; row <= endRow; row++) {
            matrix[row][endCol] = number
            number++
        }

        for (let col = endCol - 1; col >= startCol; col--) {
            matrix[endRow][col] = number
            number++
        }

        for (let row = endRow - 1; row > startRow; row--) {
            matrix[row][startCol] = number
            number++
        }

        startRow++
        startCol++
        endRow--
        endCol--
    }

    console.log(matrix.map(row => row.join(" ")).join("\n"))
}