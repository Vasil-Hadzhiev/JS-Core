function checker(input) {

    let [x1, y1, x2, y2] = [input[0], input[1], input[2], input[3]]

    let firstCheck = getDistance(x1, y1, 0, 0)
    let secondCheck = getDistance(x2, y2, 0, 0)
    let thirdCheck = getDistance(x1, y1, x2, y2)

    console.log(validityCheck(firstCheck, [x1, y1, 0, 0]))
    console.log(validityCheck(secondCheck, [x2, y2, 0, 0]))
    console.log(validityCheck(thirdCheck, [x1, y1, x2, y2]))

    function getDistance(x1, y1, x2, y2) {

        let distanceOne = Math.pow(x1 - x2, 2);

        let distanceTwo = Math.pow(y1 - y2, 2);

        return Math.sqrt(distanceOne + distanceTwo);
    }

    function validityCheck(distance, cords) {
        if (Number.isInteger(distance)) {
            return `{${cords[0]}, ${cords[1]}} to {${cords[2]}, ${cords[3]}} is valid`
        } else {
            return `{${cords[0]}, ${cords[1]}} to {${cords[2]}, ${cords[3]}} is invalid`
        }
    }
}