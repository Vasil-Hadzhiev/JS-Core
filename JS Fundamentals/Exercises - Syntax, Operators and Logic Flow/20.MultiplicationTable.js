function drawTable(num) {

    let output = `<table border="1">\n`
    output += `<tr><th>x</th>`

    for (let i = 1; i <= num; i++){
        output += `<th>${i}</th>`
    }

    output += `</tr>\n`

    for (let i = 1; i <= num; i++) {
        output += `<tr><th>${i}</th>`

        for (let j = 1; j <= num; j++) {
            output += `<td>${i * j}</td>`
        }

        output += `</tr>\n`
    }


    output +='</table>';
    return output;
}