function rotateArray(array) {
    let rotations = array.pop()

    rotations %= array.length

    for (let i = 0; i < rotations; i++) {
        array.unshift(array.pop())
    }

    console.log(array.join(" "))
}