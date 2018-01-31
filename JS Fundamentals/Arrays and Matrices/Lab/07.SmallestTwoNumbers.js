function getSmallestElements(array) {

    array.sort((a, b)=> {
        return a - b
    })

    let smallestNumbers = [array[0], array[1]]

    console.log(smallestNumbers.join(" "))
}