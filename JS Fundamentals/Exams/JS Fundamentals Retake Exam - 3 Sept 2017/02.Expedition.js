function solve(primaryMatrix, secondaryMatrix, coordinates, startingPoint) {

    for (let i = 0; i < coordinates.length; i++) {
        let arr = coordinates[i].join(' ');
        let tokens = arr.split(" ");
        let startRow = Number(tokens[0]);
        let startCol = Number(tokens[1]);
        let tempCol = startCol;

        for (let row = 0; row < secondaryMatrix.length; row++) {
            for (let col = 0; col < secondaryMatrix[row].length; col++) {
                if (startRow >= primaryMatrix.length || startCol >= primaryMatrix[row].length){
                    break
                }

                let sum = primaryMatrix[startRow][startCol] + secondaryMatrix[row][col];

                if(sum === 2 || sum === 0){
                    primaryMatrix[startRow][startCol] = 0
                } else {
                    primaryMatrix[startRow][startCol] = 1
                }

                startCol++
            }
            startRow++;
            startCol = tempCol
        }
    }
    let primaryMatrixRows = primaryMatrix.length;
    let primaryMatrixCols = primaryMatrix[0].length;
    let secondaryMatrixRows = secondaryMatrix.length;
    let secondaryMatrixCols = secondaryMatrix[0].length;

    let currentPosition = [startingPoint[0], startingPoint[1]];
    let previousDirection;
    let steps = 1;

    while (true) {
        if (currentPosition[0] + 1 < primaryMatrixRows && primaryMatrix[currentPosition[0] + 1][currentPosition[1]] === 0 && previousDirection !== "up") {
            currentPosition = [currentPosition[0] + 1, currentPosition[1]];
            previousDirection = "down"
        } else if (currentPosition[1] + 1 < primaryMatrixCols && primaryMatrix[currentPosition[0]][currentPosition[1] + 1] === 0 && previousDirection !== "left") {
            currentPosition = [currentPosition[0], currentPosition[1] + 1];
            previousDirection = "right"
        } else if (currentPosition[0] > 0 && primaryMatrix[currentPosition[0] - 1][currentPosition[1]] === 0 && previousDirection !== "down") {
            currentPosition = [currentPosition[0] - 1, currentPosition[1]];
            previousDirection = "up"
        } else if (currentPosition[1] > 0 && primaryMatrix[currentPosition[0]][currentPosition[1] - 1] === 0 && previousDirection !== "right") {
            currentPosition = [currentPosition[0], currentPosition[1] - 1];
            previousDirection = "left"
        } else {
            break
        }
        steps++
    }

    console.log(steps);
    definePosition(currentPosition);

    function definePosition(currentPosition) {
        let currentRow = currentPosition[0];
        let currentCol = currentPosition[1];
        if (currentRow === 0) {
            console.log("Top")
        } else if (currentRow === primaryMatrixRows - 1) {
            console.log("Bottom")
        } else if (currentCol === 0) {
            console.log("Left")
        } else if (currentCol === primaryMatrixCols - 1) {
            console.log("Right")
        } else if (currentRow < primaryMatrixRows / 2 && currentCol >= primaryMatrixCols / 2) {
            console.log("Dead end 1")
        } else if (currentRow < primaryMatrixRows / 2 && currentCol < primaryMatrixCols / 2) {
            console.log("Dead end 2")
        } else if (currentRow >= primaryMatrixRows / 2 && currentCol < primaryMatrixCols / 2) {
            console.log("Dead end 3")
        } else if (currentRow >= primaryMatrixRows / 2 && currentCol >= primaryMatrixCols / 2) {
            console.log("Dead end 4")
        }
    }
}