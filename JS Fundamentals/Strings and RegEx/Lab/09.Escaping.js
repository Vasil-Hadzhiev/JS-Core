function escapeHtml(input) {

    let result = "<ul>\n"

    for (let i = 0; i < input.length; i++) {
        let str = input[i]

        result += "  <li>" + escapeChars(str) + "</li>\n"
    }

    result += "</ul>"

    console.log(result)

    function escapeChars(str) {
        return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
    }
}