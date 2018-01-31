function getElements(array) {

    let result = array.filter((e, i) => {
        return i % 2 === 0
    })

    console.log(result.join(" "))
}