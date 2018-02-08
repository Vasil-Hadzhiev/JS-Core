function extractData(input) {
    let str = "<table>\n"

    for (let info of input) {
        let employee = JSON.parse(info)
        let employeeKeys = Object.keys(employee)
        str += "\t<tr>\n"
        str += `		<td>${employee[employeeKeys[0]]}</td>\n`
        str += `		<td>${employee[employeeKeys[1]]}</td>\n`
        str += `		<td>${employee[employeeKeys[2]]}</td>\n`
        str += "\t<tr>\n"
    }

    str += "</table>"

    console.log(str)
}

extractData(["asd", "asd"])