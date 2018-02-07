function scoreToHTML(input) {
    let arr = JSON.parse(input)
    let str = "<table>\n"
    let keys = Object.keys(arr[0])
    str += `  <tr><th>${keys[0]}</th><th>${keys[1]}</th></tr>\n`

    for (let obj of arr) {
        str += `  <tr><td>${escapeChars(obj[keys[0]]+ "")}</td><td>${escapeChars(obj[keys[1]] + "")}</td></tr>\n`
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