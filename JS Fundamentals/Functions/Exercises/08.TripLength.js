function lengthChecker(input) {

    let [x1, y1, x2, y2, x3, y3] = input

    let pointOne = {
        x: x1,
        y: y1
    }
    let pointTwo = {
        x: x2,
        y: y2
    }
    let pointThree = {
        x: x3,
        y: y3
    }

    let distance12 = getDistances(pointTwo, pointOne)
    let distance23 = getDistances(pointThree, pointTwo)
    let distance13 = getDistances(pointThree, pointOne)

    if ((distance12 <= distance13) && (distance13 => distance23)) {
        let a = distance12 + distance23
        console.log(`1->2->3: ${a}`)
    }
    else if ((distance12 <= distance23) && (distance13 < distance23)) {
        let b = distance12 + distance13
        console.log(`2->1->3: ${b}`)
    }
    else {
        let c = distance23 + distance13
        console.log(`1->3->2: ${c}`)
    }

    function getDistances(firstPoint, secondPoint) {

        let distanceOne = Math.pow(firstPoint.x - secondPoint.x, 2)

        let distanceTwo = Math.pow(firstPoint.y - secondPoint.y, 2)

        return Math.sqrt(distanceOne + distanceTwo)
    }
}