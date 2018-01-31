function getBiggestElement(matrix) {
    let number = Number.NEGATIVE_INFINITY

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let currentElement = matrix[row][col]

            if(currentElement > number){
                number = currentElement
            }
        }
    }

    console.log(number)
}