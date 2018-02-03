function magicMatrix(matrix) {

    let isMagical = true
    let sum = 0
    let tempSum = 0

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            tempSum += matrix[row][col]
        }

        if(row === 0){
            sum = tempSum
        }

        if(sum === tempSum){
            tempSum = 0
        } else {
            isMagical = false
            break
        }
    }

    if(isMagical){
        for (let col = 0; col < matrix.length; col++) {
            for (let row = 0; row < matrix.length; row++) {
                tempSum += matrix[row][col]
            }

            if(col === 0){
                sum = tempSum
            }

            if(sum === tempSum){
                tempSum = 0
            } else {
                isMagical = false
                break
            }
        }
    }

    console.log(isMagical)
}