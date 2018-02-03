function getParenthesesText(text) {

    let result = []
    let startIndex = text.indexOf("(")

    while (startIndex > -1) {

        let endIndex = text.indexOf(")", startIndex)
        if (endIndex == -1) {
            break
        }

        let resultStr = text.substring(startIndex + 1, endIndex)
        startIndex = text.indexOf("(", endIndex)
        result.push(resultStr)
    }

    console.log(result.join(", "))
}