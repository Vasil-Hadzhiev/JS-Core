function getDist(input) {
    let [x1, y1, z1, x2, y2, z2] = input
    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2)
    console.log(distance)
}