function capitalizeWords(input) {
    let array = input.toLowerCase()
        .split(" ")
        .map(w => w[0].toUpperCase() + w.substr(1))

    console.log(array.join(" "))
}