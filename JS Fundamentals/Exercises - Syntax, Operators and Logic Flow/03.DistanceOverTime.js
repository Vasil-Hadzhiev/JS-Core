function getDistance(input) {
    let speedA = input[0]
    let speedB = input[1]
    let time = input[2]
    let delta = Math.abs(speedA - speedB)

    console.log(delta * time / 3600 * 1000)
}