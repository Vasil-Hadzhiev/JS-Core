function validateEmployeeData(input) {
    let pattern = /^([A-Z][a-zA-Z]*)\s+-\s+([1-9][0-9]*)\s+-\s+([A-Za-z0-9 -]+)$/
    for (let element of input) {
        let match = pattern.exec(element)
        if (match) {
            console.log(`Name: ${match[1]}\n` +
                `Position: ${match[3]}\n` +
                `Salary: ${match[2]} `)
        }
    }
}