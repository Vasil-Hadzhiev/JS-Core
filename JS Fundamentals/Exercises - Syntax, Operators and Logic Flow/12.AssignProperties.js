function assignProperties(input) {
    let [prop1, value1, prop2, value2, prop3, value3 ] =
        [input[0], input[1], input[2], input[3], input[4], input[5]]

    let obj = {
        [prop1]: value1,
        [prop2]: value2,
        [prop3]: value3
    }

    return obj
}