function getHTMLTable(input) {
    let arr = JSON.parse(input)
    let str = "<table>\n"
    str += "   <tr>"
    let keys = Object.keys(arr[0])

    for (let key of keys) {
        str += `<th>${key}</th>`
    }

    str += "</tr>\n"

    for (let obj of arr) {
        str += "   <tr>"
        for (let i = 0; i < keys.length; i++) {
            str += `<td>${escapeChars(String(obj[keys[i]]))}</td>`
        }
        str += "</tr>\n"
    }

    str += "</table>"

    console.log(str)

    function escapeChars(str) {
        return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
    }
}