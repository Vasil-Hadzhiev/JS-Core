function quiz(input) {
    let xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<quiz>\n"

    for (let i = 0; i < input.length; i += 2) {
        let question = input[i]
        let answer = input[i + 1]

        xml += getQuestions(question, answer)
    }

    xml += "</quiz>"

    console.log(xml)

    function getQuestions(question, answer) {
        let output = "<question>\n"
        output += question + "\n"
        output += "</question>\n"
        output += "<answer>\n"
        output += answer + "\n"
        output += "</answer>\n"

        return output
    }
}