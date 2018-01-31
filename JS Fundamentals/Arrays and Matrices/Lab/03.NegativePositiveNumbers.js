function rearrangeElements(array) {
    let rearrangedArray = []

    for (let i = 0; i < array.length; i++) {
        let currentElement = Number(array[i])

        if (currentElement < 0){
            rearrangedArray.unshift(currentElement)
        } else {
            rearrangedArray.push(currentElement)
        }
    }

    for (let obj of rearrangedArray) {
        console.log(obj)
    }
}