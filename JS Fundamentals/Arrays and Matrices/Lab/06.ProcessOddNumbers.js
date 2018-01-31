function getElements(array) {
    let oddElements = array
        .filter((e, i) => i % 2 === 1)
        .map(e => e * 2)
        .reverse()

    console.log(oddElements.join(" "))
}